import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  Sparkles, 
  Check, 
  Clock, 
  BookOpen, 
  ShieldCheck, 
  Flame, 
  ArrowRight, 
  HelpCircle, 
  Users, 
  Smile, 
  Smartphone,
  Star,
  CheckCircle,
  FolderLock,
  ShoppingBag,
  MousePointerClick
} from "lucide-react";

import FAQAccordion from "./components/FAQAccordion";
import CheckoutModal from "./components/CheckoutModal";
import ReviewSection from "./components/ReviewSection";
import WhatsAppWidget from "./components/WhatsAppWidget";
import ImageSlider from "./components/ImageSlider";
import FormatShowcase from "./components/FormatShowcase";
import CountdownTimer from "./components/CountdownTimer";
import SocialProofPopup from "./components/SocialProofPopup";

import EmotionalHero from "./components/EmotionalHero";
import EmpathySections from "./components/EmpathySections";
import TimelineSection from "./components/TimelineSection";
import EmotionalBenefits from "./components/EmotionalBenefits";
import ComparisonSection from "./components/ComparisonSection";
import DaddySection from "./components/DaddySection";

// Import images to ensure Vite processes and bundles them safely for production build
// @ts-ignore
import heroMomBaby from "./assets/images/hero_mom_baby_1783161548976.jpg";
// @ts-ignore
import pregnantMotherNightPhone from "./assets/images/pregnant_mother_night_phone_1784484835999.jpg";
// @ts-ignore
import cinematicPregnantMother from "./assets/images/cinematic_pregnant_mother_1784542495911.jpg";
// @ts-ignore
import cinematicPregnantMotherNightDetail from "./assets/images/cinematic_pregnant_mother_glow_1784544326247.jpg";
// @ts-ignore
import ebookMockup from "./assets/images/ebook_mockup_1783161563504.jpg";
// @ts-ignore
import printablesStack from "./assets/images/printables_stack_1783161576960.jpg";
// @ts-ignore
import smartMomLogo from "./assets/images/smart_mom_logo_1783435191127.jpg";
// @ts-ignore
import bathBabyPage from "./assets/images/bath_baby_book_page_1783438087545.jpg";
// @ts-ignore
import pregnancyTrackerPage from "./assets/images/pregnancy_tracker_page_1783437413528.jpg";
// @ts-ignore
import fingerGymCard from "./assets/images/finger_gym_card_1783437430982.jpg";
// @ts-ignore
import animalColoringPage from "./assets/images/animal_coloring_page_1783437448142.jpg";
// @ts-ignore
import morningSicknessPage from "./assets/images/morning_sickness_infographic_new_1784556138171.jpg";
// @ts-ignore
import birthChecklistPage from "./assets/images/birth_checklist_page_1784542541682.jpg";
// @ts-ignore
import breastfeedingPage from "./assets/images/breastfeeding_page_1784542559718.jpg";
// @ts-ignore
import babyCryingPage from "./assets/images/baby_crying_page_1784542575909.jpg";

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  // Monitor viewport size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Monitor scroll for mobile sticky-bottom CTA
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCheckout = () => {
    window.open("http://lynk.id/parentingacademyid/pK3xExj/checkout", "_blank", "noopener,noreferrer");
  };

  const scrollToPriceCard = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("promo-price-card");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToSolusi = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("solusi");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-cream-light font-sans text-charcoal selection:bg-warm-pink-accent selection:text-charcoal flex flex-col overflow-x-clip">
      
      {/* Hero Header Logo */}
      <header className="sticky top-0 z-30 w-full bg-cream-light/90 backdrop-blur-md border-b border-cream-dark/30 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <img 
              src={smartMomLogo} 
              alt="Smart Mom Guide Logo" 
              className="w-11 h-11 rounded-full object-cover shadow-sm border border-warm-pink-accent/40"
              referrerPolicy="no-referrer"
            />
            <span className="font-extrabold text-2xl md:text-2.5xl tracking-tight text-charcoal">
              SmartMom<span className="text-warm-pink-dark">Guide</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-charcoal-light">
            <a href="#masalah" className="hover:text-warm-pink-dark transition-colors">Masalah</a>
            <a href="#solusi" className="hover:text-warm-pink-dark transition-colors">Solusi</a>
            <a href="#fitur" className="hover:text-warm-pink-dark transition-colors">Fitur</a>
            <a href="#bonus" className="hover:text-warm-pink-dark transition-colors">Bonus</a>
            <a href="#faq" className="hover:text-warm-pink-dark transition-colors">FAQ</a>
          </div>
          <a 
            href="#promo-price-card"
            onClick={scrollToPriceCard}
            className="bg-soft-teal hover:bg-soft-teal-dark active:scale-95 text-white font-extrabold p-2.5 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 animate-pulse"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden md:inline">Mulai Sekarang</span>
          </a>
        </div>
      </header>

      {/* 2. EMOTIONAL HERO SECTION */}
      <EmotionalHero 
        pregnantMotherNightPhone={cinematicPregnantMotherNightDetail}
        smartMomLogo={smartMomLogo}
        onScrollToSolusi={scrollToSolusi}
        onScrollToPriceCard={scrollToPriceCard}
      />

      {/* 3. EMOTIONAL EMPATHY SECTIONS */}
      <EmpathySections />

      {/* 3.5. COMPARISON SECTION (Why SmartMom Guide is Different) */}
      <ComparisonSection />

      {/* 4. TESTIMONI LEBIH AWAL (Build trust instantly!) */}
      <section className="py-16 bg-cream-light/40 border-b border-cream-dark">
        <div className="w-full max-w-4xl mx-auto px-6 space-y-8 text-center">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-warm-pink-dark">RASA ADEM & TENANG</span>
            <h3 className="text-2.5xl md:text-3xl font-black text-charcoal">
              Kata Mommy yang Telah Menemukan Ketenangan
            </h3>
            <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
          </div>

          <div className="bg-white p-6 md:p-10 rounded-[32px] border border-cream-dark max-w-2xl mx-auto shadow-sm space-y-4 text-left relative">
            <span className="absolute -top-5 left-8 text-6xl text-warm-pink/20 font-serif">“</span>
            <p className="text-sm md:text-base text-charcoal-light font-bold italic leading-relaxed relative z-10">
              "Dulu saya hampir setiap malam menangis karena takut menghadapi persalinan. Setelah membaca SmartMom Guide saya jadi jauh lebih tenang karena tahu apa yang harus saya lakukan setiap tahap."
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-full bg-warm-pink-light flex items-center justify-center font-bold text-xs text-warm-pink-dark">
                MA
              </div>
              <div>
                <p className="text-xs font-extrabold text-charcoal">Mommy Arina</p>
                <p className="text-[10px] text-charcoal-light font-bold">Jakarta • Calon Ibu (Hamil Anak Pertama)</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <ReviewSection />
          </div>
        </div>
      </section>

      {/* 5. INTRODUKSI SMARTMOM GUIDE (Karena Itulah SmartMom Guide Dibuat) */}
      <section id="solusi" className="py-16 md:py-24 bg-white border-b border-cream-dark">
        <div className="w-full max-w-3xl mx-auto px-6 flex flex-col gap-10">
          
          <div className="space-y-6 text-center flex flex-col items-center">
            <div className="space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-warm-pink-dark">
                TEMAN PERJALANAN SETIA MOMMY
              </span>
              <h2 className="text-3xl md:text-4.5xl font-black text-charcoal leading-tight">
                Karena Itulah SmartMom Guide Dibuat.
              </h2>
              <p className="text-base md:text-lg font-bold text-soft-teal-dark max-w-xl mx-auto">
                Bukan untuk menuntut Mommy menjadi ibu yang sempurna. Tetapi membantu Mommy merasa lebih tenang & percaya diri setiap kali muncul pertanyaan di kepala.
              </p>
            </div>

            <p className="text-sm md:text-base text-charcoal-light leading-relaxed max-w-xl mx-auto text-center font-medium">
              SmartMom Guide adalah satu panduan utuh, satu pegangan hangat, dan satu tempat kembali yang terpercaya ketika Mommy merasa bingung menjalani setiap fase luar biasa ini.
            </p>

            <div className="border-l-4 border-l-warm-pink pl-4 py-1 italic text-xs md:text-sm text-charcoal-light font-medium bg-cream-light/40 rounded-r-xl max-w-md mx-auto">
              "Dibaca dengan nyaman lewat HP Mommy kapan saja, bahkan saat Mommy sedang beristirahat atau menyusui si kecil."
            </div>

            <a
              href="#promo-price-card"
              onClick={scrollToPriceCard}
              className="w-full sm:w-auto bg-[#ffc300] hover:bg-[#e0ac00] text-charcoal font-black text-base md:text-lg px-8 py-4.5 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              Aku Ingin Lebih Tenang 🌸
            </a>
          </div>
        </div>
      </section>

      {/* 6. TIMELINE SECTION */}
      <TimelineSection />

      {/* TIMELINE SECTION CTA */}
      <div className="py-6 flex justify-center bg-white border-b border-cream-dark">
        <a 
          href="#preview-ebook"
          className="w-full max-w-xs sm:w-auto bg-[#ffc300] hover:bg-[#e0ac00] text-charcoal font-black text-base px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
        >
          Lihat Materinya 📖
        </a>
      </div>

      {/* 7. PREVIEW EBOOK SECTION (Pain-Oriented Previews) */}
      <section id="preview-ebook" className="py-16 md:py-24 bg-cream-light/35 border-b border-cream-dark">
        <div className="w-full max-w-4xl mx-auto px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-warm-pink-dark">INTIP ISI MATERI</span>
            <h2 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight">
              Menjawab Ketakutan Terbesar Mommy Secara Nyata
            </h2>
            <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
            <p className="text-xs md:text-sm text-charcoal-light font-bold">
              Kami mendesain setiap lembar materi untuk langsung menjawab ketakutan & keraguan Mommy, bukan sekadar teori tebal!
            </p>
          </div>

          {/* MATERI AWAL DI BAGIAN ATAS (Interactive Slideshow) */}
          <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-[32px] border border-cream-dark shadow-sm space-y-6">
            <div className="text-center space-y-1">
              <span className="text-[10px] font-black text-soft-teal-dark bg-soft-teal-light/40 px-3 py-1 rounded-full uppercase tracking-wider">
                Materi Awal & Modul Utama
              </span>
              <h3 className="text-lg md:text-xl font-black text-charcoal">
                10 Modul Lengkap & Stimulasi Tumbuh Kembang
              </h3>
              <p className="text-xs text-charcoal-light font-medium max-w-lg mx-auto">
                Geser slide di bawah untuk melihat rangkuman materi persiapan dari awal kehamilan hingga merawat bayi:
              </p>
            </div>
            <ImageSlider />
          </div>

          <div className="text-center space-y-1 pt-6 border-t border-dashed border-stone-200">
            <span className="text-[10px] font-black text-warm-pink-dark bg-warm-pink-light/30 px-3 py-1 rounded-full uppercase tracking-wider">
              Lembar Panduan Detil
            </span>
            <h3 className="text-lg md:text-xl font-black text-charcoal">
              Klik Lembar di Bawah Untuk Memperbesar & Membaca
            </h3>
            <p className="text-xs text-charcoal-light font-bold">
              Setiap lembar panduan didesain dengan format infografis yang indah, ringkas, dan mudah dipraktikkan langsung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            
            {/* Card 1: Panduan Mengatasi Morning Sickness */}
            <div 
              onClick={() => setActiveLightboxImage(morningSicknessPage)}
              className="bg-white p-5 rounded-[28px] border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-all duration-300 cursor-zoom-in group hover:scale-[1.01]"
            >
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-cream-light border border-cream-dark">
                <img 
                  src={morningSicknessPage} 
                  alt="Panduan Mengatasi Morning Sickness" 
                  className="w-full h-full object-contain bg-white group-hover:scale-[1.03] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-warm-pink-dark text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                  Mual & Nutrisi
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <span>🔍 Klik untuk Zoom</span>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-base text-charcoal tracking-tight group-hover:text-warm-pink-dark transition-colors">Panduan Mengatasi Morning Sickness</h4>
                <p className="text-xs text-charcoal-light leading-normal">
                  <strong>Untuk Mommy yang mulai kehilangan nafsu makan.</strong> Strategi cerdas meredakan mual ekstrem tanpa mengurangi asupan gizi penting janin.
                </p>
              </div>
            </div>

            {/* Card 2: Checklist Persalinan */}
            <div 
              onClick={() => setActiveLightboxImage(birthChecklistPage)}
              className="bg-white p-5 rounded-[28px] border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-all duration-300 cursor-zoom-in group hover:scale-[1.01]"
            >
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-cream-light border border-cream-dark">
                <img 
                  src={birthChecklistPage} 
                  alt="Checklist Persalinan Anti-Panik" 
                  className="w-full h-full object-contain bg-white group-hover:scale-[1.03] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-soft-teal-dark text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                  Persiapan H-Day
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <span>🔍 Klik untuk Zoom</span>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-base text-charcoal tracking-tight group-hover:text-soft-teal-dark transition-colors">Checklist Persalinan Anti-Panik</h4>
                <p className="text-xs text-charcoal-light leading-normal">
                  <strong>Supaya Mommy tidak panik menjelang hari H.</strong> Daftar perlengkapan krusial, dokumen penting, dan bekal mental agar persalinan berjalan tenang & terencana.
                </p>
              </div>
            </div>

            {/* Card 3: Panduan Menyusui */}
            <div 
              onClick={() => setActiveLightboxImage(breastfeedingPage)}
              className="bg-white p-5 rounded-[28px] border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-all duration-300 cursor-zoom-in group hover:scale-[1.01]"
            >
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-cream-light border border-cream-dark">
                <img 
                  src={breastfeedingPage} 
                  alt="Panduan Menyusui Sukses" 
                  className="w-full h-full object-contain bg-white group-hover:scale-[1.03] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                  ASI & Menyusui
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <span>🔍 Klik untuk Zoom</span>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-base text-charcoal tracking-tight group-hover:text-amber-600 transition-colors">Panduan Menyusui Lancar</h4>
                <p className="text-xs text-charcoal-light leading-normal">
                  <strong>Untuk Mommy yang takut ASI tidak lancar.</strong> Langkah pelekatan sempurna (latch-on), melancarkan produksi kolostrum, dan mengatasi nyeri menyusui di minggu pertama.
                </p>
              </div>
            </div>

            {/* Card 4: Panduan Bayi Menangis / Rewel */}
            <div 
              onClick={() => setActiveLightboxImage(babyCryingPage)}
              className="bg-white p-5 rounded-[28px] border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-all duration-300 cursor-zoom-in group hover:scale-[1.01]"
            >
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-cream-light border border-cream-dark">
                <img 
                  src={babyCryingPage} 
                  alt="Panduan Bayi Menangis" 
                  className="w-full h-full object-contain bg-white group-hover:scale-[1.03] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                  Menenangkan Si Kecil
                </div>
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-xs text-white text-[9px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <span>🔍 Klik untuk Zoom</span>
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-base text-charcoal tracking-tight group-hover:text-indigo-600 transition-colors">Panduan Bayi Menangis / Rewel</h4>
                <p className="text-xs text-charcoal-light leading-normal">
                  <strong>Agar Mommy tidak panik saat bayi rewel.</strong> Cara membaca isyarat tangis bayi secara ilmiah, mengatasi kembung/kolik, dan menidurkan bayi dengan lembut.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. EMOTIONAL BENEFITS SECTION */}
      <EmotionalBenefits />

      {/* FORMAT SHOWCASE SECTION */}
      <section id="format-akses" className="py-16 md:py-24 bg-cream-light/30 border-b border-cream-dark">
        <div className="w-full max-w-7xl mx-auto px-6">
          <FormatShowcase />
        </div>
      </section>

      {/* 9. OFFER & BONUS SECTION */}
      <section id="bonus" className="py-16 md:py-24 bg-white border-y border-cream-dark">
        <div className="w-full max-w-3xl mx-auto px-6">
          
          <div className="space-y-12">
            {/* Main Section Header */}
            <div className="text-center space-y-3">
              <span className="inline-block bg-warm-pink text-white text-[10px] font-extrabold uppercase px-3.5 py-1.5 rounded-full shadow-sm tracking-widest">
                📦 SOLUSI UTAMA & MATERI PENDAMPING 📦
              </span>
              <h2 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight">
                Semua Panduan Utama & Aset Penguat Ini Siap Mommy Miliki Hari Ini!
              </h2>
              <p className="text-xs md:text-sm text-charcoal-light font-bold max-w-xl mx-auto">
                Bukan cuma satu ebook biasa, kami mendesain satu paket pendampingan premium agar Mommy memiliki pegangan utuh yang siap sedia di saku.
              </p>
            </div>

            {/* PRODUCT SEGREGATION: 70% MAIN STAR, 30% SUPPORTING BONUSES */}
            <div className="space-y-8">
              
              {/* --- THE MAIN STAR (70% WEIGHT) --- */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-warm-pink-dark uppercase tracking-widest">A. PANDUAN UTAMA (70% Fokus Nilai)</span>
                  <div className="flex-1 h-px bg-warm-pink/20" />
                </div>
                
                <div className="bg-gradient-to-br from-white to-warm-pink-light/20 rounded-[36px] border-3 border-warm-pink p-6 md:p-10 shadow-lg relative overflow-hidden flex flex-col gap-6 text-left">
                  <div className="absolute top-0 right-0 bg-warm-pink text-white font-black text-[10px] px-5 py-2 rounded-bl-3xl uppercase tracking-wider">
                    REKOMENDASI UTAMA
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-warm-pink text-white flex items-center justify-center text-3xl shadow-sm">
                      📙
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase text-warm-pink-dark tracking-widest leading-none">MODUL UTAMA #1</span>
                      <h3 className="font-black text-xl md:text-2xl text-charcoal leading-tight">
                        Ebook SmartMom Guide Premium PDF
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm text-charcoal-light leading-relaxed font-medium">
                    Ini adalah mahakarya panduan praktis setebal ratusan halaman yang menemani seluruh babak perjalanan Mommy—dari garis dua (trimester 1, 2, 3), menyusui lancar, penanganan bayi rewel, hingga si kecil tumbuh menjadi balita cerdas berusia 5 tahun. Tanpa bahasa medis rumit, langsung petunjuk siap pakai.
                  </p>

                  {/* Star features bundled inside the main star */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-white/90 p-4.5 rounded-2xl border border-cream-dark">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">✓</div>
                      <div>
                        <h4 className="font-extrabold text-xs text-charcoal">Web Dashboard Interaktif</h4>
                        <p className="text-[10px] text-charcoal-light">Baca cepat & hemat kuota di layar HP tanpa perlu unduh file besar.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">✓</div>
                      <div>
                        <h4 className="font-extrabold text-xs text-charcoal">3D Flipbook Premium</h4>
                        <p className="text-[10px] text-charcoal-light">Pengalaman membalik lembaran halaman indah & imersif di HP.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-cream-dark flex items-center justify-between text-xs font-bold text-charcoal-light">
                    <span>⏱️ Sekali Bayar • Akses Selamanya • Gratis Update</span>
                    <span className="text-red-500 font-extrabold">Nilai Riil: Rp497.000</span>
                  </div>
                </div>
              </div>

              {/* --- THE SUPPORTING BONUSES (30% WEIGHT) --- */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-charcoal-light uppercase tracking-widest">B. ASET PENDUKUNG (30% Tambahan Nilai)</span>
                  <div className="flex-1 h-px bg-cream-dark/40" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Bonus 1 */}
                  <div className="bg-white p-5 rounded-3xl border border-cream-dark text-left space-y-3 shadow-3xs hover:border-warm-pink/30 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">🗓️</span>
                      <h4 className="font-extrabold text-sm text-charcoal">Parenting Planner</h4>
                    </div>
                    <p className="text-xs text-charcoal-light leading-relaxed">
                      Planner cetak berisi checklist persalinan, tracker ASI, imunisasi, dan MPASI.
                    </p>
                    <span className="text-[10px] text-red-500 font-extrabold block">Nilai Riil: Rp129.000</span>
                  </div>

                  {/* Bonus 2 */}
                  <div className="bg-white p-5 rounded-3xl border border-cream-dark text-left space-y-3 shadow-3xs hover:border-warm-pink/30 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">🎈</span>
                      <h4 className="font-extrabold text-sm text-charcoal">60k+ Kids Activities</h4>
                    </div>
                    <p className="text-xs text-charcoal-light leading-relaxed">
                      Aktivitas stimulasi motorik & sensorik balita harian biar anti-gadget.
                    </p>
                    <span className="text-[10px] text-red-500 font-extrabold block">Nilai Riil: Rp399.000</span>
                  </div>

                  {/* Bonus 3 */}
                  <div className="bg-white p-5 rounded-3xl border border-cream-dark text-left space-y-3 shadow-3xs hover:border-warm-pink/30 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">🎓</span>
                      <h4 className="font-extrabold text-sm text-charcoal">39k+ Printable Edukasi</h4>
                    </div>
                    <p className="text-xs text-charcoal-light leading-relaxed">
                      Kumpulan flashcard tebal, angka, huruf, dan puzzle siap cetak sepuasnya.
                    </p>
                    <span className="text-[10px] text-red-500 font-extrabold block">Nilai Riil: Rp299.000</span>
                  </div>

                  {/* Bonus 4 */}
                  <div className="bg-white p-5 rounded-3xl border border-cream-dark text-left space-y-3 shadow-3xs hover:border-warm-pink/30 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">🧠</span>
                      <h4 className="font-extrabold text-sm text-charcoal">Brain & Finger Gym</h4>
                    </div>
                    <p className="text-xs text-charcoal-light leading-relaxed">
                      Latihan senam jari stimulasi fokus anak dari kurikulum India-Finlandia.
                    </p>
                    <span className="text-[10px] text-red-500 font-extrabold block">Nilai Riil: Rp199.000</span>
                  </div>

                  {/* Bonus 5 */}
                  <div className="bg-white p-5 rounded-3xl border border-cream-dark text-left space-y-3 shadow-3xs hover:border-warm-pink/30 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">✏️</span>
                      <h4 className="font-extrabold text-sm text-charcoal">300+ Mewarnai Anak</h4>
                    </div>
                    <p className="text-xs text-charcoal-light leading-relaxed">
                      Ratusan lembar sketsa dinosaurus & hewan lucu pereda bosan si kecil.
                    </p>
                    <span className="text-[10px] text-red-500 font-extrabold block">Nilai Riil: Rp99.000</span>
                  </div>

                  {/* Bonus 6 */}
                  <div className="bg-white p-5 rounded-3xl border border-cream-dark text-left space-y-3 shadow-3xs hover:border-warm-pink/30 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl">💰</span>
                      <h4 className="font-extrabold text-sm text-charcoal">Budget Planner Lahiran</h4>
                    </div>
                    <p className="text-xs text-charcoal-light leading-relaxed">
                      Spreadsheet Excel kalkulator kalkulasi biaya persiapan persalinan & menyusui.
                    </p>
                    <span className="text-[10px] text-red-500 font-extrabold block">Nilai Riil: Rp99.000</span>
                  </div>

                </div>
              </div>

            </div>

            {/* VALUE ANCHORING & PRICE TAG CARD */}
            <div id="promo-price-card" className="bg-[#fff9e6] p-8 md:p-12 rounded-[36px] border-4 border-[#ffc300] text-center space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute -top-12 -left-12 w-28 h-28 bg-[#ffc300]/25 rounded-full blur-2xl" />
              <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-[#ffc300]/25 rounded-full blur-2xl" />

              <div className="space-y-1">
                <p className="text-xs font-black uppercase tracking-widest text-[#cc9c00]">
                  🔥 VALUE ANCHORING • HARGA PROMO 🔥
                </p>
                <h3 className="text-2.5xl md:text-4xl font-black text-charcoal">
                  Berapa Nilai Ketenangan Seorang Ibu?
                </h3>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-cream-dark text-left space-y-3 max-w-xl mx-auto text-xs md:text-sm">
                <p className="text-xs text-charcoal-light font-bold mb-2 pb-2 border-b border-dashed border-stone-200">
                  Investasi ini bukan hanya membeli ebook biasa, tetapi memberikan rasa tenang & langkah siap sedia sepanjang perjalanan menjadi orang tua.
                </p>
                <div className="flex justify-between items-center text-stone-500 font-semibold">
                  <span>📙 Ebook SmartMom Guide PDF + Web Access</span>
                  <span>Rp 497.000</span>
                </div>
                <div className="flex justify-between items-center text-stone-500 font-semibold">
                  <span>🎁 Paket 6 Mega Bonus Aset Cetak & Stimulasi</span>
                  <span>Rp 1.125.000</span>
                </div>
                <div className="flex justify-between items-center text-charcoal font-black text-sm md:text-base pt-2 border-t border-dashed border-stone-200">
                  <span>TOTAL NILAI SEBENARNYA:</span>
                  <span className="line-through text-red-500 font-extrabold">Rp 1.622.000</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm md:text-base text-warm-pink-dark font-extrabold max-w-lg mx-auto leading-relaxed italic border-t border-dashed border-stone-200/60 pt-4">
                  "Bayangkan jika semua rasa cemas yang Mommy rasakan hari ini bisa digantikan dengan satu panduan yang selalu siap dibuka kapan saja."
                </p>
                <p className="text-xs md:text-sm text-charcoal-light font-bold max-w-lg mx-auto">
                  Tentu Mommy tidak perlu membayar jutaan rupiah. Hanya dengan kontribusi sekali seumur hidup yang super hemat, amankan semua aksesnya sekarang:
                </p>

                <CountdownTimer />

                <div className="flex items-center justify-center gap-3 pt-2">
                  <span className="text-stone-400 line-through text-xl font-bold">
                    Rp 199.000
                  </span>
                  <span className="bg-red-100 text-red-600 font-black text-[10px] md:text-xs px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
                    HEMAT PROMO BULAN INI
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-5xl md:text-6xl font-black text-soft-teal-dark tracking-tight">
                    Rp79.000
                  </p>
                  <p className="text-xs font-extrabold text-charcoal-light uppercase tracking-wide">
                    🎁 SEKALI BAYAR • AKSES SELAMANYA • GRATIS UPDATE
                  </p>
                </div>
              </div>

              {/* Bold Checkout Button */}
              <div className="pt-2 text-center space-y-4 max-w-xl mx-auto">
                <a
                  href="http://lynk.id/parentingacademyid/pK3xExj/checkout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#ffc300] hover:bg-[#e0ac00] active:scale-[0.98] text-charcoal font-black text-sm md:text-base py-5 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2 border-b-4 border-[#cc9c00] animate-bounce text-center"
                >
                  <span>Ambil Akses Sekarang 🌸</span>
                </a>
                
                <p className="text-[11px] text-[#cc9c00] font-black italic max-w-md mx-auto leading-normal">
                  *Gunakan kode kupon <span className="bg-yellow-200 px-1.5 py-0.5 text-charcoal rounded-md font-black not-italic">"IBU CERDAS"</span> di halaman checkout untuk memotong harga menjadi ± Rp50.500 (kurang lebih Rp49.000) saja!
                </p>

                <div className="pt-3 border-t border-cream-dark/60 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-bold text-charcoal-light">
                  <span className="flex items-center gap-1.5">🛡️ 100% Pembelian Aman</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center gap-1.5">📧 Pengiriman Instan via Email</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 9.5. DADDY SECTION (For Husband/Daddy) */}
      <DaddySection onScrollToPriceCard={scrollToPriceCard} />

      {/* 10. FAQ SECTION */}
      <section id="faq" className="py-16 md:py-24 bg-cream-light">
        <div className="w-full max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <p className="text-xs md:text-sm text-charcoal-light font-bold uppercase tracking-widest">
              Kami siap meluruskan segala pertanyaan mengganjal di hati Mommy
            </p>
            <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
          </div>

          <FAQAccordion />

        </div>
      </section>

      {/* 11. FINAL EMOTIONAL CTA SECTION (Priority 12) */}
      <section className="py-16 md:py-24 bg-warm-pink-light/35 border-t border-cream-dark">
        <div className="w-full max-w-4xl mx-auto px-6 text-center space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-2xl">❤️</span>
            <h2 className="text-3xl md:text-4.5xl font-black text-charcoal tracking-tight leading-tight max-w-3xl mx-auto">
              Suatu Hari...
            </h2>
            <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
          </div>

          <p className="text-sm md:text-base text-charcoal-light leading-relaxed max-w-2xl mx-auto font-bold text-center">
            Bayi Mommy mungkin tidak akan mengingat mainan pertama yang Mommy beli. Tetapi ia akan tumbuh bersama seorang ibu yang lebih tenang, lebih percaya diri, dan lebih siap mendampinginya. Semua perjalanan luar biasa itu dimulai dari satu keputusan kecil hari ini.
          </p>

          <div className="space-y-4">
            <a
              href="#promo-price-card"
              onClick={scrollToPriceCard}
              className="w-full sm:w-auto bg-soft-teal hover:bg-soft-teal-dark active:scale-[0.98] text-white font-extrabold text-base md:text-lg px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto group text-center"
            >
              Ya, Saya Ingin Menjadi Ibu yang Lebih Siap 🌸
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform animate-pulse" />
            </a>
            <p className="text-xs text-charcoal-light font-semibold">
              SmartMom Guide akan menemani perjalanan Mommy, dari garis dua hingga si kecil tumbuh menjadi anak yang sehat dan bahagia.
            </p>
          </div>

        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="bg-charcoal text-stone-300 py-12 border-t border-stone-800">
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2.5">
            <img 
              src={smartMomLogo} 
              alt="Smart Mom Guide Logo" 
              className="w-9 h-9 rounded-full object-cover shadow-sm border border-warm-pink-accent/40"
              referrerPolicy="no-referrer"
            />
            <span className="font-extrabold text-lg text-white tracking-tight">
              SmartMom<span className="text-warm-pink">Guide</span>
            </span>
          </div>

          <p className="text-xs text-stone-400 text-center md:text-right font-medium">
            © 2026 SmartMomGuide. All rights reserved. Semua hak cipta dilindungi undang-undang.
          </p>

        </div>
      </footer>

      {/* 13. STICKY-BOTTOM CTA FOR MOBILE VIEWPORTS */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
            className="fixed bottom-0 left-0 right-0 z-35 bg-white/95 backdrop-blur-md px-5 py-3.5 border-t border-cream-dark shadow-2xl md:hidden flex items-center justify-between gap-4 font-sans"
          >
            <div>
              <p className="text-[10px] font-black text-warm-pink-dark uppercase tracking-widest leading-none mb-1">PROMO TERBATAS</p>
              <div className="flex items-baseline gap-1">
                <span className="text-base font-black text-charcoal">Rp79.000</span>
                <span className="text-[9px] line-through text-stone-400">199rb</span>
              </div>
            </div>
            <a
              href="http://lynk.id/parentingacademyid/pK3xExj/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-soft-teal hover:bg-soft-teal-dark active:scale-95 text-white font-extrabold text-xs px-4 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer text-center"
            >
              <span>Dapatkan Akses 🌸</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 14. FLOATING WHATSAPP WIDGET */}
      <WhatsAppWidget />

      {/* 15. CHECKOUT MODAL WINDOW */}
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />

      {/* 16. SOCIAL PROOF LIVE BUYER NOTIFICATIONS */}
      <SocialProofPopup />

      {/* 17. LIGHTBOX MODAL FOR DETAILED MATERI */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-6 cursor-zoom-out"
          >
            <button 
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 hover:scale-105 active:scale-95 text-white rounded-full p-3 transition-all cursor-pointer z-51 shadow-lg"
              aria-label="Tutup"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-full max-h-[85vh] md:max-h-[90vh] flex flex-col items-center justify-center cursor-default bg-white/5 p-1.5 rounded-3xl border border-white/10 shadow-2xl"
            >
              <img 
                src={activeLightboxImage} 
                alt="Detail lembar panduan SmartMom" 
                className="max-w-full max-h-[80vh] md:max-h-[85vh] rounded-2xl object-contain shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <p className="text-white/85 text-[11px] font-extrabold mt-3.5 tracking-wide flex items-center gap-1.5 bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-xs select-none">
                <span>🔍 Sentuh layar / cubit untuk memperbesar detail panduan</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
