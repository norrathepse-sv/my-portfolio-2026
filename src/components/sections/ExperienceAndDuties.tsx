import { experiences } from "@/data/experience";

export default function ExperienceAndDuties() {
  return (
    <section id="experience" className="relative py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      
      {/* Background Decorator: เส้นตารางบางๆ */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`, 
           backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* หัวข้อ Section สไตล์ Terminal */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-blue-500 font-mono text-sm">04 //</span>
            <span className="text-white font-mono text-sm tracking-[0.2em] uppercase">
              Operation_Log
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            EXPERIENCE <span className="text-slate-500">& DUTIES.</span>
          </h2>
          <p className="text-slate-500 font-mono text-xs mt-4 uppercase tracking-widest">
            {'>'} Retrieving official work history...
          </p>
        </div>

        {/* Timeline ประสบการณ์สไตล์ Data Pipeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-0 group">
              
              {/* เส้น Timeline (Data Pipeline) */}
              <div className="hidden md:block absolute left-[15.5rem] top-2 bottom-[-3rem] w-px bg-white/10 group-last:bg-transparent"></div>
              
              <div className="md:flex gap-12">
                
                {/* คอลัมน์ซ้าย: เวลาและองค์กร */}
                <div className="md:w-60 flex-shrink-0 relative z-10 mb-4 md:mb-0 md:text-right pt-2">
                  
                  {/* จุด Node สี่เหลี่ยมสไตล์ Tech */}
                  <div className="hidden md:flex absolute -right-[3.35rem] top-1.5 w-4 h-4 bg-[#0a0a0a] border border-blue-500 items-center justify-center group-hover:border-blue-400 transition-colors">
                    <div className="w-1.5 h-1.5 bg-blue-500 animate-pulse"></div>
                  </div>
                  
                  {/* ป้ายเวลา (Period) แบบ Code */}
                  <span className="inline-block px-2 py-1 bg-white/5 border border-white/10 text-blue-400 font-mono text-xs font-bold mb-3 tracking-widest">
                    [{exp.period}]
                  </span>
                  <h4 className="text-lg font-bold text-white tracking-tight">{exp.organization}</h4>
                </div>

                {/* คอลัมน์ขวา: รายละเอียดหน้าที่ */}
                <div className="flex-1 bg-[#111111] p-6 md:p-8 border border-white/10 relative hover:border-blue-500/50 hover:bg-white/5 transition-all duration-500">
                  
                  {/* มุมตกแต่ง (Corner accents) */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  {/* ชื่อตำแหน่งสไตล์ Command Line */}
                  <h3 className="text-lg font-mono font-bold text-blue-400 mb-6 flex items-center gap-2 border-b border-white/10 pb-4 uppercase tracking-wider">
                  {exp.role}
                  </h3>
                  
                  <ul className="space-y-3 mb-2">
                    {exp.responsibilities.map((task, idx) => (
                      <li key={idx} className="flex items-start text-slate-400 text-sm font-light leading-relaxed group/item">
                        {/* ลูกศร Terminal */}
                        <span className="text-slate-600 mr-3 font-mono mt-0.5 group-hover/item:text-blue-500 transition-colors">
                          {'>'}
                        </span>
                        <span className="group-hover/item:text-slate-200 transition-colors">
                          {task}
                        </span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}