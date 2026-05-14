import type { Metadata } from "next";
// นำเข้าฟอนต์จาก Google Fonts (เลือกใช้ Inter สำหรับอ่านง่าย และ JetBrains Mono สำหรับโค้ด)
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// สมมติว่าคุณมีไฟล์ Navbar และ Footer (ถ้ายังไม่มี หรือชื่อไฟล์ต่างไป ให้ปรับแก้บรรทัดนี้ครับ)


// 1. ตั้งค่าฟอนต์
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono",
});

// 2. ตั้งค่า Metadata (ข้อมูลที่จะไปโชว์บน Tab ของ Browser และเวลาแชร์ลิงก์)
export const metadata: Metadata = {
  title: "JOHN JUST | Portfolio",
  description: "แฟ้มสะสมผลงานของผมและ Full-Stack Developer",
};

// 3. โครงสร้างหลักของหน้าเว็บ
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      {/* 
        ตั้งค่า Body ให้เป็นสีดำคล้ำ (#0a0a0a) 
        และให้ตัวอักษรพื้นฐานเป็นสีเทาสว่าง (text-slate-300) 
      */}
      <body 
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-white text-[#1d1d1f] antialiased min-h-screen flex flex-col`}
      >
        {/* แถบเมนูด้านบน จะอยู่ทุกหน้า */}
        <Navbar />

        {/* 
          {children} คือ เนื้อหาของแต่ละหน้า (เช่น page.tsx ของหน้า About, Projects) 
          จะถูกนำมาเสียบตรงกลางนี้โดยอัตโนมัติ 
          (flex-grow ช่วยดันให้ Footer ไปอยู่ล่างสุดเสมอ)
        */}
        <main className="flex-grow">
          {children}
        </main>

        {/* แถบด้านล่างสุด จะอยู่ทุกหน้า */}
        <Footer />
      </body>
    </html>
  );
}