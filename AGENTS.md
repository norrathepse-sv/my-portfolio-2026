# AGENTS.md

##  Project Overview
โปรเจคนี้เป็นเว็บไซต์ Next.js ใช้ typescript ,tailwind css สำหรับทำ portfolio ไปสอบสัมภาษณ์ ตำแหน่งนักวิชาการคอมพิวเตอร์

- **Project Goal:** พอร์ตโฟลิโอส่วนตัวเพื่อนำเสนอผลงาน โดยเน้นการพัฒนาระบบที่ซับซ้อน เครื่องมือปฏิบัติการภายใน และเว็บไซต์องค์กร
- **Tone & Vibe:** มีความเป็นมืออาชีพสูง ดูเป็นทางการ (Clinical) น่าเชื่อถือ และเน้นเทคนิคเชิงลึก สะท้อนความสามารถในการใช้เทคโนโลยีดิจิทัลเพื่อเพิ่มประสิทธิภาพกระบวนการทำงานในโรงพยาบาล
- **Data Strategy:** รวดเร็วและเป็น Static (Fast & Static) ข้อมูลโปรเจกต์ ประสบการณ์ และโปรไฟล์ทั้งหมดต้องถูก Hardcode ไว้ในไฟล์ TypeScript (เช่น `/data/projects.ts`) **ห้ามใช้ฐานข้อมูลภายนอก (No external database)**

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS

## commands
- Install dependencies: npm install
- Start dev server: npm dev
- Run Lint: npm lint
- Run build: npm  build


## Domain Expertise & Key Projects
เมื่อต้องสร้างข้อความนำเสนอ (Copywriting) หรือจัดระเบียบข้อมูล ให้พิจารณาถึงโปรเจกต์ 14+ โปรเจกต์ใน 3 กลุ่มหลักนี้:

1. **Clinical & Medical Workflow Systems:**
   - *SoloMed System:* ระบบขออนุมัติการใช้ยาเฉพาะการ
   - *OR Schedule System:* ระบบจองห้องผ่าตัดออนไลน์ (Web & Mobile)
   - *Doctor Appointment System:* ระบบนัดหมายแพทย์ออนไลน์
   - *Premium Clinic:* เว็บไซต์และระบบเชื่อมต่อนัดหมายคลินิกพรีเมียม

2. **Internal Hospital Operations & E-Government:**
   - *ZomDoo (IT-Fixer):* PWA ระบบแจ้งซ่อมและบำรุงรักษา IT ภายใน
   - *RMUBCH:* ระบบบริหารความเสี่ยงโรงพยาบาลออนไลน์
   - *E-GP Data Integration:* ระบบเชื่อมโยงข้อมูลการจัดซื้อจัดจ้างภาครัฐ
   - *SOD-CUB:* ระบบขอใช้บริการโสตทัศนูปกรณ์ออนไลน์
   - *Media Contest System:* ระบบประกวดสื่อภายในพร้อมโมดูลให้คะแนน

3. **Institutional Websites & CMS:**
   - เว็บไซต์หลักของโรงพยาบาลพร้อม Custom CMS
   - เว็บไซต์และ CMS สำหรับคณะกรรมการจริยธรรมการวิจัยในมนุษย์ (ECU)
   - เว็บไซต์หน่วยงาน: งานโสตทัศนศึกษา และ กลุ่มงานเทคโนโลยีสารสนเทศ (IT)

## Coding Standards & Architecture
- **Strict TypeScript:** บังคับใช้ Type อย่างเข้มงวด ห้ามใช้ `any` เด็ดขาด กำหนด `interface` และ `type` ให้ครอบคลุมสำหรับโครงสร้างข้อมูล Static ทั้งหมด (เช่น `ProjectCategory`, `ProjectType`)
- app/ ใช้เก็บ routes และ pages ตาม Next.js AppRouter
- compoments / ใช้เก็บ UI components
- **Next.js Best Practices:** 
  - ใช้ Server Components (RSC) เป็นค่าเริ่มต้นเพื่อประสิทธิภาพสูงสุด
  - ใช้ `'use client'` เฉพาะในคอมโพเนนต์ที่ต้องการ Interactivity เท่านั้น
  - ใช้ TypsScript เท่านั้น
  - ตั้งชื่อ component เป็น PascalCase
  - ตั้งชื่อ function เป็น camelCase
  - ใช้ `next/image` สำหรับการจัดการรูปภาพเสมอ
- **Data Centralization:** จัดเก็บข้อมูล Static ไว้ที่โฟลเดอร์ศูนย์กลาง (เช่น `/data`) และเรียกใช้งานอย่างเป็นระเบียบ
-หลีกเลี่ยงการเขียน logic ใหย๋ๆ รวมไว้ใน component เดียว
## UI/UX & Styling
- **Tailwind CSS Only:** ใช้ Tailwind CSS ในการจัดการสไตล์ทั้งหมด
- **Design Language:** ออกแบบ UI ให้ดูสะอาดตา (Clean), รองรับการเข้าถึง (Accessibility/a11y), และดูน่าเชื่อถือ เหมาะสำหรับสาธารณสุขและองค์กร (แนะนำ: โทนสีขาวสะอาดตา, สีฟ้าทางการแพทย์, และสีเทากลาง)
- **Modularity:** สร้าง UI Components แบบ Modular และนำกลับมาใช้ใหม่ได้ (เช่น `<ProjectCard />`, `<CategoryFilter />`)
- **Responsiveness:** ออกแบบโดยยึดหลัก Mobile-first เสมอ

## AI Agent Behavior Expectations
- **Context-Aware Responses:** ตอบกลับโดยสวมบทบาทหรือสะท้อนบริบทของนักพัฒนา Healthcare IT ใช้คำศัพท์เฉพาะทางในสายงานโรงพยาบาลและไอทีอย่างเป็นมืออาชีพและแม่นยำ
- **Code Quality:** โค้ดที่สร้างขึ้นต้องเสถียร พร้อมใช้งานจริง (Production-ready) จัด Format สวยงาม และตรวจสอบให้แน่ใจว่า Mock Data หรือโครงสร้างข้อมูลตรงกับ Interface ที่กำหนดไว้เสมอ

## Testing and Validation
ก่อนส่งงานต้องตรวจสอบ:
-npm lint
-npm build
-ตรวจสอบว่าไม่มี TpyeScript error

## Boundaries
- ห้ามลบไฟล์สำคัฐโดยไม่แจ้งก่อน
- ห้ามเปลี่ยนโครงสร้างของโปรเจ็ค
- ห้ามเปลี่ยน packege manager จาก npm เป็น pnpm
- ถ้าไม่แน่ใจ ให้ถามหรือเสนอ plan ก่อนแก้ทุกครั้ง