import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Laptop, 
  FileDown, 
  ExternalLink, 
  Sparkles, 
  Smartphone, 
  Check, 
  Search, 
  Heart, 
  ChevronRight, 
  BookOpenCheck,
  Printer,
  Compass
} from "lucide-react";

export default function FormatShowcase() {
  const [activeFormat, setActiveFormat] = useState<"dashboard" | "flipbook" | "pdf">("dashboard");

  // Dashboard Tab Interactive State
  const [selectedChapter, setSelectedChapter] = useState<"bab1" | "bab2" | "bab3">("bab1");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchFeedback, setShowSearchFeedback] = useState(false);

  // PDF Tab Interactive State
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({
    item1: true,
    item2: false,
    item3: true,
    item4: false,
  });

  const handleToggleItem = (id: string) => {
    setCompletedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checklistProgress = Math.round(
    (Object.values(completedItems).filter(Boolean).length / Object.keys(completedItems).length) * 100
  );

  const chaptersData = {
    bab1: {
      title: "🤰 Bab 1: Atasi Mual & Kram",
      category: "Kesehatan Ibu",
      readTime: "3 Menit Baca",
      excerpt: "Makanlah biskuit kering sebelum bangun tidur di pagi hari, kurangi makanan berminyak/pedas, dan seduh teh jahe hangat untuk menenangkan lambung."
    },
    bab2: {
      title: "🧘 Bab 2: Pernapasan Melahirkan",
      category: "Persalinan Nyaman",
      readTime: "5 Menit Baca",
      excerpt: "Gunakan teknik tiup-tiup saat kontraksi datang. Tarik napas lewat hidung 4 detik, kembungkan perut, lalu embuskan perlahan lewat mulut seperti meniup lilin."
    },
    bab3: {
      title: "🍼 Bab 3: Inisiasi Menyusui Dini",
      category: "Perawatan Bayi",
      readTime: "4 Menit Baca",
      excerpt: "Letakkan bayi di atas dada ibu segera setelah lahir secara skin-to-skin. Kehangatan dada ibu menstabilkan jantung bayi & melatih insting mencari puting susu."
    }
  };

  const handleSearchSubmit = (e: FormEvent) => {
    e.preventDefault();
    const query = searchQuery.toLowerCase();
    if (query.includes("mual") || query.includes("kram") || query.includes("muntah")) {
      setSelectedChapter("bab1");
    } else if (query.includes("napas") || query.includes("tiup") || query.includes("lahir") || query.includes("sakit")) {
      setSelectedChapter("bab2");
    } else if (query.includes("asi") || query.includes("susu") || query.includes("bayi") || query.includes("menyusui")) {
      setSelectedChapter("bab3");
    }
    setShowSearchFeedback(true);
    setTimeout(() => setShowSearchFeedback(false), 3000);
  };

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
      color: "from-pink-500 to-rose-600",
      bgLight: "bg-rose-50/75 border-rose-200",
      textAccent: "text-rose-700",
      description: "Nikmati pengalaman imersif membaca online dengan sensasi realistis membalik halaman seperti buku fisik. Desain tata letak yang sangat estetik, rapi, dan menenangkan mata.",
      features: [
        "Sensasi membalik halaman (3D Flip)",
        "Tampilan visual buku parenting premium",
        "Nyaman dibaca di layar HP & Tablet",
        "Tanda halaman & zoom-in otomatis"
      ],
      demoUrl: "https://online.fliphtml5.com/rqndn/SmartMom-Guide-Ebook-2026-Flip-book/",
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
      className="bg-gradient-to-b from-cream/45 to-white border border-cream-dark p-6 md:p-10 rounded-[40px] shadow-sm space-y-8 md:space-y-12 max-w-6xl mx-auto relative overflow-hidden"
      id="format-showcase-container"
    >
      {/* Background soft glowing lights for luxury feel */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-200/20 rounded-full filter blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full filter blur-3xl -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 bg-warm-pink-light/60 text-warm-pink-dark text-xs font-black uppercase px-4 py-2 rounded-full shadow-2xs tracking-widest animate-pulse">
          <Sparkles className="w-3.5 h-3.5 text-warm-pink animate-spin-slow" />
          Pilihan Format Akses Modern
        </span>
        <h3 className="text-3xl md:text-5xl font-black text-charcoal tracking-tight leading-tight">
          Satu Panduan Premium, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-warm-pink-dark to-soft-teal-dark bg-clip-text text-transparent">Tiga Cara Membaca</span> Terinteraktif
        </h3>
        <p className="text-sm md:text-base text-charcoal-light font-medium max-w-xl mx-auto leading-relaxed">
          Kami mengerti kenyamanan Mommy adalah yang utama. Cobalah simulator interaktif di bawah untuk memilih format yang paling menyenangkan!
        </p>
      </div>

      <div className="flex flex-col gap-8 max-w-5xl mx-auto">
        
        {/* Interactive & Visually Rich Format Selector Toggles */}
        <div className="w-full space-y-3.5 text-center">
          <div className="inline-block bg-cream-light/60 border border-cream-dark/50 p-1.5 rounded-2xl">
            <span className="text-[10px] font-black text-charcoal-light uppercase tracking-widest px-3 py-1">
              👈 Ketuk untuk Mengubah Mode Tampilan Simulator 👉
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {formats.map((f) => {
              const Icon = f.icon;
              const isActive = activeFormat === f.id;
              
              // Define distinct background rings & glow per tab
              const borderStyles = isActive
                ? f.id === "dashboard"
                  ? "border-teal-500 ring-2 ring-teal-500/20 bg-teal-50/45 scale-[1.02]"
                  : f.id === "flipbook"
                  ? "border-rose-500 ring-2 ring-rose-500/20 bg-rose-50/45 scale-[1.02]"
                  : "border-amber-500 ring-2 ring-amber-500/20 bg-amber-50/45 scale-[1.02]"
                : "border-stone-200/80 bg-white hover:border-warm-pink-accent/60 hover:bg-stone-50/50";

              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFormat(f.id)}
                  className={`relative p-5 rounded-3xl border transition-all duration-300 flex flex-row md:flex-col items-center justify-between md:justify-center gap-4 text-left md:text-center cursor-pointer overflow-hidden group ${borderStyles}`}
                  id={`toggle-format-${f.id}`}
                >
                  {/* Subtle decorative color card corner glow */}
                  {isActive && (
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${f.color} opacity-10 rounded-bl-full`} />
                  )}

                  <div className="flex flex-row md:flex-col items-center gap-4 text-left md:text-center w-full">
                    {/* Icon Container */}
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                      isActive 
                        ? f.id === "dashboard" 
                          ? "bg-teal-500 text-white" 
                          : f.id === "flipbook"
                          ? "bg-rose-500 text-white"
                          : "bg-amber-500 text-white"
                        : "bg-stone-100 text-stone-500 group-hover:bg-warm-pink-light group-hover:text-warm-pink-dark"
                    }`}>
                      <Icon className={`w-6 h-6 ${isActive ? "animate-bounce-slow" : ""}`} />
                    </div>

                    <div className="flex-1 md:flex-initial">
                      <h4 className="font-black text-sm md:text-base text-charcoal leading-snug">
                        {f.title}
                      </h4>
                      <span className={`inline-block text-[10px] font-black uppercase tracking-wider mt-1 px-2.5 py-0.5 rounded-full ${
                        isActive 
                          ? f.id === "dashboard"
                            ? "bg-teal-100/80 text-teal-700"
                            : f.id === "flipbook"
                            ? "bg-rose-100/80 text-rose-700"
                            : "bg-amber-100/80 text-amber-700"
                          : "bg-stone-100 text-stone-500"
                      }`}>
                        {f.badge}
                      </span>
                    </div>
                  </div>

                  {/* Radio tick indicator */}
                  <div className="hidden md:flex justify-center w-full pt-1">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs transition-all duration-300 ${
                      isActive 
                        ? f.id === "dashboard"
                          ? "border-teal-500 bg-teal-500 text-white font-bold shadow-xs scale-110"
                          : f.id === "flipbook"
                          ? "border-rose-500 bg-rose-500 text-white font-bold shadow-xs scale-110"
                          : "border-amber-500 bg-amber-500 text-white font-bold shadow-xs scale-110"
                        : "border-stone-300 bg-white"
                    }`}>
                      {isActive ? "✓" : ""}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic & Highly Interactive Showcase Screen */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFormat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white p-6 md:p-8 rounded-[36px] border border-cream-dark/80 shadow-md space-y-6 md:space-y-8 min-h-[500px] flex flex-col justify-between relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
                
                {/* Left Side: Standard Information & Badge details */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div className="space-y-4 text-left">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-2xl bg-stone-50 ${currentFormat.textAccent} border border-stone-100 shadow-2xs`}>
                        {<currentFormat.icon className="w-6 h-6" />}
                      </div>
                      <div>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${currentFormat.textAccent}`}>
                          {currentFormat.badge}
                        </span>
                        <h4 className="text-xl md:text-2xl font-black text-charcoal tracking-tight">
                          {currentFormat.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-stone-600 leading-relaxed">
                      {currentFormat.description}
                    </p>

                    <div className="space-y-2.5 pt-2">
                      <h5 className="text-xs font-black text-stone-700 uppercase tracking-widest">
                        Kelebihan Format Ini:
                      </h5>
                      <div className="grid grid-cols-1 gap-2">
                        {currentFormat.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 flex-shrink-0 text-xs font-black mt-0.5">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span className="text-xs font-bold text-stone-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Call to action for this format */}
                  <div className="pt-4 border-t border-stone-100">
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
                      className={`w-full bg-gradient-to-r ${currentFormat.color} hover:shadow-md active:scale-[0.98] text-white font-extrabold text-sm px-6 py-4 rounded-2xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer`}
                      id={`demo-btn-${currentFormat.id}`}
                    >
                      {currentFormat.demoLabel}
                      {currentFormat.demoUrl.startsWith("#") ? (
                        <FileDown className="w-4 h-4 animate-bounce-slow" />
                      ) : (
                        <ExternalLink className="w-4 h-4" />
                      )}
                    </a>
                    <p className="text-[10px] text-stone-500 font-semibold text-center mt-2">
                      {currentFormat.id === "dashboard" && "📱 Klik untuk membuka Web View demo di tab baru"}
                      {currentFormat.id === "flipbook" && "📖 Coba buka flipbook full screen untuk halaman yang lebih besar"}
                      {currentFormat.id === "pdf" && "💾 Dapatkan link download Google Drive secara instan setelah pembelian"}
                    </p>
                  </div>
                </div>

                {/* Right Side: EXTREMELY INTERACTIVE SIMULATORS (THE MAIN VALUE ADD) */}
                <div className="lg:col-span-7 bg-stone-50/50 rounded-3xl border border-stone-200/60 p-4 md:p-6 flex flex-col justify-center min-h-[360px] relative overflow-hidden">
                  
                  {/* Decorative backdrop patterns */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* INTERACTIVE 1: WEB DASHBOARD SIMULATOR */}
                  {activeFormat === "dashboard" && (
                    <div className="space-y-4 w-full h-full flex flex-col justify-between">
                      <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden flex-1 flex flex-col">
                        {/* Browser Bar Mockup */}
                        <div className="bg-stone-100 px-4 py-2 border-b border-stone-200 flex items-center justify-between">
                          <div className="flex gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                          </div>
                          <div className="bg-white text-[10px] font-mono px-3 py-0.5 rounded border border-stone-200 w-1/2 text-center text-stone-400 truncate">
                            smartmom.guide/app/dashboard
                          </div>
                          <div className="w-4 h-4" />
                        </div>

                        {/* Search Simulator form */}
                        <div className="p-3 bg-stone-50 border-b border-stone-100">
                          <form onSubmit={handleSearchSubmit} className="relative flex gap-2">
                            <div className="relative flex-1">
                              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                              <input
                                type="text"
                                placeholder="Cari info (Contoh: 'mual', 'napas', 'asi')..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white border border-stone-200 text-xs rounded-lg pl-8 pr-3 py-1.5 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/20 text-charcoal font-medium"
                              />
                            </div>
                            <button
                              type="submit"
                              className="bg-teal-500 hover:bg-teal-600 text-white font-extrabold text-[11px] px-3 py-1.5 rounded-lg transition-all"
                            >
                              Cari Bab
                            </button>
                          </form>
                          {showSearchFeedback && (
                            <p className="text-[10px] text-teal-600 font-bold mt-1.5 text-center animate-fade-in">
                              ✨ Bab yang relevan otomatis terpilih & ditampilkan di bawah!
                            </p>
                          )}
                        </div>

                        {/* Content Split: Navigation Sidebar & Reading Pane */}
                        <div className="grid grid-cols-12 flex-1 min-h-[220px]">
                          {/* Mini Chapters Navigation */}
                          <div className="col-span-4 bg-stone-50 border-r border-stone-100 p-2 flex flex-col gap-1.5">
                            <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest pl-1 mb-1 block">
                              Materi Ebook:
                            </span>
                            {Object.entries(chaptersData).map(([key, item]) => {
                              const isSel = selectedChapter === key;
                              return (
                                <button
                                  key={key}
                                  onClick={() => setSelectedChapter(key as any)}
                                  className={`w-full text-left text-[11px] p-2 rounded-lg transition-all font-bold ${
                                    isSel 
                                      ? "bg-teal-50 text-teal-700 border border-teal-100" 
                                      : "hover:bg-stone-100 text-stone-600 border border-transparent"
                                  }`}
                                >
                                  {key === "bab1" ? "🤰 Bab 1" : key === "bab2" ? "🧘 Bab 2" : "🍼 Bab 3"}
                                </button>
                              );
                            })}
                          </div>

                          {/* Mini Content Pane */}
                          <div className="col-span-8 p-4 flex flex-col justify-between text-left">
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={selectedChapter}
                                initial={{ opacity: 0, x: 5 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -5 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-2.5"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-[9px] font-black text-teal-600 uppercase bg-teal-50 px-2 py-0.5 rounded-md">
                                    {chaptersData[selectedChapter].category}
                                  </span>
                                  <span className="text-[9px] text-stone-400 font-bold">
                                    {chaptersData[selectedChapter].readTime}
                                  </span>
                                </div>
                                <h5 className="font-extrabold text-xs text-charcoal">
                                  {chaptersData[selectedChapter].title}
                                </h5>
                                <p className="text-[11px] text-stone-600 leading-relaxed italic">
                                  "{chaptersData[selectedChapter].excerpt}"
                                </p>
                              </motion.div>
                            </AnimatePresence>

                            <div className="pt-2 border-t border-stone-100 text-[10px] text-stone-400 font-semibold flex items-center justify-between">
                              <span>🔄 Navigasi Sekali Klik</span>
                              <span className="text-teal-600 font-bold">Simulasi Live</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-center font-bold text-stone-500">
                        💡 <span className="text-teal-600 font-black">Cobalah Klik Bab</span> atau <span className="text-teal-600 font-black">Cari Kata</span> di atas untuk mensimulasikan kepraktisan Web Dashboard kami!
                      </p>
                    </div>
                  )}

                  {/* INTERACTIVE 2: LIVE EMBEDDED 3D FLIPBOOK */}
                  {activeFormat === "flipbook" && (
                    <div className="space-y-4 w-full h-full flex flex-col justify-between items-center text-center">
                      
                      {/* Responsive iPad / Tablet Frame */}
                      <div className="w-full max-w-lg aspect-[4/3] rounded-3xl border-8 border-stone-800 bg-stone-900 shadow-xl relative overflow-hidden ring-4 ring-rose-500/10">
                        {/* Camera Notch decoration */}
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-stone-700 z-10" />
                        
                        {/* Interactive Ebook iFrame */}
                        <iframe
                          src="https://online.fliphtml5.com/rqndn/SmartMom-Guide-Ebook-2026-Flip-book/"
                          className="w-full h-full border-0 bg-white"
                          title="SmartMom Guide Sample 3D Flipbook"
                          referrerPolicy="no-referrer"
                          allowFullScreen
                        />
                      </div>

                      <div className="space-y-1">
                        <p className="text-xs font-black text-rose-600 uppercase tracking-widest flex items-center justify-center gap-1">
                          <Compass className="w-4 h-4 animate-spin-slow" />
                          BISA DIBOLAK-BALIK LANGSUNG DI ATAS!
                        </p>
                        <p className="text-[11px] text-stone-500 font-bold max-w-md mx-auto leading-relaxed">
                          Geser pinggiran kertas ke kiri/kanan di dalam layar tablet untuk membalik halaman sample materi secara 3D realistis.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* INTERACTIVE 3: PDF PRINTABLES CHECKLIST SIMULATOR */}
                  {activeFormat === "pdf" && (
                    <div className="space-y-5 w-full h-full flex flex-col justify-between">
                      <div className="bg-white rounded-3xl border border-stone-200 shadow-md p-5 text-left relative overflow-hidden">
                        
                        {/* Decorative printable guide bar */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 to-orange-500" />

                        <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                          <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600">
                              <Printer className="w-4 h-4" />
                            </div>
                            <div>
                              <h5 className="font-extrabold text-xs text-charcoal">
                                Contoh: Checklist Perlengkapan RS
                              </h5>
                              <p className="text-[10px] text-stone-400 font-bold">
                                Printable PDF Hemat Ukuran A4
                              </p>
                            </div>
                          </div>
                          <span className="bg-amber-100 text-amber-800 text-[9px] font-black uppercase px-2 py-0.5 rounded-full">
                            Bonus Gratis
                          </span>
                        </div>

                        {/* Checklist items */}
                        <div className="space-y-2.5 my-4">
                          <button
                            onClick={() => handleToggleItem("item1")}
                            className="w-full flex items-center gap-3 p-2 hover:bg-stone-50 rounded-xl transition-all border border-transparent hover:border-stone-100 text-left"
                          >
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                              completedItems.item1 
                                ? "bg-amber-500 border-amber-500 text-white" 
                                : "border-stone-300 bg-white"
                            }`}>
                              {completedItems.item1 && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <span className={`text-xs font-bold ${
                              completedItems.item1 ? "text-stone-400 line-through" : "text-charcoal"
                            }`}>
                              Dokumen Penting (KTP, Buku KIA, BPJS, Kartu RS)
                            </span>
                          </button>

                          <button
                            onClick={() => handleToggleItem("item2")}
                            className="w-full flex items-center gap-3 p-2 hover:bg-stone-50 rounded-xl transition-all border border-transparent hover:border-stone-100 text-left"
                          >
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                              completedItems.item2 
                                ? "bg-amber-500 border-amber-500 text-white" 
                                : "border-stone-300 bg-white"
                            }`}>
                              {completedItems.item2 && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <span className={`text-xs font-bold ${
                              completedItems.item2 ? "text-stone-400 line-through" : "text-charcoal"
                            }`}>
                              Baju Menyusui Kancing Depan & Gurita Ibu (3 Pcs)
                            </span>
                          </button>

                          <button
                            onClick={() => handleToggleItem("item3")}
                            className="w-full flex items-center gap-3 p-2 hover:bg-stone-50 rounded-xl transition-all border border-transparent hover:border-stone-100 text-left"
                          >
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                              completedItems.item3 
                                ? "bg-amber-500 border-amber-500 text-white" 
                                : "border-stone-300 bg-white"
                            }`}>
                              {completedItems.item3 && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <span className={`text-xs font-bold ${
                              completedItems.item3 ? "text-stone-400 line-through" : "text-charcoal"
                            }`}>
                              Set Pakaian Hangat Bayi, Bedong & Topi Rajut
                            </span>
                          </button>

                          <button
                            onClick={() => handleToggleItem("item4")}
                            className="w-full flex items-center gap-3 p-2 hover:bg-stone-50 rounded-xl transition-all border border-transparent hover:border-stone-100 text-left"
                          >
                            <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                              completedItems.item4 
                                ? "bg-amber-500 border-amber-500 text-white" 
                                : "border-stone-300 bg-white"
                            }`}>
                              {completedItems.item4 && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>
                            <span className={`text-xs font-bold ${
                              completedItems.item4 ? "text-stone-400 line-through" : "text-charcoal"
                            }`}>
                              Pompa ASI Portable & Kantong Steril Penampung
                            </span>
                          </button>
                        </div>

                        {/* Checklist progress bar */}
                        <div className="space-y-1.5 pt-3 border-t border-stone-100">
                          <div className="flex justify-between items-center text-[10px] font-black text-stone-500">
                            <span>PERSILAPAN PERSALINAN MOMMY:</span>
                            <span className="text-amber-600 font-black">{checklistProgress}% SIAP</span>
                          </div>
                          <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all duration-300"
                              style={{ width: `${checklistProgress}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-center font-bold text-stone-500">
                        💡 <span className="text-amber-600 font-black">Klik kotak checklist</span> di atas untuk mencoba mengorganisir tas bersalin secara live!
                      </p>
                    </div>
                  )}

                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
