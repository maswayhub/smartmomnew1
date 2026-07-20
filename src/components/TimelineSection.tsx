import React from "react";
import { Heart } from "lucide-react";

export default function TimelineSection() {
  const steps = [
    {
      title: "Trimester 1",
      icon: "🤍",
      color: "bg-white border-stone-200 text-stone-700",
      accent: "text-stone-600",
      items: ["Mual / Morning Sickness", "Perubahan Hormon & Mood", "Mengelola Emosi Sensitif", "Nutrisi Awal Janin"],
    },
    {
      title: "Trimester 2",
      icon: "💛",
      color: "bg-yellow-50 border-yellow-200 text-yellow-700",
      accent: "text-amber-700",
      items: ["Olahraga & Peregangan Aman", "Perkembangan Janin Mingguan", "Persiapan Mental Suami-Istri", "Jurnal Refleksi Diri"],
    },
    {
      title: "Trimester 3",
      icon: "❤️",
      color: "bg-rose-50 border-rose-200 text-rose-700",
      accent: "text-rose-700",
      items: ["Persiapan Persalinan Nyaman", "Checklist Hospital Bag", "Inisiasi Menyusui Dini (IMD)", "Teknik Napas Anti-Panik"],
    },
    {
      title: "Bayi Baru Lahir (0-6 Bulan)",
      icon: "👶",
      color: "bg-sky-50 border-sky-200 text-sky-700",
      accent: "text-sky-700",
      items: ["Manajemen Pola Tidur Bayi", "Langkah Mandi Tanpa Cemas", "Mengatasi Bayi Bingung Puting", "Penanganan Pertama Demam"],
    },
    {
      title: "Usia 0–5 Tahun",
      icon: "👧",
      color: "bg-emerald-50 border-emerald-200 text-emerald-700",
      accent: "text-emerald-700",
      items: ["Checklist MPASI Bergizi", "Stimulasi Motorik Halus & Kasar", "Kecerdasan Emosi & Tantrum", "Pancing Stimulasi Sensorik"],
    },
  ];

  return (
    <section id="timeline" className="py-16 md:py-24 bg-cream-light/55 border-b border-cream-dark">
      <div className="w-full max-w-4xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-warm-pink-dark">
            FASE PENDAMPINGAN LENGKAP
          </span>
          <h2 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight">
            Menemani Setiap Langkah Istimewa Mommy
          </h2>
          <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
          <p className="text-xs md:text-sm text-charcoal-light font-bold">
            SmartMom Guide tidak membiarkan Mommy sendirian di tengah jalan. Kami menemani dari garis dua sampai si kecil tumbuh lincah!
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-3xl border border-cream-dark shadow-3xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-xs transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center text-xl shadow-3xs ${step.color} font-black flex-shrink-0`}>
                  {step.icon}
                </div>
                <div>
                  <h4 className="font-extrabold text-base md:text-lg text-charcoal leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[10px] uppercase font-black tracking-wider text-charcoal-light/70">
                    Fokus Pembahasan Utama
                  </p>
                </div>
              </div>

              {/* Items Bullet List */}
              <div className="flex flex-wrap gap-2 sm:max-w-md">
                {step.items.map((item, idy) => (
                  <span 
                    key={idy} 
                    className={`text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full border border-cream-dark bg-cream-light/40 ${step.accent}`}
                  >
                    🌸 {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-md mx-auto pt-4">
          <div className="inline-flex items-center gap-1 bg-white border border-cream-dark px-4 py-2 rounded-2xl shadow-3xs text-xs font-bold text-charcoal-light">
            <Heart className="w-4 h-4 fill-warm-pink text-warm-pink" />
            <span>Satu Panduan Utuh untuk Bertahun-Tahun Kenyamanan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
