import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-apple-grey border-t border-black/5 overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          {/* <p className="text-xs font-medium text-apple-text-grey mb-4 tracking-tight">Technical Skills</p> */}
          <h2 className="text-4xl md:text-5xl font-semibold text-[#1d1d1f] tracking-tight">
            Competencies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-6 border border-black/5 hover:border-apple-blue/30 hover:shadow-sm transition-all duration-200 rounded-lg"
            >
              {/* Icon and Category */}
              <div className="text-3xl mb-4 text-apple-text-grey group-hover:text-apple-blue transition-colors">
                {skillGroup.icon}
              </div>
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-3 tracking-tight">
                {skillGroup.category}
              </h3>
              
              {/* Skills List */}
              <ul className="space-y-2">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="text-xs text-apple-text-grey group-hover/item:text-[#1d1d1f] transition-colors">
                    {item}
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