import { useState, useEffect } from "react";
import { Star, CheckCircle, MessageSquare, ChevronLeft, ChevronRight } from "lucide-react";
// @ts-ignore
import whatsappTestimonialAni from "../assets/images/whatsapp_testimonial_ani_1784558921753.jpg";
// @ts-ignore
import whatsappTestimonialNoviana from "../assets/images/whatsapp_testimonial_noviana_1784558936347.jpg";
// @ts-ignore
import whatsappTestimonialSarah from "../assets/images/wa_sarah_testimonial_1784559359843.jpg";
// @ts-ignore
import whatsappTestimonialZaskia from "../assets/images/wa_zaskia_testimonial_1784559374351.jpg";
// @ts-ignore
import whatsappTestimonialCinthya from "../assets/images/wa_cinthya_testimonial_1784559387026.jpg";
// @ts-ignore
import whatsappTestimonialWinda from "../assets/images/wa_winda_testimonial_1784559400578.jpg";
// @ts-ignore
import whatsappTestimonialArinda from "../assets/images/wa_arinda_testimonial_1784559414014.jpg";
// @ts-ignore
import whatsappTestimonialRina from "../assets/images/wa_rina_testimonial_1784559425104.jpg";

interface Testimonial {
  name: string;
  pregnancyAge: string;
  trimester: string;
  job: string;
  location: string;
  avatarColor: string;
  rating: number;
  date: string;
  review: string;
  isWhatsAppTheme?: boolean;
  imageSrc?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ani Wijayanti",
    pregnancyAge: "Persiapan Trimester 2",
    trimester: "Trimester 2",
    job: "Ibu Rumah Tangga",
    location: "Sleman",
    avatarColor: "bg-emerald-100 text-emerald-600",
    rating: 5,
    date: "Hari Ini",
    review: "Kak, ebooknya udah aku baca semalam. Awalnya cuma niat baca bentar, eh malah lanjut sampai jam 11 malam 😂. Penjelasannya gampang dimengerti banget. Aku jadi lebih tenang soal persiapan trimester kedua. Makasih ya kak ❤️",
    isWhatsAppTheme: true,
    imageSrc: whatsappTestimonialAni
  },
  {
    name: "Sarah Pricillia",
    pregnancyAge: "Persiapan Persalinan",
    trimester: "Trimester 3",
    job: "Wiraswasta",
    location: "Jakarta",
    avatarColor: "bg-pink-100 text-pink-600",
    rating: 5,
    date: "Hari Ini",
    review: "Masya Allah, Ebook SmartMom Guide ini bener-bener recommended! Isinya ngupas tuntas persiapan persalinan, cara ngatur napas, hingga pendampingan suami. Rasa cemas menjelang persalinan langsung berkurang drastis 🤰👶❤️ . Makasih seller!",
    isWhatsAppTheme: true,
    imageSrc: whatsappTestimonialSarah
  },
  {
    name: "Zaskia Cantika",
    pregnancyAge: "Persiapan Kehamilan",
    trimester: "Pranikah",
    job: "Karyawan Swasta",
    location: "Bandung",
    avatarColor: "bg-purple-100 text-purple-600",
    rating: 5,
    date: "Hari Ini",
    review: "Jujur aku orangnya gampang panik kalau baca info di internet. Setelah baca SmartMom Guide rasanya jauh lebih tenang. Enak karena bahasanya nggak bikin takut. Suami juga ikut baca beberapa bab 😊",
    isWhatsAppTheme: true,
    imageSrc: whatsappTestimonialZaskia
  },
  {
    name: "Cinthya Astika",
    pregnancyAge: "Hamil Anak Pertama",
    trimester: "Trimester 1",
    job: "Guru SD",
    location: "Surabaya",
    avatarColor: "bg-rose-100 text-rose-600",
    rating: 5,
    date: "Hari Ini",
    review: "Jujur terbantu banget setelah baca Ebook SmartMom Guide ini! Penjelasan seputar masa kehamilan, nutrisi bumil, sampai tips mengatasi mual sangat praktis dan gampang dipahami. Bener-bener dapet banyak ilmu baru buat bekal jadi calon ibu 🤩🔥🙌. Recommended buat bumil!",
    isWhatsAppTheme: true,
    imageSrc: whatsappTestimonialCinthya
  },
  {
    name: "Winda Simare-mare",
    pregnancyAge: "Hamil Anak Kedua",
    trimester: "Trimester 2",
    job: "Apoteker",
    location: "Yogyakarta",
    avatarColor: "bg-blue-100 text-blue-600",
    rating: 5,
    date: "Hari Ini",
    review: "Aku kira isinya cuma teori ternyata banyak tips yang langsung kepake. Bahasanya juga ringan, nggak kayak baca buku kuliah 😂",
    isWhatsAppTheme: true,
    imageSrc: whatsappTestimonialWinda
  },
  {
    name: "Arinda Sari",
    pregnancyAge: "Hamil Anak Pertama",
    trimester: "Trimester 3",
    job: "Arsitek",
    location: "Sleman",
    avatarColor: "bg-amber-100 text-amber-600",
    rating: 5,
    date: "Hari Ini",
    review: "Baru selesai baca bagian persiapan persalinan. Lumayan bikin percaya diri. Biasanya tiap malam kepikiran terus nanti lahiran gimana. Sekarang rasanya lebih siap sedikit demi sedikit.",
    isWhatsAppTheme: true,
    imageSrc: whatsappTestimonialArinda
  },
  {
    name: "Rina Fatmawati",
    pregnancyAge: "Hamil Anak Pertama",
    trimester: "Trimester 3",
    job: "Bidan Mandiri",
    location: "Semarang",
    avatarColor: "bg-indigo-100 text-indigo-600",
    rating: 5,
    date: "Hari Ini",
    review: "Kak, checklist perlengkapan melahirkannya ngebantu banget. Ternyata masih banyak yang belum aku siapin 😭 Untung belinya sekarang, jadi masih ada waktu.",
    isWhatsAppTheme: true,
    imageSrc: whatsappTestimonialRina
  },
  {
    name: "Noviana Sitanggang",
    pregnancyAge: "Persiapan Kehamilan",
    trimester: "Pranikah",
    job: "Wiraswasta",
    location: "Medan",
    avatarColor: "bg-teal-100 text-teal-600",
    rating: 5,
    date: "Hari Ini",
    review: "Walaupun aku belum hamil, ternyata banyak materi yang memang perlu dipelajari dari sekarang. Jadi nggak kaget nanti pas udah masuk masa kehamilan. Worth it banget menurutku.👩‍🦰🍼✨ . Recommended buat bumil!",
    isWhatsAppTheme: true,
    imageSrc: whatsappTestimonialNoviana
  }
];

