"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, ProjectCategory } from "@/data/projects";

type FilterOption = "All" | ProjectCategory;

export default function Projects() {
  const [filter, setFilter] = useState<FilterOption>("All");

  // ฟังก์ชันกรองโปรเจกต์ตามหมวดหมู่
  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  // ฟังก์ชันกำหนดสไตล์ป้ายกำกับ (Badge) สไตล์ Cyber/Tech
  const getBadgeStyle = (category: ProjectCategory) => {
    switch (category) {
      case "Web Application":
        return "bg-blue-500/10 text-blue-400 border-blue-500/30";
      case "Website":
        return "bg-teal-500/10 text-teal-400 border-teal-500/30";
      case "Mobile App":
        return "bg-purple-500/10 text-purple-400 border-purple-500/30";
      default:
        return "bg-white/5 text-slate-400 border-white/10";
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      
      {/* Background Decorator */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`, 
           backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* หัวข้อ Section สไตล์ Terminal */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-blue-500 font-mono text-sm">03 //</span>
            <span className="text-white font-mono text-sm tracking-[0.2em] uppercase">
              Project_Archive
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            SELECTED <span className="text-slate-500">WORKS.</span>
          </h2>
        </div>

        {/* ปุ่ม Filter สไตล์ Code Editor Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/10 pb-4">
          {[
            { label: "ALL_SYSTEMS", value: "All" },
            { label: "WEB_APP", value: "Web Application" },
            { label: "WEBSITE", value: "Website" },
            { label: "MOBILE", value: "Mobile App" }
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value as FilterOption)}
              className={`px-4 py-2 font-mono text-xs tracking-widest transition-all duration-300 relative ${
                filter === tab.value 
                  ? "text-blue-400" 
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {filter === tab.value && (
                <span className="absolute bottom-[-17px] left-0 w-full h-[2px] bg-blue-500"></span>
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid แสดงผลงาน */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id} 
              className="group relative bg-[#111111] border border-white/10 flex flex-col hover:border-blue-500/50 transition-all duration-500"
            >
              {/* มุมตกแต่ง (Corner accents) */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity z-20"></div>

              {/* ส่วนรูปภาพโปรเจกต์ */}
              <div className="relative h-60 bg-[#1a1a1a] flex items-center justify-center overflow-hidden border-b border-white/10">
                <span className="text-xs font-mono text-slate-600 absolute z-0 uppercase tracking-widest">
                  Loading_Asset...
                </span>
                
                {/* 
                  เทคนิค Grayscale: ทำให้รูปเป็นสีขาวดำ แล้วจะเปลี่ยนเป็นสีปกติเมื่อ Hover 
                  ช่วยให้หน้าเว็บดูเท่และเป็นระเบียบเมื่อมองภาพรวม 
                */}
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 z-10"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/800x400/111111/333333?text=SYS_IMAGE_MISSING";
                  }}
                />
                
                {/* Overlay บางๆ เพื่อให้เข้ากับ Dark Mode */}
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
              </div>

              {/* ส่วนรายละเอียดโปรเจกต์ */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-5 flex items-center justify-between">
                  <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-1 border rounded-sm ${getBadgeStyle(project.category)}`}>
                    {project.category}
                  </span>
                  <span className="text-slate-600 font-mono text-xs group-hover:text-blue-500 transition-colors">
                    _ID: {project.id.toString().padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-8 flex-grow leading-relaxed font-light">
                  {project.description}
                </p>
                
                {/* เทคโนโลยีที่ใช้ (Tech Stack) */}
                <div className="pt-5 border-t border-white/10 flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}