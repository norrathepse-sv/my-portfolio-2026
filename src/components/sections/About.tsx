import { aboutData } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
      
      {/* Background Decorator: เส้นตารางบางๆ */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`, 
           backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* หัวข้อ Section สไตล์โค้ด */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-blue-500 font-mono text-sm">01 //</span>
            <span className="text-white font-mono text-sm tracking-[0.2em] uppercase">
              System_Administrator_Info
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            ABOUT <span className="text-slate-500">ME.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* คอลัมน์ซ้าย: ข้อมูลส่วนตัว (Personal Panel) */}
          <div className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 relative group hover:border-blue-500/30 transition-colors duration-500">
            {/* มุมตกแต่ง (Corner accents) */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-500"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-500"></div>

            <h3 className="text-lg font-mono text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 animate-pulse"></span>
              [PERSONAL_DATA]
            </h3>
            
            <ul className="space-y-5 text-sm">
              <li className="flex flex-col sm:flex-row sm:items-end border-b border-white/10 pb-3">
                <span className="font-mono text-blue-400 w-32 text-xs mb-1 sm:mb-0 uppercase">Name:</span>
                <span className="text-slate-300 font-medium">{aboutData.fullName} <span className="text-slate-500">({aboutData.nickname})</span></span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-end border-b border-white/10 pb-3">
                <span className="font-mono text-blue-400 w-32 text-xs mb-1 sm:mb-0 uppercase">DOB:</span>
                <span className="text-slate-300 font-medium">{aboutData.birthDate} <span className="text-slate-500">({aboutData.age} Y/O)</span></span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-end border-b border-white/10 pb-3">
                <span className="font-mono text-blue-400 w-32 text-xs mb-1 sm:mb-0 uppercase">Status:</span>
                <span className="text-slate-300 font-medium">{aboutData.nationality} / {aboutData.religion}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-end border-b border-white/10 pb-3">
                <span className="font-mono text-blue-400 w-32 text-xs mb-1 sm:mb-0 uppercase">Location:</span>
                <span className="text-slate-300 font-medium">{aboutData.address}</span>
              </li>
            </ul>

            <h4 className="font-mono text-xs text-slate-500 mt-10 mb-4 uppercase tracking-widest">
              {'<Hobbies />'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {aboutData.hobbies.map((hobby, index) => (
                <span 
                  key={index}
                  className="bg-transparent border border-white/20 text-slate-400 px-3 py-1 text-xs font-mono hover:text-blue-400 hover:border-blue-400 transition-colors cursor-default"
                >
                  {hobby}
                </span>
              ))}
            </div>
          </div>

          {/* คอลัมน์ขวา: ประวัติการศึกษา (Education Log) */}
          <div>
            <h3 className="text-lg font-mono text-white mb-8 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              [EDUCATION_LOG]
            </h3>
            
            <div className="space-y-0">
              {aboutData.education.map((edu, index) => (
                <div key={edu.id} className="relative pl-8 pb-10 last:pb-0">
                  {/* เส้น Timeline */}
                  {index !== aboutData.education.length - 1 && (
                    <div className="absolute left-[9px] top-7 bottom-0 w-px bg-white/10"></div>
                  )}
                  
                  {/* จุด Node Timeline */}
                  <div className="absolute left-0 top-1.5 w-5 h-5 rounded-none border border-blue-500 bg-[#0a0a0a] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-blue-500"></div>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 p-6 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                      <span className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-mono tracking-widest uppercase">
                        {edu.level}
                      </span>
                      <span className="text-xs font-mono text-slate-500">
                        {edu.year}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-white leading-tight mb-1">{edu.degree}</h4>
                    {edu.major && (
                      <p className="text-blue-400 font-medium text-sm mb-2">{edu.major}</p>
                    )}
                    <p className="text-slate-400 text-sm font-light">{edu.university}</p>
                    
                    {/* {edu.gpa && (
                      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                        <span className="text-slate-500 text-xs font-mono uppercase">GPAX_SCORE</span>
                        <span className="font-mono font-bold text-white bg-white/10 px-2 py-1 rounded-sm">{edu.gpa}</span>
                      </div>
                    )} */}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}