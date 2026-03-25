# Custom Electric Inc - Electrical Contracting Company Website

## Overview

This is a professional website for Custom Electric Inc, a commercial, industrial, and municipal electrical contractor based in Connecticut with 40+ years of experience. The application is a full-stack web platform built with React, Express, and PostgreSQL, featuring a public-facing marketing site with a contact form, photo gallery, and a press feature page.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TailwindCSS with custom theme configuration

**UI Component System**
- shadcn/ui component library (Radix UI primitives)
- Custom design system based on "new-york" style variant with neutral base color
- Responsive grid system with mobile-first breakpoints

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management
- React Hook Form with Zod validation for form handling

### Backend Architecture

**Server Framework**
- Express.js with TypeScript running on Node.js
- RESTful endpoint for contact form submission (`POST /api/contact`)
- JSON-based request/response format with Zod schema validation

**Development Environment**
- Vite development middleware integrated with Express server
- Hot module replacement (HMR) for frontend changes

### Data Storage

**Database**
- PostgreSQL via standard `pg` driver
- Drizzle ORM for type-safe database queries and schema management
- Single table: `contact_submissions`

**Schema Management**
- Database schema defined in TypeScript using Drizzle's pg-core
- Zod schemas derived from Drizzle schemas for runtime validation
- Push-based workflow for schema changes (`npm run db:push`)

### Pages

- **Home** (`/`): Landing page with hero, services, featured projects, testimonials, and contact form
- **About** (`/about`): Company history, location, and team info
- **Gallery** (`/gallery`): Job photos organized by project category with lightbox
- **Press** (`/press/hartford-healthare`): Electrical Contractor Magazine June 2024 feature article (PDF viewer)
- **Not Found** (`*`): Custom 404 page

### Key Dependencies

- `react-pdf` + `pdfjs-dist@5.4.296` — inline PDF rendering for the press page
- Radix UI / shadcn/ui — accessible component library
- Lucide React — icon system
- React Hook Form + Zod — form validation
- TailwindCSS — utility-first styling

### Asset Management

- Project images stored in `attached_assets/customelectric/`
- PDF press feature stored in `client/public/electrical-contractor-hartford-healthare-2024.pdf`
- Images imported directly in React components using Vite's asset handling
