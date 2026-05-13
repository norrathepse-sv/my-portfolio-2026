'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // ตรวจสอบการเลื่อนหน้าจอเพื่อเปลี่ยนสไตล์ Navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-white/10 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO: สไตล์ Tech มินิมอล */}
   <Link href="/" className="group flex items-center gap-2">
  <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center font-mono font-bold text-lg">
    ~/
  </div>
  <div className="flex flex-col leading-none">
    <span className="text-white font-bold tracking-widest text-lg uppercase group-hover:text-blue-400 transition-colors">
      [๋JOHN JUST]<span className="text-blue-500">.</span>DEV
    </span>
    <span className="text-[10px] text-slate-500 font-mono tracking-[0.2em] uppercase">
      Portfolio_Workspace
    </span>
  </div>
</Link>

        {/* Desktop Menu: ใช้ฟอนต์ Monospace ตัวเล็กๆ ตาม Wix Template */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-mono font-medium tracking-[0.3em] text-white/60 hover:text-blue-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right Action: ปุ่มจ้างงาน หรือ ปุ่มเด่น */}
        <div className="hidden md:block">
          <Link 
            href="#contact" 
            className="text-[11px] font-mono px-5 py-2 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            LET'S TALK _
          </Link>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}