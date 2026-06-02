````md
# AGENTS.md — Project Rules for AI Coding Agents
# This file is read by Antigravity (v1.20.3+), Cursor, Claude Code, Codex, and compatible AI development agents.
# Rules here apply globally unless tool-specific override files exist.

# =========================================================
# 1. PROJECT OVERVIEW
# =========================================================

## Project Identity
- **Name:** Neztep
- **Type:** SaaS Web Platform (Higher Education Onboarding & Institutional Integration)
- **Stage:** MVP / Academic Capstone / Prototype with scalable SaaS architecture
- **Previous Prototype Reference:** PathFinder (conceptual predecessor only)

## Core Mission
Neztep is a serious, institutional, SaaS-oriented onboarding platform for higher education institutions designed to improve first-year student integration through centralized guidance, institutional orientation, structured onboarding, FAQ support, and campus navigation.

## Primary Problem Statement
Neztep exists to solve:
- fragmented institutional information;
- lack of structured onboarding;
- first-year student disorientation;
- difficulty locating institutional spaces;
- informal dependency for administrative guidance;
- unclear access to institutional support.

## Product Positioning
Neztep is:
- serious;
- minimalist;
- institutional;
- accessible;
- SaaS B2B;
- scalable;
- multitenant;
- academically defensible.

Neztep is NOT:
- a childish gamified app;
- a mascot-centered product;
- a competitive ranking platform;
- a social network;
- an enterprise overbuilt solution beyond MVP.

---

# =========================================================
# 2. PRODUCT DIFFERENTIATION
# =========================================================

## PathFinder vs Neztep
PathFinder:
- exploratory prototype;
- gamified;
- mascot-heavy;
- visually playful.

Neztep:
- institutional evolution;
- SaaS platform;
- onboarding-first;
- admin-ready;
- scalable B2B architecture;
- serious product design.

### Critical Design Rules
- Do NOT replicate PathFinder’s childish visual style.
- Do NOT make mascots central UI components.
- Do NOT use ranking as a primary engagement mechanism.
- Do prioritize onboarding, clarity, and institutional trust.

---

# =========================================================
# 3. MVP SCOPE (STRICT)
# =========================================================

## Included MVP Modules
1. Authentication
2. Registration / Login
3. Institution association
4. Guided onboarding
5. Onboarding progress tracking
6. Institutional information center
7. Search
8. FAQ chatbot
9. Escalation for unresolved questions
10. Basic campus map
11. Points of interest
12. Student dashboard
13. Admin dashboard
14. Institutional content management
15. FAQ management
16. Campus point management

## Explicitly Out of Scope
- global rankings;
- advanced gamification;
- AI copilots beyond FAQ;
- predictive analytics;
- native mobile apps;
- full SIS integrations;
- enterprise deployment automation;
- advanced retention engines;
- social systems.

If requested functionality exceeds MVP, default to simplified MVP-compatible alternatives.

---

# =========================================================
# 4. PRIMARY USERS
# =========================================================

## Student
First-year student requiring:
- orientation;
- onboarding;
- institutional guidance;
- support access;
- campus understanding.

## Institutional Admin
Responsible for:
- content;
- FAQ;
- map points;
- support oversight.

## Support Staff
Responsible for:
- escalated cases;
- student issue resolution.

---

# =========================================================
# 5. TECH STACK (MANDATORY)
# =========================================================

- **Language:** TypeScript 5.x (strict mode)
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Backend:** Next.js API Routes (Backend For Frontend)
- **Authentication:** Firebase Authentication (future implementation)
- **Database:** Cloud Firestore (future implementation)
- **Admin SDK:** Firebase Admin SDK (future implementation)
- **Hosting:** Vercel
- **PWA:** Planned, not current branch priority
- **Testing:** Vitest (current), Playwright (future)
- **Package Manager:** pnpm
- **Design:** Figma
- **Project Management:** Trello
- **Version Control:** GitHub

## Forbidden Without Explicit Approval
- Supabase migration
- PostgreSQL migration
- Prisma migration
- Auth.js replacement
- Monorepo restructuring
- Major stack rewrites

---

# =========================================================
# 6. ARCHITECTURE RULES
# =========================================================

