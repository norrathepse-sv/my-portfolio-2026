import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-10 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand Section */}
        <div className="md:col-span-5">
          <Link href="/" className="inline-block">
            <span className="text-lg font-semibold text-[#1d1d1f] mb-3 block">Portfolio</span>
          </Link>
          <p className="text-sm text-apple-text-grey leading-relaxed max-w-sm">
          รวมผลงานและประสบการณ์การทำงาน 
          </p>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-4 md:pl-8">
          <h3 className="text-[#1d1d1f] font-semibold mb-4 text-sm tracking-tight">Contact</h3>
          <ul className="text-apple-text-grey text-sm space-y-3">
            <li>
              <a href="mailto:norrathep.se@gmail.com" className="hover:text-[#1d1d1f] transition-colors">norrathep.se@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Documents Section */}
        <div className="md:col-span-3">
          <h3 className="text-[#1d1d1f] font-semibold mb-4 text-sm tracking-tight">Documents</h3>
          <ul className="text-apple-text-grey text-sm space-y-3">
            <li>
              <a href="/documents/resume.pdf" target="_blank" className="hover:text-apple-blue transition-colors">
                Download Resume
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-apple-text-grey">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <span className="text-[#1d1d1f] font-medium">Next.js</span> & <span className="text-apple-blue font-medium">Tailwind</span>
        </p>
      </div>
    </footer>
  );
}