export default function ReviewSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
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
                {t.imageSrc ? (
                  /* Custom card with WhatsApp capture proof (high trust & conversion value) */
                  <div className="bg-emerald-50/40 rounded-[32px] border border-emerald-100 shadow-xs p-5 md:p-8 flex-1 flex flex-col md:flex-row gap-6 items-center justify-between relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white px-3 py-1 rounded-bl-2xl text-[10px] font-black uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 fill-white text-emerald-500" />
                      Chat WA Asli
                    </div>

                    <div className="flex-1 space-y-4 text-left w-full">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${t.avatarColor}`}>
                          {t.name[0]}
                        </div>
                        <div>
                          <h4 className="font-bold text-charcoal text-sm flex items-center gap-1">
                            {t.name}
                            <CheckCircle className="w-3.5 h-3.5 fill-emerald-500 text-white shrink-0" />
                          </h4>
                          <p className="text-[10px] text-[#075E54] font-bold">{t.pregnancyAge} • {t.trimester}</p>
                        </div>
                      </div>

                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      <p className="italic text-charcoal text-sm leading-relaxed font-medium">
                        "{t.review}"
                      </p>

                      <div className="text-[10px] text-stone-500 font-bold">
                        {t.date} • {t.location} • Terverifikasi ✔✔
                      </div>
                    </div>

                    {/* Screenshot side container */}
                    <div 
                      onClick={() => setLightboxImg(t.imageSrc || null)}
                      className="w-full max-w-[240px] md:max-w-[200px] aspect-[3/4] md:aspect-[2/3] rounded-2xl overflow-hidden shadow-xs border border-emerald-100 bg-white shrink-0 group/img relative cursor-zoom-in hover:shadow-sm transition-shadow"
                    >
                      <img 
                        src={t.imageSrc} 
                        alt={`Testimoni WhatsApp ${t.name}`}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <span className="bg-white/95 text-charcoal text-[10px] font-black px-2.5 py-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                          🔍 Perbesar Chat
                        </span>
                      </div>
                    </div>
                  </div>
                ) : t.isWhatsAppTheme ? (
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
                            <p className="text-[10px] text-[#075E54] font-bold">{t.pregnancyAge} • {t.trimester} • {t.job}</p>
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
                            <p className="text-[10px] text-warm-pink-dark font-bold">{t.pregnancyAge} • {t.trimester} • {t.job}</p>
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

      {/* Testimonial Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-xs transition-opacity duration-300 cursor-zoom-out"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-full max-h-[90vh] md:max-h-[95vh] flex flex-col justify-center animate-scale-in">
            <button 
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white w-9 h-9 rounded-full flex items-center justify-center text-lg transition-all"
            >
              ✕
            </button>
            <img 
              src={lightboxImg} 
              alt="Testimoni WhatsApp Detil" 
              className="rounded-2xl max-w-full max-h-[80vh] md:max-h-[85vh] object-contain shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
            />
            <p className="text-center text-white/80 text-xs font-bold mt-4">
              Klik di mana saja untuk menutup kembali
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
