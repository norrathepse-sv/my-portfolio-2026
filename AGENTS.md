# AI Agent Instructions for "my-portfolio"

## Project & Developer Context
This is a personal web developer portfolio for a Computer Scientist and Full-Stack Developer with over 5 years of experience, currently building digital solutions for a government cancer hospital. 

The core expertise lies in developing complex Healthcare IT Systems, internal operational tools, and institutional websites. The tone of the portfolio should be highly professional, clinical, and technically focused, demonstrating the ability to digitize and streamline hospital workflows.

**Data Strategy:** Fast and static. All project, experience, and profile data are hardcoded in TypeScript files (e.g., `/data/projects.ts`). No external database is used.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS

## Domain Expertise & Key Projects (For AI Context)
When generating copywriting, features, or organizing data, understand that the developer's portfolio covers 14+ major projects divided into these key domains:

1. **Clinical & Medical Workflow Systems:**
   - *SoloMed System:* Specialized drug approval system.
   - *OR Schedule System:* Online operating room scheduling (Web & Mobile).
   - *Doctor Appointment System:* Online medical appointments.
   - *Premium Clinic:* Website and appointment system integration.

2. **Internal Hospital Operations & E-Government:**
   - *ZomDoo (IT-Fixer):* Internal IT maintenance request PWA.
   - *RMUBCH:* Online hospital risk management system.
   - *E-GP Data Integration:* Government procurement linkage system.
   - *SOD-CUB:* Online audio-visual task ordering.
   - *Media Contest System:* Internal media contest with a scoring module.

3. **Institutional Websites & CMS:**
   - Main Hospital Website with custom CMS.
   - ECU (Ethics Committee in Human Research) Website & CMS.
   - Departmental Websites: Audio-Visual Dept. and IT Dept.

## Coding Standards & Guidelines

### 1. TypeScript & Architecture
- Enforce strict TypeScript typing. No `any`. 
- Define comprehensive `interface` and `type` for all static data structures (e.g., `ProjectCategory`, `ProjectType`).
- Keep static data centralized and well-structured.

### 2. Next.js & React Best Practices
- Default to Next.js Server Components (RSC) for optimal performance. 
- Use `'use client'` explicitly and only where necessary for interactivity.
- Leverage `next/image` for image optimization and modern routing.

### 3. Styling & UI Components
- Exclusively use Tailwind CSS. Implement a clean, accessible (a11y), and trustworthy UI suitable for healthcare/corporate portfolios (e.g., using clean whites, medical blues, and neutral grays).
- Create modular UI components (`<ProjectCard />`, `<CategoryFilter />`).
- Ensure mobile-first responsive design.

## AI Agent Behavior
- **Context-Aware Responses:** Mirror the developer's professional background in hospital IT. Use precise, professional terminology when drafting descriptions.
- **Code Generation:** Output robust, production-ready code. Ensure static data structures match the provided `ProjectType` interface.