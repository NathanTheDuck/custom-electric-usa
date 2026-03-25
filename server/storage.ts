import { contactSubmissions, type ContactSubmission, type InsertContact, type UpdateSubmission } from "@shared/schema";
import { db } from "./db";
import { desc, eq, gte, and, ilike, or, sql } from "drizzle-orm";

export interface SubmissionStats {
  total: number;
  unread: number;
  read: number;
  responded: number;
  thisWeek: number;
  thisMonth: number;
}

export interface SubmissionTrend {
  date: string;
  count: number;
}

export interface IStorage {
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  getFilteredSubmissions(filters: {
    status?: string;
    projectType?: string;
    search?: string;
    startDate?: Date;
    endDate?: Date;
  }): Promise<ContactSubmission[]>;
  updateSubmission(id: string, data: UpdateSubmission): Promise<ContactSubmission | null>;
  deleteSubmission(id: string): Promise<boolean>;
  getSubmissionStats(): Promise<SubmissionStats>;
  getSubmissionTrends(days: number): Promise<SubmissionTrend[]>;
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const [contact] = await db
      .insert(contactSubmissions)
      .values(insertContact)
      .returning();
    return contact;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt));
  }

  async getFilteredSubmissions(filters: {
    status?: string;
    projectType?: string;
    search?: string;
    startDate?: Date;
    endDate?: Date;
  }): Promise<ContactSubmission[]> {
    const conditions = [];

    if (filters.status && filters.status !== "all") {
      conditions.push(eq(contactSubmissions.status, filters.status));
    }

    if (filters.projectType && filters.projectType !== "all") {
      conditions.push(eq(contactSubmissions.projectType, filters.projectType));
    }

    if (filters.search) {
      conditions.push(
        or(
          ilike(contactSubmissions.name, `%${filters.search}%`),
          ilike(contactSubmissions.email, `%${filters.search}%`),
          ilike(contactSubmissions.message, `%${filters.search}%`)
        )
      );
    }

    if (filters.startDate) {
      conditions.push(gte(contactSubmissions.createdAt, filters.startDate));
    }

    const query = db.select().from(contactSubmissions);
    
    if (conditions.length > 0) {
      return await query.where(and(...conditions)).orderBy(desc(contactSubmissions.createdAt));
    }

    return await query.orderBy(desc(contactSubmissions.createdAt));
  }

  async updateSubmission(id: string, data: UpdateSubmission): Promise<ContactSubmission | null> {
    const [updated] = await db
      .update(contactSubmissions)
      .set(data)
      .where(eq(contactSubmissions.id, id))
      .returning();
    return updated || null;
  }

  async deleteSubmission(id: string): Promise<boolean> {
    const result = await db
      .delete(contactSubmissions)
      .where(eq(contactSubmissions.id, id))
      .returning();
    return result.length > 0;
  }

  async getSubmissionStats(): Promise<SubmissionStats> {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [statsResult] = await db
      .select({
        total: sql<number>`count(*)::int`,
        unread: sql<number>`count(*) filter (where ${contactSubmissions.status} = 'unread')::int`,
        read: sql<number>`count(*) filter (where ${contactSubmissions.status} = 'read')::int`,
        responded: sql<number>`count(*) filter (where ${contactSubmissions.status} = 'responded')::int`,
        thisWeek: sql<number>`count(*) filter (where ${contactSubmissions.createdAt} >= ${weekAgo})::int`,
        thisMonth: sql<number>`count(*) filter (where ${contactSubmissions.createdAt} >= ${monthAgo})::int`,
      })
      .from(contactSubmissions);

    return {
      total: statsResult.total || 0,
      unread: statsResult.unread || 0,
      read: statsResult.read || 0,
      responded: statsResult.responded || 0,
      thisWeek: statsResult.thisWeek || 0,
      thisMonth: statsResult.thisMonth || 0,
    };
  }

  async getSubmissionTrends(days: number): Promise<SubmissionTrend[]> {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const submissions = await db
      .select()
      .from(contactSubmissions)
      .where(gte(contactSubmissions.createdAt, startDate))
      .orderBy(contactSubmissions.createdAt);

    const trendMap = new Map<string, number>();
    
    for (let i = 0; i <= days; i++) {
      const date = new Date();
      date.setDate(date.getDate() - (days - i));
      const dateStr = date.toISOString().split('T')[0];
      trendMap.set(dateStr, 0);
    }

    submissions.forEach(s => {
      const dateStr = s.createdAt.toISOString().split('T')[0];
      trendMap.set(dateStr, (trendMap.get(dateStr) || 0) + 1);
    });

    return Array.from(trendMap.entries()).map(([date, count]) => ({ date, count }));
  }
}

export const storage = new DatabaseStorage();
