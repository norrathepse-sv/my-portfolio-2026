import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* คอลัมน์ 1: แบรนด์และคำอธิบาย (กว้างสุด) */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-5">
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
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
           ENGINEERING THE FUTURE
          </p>
        </div>

        {/* คอลัมน์ 2: ข้อมูลติดต่อ (ใช้ Icon แบบเรียบง่าย) */}
        <div className="md:col-span-4 md:pl-8">
          <h3 className="text-white font-semibold mb-6 tracking-wide">ช่องทางการติดต่อ</h3>
          <ul className="text-slate-400 text-sm space-y-4">
            <li className="flex items-center gap-3 group">
              <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="hover:text-white transition-colors cursor-pointer">norrathep.se@gmail.com.com</span>
            </li>
            {/* <li className="flex items-center gap-3 group">
              <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="hover:text-white transition-colors cursor-pointer">08X-XXX-XXXX</span>
            </li> */}
            {/* <li className="flex items-center gap-3 group">
              <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>อุบลราชธานี, ประเทศไทย</span>
            </li> */}
          </ul>
        </div>

        {/* คอลัมน์ 3: ลิงก์ที่จำเป็น */}
        <div className="md:col-span-3">
          <h3 className="text-white font-semibold mb-6 tracking-wide">เอกสาร</h3>
          <ul className="text-slate-400 text-sm space-y-4">
       
            <li>
              <a href="/documents/resume.pdf" target="_blank" className="hover:text-blue-400 transition-colors flex items-center gap-2 mt-2">
                ดาวน์โหลด Resume (PDF)
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* แถบด้านล่างสุด (ลิขสิทธิ์) */}
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} [JOHN JUST].Dev All rights reserved.</p>
        <p className="flex items-center gap-1">
          Developed with <span className="text-white font-medium">Next.js</span> & <span className="text-blue-400 font-medium">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}