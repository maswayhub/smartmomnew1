import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Sparkles, AlertCircle } from "lucide-react";

// @ts-ignore
import slideBundaPelajari from "../assets/images/slide_bunda_pelajari_1783435406215.jpg";
// @ts-ignore
import slideStimulasiAktivitas from "../assets/images/slide_stimulasi_aktivitas_1783435427013.jpg";
// @ts-ignore
import slideKebiasaanNegara from "../assets/images/slide_kebiasaan_negara_1783435444792.jpg";
// @ts-ignore
import slidePregnancyTodolist from "../assets/images/slide_pregnancy_todolist_1783435461757.jpg";

interface SlideItem {
  image: string;
  title: string;
  description: string;
  badge: string;
}

export default function ImageSlider() {
  const slides: SlideItem[] = [
    {
      image: slideBundaPelajari,
      title: "10 Modul Pembelajaran Utama",
      description: "Dari perjalanan kehamilan, mengatur keuangan keluarga baru, kesehatan & perawatan bayi, hingga tantangan emosional ibu.",
      badge: "Materi Utama"
    },
    {
      image: slideStimulasiAktivitas,
      title: "20 Aktivitas Stimulasi Awal Anak (0-5 Tahun)",
      description: "Panduan praktis aktivitas Tummy Time, sensorik, motorik halus, hingga stimulasi bahasa sejak dini untuk tumbuh kembang optimal.",
      badge: "Stimulasi Anak"
    },
    {
      image: slideKebiasaanNegara,
      title: "6 Kebiasaan Sehat Ibu Hamil Dunia",
      description: "Inspirasi kebiasaan positif ibu hamil di berbagai negara (Jepang, India, Prancis, Jerman, dll) untuk mendukung tumbuh kembang janin sehat.",
      badge: "Inspirasi Global"
    },
    {
      image: slidePregnancyTodolist,
      title: "Checklist Lengkap & Gejala Kehamilan",
      description: "Daftar periksa hal-hal penting per trimester (Trimester 1, 2, 3 hingga Pascapersalinan) agar Mommy lebih tenang & siap mental.",
      badge: "Panduan Praktis"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Variants for slide transition animation
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  };

  return (
    <div 
      className="bg-cream/45 border border-cream-dark p-6 md:p-8 rounded-[36px] shadow-sm space-y-6 md:space-y-8 max-w-5xl mx-auto"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      id="image-slider-container"
    >
      <div className="flex flex-col gap-8 max-w-xl mx-auto items-center text-center">
        
        {/* Left Side: Interactive Slider Canvas */}
        <div className="w-full flex flex-col justify-center items-center">
          <div className="relative w-full aspect-square bg-white rounded-3xl overflow-hidden border border-cream-dark shadow-xl group">
            
            {/* Slide Images Container */}
            <div className="relative w-full h-full">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={currentIndex}
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>

            {/* Slide Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-charcoal shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer z-10 opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Previous Slide"
              id="slider-prev-btn"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-charcoal shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer z-10 opacity-0 group-hover:opacity-100 focus:opacity-100"
              aria-label="Next Slide"
              id="slider-next-btn"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Progress Counter Badge */}
            <div className="absolute top-4 left-4 bg-charcoal/70 text-white text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-xs z-10 select-none">
              {currentIndex + 1} / {slides.length}
            </div>
          </div>
        </div>

        {/* Right Side: Description Content */}
        <div className="space-y-6 w-full flex flex-col items-center">
          <div className="space-y-3 flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 bg-warm-pink-light text-warm-pink-dark text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full shadow-2xs tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              {slides[currentIndex].badge}
            </span>
            
            <h3 className="text-2xl md:text-3xl font-black text-charcoal leading-tight text-center">
              {slides[currentIndex].title}
            </h3>
            
            <p className="text-sm md:text-base text-charcoal-light leading-relaxed text-center">
              {slides[currentIndex].description}
            </p>
          </div>

          {/* Quick Features List under description */}
          <div className="bg-white p-5 rounded-2xl border border-cream-dark shadow-2xs space-y-3 w-full text-left">
            <div className="flex gap-2.5 items-start">
              <span className="text-warm-pink text-sm mt-0.5">🌸</span>
              <p className="text-xs md:text-sm text-charcoal-light">
                <strong>Hati Tenang & Gak Bingung Lagi:</strong> Didesain dengan visual infografis yang hangat dan ramah di mata, membuat materi penting terasa sangat ringan dan langsung bisa dipahami seketika.
              </p>
            </div>
            <div className="flex gap-2.5 items-start">
              <span className="text-warm-pink text-sm mt-0.5">📱</span>
              <p className="text-xs md:text-sm text-charcoal-light">
                <strong>Penyelamat Cemas Tengah Malam:</strong> Selalu siap menemani Mommy di HP kapan saja dan di mana saja. Begitu ada keraguan menyerang, petunjuk menenangkan langsung ada di genggaman.
              </p>
            </div>
          </div>

          {/* Indicators / Dot Navigations */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="h-2.5 rounded-full transition-all duration-300 cursor-pointer w-2.5 bg-stone-300 hover:bg-stone-400"
                style={{
                  width: index === currentIndex ? "32px" : "10px",
                  backgroundColor: index === currentIndex ? "var(--color-warm-pink)" : undefined
                }}
                aria-label={`Go to slide ${index + 1}`}
                id={`slider-dot-${index}`}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
