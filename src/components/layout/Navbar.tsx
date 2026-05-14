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
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-black/5 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO: Minimal Apple Style */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-[#1d1d1f]">
            PORTFOLIO<span className="text-apple-blue">.</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-medium tracking-tight text-[#1d1d1f]/80 hover:text-apple-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Action */}
        <div className="hidden md:block">
          <Link 
            href="#contact" 
            className="text-xs font-semibold px-4 py-1.5 rounded-full bg-[#1d1d1f] text-white hover:bg-apple-blue transition-all duration-300"
          >
            Connect
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-[#1d1d1f]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}