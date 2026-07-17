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

// Import images to ensure Vite processes and bundles them safely for production build
// @ts-ignore
import heroMomBaby from "./assets/images/hero_mom_baby_1783161548976.jpg";
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

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div className="min-h-screen bg-cream-light font-sans text-charcoal selection:bg-warm-pink-accent selection:text-charcoal flex flex-col overflow-x-clip">
      
      {/* 1. TOP HOOK BAR */}
      <div className="w-full bg-amber-500 text-charcoal-dark py-2 px-4 text-center font-black text-xs md:text-sm shadow-md flex items-center justify-center gap-2 tracking-wide">
        <Flame className="w-4 h-4 animate-bounce text-red-600 flex-shrink-0" />
        <span>⚠️ PERHATIAN: Buka Halaman Ini Hanya Jika Mommy Ingin Mengasuh Si Kecil Bebas Cemas & Panik!</span>
      </div>

      {/* Hero Header Logo */}
      <header className="sticky top-0 z-30 w-full bg-cream-light/90 backdrop-blur-md border-b border-cream-dark/30 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <img 
              src={smartMomLogo} 
              alt="Smart Mom Guide Logo" 
              className="w-10 h-10 rounded-full object-cover shadow-sm border border-warm-pink-accent/40"
              referrerPolicy="no-referrer"
            />
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-charcoal">
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

      {/* 2. HERO SECTION */}
      <section className="relative w-full max-w-3xl mx-auto px-6 pt-10 pb-16 md:py-20 flex flex-col items-center gap-10 text-center">
        <div className="space-y-6 flex flex-col items-center">
          {/* Pre-headline (The Hook) */}
          <div className="inline-flex items-center gap-1.5 bg-red-100 border border-red-200 text-red-600 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            PENAWARAN TERBAIK IBU BARU & BUNDA CERDAS INDONESIA 🇮🇩
          </div>

          {/* Core USP Headline (Levidio-Style Copywriting) */}
          <h1 className="text-3.5xl md:text-5xl lg:text-6xl font-black text-charcoal leading-tight tracking-tight text-center">
            Kini Mommy Bisa <span className="bg-yellow-200 px-1 text-charcoal rounded-sm">Bebas Panik & Bingung</span> Saat Merawat Si Kecil Tanpa Perlu Begadang Terus-Menerus!
          </h1>

          {/* Sub-headline */}
          <p className="text-base md:text-xl text-charcoal-light font-extrabold leading-relaxed max-w-2xl mx-auto">
            Satu-satunya <span className="text-warm-pink-dark border-b-2 border-warm-pink">Panduan Digital Terlengkap & Praktis</span> untuk menemani langkah Mommy dari masa Kehamilan (Trimester 1, 2, 3), Persiapan Lahiran, Menyusui, hingga Anak Usia 5 Tahun!
          </p>
        </div>

        {/* Hero Visual (Placed prominently in the single column) */}
        <div className="relative flex justify-center w-full max-w-md">
          {/* Soft decorative background glow */}
          <div className="absolute -inset-4 bg-warm-pink-accent/20 rounded-full blur-3xl" />
          
          <div className="relative bg-white p-4 rounded-[32px] shadow-2xl border border-cream-dark overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src={heroMomBaby}
              alt="Ibu hamil dan bayi bahagia tenang"
              className="w-full h-auto rounded-[24px] object-cover"
              referrerPolicy="no-referrer"
            />
            
            {/* Cute Floating Review Badge */}
            <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-xs p-3.5 rounded-2xl shadow-lg border border-cream border-l-4 border-l-warm-pink flex items-center gap-2.5 max-w-xs text-left">
              <div className="w-8 h-8 rounded-full bg-warm-pink-light flex items-center justify-center font-bold text-xs text-warm-pink-dark flex-shrink-0">
                M
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[10px] font-extrabold text-charcoal">"Hati adem & gak panik lagi"</p>
                <p className="text-[8px] text-charcoal-light font-medium">Mommy Arina - Jakarta</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 flex flex-col items-center w-full">
          {/* Bullet Points with Strong USP Verbs */}
          <ul className="space-y-4 pt-2 text-left max-w-xl w-full">
            <li className="flex items-start gap-3.5 bg-white p-4.5 rounded-2xl border border-cream-dark shadow-2xs hover:border-warm-pink/40 transition-colors">
              <div className="bg-warm-pink-accent/45 p-1.5 rounded-full text-warm-pink-dark flex-shrink-0">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <p className="font-extrabold text-charcoal text-sm md:text-base">100% Praktis & No-Boring-Theory</p>
                <p className="text-xs md:text-sm text-charcoal-light">Bukan teori bertele-tele! Langsung ke panduan siap pakai, checklist, dan solusi instan untuk setiap babak tumbuh kembang anak.</p>
              </div>
            </li>
            <li className="flex items-start gap-3.5 bg-white p-4.5 rounded-2xl border border-cream-dark shadow-2xs hover:border-warm-pink/40 transition-colors">
              <div className="bg-warm-pink-accent/45 p-1.5 rounded-full text-warm-pink-dark flex-shrink-0">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <p className="font-extrabold text-charcoal text-sm md:text-base">Pendampingan Penuh Cinta & Empati</p>
                <p className="text-xs md:text-sm text-charcoal-light">Ditulis dengan gaya bahasa hangat, santun, dan penuh kasih seperti dinasihati oleh sahabat karib sendiri.</p>
              </div>
            </li>
            <li className="flex items-start gap-3.5 bg-white p-4.5 rounded-2xl border border-cream-dark shadow-2xs hover:border-warm-pink/40 transition-colors">
              <div className="bg-warm-pink-accent/45 p-1.5 rounded-full text-warm-pink-dark flex-shrink-0">
                <Check className="w-4 h-4 stroke-[3]" />
              </div>
              <div>
                <p className="font-extrabold text-charcoal text-sm md:text-base">Mega Bonus Ribuan Media Edukasi</p>
                <p className="text-xs md:text-sm text-charcoal-light">Mendapatkan ribuan halaman lembar kerja anak cerdas, finger gym, coloring pages, hingga planner keuangan keluarga.</p>
              </div>
            </li>
          </ul>

          {/* CTA Box */}
          <div className="space-y-3 pt-4 w-full flex flex-col items-center">
            <a
              href="#promo-price-card"
              onClick={scrollToPriceCard}
              className="w-full sm:w-auto bg-[#ffc300] hover:bg-[#e0ac00] active:scale-[0.98] text-charcoal font-black text-base md:text-xl px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer group text-center border-b-4 border-[#cc9c00]"
            >
              YA, SAYA MAU AMBIL PROMO SMARTMOM GUIDE SEKARANG!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-xs text-charcoal-light font-semibold pl-1 text-center">
              📧 Akses langsung dikirim via email. Sekali bayar, manfaatnya terasa sampai anak usia 5 tahun!
            </p>
          </div>

          {/* Trust Strip */}
          <div className="pt-6 border-t border-cream-dark flex flex-wrap justify-center items-center gap-y-2 gap-x-4 text-[11px] md:text-xs text-charcoal-light font-bold">
            <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-cream-dark shadow-3xs">
              🔒 Pembelian Aman via Lynk.id
            </span>
            <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-cream-dark shadow-3xs">
              📱 100% Materi Digital Instan
            </span>
            <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-cream-dark shadow-3xs">
              🤰 Didisain Khusus untuk Ibu Baru
            </span>
          </div>
        </div>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section id="masalah" className="bg-white py-16 md:py-24 border-y border-cream-dark">
        <div className="w-full max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight">
              Mommy, Apakah Sering Merasakan Hal Ini?
            </h2>
            <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
          </div>

          {/* Cards Stack (1-Column) */}
          <div className="flex flex-col gap-6 max-w-xl mx-auto w-full">
            
            {/* Card 1 */}
            <div className="bg-cream-light p-6 rounded-3xl border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-2xl bg-warm-pink-light flex items-center justify-center text-lg shadow-xs">
                🥺
              </div>
              <h3 className="font-bold text-base md:text-lg text-charcoal leading-snug">
                Cemas & Takut Menghadapi Persalinan?
              </h3>
              <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                Sering overthinking memikirkan proses melahirkan nanti, membayangkan rasa sakit dan hal-hal negatif sendirian.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-cream-light p-6 rounded-3xl border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-2xl bg-warm-pink-light flex items-center justify-center text-lg shadow-xs">
                🌀
              </div>
              <h3 className="font-bold text-base md:text-lg text-charcoal leading-snug">
                Bingung Memilah Informasi?
              </h3>
              <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                Internet penuh dengan tips yang saling bertentangan. Forum sanad dan sini justru membuat Mommy makin stres dan bingung.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-cream-light p-6 rounded-3xl border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-2xl bg-warm-pink-light flex items-center justify-center text-lg shadow-xs">
                🤱
              </div>
              <h3 className="font-bold text-base md:text-lg text-charcoal leading-snug">
                Takut Salah Merawat Bayi Baru Lahir?
              </h3>
              <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                Merasa kurang percaya diri memandikan bayi, menjemur, menyusui, dan khawatir langkah yang diambil bisa membahayakan si kecil.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-cream-light p-6 rounded-3xl border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-2xl bg-warm-pink-light flex items-center justify-center text-lg shadow-xs">
                🤯
              </div>
              <h3 className="font-bold text-base md:text-lg text-charcoal leading-snug">
                Kelelahan Mental (Mental Load)?
              </h3>
              <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                Menghadapi perubahan status baru sebagai orang tua tanpa sistem dukungan mumpuni, bingung harus mulai belajar dari mana.
              </p>
            </div>

          </div>

          {/* Empathy Statement */}
          <div className="bg-warm-pink-light/40 border border-warm-pink/20 max-w-3xl mx-auto rounded-3xl p-6 md:p-8 text-center space-y-3 shadow-2xs">
            <p className="text-base md:text-lg font-bold text-warm-pink-dark italic">
              "Wajar kok kalau Mommy merasa deg-degan atau khawatir. Tenang ya Ibu, Mommy gak sendirian. Kami tahu betul apa yang Mommy rasakan."
            </p>
          </div>

        </div>
      </section>

      {/* 4. TRANSFORMATION SECTION */}
      <section className="py-16 md:py-24 bg-cream-light">
        <div className="w-full max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight">
              Perjalanan Menuju Parenting yang Tenang
            </h2>
            <p className="text-xs md:text-sm text-charcoal-light font-bold uppercase tracking-widest">
              Langkah Nyata Bersama SmartMomGuide
            </p>
            <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
          </div>

          {/* Steps Timeline Layout (1-Column) */}
          <div className="flex flex-col gap-8 max-w-xl mx-auto relative">

            {/* Column 1: Sebelum */}
            <div className="bg-white p-7 rounded-3xl border border-cream-dark shadow-xs relative flex flex-col justify-between">
              <div className="absolute -top-3.5 left-6 bg-stone-100 text-charcoal-light border border-cream-dark text-[10px] font-black uppercase px-3 py-1 rounded-full">
                Fase 1: Sebelum
              </div>
              <div className="space-y-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-xl font-bold">
                  ❌
                </div>
                <h4 className="font-extrabold text-base md:text-lg text-charcoal">Panik & Bingung</h4>
                <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                  Sering panik, cemas, dan menghabiskan waktu berjam-jam di internet hanya untuk mencari jawaban yang belum tentu benar tentang tumbuh kembang anak.
                </p>
              </div>
            </div>

            {/* Column 2: Proses */}
            <div className="bg-white p-7 rounded-3xl border-2 border-warm-pink shadow-md relative flex flex-col justify-between">
              <div className="absolute -top-3.5 left-6 bg-warm-pink text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-sm">
                Fase 2: Proses
              </div>
              <div className="space-y-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-warm-pink-light border border-warm-pink-accent/40 flex items-center justify-center text-xl font-bold">
                  📖
                </div>
                <h4 className="font-extrabold text-base md:text-lg text-charcoal">Panduan Praktis di Tangan</h4>
                <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                  Membuka SmartMomGuide di handphone, langsung menuju bab yang sedang dihadapi tanpa harus membaca ratusan lembar teori yang membosankan.
                </p>
              </div>
            </div>

            {/* Column 3: Sesudah */}
            <div className="bg-white p-7 rounded-3xl border border-cream-dark shadow-xs relative flex flex-col justify-between">
              <div className="absolute -top-3.5 left-6 bg-emerald-50 text-emerald-700 border border-emerald-100 text-[10px] font-black uppercase px-3 py-1 rounded-full">
                Fase 3: Sesudah
              </div>
              <div className="space-y-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-xl font-bold text-emerald-500">
                  💖
                </div>
                <h4 className="font-extrabold text-base md:text-lg text-charcoal">Mommy Tenang & Percaya Diri</h4>
                <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                  Menjadi ibu yang tenang, terarah, dan penuh percaya diri karena memiliki pegangan praktis yang selalu siap sedia di dalam genggaman.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. SOLUTION / MECHANISM SECTION */}
      <section id="solusi" className="py-16 md:py-24 bg-white border-y border-cream-dark">
        <div className="w-full max-w-2xl mx-auto px-6 flex flex-col gap-10">
          
          <div className="space-y-6 text-center flex flex-col items-center">
            <div className="space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-warm-pink-dark">Solusi Terlengkap</span>
              <h2 className="text-2.5xl md:text-4xl font-black text-charcoal leading-tight">
                Kenalkan: SmartMomGuide
              </h2>
              <p className="text-base md:text-lg font-bold text-soft-teal-dark">
                Sahabat Digital yang Menemani Setiap Langkah Menjadi Ibu.
              </p>
            </div>

            <p className="text-sm md:text-base text-charcoal-light leading-relaxed max-w-xl mx-auto text-center">
              SmartMomGuide bukan sekadar buku bacaan biasa. Ini adalah sebuah panduan digital terstruktur berbentuk PDF yang dirancang ramah untuk ibu modern. Tidak ada jargon medis yang kaku, hanya penjelasan hangat, logis, dan solutif.
            </p>

            <div className="border-l-4 border-l-warm-pink pl-4 py-1 italic text-xs md:text-sm text-charcoal-light font-medium bg-cream-light/40 rounded-r-xl max-w-md mx-auto">
              "SmartMomGuide dibaca langsung di Google Drive HP Mommy, hemat waktu, praktis, dan anti-ribet."
            </div>

            <a
              href="#promo-price-card"
              onClick={scrollToPriceCard}
              className="w-full sm:w-auto bg-soft-teal hover:bg-soft-teal-dark text-white font-extrabold text-sm md:text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              Miliki Panduan Mommy Sekarang juga
            </a>
          </div>

          <div className="space-y-5 bg-cream-light p-6 md:p-8 rounded-[32px] border border-cream-dark w-full">
            <h3 className="font-extrabold text-lg text-charcoal pb-2 border-b border-cream-dark flex items-center justify-center gap-2">
              <span>🌟</span> Bagaimana Panduan Ini Bekerja?
            </h3>

            <div className="space-y-4">
              
              {/* Point 1 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-warm-pink text-white font-bold flex items-center justify-center flex-shrink-0 text-xs shadow-xs">
                  1
                </div>
                <div className="space-y-0.5 text-left">
                  <h4 className="font-bold text-sm md:text-base text-charcoal">Buka Sesuai Kebutuhan</h4>
                  <p className="text-xs md:text-sm text-charcoal-light">
                    Mommy sedang mual di trimester pertama? Atau sedang bingung jadwal imunisasi bayi? Cukup buka bab spesifik tersebut dan terapkan solusinya.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-warm-pink text-white font-bold flex items-center justify-center flex-shrink-0 text-xs shadow-xs">
                  2
                </div>
                <div className="space-y-0.5 text-left">
                  <h4 className="font-bold text-sm md:text-base text-charcoal">Bahasa Sederhana</h4>
                  <p className="text-xs md:text-sm text-charcoal-light">
                    Tidak ada istilah medis yang rumit atau teori akademis yang bikin pusing. Bahasanya hangat dan menenangkan, ditulis dengan cinta.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-warm-pink text-white font-bold flex items-center justify-center flex-shrink-0 text-xs shadow-xs">
                  3
                </div>
                <div className="space-y-0.5 text-left">
                  <h4 className="font-bold text-sm md:text-base text-charcoal">Tanpa Batasan Waktu</h4>
                  <p className="text-xs md:text-sm text-charcoal-light">
                    File tersimpan aman di Google Drive Mommy, bisa diakses kapan saja dan di mana saja lewat smartphone, selamanya.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. BENEFIT SECTION */}
      <section className="py-16 md:py-24 bg-cream-light">
        <div className="w-full max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight">
              Mengapa SmartMomGuide Menjadi Pilihan Terbaik Banyak Ibu?
            </h2>
            <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
          </div>

          {/* Bento Style Stack (1-Column) */}
          <div className="flex flex-col gap-6 max-w-xl mx-auto w-full">
            
            {/* Benefit Card 1 */}
            <div className="bg-white p-8 rounded-3xl border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-2xl bg-warm-pink-light text-warm-pink-dark flex items-center justify-center shadow-2xs">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-lg text-charcoal">
                Panduan Lengkap End-to-End
              </h3>
              <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                Membahas tuntas perjalanan berharga Mommy mulai dari masa pra-kehamilan, proses persalinan, perawatan bayi baru lahir, hingga masa keemasan anak (0-5 tahun). Cukup satu panduan untuk bertahun-tahun.
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="bg-white p-8 rounded-3xl border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-2xl bg-warm-pink-light text-warm-pink-dark flex items-center justify-center shadow-2xs">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-lg text-charcoal">
                Fokus pada Langkah Praktis
              </h3>
              <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                Mommy tidak punya banyak waktu untuk membaca teori tebal saat sedang lelah atau mengasuh anak. Format materi kami singkat, padat, dan langsung menuju ke solusi praktis harian.
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="bg-white p-8 rounded-3xl border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-2xl bg-warm-pink-light text-warm-pink-dark flex items-center justify-center shadow-2xs">
                <Smile className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-lg text-charcoal">
                Meningkatkan Kepercayaan Diri
              </h3>
              <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                Dengan informasi yang benar, logis, dan terstruktur, Mommy bisa mengambil keputusan pengasuhan terbaik dengan tenang tanpa perlu takut atau baper dihakimi oleh lingkungan sekitar.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FEATURE ANATOMY SECTION */}
      <section id="fitur" className="py-16 md:py-24 bg-white border-y border-cream-dark">
        <div className="w-full max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight">
              Bedah Modul & Fitur SmartMomGuide
            </h2>
            <p className="text-xs md:text-sm text-charcoal-light font-bold uppercase tracking-widest">
              Mari intip apa saja isi panduan yang Mommy dapatkan
            </p>
            <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
          </div>

          {/* Interactive Image Slider showing the 4 module infographic slides */}
          <div className="pt-4">
            <ImageSlider />
          </div>

        </div>
      </section>

      {/* 8. PROOF SECTION */}
      <section className="py-16 md:py-24 bg-cream-light">
        <div className="w-full max-w-7xl mx-auto px-6 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight">
              Intip Bagian Dalam Panduan Mommy
            </h2>
            <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
          </div>

          <div className="flex flex-col gap-6 max-w-xl mx-auto w-full">
            
            {/* Card 1: Memandikan Bayi */}
            <div className="bg-white p-4.5 rounded-[28px] border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-cream-light border border-cream-dark group">
                <img 
                  src={bathBabyPage} 
                  alt="Tips Memandikan Bayi" 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-warm-pink-dark text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                  Ebook Utama
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-charcoal tracking-tight">Tips Memandikan Bayi</h4>
                <p className="text-[11px] text-charcoal-light leading-normal">
                  Panduan dasar memandikan bayi usia 0-6 bulan tanpa panik, lengkap dengan checklist langkah aman.
                </p>
              </div>
            </div>

            {/* Card 2: Tracker Kehamilan */}
            <div className="bg-white p-4.5 rounded-[28px] border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-cream-light border border-cream-dark group">
                <img 
                  src={pregnancyTrackerPage} 
                  alt="Jurnal Kehamilan: Refleksi Mingguan" 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-soft-teal-dark text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                  Printable Planner
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-charcoal tracking-tight">Jurnal Kehamilan</h4>
                <p className="text-[11px] text-charcoal-light leading-normal">
                  Tracker mingguan praktis untuk memonitor mood harian, rasa syukur, serta refleksi kehamilan Mommy.
                </p>
              </div>
            </div>

            {/* Card 3: Finger Gym Card */}
            <div className="bg-white p-4.5 rounded-[28px] border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-cream-light border border-cream-dark group">
                <img 
                  src={fingerGymCard} 
                  alt="Finger Gym Card" 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                  Brain Gym
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-charcoal tracking-tight">Finger Gym Card</h4>
                <p className="text-[11px] text-charcoal-light leading-normal">
                  Latihan stimulasi motorik halus dan pengenalan huruf interaktif untuk asah otak kiri & kanan si kecil.
                </p>
              </div>
            </div>

            {/* Card 4: Animal Coloring */}
            <div className="bg-white p-4.5 rounded-[28px] border border-cream-dark shadow-xs space-y-4 hover:shadow-md transition-shadow">
              <div className="relative aspect-3/4 rounded-2xl overflow-hidden bg-cream-light border border-cream-dark group">
                <img 
                  src={animalColoringPage} 
                  alt="Animal Coloring Page" 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-indigo-600 text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                  Coloring Pack
                </div>
              </div>
              <div className="space-y-1">
                <h4 className="font-extrabold text-sm text-charcoal tracking-tight">Animal Coloring</h4>
                <p className="text-[11px] text-charcoal-light leading-normal">
                  Halaman mewarnai keluarga hewan yang lucu untuk melatih kreativitas, fokus, dan motorik anak di rumah.
                </p>
              </div>
            </div>

          </div>

          <p className="text-xs md:text-sm text-charcoal-light text-center max-w-3xl mx-auto pl-2 leading-relaxed">
            (Di sini Mommy bisa melihat bagaimana materi disusun dengan poin-poin sederhana yang sangat nyaman dibaca lewat layar HP, bahkan saat Mommy sedang menyusui atau beristirahat).
          </p>

          {/* Testimonial Widget */}
          <div className="pt-8">
            <ReviewSection />
          </div>

        </div>
      </section>

      {/* FORMAT SHOWCASE SECTION */}
      <section id="format-akses" className="py-16 md:py-24 bg-cream-light/30 border-b border-cream-dark">
        <div className="w-full max-w-7xl mx-auto px-6">
          <FormatShowcase />
        </div>
      </section>

      {/* 9. OFFER SECTION */}
      <section id="bonus" className="py-16 md:py-24 bg-white border-y border-cream-dark">
        <div className="w-full max-w-3xl mx-auto px-6">
          
          <div className="space-y-10">
            {/* Main Section Header */}
            <div className="text-center space-y-3">
              <span className="inline-block bg-warm-pink text-white text-[10px] font-extrabold uppercase px-3.5 py-1.5 rounded-full shadow-sm tracking-widest">
                🎁 MEGA BONUS BUNDLE SPESIAL 🎁
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-charcoal tracking-tight">
                Semua Materi & Bonus Premium Ini Siap Mommy Miliki Hari Ini!
              </h2>
              <p className="text-base md:text-lg text-charcoal-light font-medium max-w-xl mx-auto">
                Bukan cuma satu ebook biasa, Mommy akan mendapatkan paket solusi pengasuhan terlengkap untuk mendampingi si kecil tumbuh cerdas & bahagia!
              </p>
            </div>

            {/* Levidio-Style Mega Bonus Grid Stack */}
            <div className="flex flex-col gap-6 w-full">
              
              {/* Product 1: Ebook Utama */}
              <div className="bg-white rounded-[32px] border-2 border-warm-pink p-6 md:p-8 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col gap-4 text-left">
                <div className="absolute top-0 right-0 bg-warm-pink text-white font-black text-[10px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                  PRODUK UTAMA
                </div>
                
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-warm-pink-light text-warm-pink-dark flex items-center justify-center text-2xl">
                    📙
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-warm-pink tracking-widest leading-none">MODUL #1</span>
                    <h3 className="font-black text-lg md:text-xl text-charcoal leading-tight">
                      Ebook Utama SmartMomGuide PDF
                    </h3>
                  </div>
                </div>
                
                <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                  Panduan esensial lengkap dari masa kehamilan trimester pertama hingga kelima tahun tumbuh kembang si kecil. Berisi petunjuk perawatan fisik bayi, imunisasi, hingga psikologi anak.
                </p>
                
                <div className="pt-2 border-t border-cream-dark flex items-center justify-between text-xs font-bold text-charcoal-light">
                  <span>⏱️ Akses Selamanya di Google Drive</span>
                  <span className="text-red-500 font-extrabold">Nilai Riil: Rp199.000</span>
                </div>
              </div>

              {/* Bonus 1: Printable Planner */}
              <div className="bg-white rounded-[32px] border-2 border-cream-dark p-6 md:p-8 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col gap-4 text-left">
                <div className="absolute top-0 right-0 bg-soft-teal text-white font-black text-[10px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider animate-pulse">
                  MEGA BONUS
                </div>
                
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-soft-teal-dark flex items-center justify-center text-2xl">
                    🗓️
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-soft-teal tracking-widest leading-none">BONUS SPESIAL #1</span>
                    <h3 className="font-black text-lg md:text-xl text-charcoal leading-tight">
                      Printable Parenting Planner Premium
                    </h3>
                  </div>
                </div>
                
                <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                  Agenda terstruktur siap cetak! Berisi checklist perlengkapan melahirkan, tracker minum susu harian, jurnal memantau perkembangan fisik, dan checklist jadwal MPASI tanpa pusing.
                </p>
                
                <div className="pt-2 border-t border-cream-dark flex items-center justify-between text-xs font-bold text-charcoal-light">
                  <span>📥 File Format PDF Siap Cetak</span>
                  <span className="text-red-500 font-extrabold">Nilai Riil: Rp129.000</span>
                </div>
              </div>

              {/* Bonus 2: Mega Bundle Kids Activities */}
              <div className="bg-white rounded-[32px] border-2 border-cream-dark p-6 md:p-8 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col gap-4 text-left">
                <div className="absolute top-0 right-0 bg-soft-teal text-white font-black text-[10px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                  MEGA BONUS
                </div>
                
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-soft-teal-dark flex items-center justify-center text-2xl">
                    🎈
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-soft-teal tracking-widest leading-none">BONUS SPESIAL #2</span>
                    <h3 className="font-black text-lg md:text-xl text-charcoal leading-tight">
                      Mega Bundle Kids Activities (60.000++ File)
                    </h3>
                  </div>
                </div>
                
                <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                  Kumpulan ribuan aktivitas sensorik dan motorik halus untuk balita di rumah. Dirancang khusus untuk mengalihkan perhatian si kecil agar tidak kecanduan gadget (anti-screentime).
                </p>
                
                <div className="pt-2 border-t border-cream-dark flex items-center justify-between text-xs font-bold text-charcoal-light">
                  <span>📦 File Aktivitas Terlengkap</span>
                  <span className="text-red-500 font-extrabold">Nilai Riil: Rp399.000</span>
                </div>
              </div>

              {/* Bonus 3: Printable Anak Siap Cetak */}
              <div className="bg-white rounded-[32px] border-2 border-cream-dark p-6 md:p-8 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col gap-4 text-left">
                <div className="absolute top-0 right-0 bg-soft-teal text-white font-black text-[10px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                  MEGA BONUS
                </div>
                
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-soft-teal-dark flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-soft-teal tracking-widest leading-none">BONUS SPESIAL #3</span>
                    <h3 className="font-black text-lg md:text-xl text-charcoal leading-tight">
                      Printable Anak Siap Cetak (39.000++ File)
                    </h3>
                  </div>
                </div>
                
                <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                  Kumpulan flashcard edukatif bergambar hewan, angka, huruf, poster dinding lucu, dan mini puzzle interaktif untuk mengenalkan dunia sekitar dengan menyenangkan.
                </p>
                
                <div className="pt-2 border-t border-cream-dark flex items-center justify-between text-xs font-bold text-charcoal-light">
                  <span>🎨 Flashcard & Game Edukatif</span>
                  <span className="text-red-500 font-extrabold">Nilai Riil: Rp299.000</span>
                </div>
              </div>

              {/* Bonus 4: Brain Gym */}
              <div className="bg-white rounded-[32px] border-2 border-cream-dark p-6 md:p-8 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col gap-4 text-left">
                <div className="absolute top-0 right-0 bg-soft-teal text-white font-black text-[10px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                  MEGA BONUS
                </div>
                
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-soft-teal-dark flex items-center justify-center text-2xl">
                    🧠
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-soft-teal tracking-widest leading-none">BONUS SPESIAL #4</span>
                    <h3 className="font-black text-lg md:text-xl text-charcoal leading-tight">
                      Brain & Finger Gym Pack
                    </h3>
                  </div>
                </div>
                
                <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                  Latihan stimulasi otak kiri dan kanan dengan panduan senam jari bersertifikasi dari pakar perkembangan anak India & Finlandia untuk asah memori dan fokus.
                </p>
                
                <div className="pt-2 border-t border-cream-dark flex items-center justify-between text-xs font-bold text-charcoal-light">
                  <span>⚡ Tingkatkan Fokus & Memori Anak</span>
                  <span className="text-red-500 font-extrabold">Nilai Riil: Rp199.000</span>
                </div>
              </div>

              {/* Bonus 5: Coloring Pages */}
              <div className="bg-white rounded-[32px] border-2 border-cream-dark p-6 md:p-8 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col gap-4 text-left">
                <div className="absolute top-0 right-0 bg-soft-teal text-white font-black text-[10px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                  MEGA BONUS
                </div>
                
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-soft-teal-dark flex items-center justify-center text-2xl">
                    🎨
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-soft-teal tracking-widest leading-none">BONUS SPESIAL #5</span>
                    <h3 className="font-black text-lg md:text-xl text-charcoal leading-tight">
                      300 Halaman Mewarnai Anak Lucu
                    </h3>
                  </div>
                </div>
                
                <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                  Lembar mewarnai keluarga hewan, dinosaurus, dan mobil-mobilan menggemaskan yang bisa diprint berkali-kali untuk menyibukkan si kecil secara produktif.
                </p>
                
                <div className="pt-2 border-t border-cream-dark flex items-center justify-between text-xs font-bold text-charcoal-light">
                  <span>✏️ Cetak Sendiri di Rumah Sepuasnya</span>
                  <span className="text-red-500 font-extrabold">Nilai Riil: Rp99.000</span>
                </div>
              </div>

              {/* Bonus 6: Dashboard Web */}
              <div className="bg-teal-50/50 rounded-[32px] border-2 border-teal-200 p-6 md:p-8 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col gap-4 text-left">
                <div className="absolute top-0 right-0 bg-teal-600 text-white font-black text-[10px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                  FREE PREMIUM ACCESS
                </div>
                
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center text-2xl">
                    💻
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-teal-600 tracking-widest leading-none">AKSES SPESIAL #6</span>
                    <h3 className="font-black text-lg md:text-xl text-teal-900 leading-tight">
                      Dashboard Web Interaktif Hemat Kuota
                    </h3>
                  </div>
                </div>
                
                <p className="text-xs md:text-sm text-teal-800 leading-relaxed">
                  Akses instan membaca semua bab tanpa harus download file PDF yang besar. Mommy bisa langsung mencari topik spesifik di HP secara hemat kuota kapan saja.
                </p>
                
                <div className="pt-2 border-t border-teal-200 flex items-center justify-between text-xs font-bold text-teal-800">
                  <span>📱 Responsif di Semua Jenis Smartphone</span>
                  <span className="text-teal-700 font-extrabold">Nilai Riil: Rp149.000</span>
                </div>
              </div>

              {/* Bonus 7: 3D Flipbook */}
              <div className="bg-rose-50/50 rounded-[32px] border-2 border-warm-pink-accent/40 p-6 md:p-8 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col gap-4 text-left">
                <div className="absolute top-0 right-0 bg-warm-pink-dark text-white font-black text-[10px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                  FREE PREMIUM ACCESS
                </div>
                
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-warm-pink-light text-warm-pink-dark flex items-center justify-center text-2xl">
                    📖
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-warm-pink-dark tracking-widest leading-none">AKSES SPESIAL #7</span>
                    <h3 className="font-black text-lg md:text-xl text-warm-pink-dark leading-tight">
                      Versi 3D Flipbook Premium
                    </h3>
                  </div>
                </div>
                
                <p className="text-xs md:text-sm text-warm-pink-dark leading-relaxed">
                  Nikmati pengalaman membaca interaktif yang mewah dengan sensasi membalik lembar halaman secara real-time seperti memegang buku fisik asli langsung di web browser HP Mommy.
                </p>
                
                <div className="pt-2 border-t border-warm-pink-accent/20 flex items-center justify-between text-xs font-bold text-warm-pink-dark">
                  <span>✨ Desain Elegan Imersif</span>
                  <span className="text-warm-pink-dark font-extrabold">Nilai Riil: Rp149.000</span>
                </div>
              </div>

              {/* Bonus 8: Budget Planner */}
              <div className="bg-emerald-50/50 rounded-[32px] border-2 border-emerald-200 p-6 md:p-8 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col gap-4 text-left">
                <div className="absolute top-0 right-0 bg-emerald-600 text-white font-black text-[10px] px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider">
                  FREE PREMIUM ACCESS
                </div>
                
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl">
                    💰
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest leading-none">AKSES SPESIAL #8</span>
                    <h3 className="font-black text-lg md:text-xl text-emerald-900 leading-tight">
                      Budget Planner Anggaran Lahiran & Bayi
                    </h3>
                  </div>
                </div>
                
                <p className="text-xs md:text-sm text-emerald-800 leading-relaxed">
                  Spreadsheet kalkulator keuangan interaktif untuk merencanakan biaya melahirkan, perlengkapan menyusui, baju bayi, hingga imunisasi agar kas keluarga tetap terkendali.
                </p>
                
                <div className="pt-2 border-t border-emerald-200 flex items-center justify-between text-xs font-bold text-emerald-800">
                  <span>📊 Format Excel & Google Sheets Praktis</span>
                  <span className="text-emerald-700 font-extrabold">Nilai Riil: Rp99.000</span>
                </div>
              </div>

            </div>

            {/* Value Anchoring & Price Tag Card */}
            <div id="promo-price-card" className="bg-[#fff9e6] p-8 md:p-12 rounded-[36px] border-4 border-[#ffc300] text-center space-y-6 shadow-xl relative overflow-hidden">
              {/* Background glowing circle */}
              <div className="absolute -top-12 -left-12 w-28 h-28 bg-[#ffc300]/25 rounded-full blur-2xl" />
              <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-[#ffc300]/25 rounded-full blur-2xl" />

              <div className="space-y-1">
                <p className="text-xs font-black uppercase tracking-widest text-[#cc9c00]">
                  🔥 PENAWARAN TERBATAS HARI INI 🔥
                </p>
                <h3 className="text-2.5xl md:text-4xl font-black text-charcoal">
                  Berapa Nilai Investasi untuk Semua Materi Hebat Ini?
                </h3>
              </div>

              {/* Value Anchoring Breakdown */}
              <div className="bg-white/80 backdrop-blur-xs p-6 rounded-2xl border border-cream-dark text-left space-y-3 max-w-xl mx-auto text-xs md:text-sm">
                <div className="flex justify-between items-center text-stone-500 font-semibold">
                  <span>📙 Ebook SmartMomGuide PDF</span>
                  <span>Rp 199.000</span>
                </div>
                <div className="flex justify-between items-center text-stone-500 font-semibold">
                  <span>🗓️ Printable Parenting Planner</span>
                  <span>Rp 129.000</span>
                </div>
                <div className="flex justify-between items-center text-stone-500 font-semibold">
                  <span>🎈 60.000+ Kids Activities Bundle</span>
                  <span>Rp 399.000</span>
                </div>
                <div className="flex justify-between items-center text-stone-500 font-semibold">
                  <span>🎓 39.000+ Printable Edukasi Siap Cetak</span>
                  <span>Rp 299.000</span>
                </div>
                <div className="flex justify-between items-center text-stone-500 font-semibold">
                  <span>🧠 Brain & Finger Gym Pack</span>
                  <span>Rp 199.000</span>
                </div>
                <div className="flex justify-between items-center text-stone-500 font-semibold">
                  <span>🎨 300+ Mewarnai Anak Pack</span>
                  <span>Rp 99.000</span>
                </div>
                <div className="flex justify-between items-center text-stone-500 font-semibold">
                  <span>💻 Dashboard Web Interaktif</span>
                  <span>Rp 149.000</span>
                </div>
                <div className="flex justify-between items-center text-stone-500 font-semibold pb-3 border-b border-dashed border-stone-200">
                  <span>📖 Versi 3D Flipbook Premium & Budget Planner</span>
                  <span>Rp 248.000</span>
                </div>
                <div className="flex justify-between items-center text-charcoal font-black text-sm md:text-base pt-1">
                  <span>TOTAL NILAI RIIL:</span>
                  <span className="line-through text-red-500">Rp 1.722.000</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs md:text-sm text-charcoal-light font-bold max-w-lg mx-auto">
                  Tentu Mommy tidak perlu membayar jutaan rupiah. Hanya dengan investasi sekali seumur hidup yang super hemat, Mommy bisa amankan semua aksesnya sekarang:
                </p>

                <CountdownTimer />

                <div className="flex items-center justify-center gap-3 pt-2">
                  <span className="text-stone-400 line-through text-xl font-bold">
                    Rp 199.000
                  </span>
                  <span className="bg-red-100 text-red-600 font-black text-[10px] md:text-xs px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
                    HEMAT 60% PROMO BULAN INI
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
                  className="w-full bg-[#ffc300] hover:bg-[#e0ac00] active:scale-[0.98] text-charcoal font-black text-base md:text-xl py-5 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2 border-b-4 border-[#cc9c00] animate-bounce"
                >
                  <span>AMBIL AKSES SMARTMOM GUIDE SEKARANG JUGA!</span>
                </a>
                
                <p className="text-[11px] text-stone-500 font-semibold italic max-w-md mx-auto leading-normal">
                  *Gunakan kode kupon <span className="bg-yellow-200 px-1 text-charcoal rounded-sm font-extrabold not-italic">"IBU CERDAS"</span> di halaman checkout untuk memotong harga menjadi ± Rp50.500 (kurang lebih Rp49.000) saja!
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

      {/* 11. FINAL CTA SECTION */}
      <section className="py-16 md:py-24 bg-warm-pink-light/35 border-t border-cream-dark">
        <div className="w-full max-w-4xl mx-auto px-6 text-center space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-2xl">❤️</span>
            <h2 className="text-3xl md:text-4.5xl font-black text-charcoal tracking-tight leading-tight max-w-3xl mx-auto">
              Jadikan Perjalanan Menjadi Ibu sebagai Momen yang Menenangkan
            </h2>
            <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
          </div>

          <p className="text-sm md:text-base text-charcoal-light leading-relaxed max-w-2xl mx-auto font-medium">
            Jangan biarkan rasa cemas, takut salah, dan kebingungan informasi merenggut kebahagiaan Mommy dalam menyambut si kecil. Mulailah mempersiapkan diri hari ini bersama panduan terbaik. Hanya dengan <strong>Rp79.000</strong> <span className="text-warm-pink-dark font-extrabold">(Promo Terbatas!)</span>, peroleh ketenangan pikiran dan ribuan aset aktivitas anak untuk investasi jangka panjang keluarga kecil Mommy.
          </p>

          <div className="space-y-4">
            <a
              href="#promo-price-card"
              onClick={scrollToPriceCard}
              className="w-full sm:w-auto bg-soft-teal hover:bg-soft-teal-dark active:scale-[0.98] text-white font-extrabold text-base md:text-lg px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2 mx-auto group text-center"
            >
              Ambil Langkah Pertama Jadi Ibu yang Percaya Diri Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-xs text-charcoal-light font-semibold">
              🔒 Transaksi 100% aman via Lynk.id. File dapat diakses selamanya di Google Drive Mommy.
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

    </div>
  );
}
