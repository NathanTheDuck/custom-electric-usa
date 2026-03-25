import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  projectType: text("project_type"),
  message: text("message").notNull(),
  status: text("status").default("unread").notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
  status: true,
  notes: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(1, "Name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const updateSubmissionSchema = z.object({
  status: z.enum(["unread", "read", "responded"]).optional(),
  notes: z.string().optional(),
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type UpdateSubmission = z.infer<typeof updateSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
