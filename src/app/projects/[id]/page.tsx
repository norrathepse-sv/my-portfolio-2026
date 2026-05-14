'use client';

import { use } from "react";
import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProjectDetail({ params }: ProjectPageProps) {
  const resolvedParams = use(params);
  const projectId = parseInt(resolvedParams.id);
  
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  const galleryImages = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.imageUrl];

  return (
    <main className="relative min-h-screen bg-[#fcfcfc] pt-24 pb-32 overflow-hidden">
      
      {/* Background Decorator (Light Grid) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none fixed" 
           >
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* ปุ่มย้อนกลับ */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center text-xs font-mono tracking-widest text-slate-500 hover:text-blue-600 mb-12 transition-colors group bg-white px-4 py-2 border border-slate-200 shadow-sm"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">{'<'}</span>
          [ RETURN_TO_ARCHIVE ]
        </Link>

        {/* ส่วน Header */}
        <header className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-2 py-1 bg-slate-100 border border-slate-300 text-slate-600 text-[10px] font-mono tracking-widest uppercase font-bold">
              SYS_CAT: {project.category}
            </span>
            <span className="text-slate-400 font-mono text-xs uppercase font-bold">
              ID: {String(project.id).padStart(2, '0')}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tighter leading-tight">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-10">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-mono shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="w-full h-px bg-slate-200 mb-10 relative">
            <div className="absolute left-0 top-0 w-12 h-px bg-slate-900"></div>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed font-normal whitespace-pre-line">
            {project.description}
          </p>
        </header>

        {/* ส่วนแสดงรูปภาพ */}
        <section className="mb-20">
          <h3 className="text-sm font-mono text-slate-900 tracking-[0.2em] uppercase border-b border-slate-200 pb-4 mb-10 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500"></span>
            System_Interfaces
          </h3>
          
          <div className="space-y-16">
            {galleryImages.map((imgSrc, index) => (
              <figure key={index} className="w-full">
                <div className="relative bg-white p-3 border border-slate-200 shadow-xl shadow-slate-200/50">
                  
                  {/* HUD style corners (Subtle Blue) */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-slate-300"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-slate-300"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-slate-300"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-300"></div>

                  <div className="relative overflow-hidden bg-slate-50 border border-slate-100">
                    <img 
                      src={imgSrc} 
                      alt={`Interface ${index + 1} - ${project.title}`} 
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/1200x800/f8fafc/cbd5e1?text=SYS_IMAGE_${index + 1}_OFFLINE`;
                      }}
                    />
                  </div>
                </div>
                
                <figcaption className="text-left font-mono text-[10px] text-slate-400 mt-4 tracking-widest uppercase flex items-center gap-2">
                  <span className="text-slate-900 font-bold">{'>'}</span> DISPLAY_CAPTURE_{String(index + 1).padStart(2, '0')} // {project.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      
        {/* ส่วนลิงก์ที่เกี่ยวข้อง */}
        {(project.URL || project.Pdf) && (
          <section>
            <h3 className="text-sm font-mono text-slate-900 tracking-[0.2em] uppercase border-b border-slate-200 pb-4 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-slate-300"></span>
              External_Resources
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.URL && (
                <a
                  href={project.URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-5 bg-white border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all group"
                >
                  <div className="p-3 bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors mr-4 rounded-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm tracking-wide">ACCESS_SYSTEM</div>
                    <div className="text-xs font-mono text-slate-500 mt-1 uppercase">Launch Live Preview</div>
                  </div>
                </a>
              )}

              {project.Pdf && (
                <a
                  href={project.Pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-5 bg-white border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all group"
                >
                  <div className="p-3 bg-slate-50 text-slate-600 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-colors mr-4 rounded-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm tracking-wide">DOWNLOAD_DOC</div>
                    <div className="text-xs font-mono text-slate-500 mt-1 uppercase">Get PDF Manual</div>
                  </div>
                </a>
              )}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}