# Custom Electric Inc - Deployment Guide

This guide explains how to deploy the Custom Electric Inc website.

---

## Environment Variables

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `DATABASE_URL` | Yes | PostgreSQL connection string | `postgresql://user:pass@host:5432/dbname` |
| `PORT` | No | Server port (default: 5000) | `5000` |

---

## Database Setup

Before running the app for the first time, create the database table by running the SQL in `scripts/setup-db.sql` against your PostgreSQL database:

```sql
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS contact_submissions (
  id VARCHAR PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  project_type TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'unread',
  notes TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

Alternatively, if you have the Drizzle CLI installed:
```bash
DATABASE_URL="your-connection-string" npx drizzle-kit push
```

---

## Option 1: Deploy with Docker (Recommended)

```bash
docker build -t custom-electric-inc .
docker run -p 5000:5000 \
  -e DATABASE_URL="your-database-url" \
  custom-electric-inc
```

---

## Option 2: Deploy on Railway

1. Create a Railway account at https://railway.app
2. Create a new project and add a **PostgreSQL** database
3. Add a new service from your GitHub repo
4. Set the environment variables:
   - `DATABASE_URL` - Copy from the PostgreSQL service
5. Run the database setup SQL
6. Deploy

---

## Option 3: Deploy on Render

1. Create a Render account at https://render.com
2. Create a new **PostgreSQL** database
3. Create a new **Web Service** and connect your repo
4. Set `DATABASE_URL` from your Render PostgreSQL database
5. Run the setup SQL and click Deploy

---

## Option 4: Deploy without Docker

```bash
npm install
npm run build

export DATABASE_URL="your-database-url"
export NODE_ENV=production

npm start
```

---

## Site Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Main landing page with services and contact form |
| About | `/about` | Company history and info |
| Gallery | `/gallery` | Job photos by project category |
| Press | `/press/hartford-healthare` | Electrical Contractor Magazine feature |

---

## Troubleshooting

**App won't start:**
- Check that `DATABASE_URL` is set and connects to a running PostgreSQL database
- Make sure the database table has been created

**Database connection errors:**
- Ensure your database allows connections from your server's IP
- Check that the connection string format is correct
