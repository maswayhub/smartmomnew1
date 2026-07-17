import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Laptop, FileDown, ExternalLink, Sparkles, Smartphone, Check } from "lucide-react";

export default function FormatShowcase() {
  const [activeFormat, setActiveFormat] = useState<"dashboard" | "flipbook" | "pdf">("dashboard");

  const formats = [
    {
      id: "dashboard" as const,
      icon: Laptop,
      title: "Interactive Web Dashboard",
      badge: "Sangat Praktis",
      color: "from-teal-500 to-emerald-600",
      bgLight: "bg-teal-50/75 border-teal-200",
      textAccent: "text-teal-700",
      description: "Akses seluruh materi panduan secara instan lewat website responsif. Mommy tidak perlu download file besar, sangat hemat kuota, dan bisa mencari bab/topik dalam 1 detik dengan sekali klik.",
      features: [
        "Sistem navigasi instan per topik",
        "Tampilan ultra-responsif di HP, Tablet, & Laptop",
        "Sangat hemat kuota internet",
        "Sistem pencarian cepat solusi instan"
      ],
      demoUrl: "https://share.gemini.google/otiaWWetUgjJ",
      demoLabel: "Buka Demo Web View"
    },
    {
      id: "flipbook" as const,
      icon: BookOpen,
      title: "Realistic 3D Flipbook",
      badge: "Estetik & Imersif",
      color: "from-warm-pink to-rose-600",
      bgLight: "bg-warm-pink-light/35 border-warm-pink-accent/40",
      textAccent: "text-warm-pink-dark",
      description: "Nikmati pengalaman imersif membaca online dengan sensasi realistis membalik halaman seperti buku fisik. Desain tata letak yang sangat estetik, rapi, dan menenangkan mata.",
      features: [
        "Sensasi membalik halaman (3D Flip)",
        "Tampilan visual buku parenting premium",
        "Nyaman dibaca di layar HP & Tablet",
        "Tanda halaman & zoom-in otomatis"
      ],
      demoUrl: "https://online.fliphtml5.com/rqndn/SmartMom-Guide-Ebook-Short-Ver/",
      demoLabel: "Buka Demo Flipbook 3D"
    },
    {
      id: "pdf" as const,
      icon: FileDown,
      title: "Premium PDF & Printables",
      badge: "Offline & Siap Cetak",
      color: "from-amber-500 to-orange-600",
      bgLight: "bg-amber-50/75 border-amber-200",
      textAccent: "text-amber-800",
      description: "Unduh file PDF resolusi tinggi berkualitas premium untuk disimpan secara offline di Google Drive Mommy. Seluruh bonus planner, checklist, dan kartu stimulasi siap dicetak ukuran A4.",
      features: [
        "Simpan permanen di Google Drive",
        "Akses offline tanpa koneksi internet",
        "Resolusi tinggi siap cetak (A4)",
        "Dilengkapi ribuan file stimulasi anak"
      ],
      demoUrl: "#promo-price-card",
      demoLabel: "Miliki Akses PDF Lengkap"
    }
  ];

  const currentFormat = formats.find(f => f.id === activeFormat)!;

  return (
    <div 
      className="bg-cream/45 border border-cream-dark p-6 md:p-10 rounded-[36px] shadow-sm space-y-8 md:space-y-12 max-w-6xl mx-auto"
      id="format-showcase-container"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 bg-warm-pink-light text-warm-pink-dark text-[11px] font-black uppercase px-3.5 py-1.5 rounded-full shadow-2xs tracking-widest">
          <Sparkles className="w-3.5 h-3.5" />
          Pilihan Format Akses Modern
        </span>
        <h3 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight leading-tight">
          Satu Panduan Premium, Tiga Cara Membaca Modern
        </h3>
        <p className="text-xs md:text-sm text-charcoal-light font-medium max-w-xl mx-auto leading-relaxed">
          Kami mengerti kesibukan Mommy baru. Pilih format membaca yang paling nyaman sesuai situasi Mommy saat ini!
        </p>
      </div>

      <div className="flex flex-col gap-8 max-w-3xl mx-auto items-center">
        
        {/* Format Toggles */}
        <div className="w-full space-y-4 text-center">
          <p className="text-xs font-black text-charcoal-light uppercase tracking-wider">
            PILIH FORMAT MEMBACA:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 w-full">
            {formats.map((f) => {
              const Icon = f.icon;
              const isActive = activeFormat === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFormat(f.id)}
                  className={`flex-1 text-left sm:text-center p-4 rounded-2xl border transition-all flex sm:flex-col items-center justify-between sm:justify-center gap-4 cursor-pointer hover:shadow-xs ${
                    isActive 
                      ? "bg-white border-warm-pink shadow-xs ring-1 ring-warm-pink/40" 
                      : "bg-white/60 border-cream-dark hover:bg-white"
                  }`}
                  id={`toggle-format-${f.id}`}
                >
                  <div className="flex sm:flex-col items-center gap-3.5 text-left sm:text-center">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-2xs ${
                      isActive 
                        ? "bg-warm-pink text-white" 
                        : "bg-cream-light text-charcoal-light"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm md:text-base text-charcoal leading-none mb-1">
                        {f.title}
                      </h4>
                      <span className={`text-[9px] font-black uppercase tracking-wider ${
                        isActive ? f.textAccent : "text-stone-400"
                      }`}>
                        {f.badge}
                      </span>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                    isActive ? "border-warm-pink bg-warm-pink text-white font-bold" : "border-stone-300"
                  }`}>
                    {isActive ? "✓" : ""}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase Content Window with AnimatePresence */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFormat}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="bg-white p-6 md:p-8 rounded-[32px] border border-cream-dark shadow-md space-y-6 flex flex-col justify-between min-h-[400px]"
            >
              <div className="space-y-5">
                {/* Header Badge & Title inside details */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-cream">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-cream-light text-charcoal">
                      {<currentFormat.icon className="w-5 h-5" />}
                    </div>
                    <h4 className="text-xl font-black text-charcoal tracking-tight">
                      {currentFormat.title}
                    </h4>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-cream-light ${currentFormat.textAccent}`}>
                    {currentFormat.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-charcoal-light leading-relaxed pl-1">
                  {currentFormat.description}
                </p>

                {/* Highlighted Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {currentFormat.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-cream-light/35 p-3 rounded-xl border border-cream">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 text-xs font-black">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs font-bold text-charcoal-light">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTAs to Demo Links */}
              {currentFormat.id !== "flipbook" ? (
                <div className="pt-6 border-t border-cream flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={currentFormat.demoUrl}
                    target={currentFormat.demoUrl.startsWith("#") ? undefined : "_blank"}
                    rel={currentFormat.demoUrl.startsWith("#") ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if (currentFormat.demoUrl.startsWith("#")) {
                        e.preventDefault();
                        const element = document.getElementById("promo-price-card");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "center" });
                        }
                      }
                    }}
                    className="w-full sm:flex-1 bg-soft-teal hover:bg-soft-teal-dark active:scale-[0.98] text-white font-extrabold text-sm md:text-base px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    id={`demo-btn-${currentFormat.id}`}
                  >
                    {currentFormat.demoLabel}
                    {currentFormat.demoUrl.startsWith("#") ? (
                      <FileDown className="w-4 h-4" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                  </a>
                  
                  {currentFormat.id !== "pdf" && (
                    <p className="text-[11px] text-charcoal-light font-bold text-center sm:text-left leading-relaxed max-w-xs pl-1">
                      🌸 Klik tombol untuk langsung mencoba keunikan format ini secara live!
                    </p>
                  )}
                  {currentFormat.id === "pdf" && (
                    <p className="text-[11px] text-charcoal-light font-bold text-center sm:text-left leading-relaxed max-w-xs pl-1">
                      💾 Dapatkan link download otomatis Google Drive setelah konfirmasi pembayaran.
                    </p>
                  )}
                </div>
              ) : (
                <div className="pt-6 border-t border-cream">
                  <p className="text-xs md:text-sm text-stone-500 font-semibold italic">
                    ✨ Format realistis 3D Flipbook Premium ini sudah termasuk di dalam paket lengkap SmartMomGuide yang akan langsung Mommy dapatkan di email setelah akses dibuka.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
