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
    <section id="projects" className="relative py-24 bg-white border-t border-black/5 overflow-hidden">
      
      {/* Background Decorator */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
          >
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          {/* <p className="text-xs font-medium text-apple-text-grey mb-4 tracking-tight">Featured Projects</p> */}
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight">
            Show Case
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-black/5 pb-4">
          {[
            { label: "All", value: "All" },
            { label: "Web Application", value: "Web Application" },
            { label: "Website", value: "Website" },
            { label: "Mobile App", value: "Mobile App" }
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value as FilterOption)}
              className={`px-4 py-2 text-xs font-medium tracking-tight transition-all duration-200 ${
                filter === tab.value 
                  ? "text-apple-blue border-b-2 border-apple-blue" 
                  : "text-apple-text-grey hover:text-[#1d1d1f]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id} 
              className="group relative bg-apple-grey border border-black/5 flex flex-col rounded-lg overflow-hidden hover:shadow-lg hover:border-apple-blue/20 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-black/5 flex items-center justify-center overflow-hidden border-b border-black/5">
                <span className="text-xs font-medium text-apple-text-grey absolute z-0 uppercase tracking-tight">
                  Loading preview...
                </span>
                
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-10"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/800x400/f5f5f7/999999?text=Image";
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs font-medium bg-apple-blue/10 text-apple-blue px-2 py-1 rounded-sm tracking-tight">
                    {project.category}
                  </span>
                  <span className="text-apple-text-grey text-xs">
                    ID: {project.id.toString().padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-[#1d1d1f] mb-2 group-hover:text-apple-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-apple-text-grey text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="pt-4 border-t border-black/5 flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 text-xs font-medium bg-white border border-black/10 text-apple-text-grey hover:text-apple-blue transition-colors cursor-default rounded-sm"
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