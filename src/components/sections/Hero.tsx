import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#0a0a0a] pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
      
      {/* Background Grid: เส้นตารางจางๆ แบบในเทมเพลต Wix */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`, 
           backgroundSize: '40px 40px' }}>
      </div>

      {/* แสงฟุ้ง (Glow) ตกแต่งมุมจอ */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* ฝั่งซ้าย: Headline ใหญ่ๆ */}
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-mono tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              System Architect & Developer
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-[0.9] tracking-tighter mb-8">
              ENGINEERING <br />
              <span className="text-slate-500">THE FUTURE.</span>
            </h1>
          </div>

          {/* ฝั่งขวา: คำอธิบายและปุ่มกด */}
          <div className="md:col-span-4 md:pt-12">
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-10 border-l-2 border-blue-500 pl-6">
              เปลี่ยนความซับซ้อนให้เป็นระบบที่ทรงพลัง 
              เชี่ยวชาญการวางโครงสร้าง Full-stack สำหรับองค์กร 
              ด้วยประสบการณ์กว่า 5 ปี
            </p>
            
            <div className="flex flex-col gap-4">
              <Link 
                 href="/documents/resume.pdf" 
                className="group flex items-center justify-between px-6 py-4 bg-white text-black font-bold rounded-sm hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                VIEW RESUME
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              {/* <Link 
                href="/documents/resume.pdf" 
                className="text-white/50 text-sm font-mono hover:text-white transition-colors text-right"
              >
                _DOWNLOAD_RESUME.PDF
              </Link> */}
            </div>
          </div>
        </div>

        {/* ส่วนท้าย: สถิติหรือ Tech Stack แบบมินิมอล */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          {[
            { label: "EXPERIENCE", value: "5+ YEARS" },
            { label: "PROJECTS", value: "13+ COMPLETED" },
            { label: "STACK", value: "FULL-STACK" },
            { label: "LOCATION", value: "THAILAND" }
          ].map((item, idx) => (
            <div key={idx} className="group">
              <p className="text-blue-500 text-xs font-mono mb-2">0{idx + 1} // {item.label}</p>
              <p className="text-white text-xl font-bold tracking-wider group-hover:text-blue-400 transition-colors">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}