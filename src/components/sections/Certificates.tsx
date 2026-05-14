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
    <section id="certificates" className="relative py-24 bg-white border-t border-gray-100 overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Certificates
            </h2>
            <p className="text-gray-500 mt-3 text-sm md:text-base">
              เอกสารรับรองคุณวุฒิ และประวัติการพัฒนาทักษะวิชาชีพ
            </p>
          </div>

          {/* Tab Buttons (สไตล์มินิมอล) */}
          <div className="flex bg-gray-100/80 p-1 rounded-xl self-start md:self-auto w-full md:w-auto">
            <button
              onClick={() => setActiveTab("certs")}
              className={`flex-1 md:flex-none px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                activeTab === "certs" 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Certificates
            </button>
            {/* หากต้องการเปิดใช้ Tab Trainings ในอนาคต สามารถเอา Comment ออกได้เลยครับ */}
            {/* <button
              onClick={() => setActiveTab("trainings")}
              className={`flex-1 md:flex-none px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                activeTab === "trainings" 
                  ? "bg-white text-gray-900 shadow-sm" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Trainings
            </button> */}
          </div>
        </div>

        {/* Certificates Grid (ดีไซน์การ์ดแบบ Clean) */}
        {activeTab === "certs" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="group cursor-pointer bg-white border border-gray-200 rounded-2xl p-4 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300"
                onClick={() => setSelectedImage(cert.imageUrl)}
              >
                {/* Certificate Image */}
                <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden rounded-xl border border-gray-100 flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-400">
                    Loading preview...
                  </span>
                  <Image 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                  />
                </div>

                {/* Certificate Info */}
                <div className="mt-5 px-1">
                  <h4 className="text-base font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1.5 flex items-center justify-between">
                    <span>{cert.issuer}</span>
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-medium">{cert.year}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* 
        ========================================
        ส่วนของ Modal (Popup รูปแบบ Clean & Focused)
        ========================================
      */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/80 backdrop-blur-sm p-4 md:p-10 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          {/* ปุ่มปิด (X) สไตล์มินิมอล */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all z-10 hover:scale-110"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* กรอบแสดงรูปภาพ (ไร้ขอบรกๆ เน้นรูป 100%) */}
          <div 
            className="relative w-full h-full max-w-5xl flex items-center justify-center drop-shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="relative w-full h-full">
              <Image 
                src={selectedImage} 
                alt="Certificate Full Size" 
                fill 
                className="object-contain rounded-lg" 
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}