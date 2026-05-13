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
    <section id="certificates" className="relative py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      
      {/* Background Decorator */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`, 
           backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* หัวข้อ Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-blue-500 font-mono text-sm">05 //</span>
              <span className="text-white font-mono text-sm tracking-[0.2em] uppercase">
                System_Credentials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              CERTIFICATES <span className="text-slate-500">& LOGS.</span>
            </h2>
            <p className="text-slate-500 font-mono text-xs mt-4 uppercase tracking-widest">
              {'>'} Verifying professional qualifications...
            </p>
          </div>

          {/* ปุ่มสลับ Tab สไตล์ Code Editor */}
          <div className="flex border-b border-white/10 self-start md:self-auto w-full md:w-auto">
            <button
              onClick={() => setActiveTab("certs")}
              className={`px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300 relative ${
                activeTab === "certs" 
                  ? "text-blue-400 bg-white/5" 
                  : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
              }`}
            >
              {activeTab === "certs" && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-blue-500"></span>
              )}
              [ CERTIFICATES ]
            </button>
            {/* <button
              onClick={() => setActiveTab("trainings")}
              className={`px-6 py-3 font-mono text-xs tracking-widest uppercase transition-all duration-300 relative ${
                activeTab === "trainings" 
                  ? "text-blue-400 bg-white/5" 
                  : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
              }`}
            >
              {activeTab === "trainings" && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-blue-500"></span>
              )}
              [ TRAINING_LOGS ]
            </button> */}
          </div>
        </div>

        {/* เนื้อหา Tab 1: เกียรติบัตร (แบบ Grid รูปภาพสไตล์ Tech) */}
        {activeTab === "certs" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="group cursor-pointer bg-[#111111] border border-white/10 p-3 hover:border-blue-500/50 transition-all duration-500 relative"
                onClick={() => setSelectedImage(cert.imageUrl)}
              >
                {/* มุมตกแต่ง (Corner accents) */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>

                {/* รูปเกียรติบัตร (Grayscale effect) */}
                <div className="relative aspect-[4/3] bg-[#0a0a0a] overflow-hidden border border-white/5 flex items-center justify-center">
                  <span className="text-xs font-mono text-slate-600 uppercase tracking-widest">
                    Load_Image_Data...
                  </span>
                  <Image 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    fill 
                    className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-10" 
                  />
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                </div>

                {/* รายละเอียด */}
                <div className="mt-4 px-2 pb-2">
                  <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-mono mt-2 uppercase">
                    ORG: {cert.issuer} // {cert.year}
                  </p>
                  <p className="text-[10px] text-blue-500 font-mono mt-3 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-blue-500 animate-pulse"></span>
                    Click to Enlarge
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