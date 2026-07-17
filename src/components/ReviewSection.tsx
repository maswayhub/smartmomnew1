import { useState, useEffect } from "react";
import { Star, CheckCircle, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  status: string;
  location: string;
  avatarColor: string;
  rating: number;
  date: string;
  review: string;
  isWhatsAppTheme?: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Nabila R.",
    status: "Calon Pengantin (Menikah Bulan Depan)",
    location: "Bandung",
    avatarColor: "bg-rose-100 text-rose-500",
    rating: 5,
    date: "10 Juli 2026",
    review: "Sebagai wanita yang akan segera menikah, jujur aku sempat cemas banget soal parenting nanti. Untungnya nemu SmartMom Guide ini lebih awal! Isinya bener-bener membuka mata tentang kesiapan mental, emosi, dan komunikasi dengan pasangan sebelum si kecil hadir. Sangat menenangkan jiwa!",
    isWhatsAppTheme: false
  },
  {
    name: "Mommy Arini S.",
    status: "Ibu dari Rayyan (Newborn - 1 Bulan)",
    location: "Jakarta Selatan",
    avatarColor: "bg-teal-100 text-teal-600",
    rating: 5,
    date: "14 Juni 2026",
    review: "Sangat bersyukur ketemu panduan ini pas hamil kemarin. Isinya super praktis dan mudah dipahami. Bagian panduan perawatan bayi baru lahir beneran jadi penyelamat aku dan suami saat hari-hari pertama membawa pulang bayi dari rumah sakit. Kami jadi tidak panik.",
    isWhatsAppTheme: true
  },
  {
    name: "Mommy Dianita K.",
    status: "Sedang Hamil Trimester 2",
    location: "Surabaya",
    avatarColor: "bg-purple-100 text-purple-600",
    rating: 5,
    date: "30 Mei 2026",
    review: "Dulu sering bingung dan overthinking karena baca info simpang siur di forum internet. Begitu baca SmartMom Guide, hati langsung adem sekali. Penjelasannya ilmiah tapi ditulis dengan gaya bahasa yang hangat seperti mengobrol dengan sahabat sendiri. Sangat menenangkan!",
    isWhatsAppTheme: false
  },
  {
    name: "Syafira A.",
    status: "Calon Pengantin (Persiapan Pernikahan)",
    location: "Yogyakarta",
    avatarColor: "bg-amber-100 text-amber-600",
    rating: 5,
    date: "5 Juli 2026",
    review: "Buku panduan ini wajib jadi seserahan sih! Isinya bukan cuma teori pengasuhan anak, tapi juga tentang mempersiapkan pondasi rumah tangga yang kuat. Sangat membantu menyelaraskan visi pengasuhan bersama calon suami agar nanti tidak kaget setelah melahirkan.",
    isWhatsAppTheme: true
  },
  {
    name: "Mommy Hanum F.",
    status: "Hamil Trimester 3",
    location: "Semarang",
    avatarColor: "bg-blue-100 text-blue-600",
    rating: 5,
    date: "12 Juli 2026",
    review: "Sekarang sudah masuk minggu ke-36 dan panduan ini bener-bener jadi pegangan wajib di malam hari. Penjelasan tentang fase persalinan dan manajemen nyeri membuat aku yang awalnya takut melahirkan jadi jauh lebih tenang, percaya diri, dan siap menghadapinya.",
    isWhatsAppTheme: false
  },
  {
    name: "Mommy Clarissa T.",
    status: "Ibu dari Keanu (3 Bulan)",
    location: "Medan",
    avatarColor: "bg-pink-100 text-pink-600",
    rating: 5,
    date: "28 Juni 2026",
    review: "Tantangan menyusui di bulan-bulan awal sempat bikin mental terpuruk. Untungnya bab tentang menyusui di panduan ini sangat informatif dan menenangkan. Menjelaskan secara detail cara pelekatan yang benar tanpa membuat saya merasa bersalah sebagai ibu baru. Highly recommended!",
    isWhatsAppTheme: true
  },
  {
    name: "Mommy Farah D.",
    status: "Hamil Trimester 1",
    location: "Makassar",
    avatarColor: "bg-emerald-100 text-emerald-600",
    rating: 5,
    date: "3 Juli 2026",
    review: "Di trimester awal yang penuh mual dan perubahan mood, membaca panduan ini memberikan kekuatan tersendiri. Tips menjaga kesehatan mental ibu hamil di bab awal bener-bener aplikatif dan membantu suami juga untuk lebih mengerti perubahan emosi yang sedang saya alami.",
    isWhatsAppTheme: false
  },
  {
    name: "Mommy Rizka P.",
    status: "Ibu dari Kayla (6 Bulan)",
    location: "Balikpapan",
    avatarColor: "bg-indigo-100 text-indigo-600",
    rating: 5,
    date: "1 Juli 2026",
    review: "Suka sekali dengan pembahasan milestones tumbuh kembang anak di panduan ini. Ditulis dengan sangat terstruktur sehingga saya bisa memantau perkembangan fisik dan kognitif Kayla tanpa harus membanding-bandingkannya secara berlebihan dengan anak lain di media sosial.",
    isWhatsAppTheme: true
  },
  {
    name: "Amira Syifa",
    status: "Calon Pengantin (Menikah 3 Bulan Lagi)",
    location: "Malang",
    avatarColor: "bg-orange-100 text-orange-600",
    rating: 5,
    date: "8 Juli 2026",
    review: "Ini investasi terbaik sebelum melangkah ke jenjang pernikahan. Mempelajari ilmu parenting sejak dini membuat saya merasa memiliki bekal mental yang kokoh. Isinya mengajarkan bahwa menjadi orang tua yang baik itu dipersiapkan, bukan sekadar naluri alami.",
    isWhatsAppTheme: false
  },
  {
    name: "Mommy Nindya H.",
    status: "Ibu dari Alora (1 Tahun)",
    location: "Denpasar",
    avatarColor: "bg-red-100 text-red-500",
    rating: 5,
    date: "15 Juli 2026",
    review: "Meskipun anak saya sudah jalan setahun, panduan ini tetap sangat relevan. Terutama bab mengenai stimulasi emosi anak dan menghadapi tantangan tantrum pertama. Panduan ini bener-bener mengajarkan cara mendidik anak dengan sabar dan penuh kasih sayang tanpa amarah.",
    isWhatsAppTheme: true
  }
];

