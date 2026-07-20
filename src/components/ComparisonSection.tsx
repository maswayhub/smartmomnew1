import React from "react";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";

export default function ComparisonSection() {
  const socialMediaFlaws = [
    { text: "Informasi Terpisah-pisah", desc: "Harus mencari satu per satu saat butuh cepat, memakan waktu istirahat Mommy." },
    { text: "Tidak Berurutan", desc: "Tidak ada kurikulum yang jelas dari trimester awal hingga perawatan bayi." },
    { text: "Saling Bertentangan", desc: "Satu akun bilang A, akun lain bilang B, membuat Mommy semakin overthinking & cemas." },
    { text: "Sulit Dipraktikkan", desc: "Teori akademis yang panjang dan rumit tanpa panduan langkah demi langkah yang nyata." },
  ];

  const smartMomAdvantages = [
    { text: "Terstruktur & Utuh", desc: "Semua jawaban terkumpul dalam satu panduan komprehensif tanpa perlu beralih aplikasi." },
    { text: "Berurutan Rapi", desc: "Menyusun perjalanan pengasuhan langkah demi langkah secara logis dan tepat waktu." },
    { text: "Valid & Menenangkan", desc: "Informasi terkurasi hangat, bebas perdebatan forum, ramah kesehatan mental Mommy." },
    { text: "Siap Praktik Instan", desc: "Berisi petunjuk to-the-point, lembar checklist, dan panduan praktis siap sedia di HP." },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-cream-dark">
      <div className="w-full max-w-4xl mx-auto px-6 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-warm-pink-dark">PERBANDINGAN NYATA</span>
          <h2 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight">
            Kenapa Memilih SmartMom Guide?
          </h2>
          <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
          <p className="text-xs md:text-sm text-charcoal-light font-bold">
            Mencari info gratisan di internet seringkali justru menambah kecemasan Mommy. Bandingkan perbedaannya:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto items-stretch">
          
          {/* Internet / Social Media Column */}
          <div className="bg-stone-50 rounded-3xl p-6 md:p-8 border border-stone-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3.5 pb-4 border-b border-stone-200">
                <div className="w-11 h-11 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center text-xl shadow-3xs">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-stone-700 text-sm uppercase tracking-wide">Info Gratis di Internet</h3>
                  <p className="text-[11px] text-stone-500 font-bold">Google, TikTok, IG, & YouTube</p>
                </div>
              </div>

              <div className="space-y-4">
                {socialMediaFlaws.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                      ✕
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="font-extrabold text-sm text-stone-700">{item.text}</h4>
                      <p className="text-xs text-stone-500 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-red-50/50 p-3.5 rounded-xl border border-red-100/50 text-center">
              <p className="text-[11px] text-red-700 font-extrabold leading-normal">
                ⚠️ Hasilnya: Waktu habis tersita, semakin bingung, cemas, dan overthinking di malam hari.
              </p>
            </div>
          </div>

          {/* SmartMom Guide Column */}
          <div className="bg-gradient-to-br from-white to-warm-pink-light/10 rounded-3xl p-6 md:p-8 border-2 border-warm-pink flex flex-col justify-between space-y-6 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-warm-pink text-white text-[9px] font-black uppercase px-4 py-1 rounded-bl-xl tracking-wider">
              REKOMENDASI UTAMA
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3.5 pb-4 border-b border-warm-pink/20">
                <div className="w-11 h-11 rounded-2xl bg-warm-pink text-white flex items-center justify-center text-xl shadow-3xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-warm-pink-dark text-sm uppercase tracking-wide">SmartMom Guide</h3>
                  <p className="text-[11px] text-warm-pink font-extrabold">Kurikulum Pengasuhan Komplit</p>
                </div>
              </div>

              <div className="space-y-4">
                {smartMomAdvantages.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div className="space-y-0.5">
                      <h4 className="font-extrabold text-sm text-charcoal">{item.text}</h4>
                      <p className="text-xs text-charcoal-light leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-teal-50/60 p-3.5 rounded-xl border border-teal-100/60 text-center">
              <p className="text-[11px] text-teal-800 font-extrabold leading-normal">
                ✨ Hasilnya: Hemat waktu, hati terasa adem, dan percaya diri mengasuh si kecil.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
