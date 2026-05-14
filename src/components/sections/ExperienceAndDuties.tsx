import { experiences } from "@/data/experience";

export default function ExperienceAndDuties() {
  return (
    <section id="experience" className="relative py-24 bg-apple-grey border-t border-black/5 overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-xs font-medium text-apple-text-grey mb-4 tracking-tight">Work Experience</p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight">
            Experience & Responsibilities
          </h2>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-0 group">
              
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[8.5rem] top-6 bottom-[-3rem] w-px bg-black/10 group-last:bg-transparent"></div>
              
              <div className="md:flex gap-12">
                
                {/* Left Column: Period & Organization */}
                <div className="md:w-40 flex-shrink-0 relative z-10 mb-4 md:mb-0 md:text-right pt-1">
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute -right-[2.4rem] top-3 w-4 h-4 bg-white border-2 border-apple-blue rounded-full items-center justify-center group-hover:shadow-md transition-all">
                    <div className="w-1.5 h-1.5 bg-apple-blue rounded-full"></div>
                  </div>
                  
                  {/* Period Badge */}
                  <span className="inline-block px-2 py-1 bg-apple-blue/10 border border-apple-blue/20 text-apple-blue font-medium text-xs mb-3 rounded-sm tracking-tight">
                    {exp.period}
                  </span>
                  <h4 className="text-base font-semibold text-[#1d1d1f]">{exp.organization}</h4>
                </div>

                {/* Right Column: Details */}
                <div className="flex-1 bg-white p-6 md:p-6 border border-black/5 rounded-lg hover:shadow-md hover:border-apple-blue/20 transition-all duration-300">
                  
                  {/* Role Title */}
                  <h3 className="text-base font-semibold text-[#1d1d1f] mb-4 pb-3 border-b border-black/5">
                    {exp.role}
                  </h3>
                  
                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((task, idx) => (
                      <li key={idx} className="flex items-start text-apple-text-grey text-sm leading-relaxed">
                        <span className="text-apple-blue mr-3 font-medium min-w-fit">•</span>
                        <span>{task}</span>
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