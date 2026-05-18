export type ProjectCategory = "Web Application" | "Website" | "Mobile App" | "Other";

export interface ProjectType {
  id: number;
  category: ProjectCategory;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  gallery: string[]; // <--- เพิ่มตัวแปรสำหรับเก็บภาพหลายภาพ
  URL?: string; // <--- เพิ่มตัวแปรสำหรับเก็บ URL ของโปรเจกต์ (ถ้ามี)
  Pdf?: string; // <--- เพิ่มตัวแปรสำหรับเก็บ URL ของไฟล์ PDF (ถ้ามี)
}

// ---------------------------------------------------------
// ข้อมูล Projects ทั้งหมด
// ---------------------------------------------------------
export const projects: ProjectType[] = [
  {
    id: 1,
    category: "Mobile App",
    title: "ตารางห้องผ่าตัดออนไลน์สำหรับมือถือ (OR Schedule App)",
    description: "แอปพลิเคชันบนมือถือสำหรับเช็คตารางห้องผ่าตัด ออกแบบมาเพื่อให้แพทย์และทีมผ่าตัดสามารถเข้าถึงข้อมูลการนัดหมายได้ทุกที่ทุกเวลาผ่านสมาร์ทโฟน",
    techStack: ["React Native", "Tailwind CSS", "TypeScript", "REST API","Supabase","Android Studio"],
    imageUrl: "/images/projects/booking/mobile/cover1.png",
    gallery: [ "/images/projects/booking/mobile/shot1.jpg", "/images/projects/booking/mobile/shot2.jpg", "/images/projects/booking/mobile/shot3.jpg"
      , "/images/projects/booking/mobile/shot4.jpg", "/images/projects/booking/mobile/shot5.jpg", 
    ]
  },
  {
    id: 2,
    category: "Web Application",
    title: "ZomDoo (IT-Fixer)",
    description: "ระบบบริหารจัดการงานซ่อมบำรุงด้านไอทีภายในองค์กร (IT Helpdesk) รูปแบบ PWA ครอบคลุมตั้งแต่การแจ้งปัญหา การมอบหมายงานให้ช่าง ไปจนถึงการอัปเดตสถานะแบบ Real-time รองรับการทำงานผ่านสมาร์ทโฟน ช่วยลดขั้นตอนเอกสาร เพิ่มความรวดเร็วในการแก้ปัญหา และมี Dashboard สรุปสถิติการทำงานเพื่อประเมินประสิทธิภาพการให้บริการ",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "PWA", "Supabase","postgreSQL"],
    imageUrl: "/images/projects/zomdoo/cover.png",
    gallery: [
      "/images/projects/zomdoo/cover.png", "/images/projects/zomdoo/shot1.png", "/images/projects/zomdoo/shot2.png", "/images/projects/zomdoo/shot3.png", "/images/projects/zomdoo/shot4.jpg", "/images/projects/zomdoo/shot5.jpg", "/images/projects/zomdoo/shot6.jpg"]
  },
    {
    id: 3,
    category: "Website",
    title: "เว็บไซต์พรีเมียมคลินิกพร้อมระบบนัดหมายออนไลน์",
    description: "เว็บไซต์บริการคลินิกพิเศษเฉพาะทาง (Premium Clinic) ที่โดดเด่นด้วยการออกแบบ UI ทันสมัยและหรูหรา มุ่งเน้นประสบการณ์การใช้งานที่ราบรื่น สำหรับผู้รับบริการ มาพร้อมระบบนัดหมายแพทย์ออนไลน์ที่ใช้งานง่าย ตรวจสอบเวลาว่างได้ และช่วยลดขั้นตอนการรอคอยที่โรงพยาบาล ตอบโจทย์ไลฟ์สไตล์การเข้าถึงบริการทางการแพทย์ยุคใหม่ที่เน้นความรวดเร็วและเป็นส่วนตัว",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Supabase"],
    imageUrl: "/images/projects/premium/cover1.png",
    gallery: ["/images/projects/premium/shot1.png", "/images/projects/premium/shot2.png", "/images/projects/premium/shot3.png", "/images/projects/premium/shot4.png", "/images/projects/premium/shot5.png", "/images/projects/premium/shot6.png", "/images/projects/premium/shot7.jpg", "/images/projects/premium/shot8.png", "/images/projects/premium/shot9.png", "/images/projects/premium/shot10.png","/images/projects/premium/shot11.png"],
    URL: "https://uboncancer.go.th/premium-clinic", // ตัวอย่าง URL ของโปรเจกต์
  },
  {
    id: 4,
    category: "Web Application",
    title: "ระบบประกวดสื่อประชาสัมพันธ์ภายในโรงพยาบาล (Ubch Contest)",
    description: "แพลตฟอร์มบริหารจัดการการประกวดสื่อและนวัตกรรมภายในองค์กรแบบครบวงจร รองรับการส่งผลงานมัลติมีเดียทุกรูปแบบด้วย API มาพร้อมระบบตัดสินสำหรับคณะกรรมการที่คำนวณคะแนนตามเกณฑ์และจัดลำดับผลชนะเลิศได้แบบ Real-time ช่วยสร้างการมีส่วนร่วมของบุคลากรผ่านระบบ Popular Vote และเปลี่ยนการประกวดแบบเดิมให้เป็น Digital Platform ที่โปร่งใสและตรวจสอบได้",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "MongoDB","REST API"],
    imageUrl: "/images/projects/contest/cover1.png",
    gallery: ["/images/projects/contest/shot1.png", "/images/projects/contest/shot2.png", "/images/projects/contest/shot3.png", "/images/projects/contest/shot4.png", "/images/projects/contest/shot5.png", "/images/projects/contest/shot6.png",
      "/images/projects/contest/shot7.png", "/images/projects/contest/shot8.png", "/images/projects/contest/shot9.png", "/images/projects/contest/shot10.png"
    ],
    URL: "https://uboncancer.go.th/ubchcontest", // ตัวอย่าง URL ของโปรเจกต์
    Pdf: "https://uboncancer.go.th/itubch/docs/manual/manualMediaContest2029.pdf" // ตัวอย่าง URL ของไฟล์ PDF คู่มือการใช้งาน
    
  },
  {
    id: 5,
    category: "Website",
    title: "เว็บไซต์โรงพยาบาลมะเร็งอุบลราชธานี พร้อมระบบจัดการเนื้อหา (CMS)",
    description: "เว็บไซต์อย่างเป็นทางการของโรงพยาบาลมะเร็งอุบลราชธานี ทำหน้าที่เป็นศูนย์กลางข้อมูลบริการทางการแพทย์และข่าวสารหน่วยงานรัฐและเชื่อมโยงข้อมูลจัดซื้อจัดจ้างภาครัฐ (e-GP)  มาพร้อมระบบจัดการเนื้อหา (Custom CMS) หลังบ้านที่ออกแบบ UX/UI โดยเจ้าหน้าที่ของหน่วยงานต่างๆสามารถ โพสต์ประกาศจัดซื้อจัดจ้าง รับสมัครงาน  และจัดการเอกสารดาวน์โหลดได้อย่างรวดเร็ว โครงสร้างเว็บทันสมัย รองรับการแสดงผลทุกอุปกรณ์ (Responsive) และเป็นมิตรต่อการค้นหา (SEO)",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "MongoDB"],
    imageUrl: "/images/projects/cms/cover.png",
    gallery: [
      "/images/projects/cms/cover.png","/images/projects/cms/shot1.png", "/images/projects/cms/shot2.png", "/images/projects/cms/shot3.png", "/images/projects/cms/shot4.png", "/images/projects/cms/shot5.jpg", "/images/projects/cms/shot6.jpg"
    ],
    URL: "https://uboncancer.go.th", // ตัวอย่าง URL ของโปรเจกต์
  },
  {
    id: 6,
    category: "Web Application",
    title: "สั่งงานโสตออนไลน์สำหรับโรงพยาบาล (SOD-CUB)",
    description: "แพลตฟอร์มสั่งงานโสตทัศนศึกษาออนไลน์ที่ครอบคลุมตั้งแต่การสั่งทำป้าย จองคิวบริการถ่ายภาพ การยืม-คืนอุปกรณ์ และการติดตามสถานะงานแบบ Real-time ช่วยจัดระเบียบ Workflow ของเจ้าหน้าที่ ลดความซ้ำซ้อน พร้อมระบบสรุปสถิติเพื่อเพิ่มประสิทธิภาพการบริหารจัดการทรัพยากรภายในโรงพยาบาล",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "MongoDB"],
    imageUrl: "/images/projects/sodcub/cover.png",
    gallery: [
      "/images/projects/sodcub/cover.png", "/images/projects/sodcub/shot1.png", "/images/projects/sodcub/shot2.png", "/images/projects/sodcub/shot3.png", "/images/projects/sodcub/shot4.png"],
    Pdf: "https://uboncancer.go.th/itubch/docs/manual/manualSODCUB2029.pdf" 
  },
  {
    id: 7,
    category: "Web Application",
    title: "ระบบบริหารความเสี่ยงภายในโรงพยาบาลออนไลน์ (RMUBCH)",
    description: "การยกเครื่องระบบบริหารจัดการความเสี่ยง (Risk Management) จากระบบ PHP เวอร์ชันเก่าสู่ Modern Web Technology โดยเน้นการแก้ปัญหาคอขวดด้านประสิทธิภาพและฟังก์ชันการใช้งานที่ไม่ตอบโจทย์ เปลี่ยน Workflow กระดาษและระบบที่ล้าสมัยให้เป็นดิจิทัลแพลตฟอร์ม พร้อมระบบวิเคราะห์ข้อมูลและรายงานผลแบบ Real-time เพื่อการพัฒนาคุณภาพประมวลที่รวดเร็วและแม่นยำกว่าเดิม พร้อม dashboard สรุปสถิติความเสี่ยงที่เกิดขึ้นในแต่ละหน่วยงานเพื่อการบริหารจัดการที่มีประสิทธิภาพและลดความเสี่ยงในอนาคตและระบบแจ้งเตือนอัตโนมัติเมื่อมีการบันทึกความเสี่ยงใหม่หรืออัปเดตสถานะความเสี่ยงที่ต้องการการดำเนินการเร่งด่วน ช่วยให้ทีมบริหารความเสี่ยงสามารถติดตามและจัดการความเสี่ยงได้อย่างมีประสิทธิภาพมากขึ้น",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "postgreSQL"],
    imageUrl: "/images/projects/rmubch/cover.png",
    gallery: ["/images/projects/rmubch/shot1.png", "/images/projects/rmubch/shot2.png", "/images/projects/rmubch/shot3.png", "/images/projects/rmubch/shot4.png"]
  },
  {
    id: 8,
    category: "Web Application",
    title: "ตารางห้องผ่าตัดออนไลน์สำหรับโรงพยาบาล (OR Schedule System)",
    description: "ระบบตรวจสอบตารางใช้งานห้องผ่าตัดแบบ Real-time พัฒนาด้วยโครงสร้างแยกส่วน (Decoupled) โดยใช้ Laravel API เป็นขุมพลังหลังบ้านที่เน้นความเสถียรและแม่นยำของข้อมูล เชื่อมต่อกับหน้าบ้านที่เบาและรวดเร็ว ช่วยให้ทีมแพทย์และพยาบาลเข้าถึงคิวการผ่าตัดได้อย่างสะดวกผ่านทุกอุปกรณ์ ลดความสับสนในการจัดสรรเวลาและทรัพยากรห้องผ่าตัดที่มีจำกัด",
    techStack: ["Laravel (PHP)", "REST API", "Tailwind CSS"],
     imageUrl: "/images/projects/booking/cover1.png",
    gallery: ["/images/projects/booking/cover.png","/images/projects/booking/shot1.png", "/images/projects/booking/shot2.png"]
  },
  {
    id: 9,
    category: "Web Application",
    title: "ระบบเชื่อมโยงข้อมูล E-GP",
    description: "ระบบเชื่อมโยงข้อมูล e-GP ที่โดดเด่นด้วยการบริหารจัดการข้อมูลขนาดใหญ่ผ่าน PHP & MySQL โดยใช้เทคนิค Batch Processing และการตั้งเวลาดึงข้อมูลอัตโนมัติเพื่อป้องกันปัญหา Timeout พร้อมโครงสร้างการจัดเก็บข้อมูลแบบแยก Branch เพื่อความคล่องตัวในการบริหารจัดการพัสดุในแต่ละหน่วยงาน ช่วยให้ประชาชนสามารถเข้าถึงข้อมูลจัดซื้อจัดจ้างภาครัฐได้อย่างรวดเร็ว",
    techStack: ["PHP", "MySQL", "JavaScript"],
    imageUrl: "/images/projects/egp/cover.png",
    gallery: ["/images/projects/egp/shot1.png"]
  },
 

  {
    id: 10,
    category: "Website",
    title: "เว็บไซต์คณะกรรมการจริยธรรมการวิจัยในมนุษย์ EC พร้อมระบบจัดการเนื้อหา",
    description: "เว็บไซต์สำหรับเผยแพร่ข้อมูลและระเบียบการวิจัยในมนุษย์ (EC) มีระบบจัดการเนื้อหาเพื่อให้เจ้าหน้าที่สามารถอัปเดตเอกสารและแบบฟอร์มการขอจริยธรรมวิจัยได้โดยตรง",
    techStack: ["PHP", "Bootstrap", "MySQL", "JavaScript"],
    imageUrl: "/images/projects/ec/cover.png",
    gallery: ["/images/projects/ec/shot1.png", "/images/projects/ec/shot2.png"]
  },
  {
    id: 11,
    category: "Website",
    title: "เว็บไซต์งานโสตทัศนศึกษาและเวชสาธิต",
    description: "เว็บไซต์รวบรวมผลงานและให้บริการสื่อทางการแพทย์และเวชสาธิต สำหรับใช้แนะนำบริการและแสดงผลงานของหน่วยงานโสตทัศนศึกษาในโรงพยาบาล ",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl: "/images/projects/websod/cover.png",
    gallery: ["/images/projects/websod/shot1.png", "/images/projects/websod/shot2.png", "/images/projects/websod/shot3.png"]
  },
  {
    id: 12,
    category: "Website",
    title: "เว็บไซต์งานเทคโนโลยีสารสนเทศ IT",
    description: "เว็บไซต์ศูนย์กลางข้อมูลด้านไอทีของโรงพยาบาล รวบรวมคู่มือการใช้งานระบบต่างๆ ข่าวสารเทคโนโลยี และช่องทางการติดต่อทีมสนับสนุน (Helpdesk)",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    imageUrl: "/images/projects/webit/cover.png",
    gallery: ["/images/projects/webit/shot1.png", "/images/projects/webit/shot2.png", "/images/projects/webit/shot3.png", "/images/projects/webit/shot4.png", "/images/projects/webit/shot5.png", "/images/projects/webit/shot6.png"]
  },

    {
    id: 13,
    category: "Web Application",
    title: "SoloMed System",
    description: "ระบบขออนุมัติการใช้ยาเฉพาะรายสำหรับบุคลากรทางการแพทย์ ออกแบบฐานข้อมูลและ UI ให้ใช้งานง่าย ลดข้อผิดพลาดในเอกสาร และเพิ่มประสิทธิภาพการจัดการคำขออนุมัติยาเฉพาะรายภายในโรงพยาบาล",
    techStack: ["PHP", "Bootstrap", "Mysql", "JavaScript"],
    imageUrl: "/images/projects/solomed/cover.png",
    gallery: [
      "/images/projects/solomed/cover.png", "/images/projects/solomed/shot1.png", "/images/projects/solomed/shot4.png", "/images/projects/solomed/shot3.png", "/images/projects/solomed/shot2.png"]
  },
];

// ---------------------------------------------------------
// Helper Functions
// ---------------------------------------------------------
export const getProjectsByIds = (ids: number[]): ProjectType[] => {
  return projects.filter(project => ids.includes(project.id));
};

export const getProjectsByCategory = (category: ProjectCategory | "All"): ProjectType[] => {
  if (category === "All") return projects;
  return projects.filter(project => project.category === category);
};