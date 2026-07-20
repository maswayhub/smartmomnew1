import React from "react";
import { Check, Info, Heart } from "lucide-react";

export default function EmpathySections() {
  const invisibleChanges = [
    { text: "Mudah menangis tanpa alasan jelas", icon: "😢" },
    { text: "Mood swings & mudah tersinggung", icon: "⚡" },
    { text: "Takut bayi tidak tumbuh sehat di kandungan", icon: "👶" },
    { text: "Cemas & takut membayangkan rasa sakit persalinan", icon: "🤰" },
    { text: "Sulit memejamkan mata & sering terbangun tengah malam", icon: "💤" },
    { text: "Overthinking tiada henti memikirkan masa depan", icon: "🧠" },
    { text: "Merasa bersalah & takut menjadi ibu yang buruk", icon: "😔" },
    { text: "Merasa sendirian & terasing meskipun ada banyak orang di sekitar", icon: "🫂" },
  ];

  const painPoints = [
    "Mood berubah tanpa alasan yang jelas",
    "Sangat takut & cemas memikirkan proses melahirkan",
    "Selalu khawatir bayi di dalam kandungan tidak berkembang",
    "Bingung memilih informasi pengasuhan yang benar di internet",
    "Merasa tidak siap & tidak mampu memikul tanggung jawab jadi ibu",
    "Sulit tidur nyenyak karena gelisah & overthinking di malam hari",
    "Takut membuat kesalahan kecil yang membahayakan si kecil",
    "Merasa pasangan atau suami kurang mengerti perjuangan emosional Mommy",
  ];

  return (
    <div className="w-full flex flex-col">
      {/* SECTION BARU: Tidak Semua Perubahan Saat Hamil Terlihat */}
      <section id="perubahan-terlihat" className="bg-white py-16 md:py-24 border-y border-cream-dark">
        <div className="w-full max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight">
              Tidak Semua Perubahan Saat Hamil Terlihat dari Luar.
            </h2>
            <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
            <p className="text-sm md:text-base text-charcoal-light font-medium pt-2">
              Kadang Mommy terlihat baik-baik saja dan tersenyum di depan semua orang...
            </p>
          </div>

          <div className="bg-cream-light/60 p-6 md:p-10 rounded-[32px] border border-cream-dark space-y-8 max-w-2xl mx-auto">
            <p className="text-base font-black text-charcoal text-center">
              Tetapi di dalam hati, Mommy sedang bergulat dengan perasaan ini:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {invisibleChanges.map((item, index) => (
                <div key={index} className="flex items-center gap-3.5 bg-white p-4 rounded-2xl border border-cream-dark/50 shadow-3xs">
                  <span className="text-2xl flex-shrink-0" role="img" aria-label="emoji">
                    {item.icon}
                  </span>
                  <span className="text-xs md:text-sm text-charcoal font-semibold leading-relaxed">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <p className="text-base md:text-lg font-black text-warm-pink-dark italic">
                "Kalau Mommy pernah atau sedang merasakan salah satunya... Percayalah Mommy, Mommy tidak sendirian."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION BARU: Kenapa Semua Perasaan Itu Bisa Terjadi? */}
      <section id="penjelasan-hormonal" className="py-16 md:py-24 bg-cream-light/40 border-b border-cream-dark">
        <div className="w-full max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-[40px] border-2 border-cream-dark p-8 md:p-14 shadow-md space-y-8 max-w-3xl mx-auto relative overflow-hidden">
            {/* Soft decorative visual indicator */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-warm-pink-accent/15 rounded-full blur-xl -translate-y-6 translate-x-6" />

            <div className="space-y-4 text-center">
              <span className="inline-flex items-center gap-1.5 bg-warm-pink-light text-warm-pink-dark px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                <Info className="w-3.5 h-3.5" />
                Sisi Ilmiah Kehamilan yang Jarang Dibahas
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-charcoal">
                Kenapa Mommy Bisa Merasakan Semua Ini?
              </h3>
            </div>

            <div className="space-y-5 text-charcoal-light text-sm md:text-base leading-relaxed text-center max-w-2xl mx-auto">
              <p>
                Tahukah Mommy? Selama kehamilan, tubuh mengalami <strong className="text-charcoal">perubahan hormon yang sangat besar</strong> (seperti Estrogen & Progesteron yang melonjak hingga ratusan kali lipat!).
              </p>
              <p>
                Perubahan kimiawi tubuh yang masif ini <strong className="text-charcoal">secara langsung memengaruhi emosi, pola tidur, tingkat kecemasan,</strong> dan cara otak merespons stres harian Mommy.
              </p>
              <p>
                Ditambah lagi dengan banjirnya ratusan informasi yang saling bertentangan di internet, wajar sekali bila Mommy merasa bingung, kewalahan, dan overthinking.
              </p>
            </div>

            <div className="bg-warm-pink-light/30 border border-warm-pink/20 rounded-2xl p-6 text-center space-y-2 max-w-xl mx-auto">
              <p className="font-extrabold text-warm-pink-dark text-base md:text-lg">
                Yang perlu Mommy selalu ingat & simpan di hati:
              </p>
              <p className="text-xs md:text-sm text-charcoal-light font-bold">
                Mommy <span className="underline decoration-warm-pink font-black text-charcoal">tidak sedang gagal</span> menjadi seorang ibu. Mommy hanya sedang menjalani salah satu perubahan fisik & emosional terbesar dalam hidup seorang wanita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REVISI SECTION PAIN POINT: Yang Sering Membuat Ibu Hamil Menangis Diam-Diam */}
      <section id="masalah" className="py-16 md:py-24 bg-white border-b border-cream-dark">
        <div className="w-full max-w-4xl mx-auto px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-warm-pink-dark">
              PAIN POINT SPESIFIK IBU HAMIL
            </span>
            <h2 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight leading-tight">
              Yang Sering Membuat Ibu Hamil Menangis Diam-Diam
            </h2>
            <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {painPoints.map((point, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 bg-cream-light p-5 rounded-2xl border border-cream-dark/50 hover:border-warm-pink/40 shadow-3xs transition-all hover:translate-y-[-1px]"
              >
                <div className="w-6 h-6 rounded-full border-2 border-red-300 flex items-center justify-center text-red-500 font-extrabold flex-shrink-0 text-sm bg-red-50">
                  ✕
                </div>
                <p className="text-xs md:text-sm text-charcoal font-semibold leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-warm-pink-light/45 border border-warm-pink/20 rounded-3xl p-6 text-center space-y-2">
            <p className="text-xs md:text-sm text-charcoal-light font-bold leading-relaxed">
              Membaca daftar di atas saja mungkin sudah membuat dada Mommy terasa sesak karena terasa sangat nyata...
            </p>
            <p className="text-sm font-black text-warm-pink-dark">
              Mari kita akhiri lingkaran cemas ini bersama-sama, Mommy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
