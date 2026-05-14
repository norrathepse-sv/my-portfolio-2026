"use client";

import { useState, useEffect } from "react";
import { certificates } from "@/data/certificates";
import Image from "next/image";

export default function Certificates() {
  const [activeTab, setActiveTab] = useState<"certs" | "trainings">("certs");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ป้องกันไม่ให้หน้าเว็บข้างหลังเลื่อนเวลาเปิดรูปใหญ่ดู
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <section id="certificates" className="relative py-24 bg-white border-t border-black/5 overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium text-apple-text-grey mb-4 tracking-tight">Qualifications</p>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight">
              Certificates & Licenses
            </h2>
          </div>

          {/* Tab Buttons */}
          <div className="flex border-b border-black/5 self-start md:self-auto w-full md:w-auto">
            <button
              onClick={() => setActiveTab("certs")}
              className={`px-6 py-3 text-xs font-medium tracking-tight transition-all duration-200 border-b-2 ${
                activeTab === "certs" 
                  ? "text-apple-blue border-apple-blue" 
                  : "text-apple-text-grey border-transparent hover:text-[#1d1d1f]"
              }`}
            >
              Certificates
            </button>
          </div>
        </div>

        {/* Certificates Grid */}
        {activeTab === "certs" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="group cursor-pointer bg-apple-grey border border-black/5 p-3 rounded-lg hover:shadow-lg hover:border-apple-blue/20 transition-all duration-300"
                onClick={() => setSelectedImage(cert.imageUrl)}
              >
                {/* Certificate Image */}
                <div className="relative aspect-[4/3] bg-black/5 overflow-hidden border border-black/5 rounded-md flex items-center justify-center group-hover:border-apple-blue/30 transition-all">
                  <span className="text-xs font-medium text-apple-text-grey uppercase tracking-tight">
                    Loading preview...
                  </span>
                  <Image 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Certificate Info */}
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-[#1d1d1f] line-clamp-2 group-hover:text-apple-blue transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-apple-text-grey mt-2 tracking-tight">
                    {cert.issuer} • {cert.year}
                  </p>
                  <p className="text-xs text-apple-blue font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    <span>→</span> View Certificate
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* เนื้อหา Tab 2: ประวัติการอบรม (แบบ Terminal List) */}
        {/* {activeTab === "trainings" && (
          <div className="bg-[#111111] border border-white/10 p-2 md:p-6 animate-fade-in relative">
            <ul className="divide-y divide-white/5">
              {trainings?.map((training) => (
                <li key={training.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/5 transition-colors group">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 font-mono text-slate-600 group-hover:text-blue-500 transition-colors">
                      {'>'}
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-slate-200 group-hover:text-white transition-colors">
                        {training.course}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-1 uppercase">
                        HOST: {training.organizer}
                      </p>
                    </div>
                  </div>
                  <div className="md:text-right flex-shrink-0 pl-7 md:pl-0">
                    <span className="inline-block px-2 py-1 bg-white/5 border border-white/10 text-blue-400 font-mono text-[10px] font-bold tracking-widest uppercase">
                      [{training.period}]
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )} */}

      </div>

      {/* 
        ========================================
        ส่วนของ Modal (Popup สไตล์ HUD/Tech)
        ========================================
      */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]/95 backdrop-blur-md p-4 md:p-8 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* ข้อมูลตกแต่ง UI ของ Modal */}
          <div className="absolute top-6 left-6 text-blue-500 font-mono text-xs tracking-widest uppercase hidden md:block">
            <span className="inline-block w-2 h-2 bg-blue-500 mr-2 animate-pulse"></span>
            Viewing_Document
          </div>
          
          {/* ปุ่มปิด (สไตล์ Terminal Command) */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 md:top-6 md:right-6 px-4 py-2 bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 border border-white/10 hover:border-red-500/50 font-mono text-xs uppercase tracking-widest transition-all z-10"
          >
            [ Close / ESC ]
          </button>

          {/* กรอบแสดงรูปภาพ (HUD Frame) */}
          <div 
            className="relative w-full h-full max-w-5xl flex items-center justify-center border border-white/10 bg-[#111111]/50 p-2 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* กรอบมุม */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-500"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-500"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-500"></div>

            <div className="relative w-full h-full">
              <Image 
                src={selectedImage} 
                alt="Certificate Full Size" 
                fill 
                className="object-contain" 
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}