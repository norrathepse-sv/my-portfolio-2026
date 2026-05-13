import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      
      {/* Background Decorator: เส้นตารางบางๆ เพื่อความต่อเนื่องจากหน้า About */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`, 
           backgroundSize: '30px 30px' }}>
      </div>

      {/* แสงฟุ้งตกแต่งพื้นหลัง (Subtle Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* หัวข้อ Section สไตล์ Terminal */}
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-blue-500 font-mono text-sm">02 //</span>
              <span className="text-white font-mono text-sm tracking-[0.2em] uppercase">
                Technical_Proficiency
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
              CORE <span className="text-slate-500">SKILLS.</span>
            </h2>
          </div>
          
          <div className="hidden md:block text-slate-500 font-mono text-xs text-right mt-4 md:mt-0">
            <p>STATUS: <span className="text-blue-400">OPTIMIZED</span></p>
            <p>LAST_UPDATE: <span className="text-white">CURRENT</span></p>
          </div>
        </div>

        {/* Grid แสดงทักษะแบบ Server Rack / Terminal Panels */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="group relative bg-[#111111] p-6 border border-white/10 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300"
            >
              {/* มุมตกแต่ง (Corner accents) ที่จะสว่างขึ้นเมื่อ Hover */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* ไอคอนและหมวดหมู่ */}
              <div className="text-3xl mb-5 text-slate-400 group-hover:text-blue-400 transition-colors">
                {skillGroup.icon}
              </div>
              <h3 className="text-sm font-bold text-white mb-4 border-b border-white/10 pb-3 tracking-widest uppercase">
                {skillGroup.category}
              </h3>
              
              {/* รายการทักษะ */}
              <ul className="space-y-3">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-400 font-mono group/item">
                    {/* เปลี่ยนเครื่องหมายถูก เป็นลูกศรแบบ Terminal */}
                    <span className="text-slate-600 mr-2 group-hover/item:text-blue-500 transition-colors">
                      {'>'}
                    </span>
                    <span className="group-hover/item:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}