export default function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 1; // Always show 1 review card to keep the landing page in a clean, 1-column layout

  const maxIndex = testimonials.length - visibleCount;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 relative px-4 md:px-8" id="testimonials-slider-section">
      
      {/* Slider Container */}
      <div className="relative overflow-hidden group/slider py-4">
        {/* Carousel Track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="w-full shrink-0 px-3 flex flex-col"
                style={{ width: `${100 / visibleCount}%` }}
              >
                {t.isWhatsAppTheme ? (
                  /* Simulated WhatsApp Style Chat Card (High CRO Value) */
                  <div className="bg-emerald-50/50 rounded-3xl border border-emerald-100 shadow-xs p-5 flex-1 flex flex-col justify-between relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 bg-emerald-100/40 text-emerald-700 px-3 py-1 rounded-bl-2xl text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      WA Chat
                    </div>

                    <div className="space-y-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-4">
                        {/* WhatsApp Header Mock */}
                        <div className="flex items-center gap-3 border-b border-emerald-100/60 pb-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${t.avatarColor}`}>
                            {t.name[0]}
                          </div>
                          <div>
                            <h4 className="font-bold text-charcoal text-sm flex items-center gap-1">
                              {t.name}
                              <CheckCircle className="w-3.5 h-3.5 fill-emerald-500 text-white shrink-0" />
                            </h4>
                            <p className="text-[10px] text-charcoal-light font-medium">{t.status}</p>
                          </div>
                        </div>

                        {/* Chat Message Bubble */}
                        <div className="bg-[#DCF8C6] p-4 rounded-2xl rounded-tl-none text-charcoal text-sm leading-relaxed relative shadow-xs">
                          <div className="flex gap-0.5 mb-1.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <p className="italic font-medium text-stone-800">"{t.review}"</p>
                        </div>
                      </div>

                      <div className="text-[9px] text-right text-stone-500 font-bold mt-3">
                        {t.date} • {t.location} • Read ✔✔
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Editorial/Aesthetic Review Card */
                  <div className="bg-white rounded-3xl border border-cream-dark shadow-xs p-6 flex-1 flex flex-col justify-between hover:shadow-md transition-all duration-300 h-full">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${t.avatarColor}`}>
                            {t.name[0]}
                          </div>
                          <div>
                            <h4 className="font-bold text-charcoal text-sm flex items-center gap-1">
                              {t.name}
                              <CheckCircle className="w-3.5 h-3.5 fill-soft-teal text-white shrink-0" />
                            </h4>
                            <p className="text-[10px] text-charcoal-light font-medium">{t.status}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      <p className="text-charcoal-light text-sm leading-relaxed italic">
                        "{t.review}"
                      </p>
                    </div>

                    <div className="text-[11px] font-semibold text-charcoal-light/70 pt-4 mt-4 border-t border-cream-light flex justify-between">
                      <span>{t.location}</span>
                      <span>{t.date}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Floating Arrow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 md:-translate-x-4 bg-white/95 hover:bg-white text-charcoal hover:text-soft-teal-dark w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg border border-cream-dark active:scale-90 transition-all z-10 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 md:translate-x-4 bg-white/95 hover:bg-white text-charcoal hover:text-soft-teal-dark w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg border border-cream-dark active:scale-90 transition-all z-10 cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 pt-2">
        {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === i ? "w-6 bg-soft-teal" : "w-2.5 bg-cream-dark/60 hover:bg-cream-dark"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
