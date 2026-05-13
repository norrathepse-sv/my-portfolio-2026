export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404"><defs><pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="4" height="4" fill="currentColor"></rect></pattern></defs><rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"></rect></svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
          พร้อมร่วมงานและพัฒนาระบบไปด้วยกัน
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
          หากท่านกำลังมองหานักวิชาการคอมพิวเตอร์ที่มีประสบการณ์ทั้งด้านการพัฒนา Web Application และการสนับสนุนงานไอทีในองค์กร สามารถติดต่อผมได้ตามช่องทางด้านล่างครับ
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* กล่องอีเมล */}
          <a 
            href="mailto:your.email@example.com" 
            className="flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto justify-center"
          >
            <span className="text-2xl">✉️</span>
            your.email@example.com
          </a>

          {/* กล่องเบอร์โทร */}
          <a 
            href="tel:+66812345678" 
            className="flex items-center gap-3 bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-800 transition-all w-full sm:w-auto justify-center"
          >
            <span className="text-2xl">📱</span>
            08X-XXX-XXXX
          </a>
        </div>

        <div className="mt-12 text-blue-200 text-sm font-medium">
          📍 พำนักอยู่ที่: จังหวัดอุบลราชธานี
        </div>
      </div>
    </section>
  );
}