## Core Architecture
- cloud-native;
- modular monolith;
- client-server distributed;
- Backend For Frontend;
- SaaS multitenant;
- institution-isolated.

## Layer Model
1. Client Layer
2. Presentation Layer (Next.js)
3. Business Logic Layer (API Routes)
4. Security Layer (Firebase Auth)
5. Persistence Layer (Firestore)

## Mandatory Rules
- Never bypass institutionId isolation
- Never allow cross-tenant leakage
- All protected actions must validate:
  - auth;
  - role;
  - institutionId
- Use modular domain boundaries
- Shared UI through design system
- Repository/service abstraction preferred
- All API responses should follow a shared envelope when practical

---

# =========================================================
# 7. DATA MODEL (MULTITENANT)
# =========================================================

```txt
institutions/{institutionId}
institutions/{institutionId}/users/{userId}
institutions/{institutionId}/onboardingSteps/{stepId}
institutions/{institutionId}/users/{userId}/userProgress/{progressId}
institutions/{institutionId}/institutionalContent/{contentId}
institutions/{institutionId}/faqChatbot/{faqId}
institutions/{institutionId}/pointsOfInterest/{pointId}
institutions/{institutionId}/supportRequests/{requestId}
institutions/{institutionId}/auditLogs/{logId}
````

## Critical Rules

* All institutional data MUST be tenant-scoped
* Never store shared tenant data insecurely
* Never mix student data across institutions

---

# =========================================================

# 8. ROLES

# =========================================================

```ts
type UserRole = "student" | "admin" | "support";
```

## student

* onboarding
* dashboard
* resources
* chatbot
* map
* support

## admin

* content CRUD
* FAQ CRUD
* map CRUD
* user oversight
* support oversight

## support

* escalated requests

---

# =========================================================

# 9. CODE QUALITY

# =========================================================

* Maximum file length: 300 lines
* Maximum function length: 30 lines
* Cyclomatic complexity max: 10
* No console.log in production
* Prefer structured logging
* Prefer named exports
* Use `interface` for object shapes
* Use `type` for unions/intersections
* All exported functions require JSDoc
* ESLint + Prettier rules are immutable
* No dead code
* No duplicated business logic
* No hardcoded design tokens outside system

---

# =========================================================

# 10. UI/UX DESIGN SYSTEM

# =========================================================

## Design Philosophy

Neztep UI must resemble:

* Notion
* Stripe Dashboard
* Coursera
* Linear
* Canvas LMS

## Must Be

* serious;
* minimal;
* institutional;
* WCAG-conscious;
* clean;
* scalable.

## Must Not Be

* childish;
* mascot-led;
* visually noisy;
* overly gamified.

## Design Tokens

### Colors

```ts
colors: {
  primary: "#5B3CC4",
  primaryHover: "#4C2EAD",
  secondary: "#8B5CF6",
  accent: "#EDE9FE",
  background: "#F8FAFC",
  surface: "#FFFFFF",
  textPrimary: "#0F172A",
  textSecondary: "#475569",
  border: "#E2E8F0",
  success: "#16A34A",
  warning: "#D97706",
  error: "#DC2626",
  info: "#2563EB"
}
```

### Typography

* Inter
* Geist
* Manrope

### Spacing

8px system

### Radius

* 8
* 12
* 16
* 24

---

# =========================================================

# 11. REQUIRED COMPONENT LIBRARY

# =========================================================

## Current Implemented

* Button
* Input
* Card
* Badge
* Alert
* Dialog
* DropdownMenu
* FormField
* ProgressBar
* Separator
* Skeleton
* Table
* Tabs
* Avatar
* Sidebar
* Navbar
* EmptyState
* StatCard

## Future Required

* Select
* Textarea
* Checkbox
* Stepper
* SearchInput
* PageHeader
* SectionHeader
* DataTable (advanced)
* Toast system

## Component Rules

All components require:

* variants
* hover
* focus
* disabled
* error
* accessibility compliance

---

# =========================================================

# 12. ACCESSIBILITY (NON-NEGOTIABLE)

# =========================================================

Minimum: WCAG 2.1 AA

## Requirements

* visible labels
* keyboard navigation
* focus states
* semantic HTML
* sufficient contrast
* descriptive error states
* minimum touch targets
* no color-only communication

---

# =========================================================

# 13. ROUTING STRUCTURE

# =========================================================

## Current Implemented

```txt
/
/design-system
```

## Planned Public

```txt
/login
/register
```

## Planned Student

```txt
/app
/app/onboarding
/app/resources
/app/campus
/app/chatbot
/app/profile
/app/support
```

## Planned Admin

```txt
/admin
/admin/content
/admin/faq
/admin/map
/admin/support-requests
/admin/users
```

---

# =========================================================

# 14. CURRENT IMPLEMENTATION STATUS

# =========================================================

## Current Branch Status

The current branch implements the Neztep Design System foundation only.

### Implemented:

* Next.js App Router scaffold
* `/`
* `/design-system`
* CSS variable token system
* Light/Dark preview foundation (local preview, no persistence)
* Tailwind v4 design tokens
* Reusable UI component system
* Navbar / Sidebar
* Card spacing system
* Dialog / Dropdown
* Typography and spacing showcase
* Mock data
* Vitest basic unit test
* ESLint validation
* Modularized design-system showcase architecture

### Current Design System Structure

```txt
src/components/ui
src/components/layout
src/components/student
src/components/design-system
```

### Design System Rule

`src/app/design-system/page.tsx` must remain a composition shell only.
Large showcase sections must be split into modular components.

### Not Yet Implemented

* Firebase Authentication
* Firestore
* API routes
* Protected routes
* `/login`
* `/register`
* `/app/*`
* `/admin/*`
* Real dashboards
* PWA
* Deployment
* Multitenant runtime theming

### Theme Architecture

* CSS variables support future institution theming
* Default Neztep palette active
* No tenant runtime switching yet

### Testing

* Vitest configured
* Basic utility test only
* Playwright and E2E pending

---

# =========================================================

# 15. TESTING REQUIREMENTS

# =========================================================

## Current

* `pnpm test` (Vitest basic)
* utility-level validation

## Future Mandatory

* Unit tests for utilities
* Integration tests for API routes
* E2E for user-facing flows
* Minimum 80% coverage on new code

---

# =========================================================

# 16. SAFETY GUARDRAILS (CRITICAL)

# =========================================================

* Never write to DB without explicit user confirmation
* Never deploy without approval
* Never delete files without approval
* Never expose secrets
* Never commit .env files
* Never hardcode credentials
* Validate all input
* Wrap external calls in try/catch
* Protect admin paths
* Respect tenant isolation

---

# =========================================================

# 17. GIT CONVENTIONS

# =========================================================

* Conventional commits only:

  * feat:
  * fix:
  * docs:
  * refactor:
  * test:
  * chore:

* PR titles < 72 chars

* Prefer < 400 LOC diff

* No force push to main/master

---

# =========================================================

# 18. PROJECT STRUCTURE

# =========================================================

```txt
/src
  /app
  /components
    /ui
    /layout
    /student
    /design-system
    /admin (future)
  /lib
    /firebase (future)
    /mock
    /utils
    /validators (future)
  /types
  /styles
```

---

# =========================================================

# 19. MOCK DATA RULES

# =========================================================

Location:

```txt
/src/lib/mock
```

## Rules

* No lorem ipsum
* Use realistic university content
* Match real schemas
* Keep institution scoped

---

# =========================================================

# 20. COMMUNICATION RULES

# =========================================================

* Be concise
* Explain why
* Flag bugs immediately
* Prefer simplest valid solution
* Ask when uncertain
* Do not guess
* Do not overengineer

---

# =========================================================

# 21. CURRENT PRIORITY

# =========================================================

1. README / Documentation
2. Layout Foundation
3. Public Pages (Login/Register)
4. Student Dashboard Shell
5. Admin Dashboard Shell
6. Guided Onboarding UI
7. Firebase/Auth Integration
8. PWA

---

# =========================================================

# 22. DEFINITION OF DONE

# =========================================================

A task is complete only if:

* builds successfully;
* respects AGENTS.md;
* respects MVP scope;
* is responsive;
* is accessible;
* is tested;
* preserves security;
* maintains institutional seriousness;
* supports academic defense;
* does not create unnecessary technical debt.

```
```
