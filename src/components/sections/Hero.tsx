import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-white pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 z-0 opacity-40" 
           style={{ backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 102, 204, 0.05) 0%, transparent 50%)` }}>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Hero Headline */}
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium tracking-tight text-apple-text-grey">
              นักพัฒนาระบบและสถาปนิกโซลูชัน
            </div>
            
            <h1 className="text-5xl md:text-7xl font-semibold text-[#1d1d1f] tracking-tight leading-tight mb-10">
              ออกแบบระบบไอทีที่รองรับงานสุขภาพได้อย่างมั่นคง
            </h1>
            <p className="text-apple-text-grey text-sm md:text-base leading-relaxed border-l-2 border-black/5 pl-4">
              สร้างระบบองค์กรที่ใช้งานได้จริงและดูแลได้ง่าย โดยเน้นโครงสร้างที่ชัดเจนและปลอดภัย
            </p>
          </div>

          {/* Description and CTA */}
          <div className="md:col-span-4 md:pt-12">
            <p className="text-sm leading-relaxed mb-10 text-apple-text-grey">
              เปลี่ยนความซับซ้อนให้เป็นระบบที่ทรงพลัง เชี่ยวชาญการวางโครงสร้าง Full-stack สำหรับองค์กร ด้วยประสบการณ์กว่า 10 ปี
            </p>
            
            <div className="flex flex-col gap-3">
              <Link 
  href="/documents/resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="group flex items-center justify-center px-6 py-2.5 bg-[#1d1d1f] text-white font-medium rounded-full hover:bg-apple-blue transition-all duration-200 text-sm"
>
  View Resume
  <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
</Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/5 pt-12">
          {[
            { label: "Experience", value: "10+ Years" },
            { label: "Projects", value: "13+ Complete" },
            { label: "Tech Stack", value: "Full-Stack" },
            { label: "Location", value: "Thailand" }
          ].map((item, idx) => (
            <div key={idx}>
              <p className="text-xs font-medium text-apple-text-grey mb-2">{item.label}</p>
              <p className="text-lg font-semibold text-[#1d1d1f]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}