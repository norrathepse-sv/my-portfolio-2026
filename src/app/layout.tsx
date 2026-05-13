import type { Metadata } from "next";
import { Inter } from "next/font/google"; // หรือเปลี่ยนเป็น Noto Sans Thai ได้ครับ
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio | นักวิชาการคอมพิวเตอร์",
  description: "แฟ้มสะสมผลงาน (Portfolio) สำหรับตำแหน่งนักวิชาการคอมพิวเตอร์",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}