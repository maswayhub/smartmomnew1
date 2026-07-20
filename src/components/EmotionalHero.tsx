import React from "react";
import { Sparkles, ShoppingBag, ArrowRight, Star } from "lucide-react";

interface EmotionalHeroProps {
  pregnantMotherNightPhone: string;
  smartMomLogo: string;
  onScrollToSolusi: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  onScrollToPriceCard: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function EmotionalHero({
  pregnantMotherNightPhone,
  smartMomLogo,
  onScrollToSolusi,
  onScrollToPriceCard,
}: EmotionalHeroProps) {
  return (
    <section className="relative w-full max-w-4xl mx-auto px-6 pt-10 pb-12 md:py-16 flex flex-col items-center gap-7 text-center">
      <div className="space-y-6 flex flex-col items-center">
        {/* Core USP Headline (Emotional & Relatable) — PRIORITAS 1 (Bigger & more mencolok) */}
        <h1 className="text-4xl md:text-6xl lg:text-7.5xl font-black text-charcoal leading-[1.1] tracking-tight text-center max-w-3xl">
          Yang Paling Berat Saat Hamil Kadang <span className="bg-yellow-200 px-1 text-charcoal rounded-sm">Bukan Perutnya...</span> Tapi Isi Kepalanya.
        </h1>

        {/* PRIORITAS 2 — Micro Trust Tepat Setelah Headline (Sentence case, warmer, premium) */}
        <p className="text-sm md:text-base text-warm-pink-dark font-extrabold px-5 py-2.5 bg-warm-pink-light/35 rounded-full inline-flex items-center gap-2 border border-warm-pink-accent/20">
          🌸 Panduan praktis yang menemani Mommy dari garis dua hingga menjadi orang tua.
        </p>

        {/* Sub-headline with PRIORITAS 7 (Future Pacing) */}
        <p className="text-base md:text-xl text-charcoal-light font-bold leading-relaxed max-w-2xl mx-auto">
          Setiap perubahan emosi, rasa takut, dan kebingungan selama kehamilan adalah hal yang wajar. <span className="text-warm-pink-dark">Mommy tidak harus menghadapinya sendirian.</span> SmartMom Guide hadir menjadi teman yang menemani setiap langkah perjalanan Mommy agar Mommy bisa menjalani kehamilan dengan lebih tenang dan menyambut si kecil dengan penuh percaya diri.
        </p>
      </div>

      {/* Hero Visual — PRIORITAS 6 (Jarak didekatkan 20-30px) */}
      <div className="relative flex justify-center w-full max-w-2xl mb-1">
        {/* Soft decorative background glow */}
        <div className="absolute -inset-4 bg-warm-pink-accent/20 rounded-full blur-3xl" />
        
        <div className="relative bg-white p-3.5 rounded-[32px] shadow-2xl border border-cream-dark overflow-hidden transform hover:scale-[1.01] transition-transform duration-300">
          <img
            src={pregnantMotherNightPhone}
            alt="Ibu hamil cemas overthinking malam hari memegang HP"
            className="w-full h-auto rounded-[24px] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="space-y-5 flex flex-col items-center w-full">
        {/* Soft CTA Box — PRIORITAS 3 (Highly contrasty, premium, non-blending) & PRIORITAS 6 */}
        <div className="space-y-3 pt-2 w-full flex flex-col items-center">
          <a
            href="#solusi"
            onClick={onScrollToSolusi}
            className="w-full sm:w-auto bg-gradient-to-r from-warm-pink-dark to-rose-500 hover:from-rose-600 hover:to-warm-pink-dark active:scale-[0.98] text-white font-black text-lg md:text-2xl px-12 py-5.5 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer group text-center border-b-4 border-rose-700"
          >
            LIHAT ISI SMARTMOM GUIDE 🌸
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform animate-pulse" />
          </a>
          
          {/* PRIORITAS 4 — Micro Proof (Neutral/Trustworthy) */}
          <p className="text-xs md:text-sm text-charcoal-light font-bold max-w-md mx-auto leading-relaxed">
            🛡️ Dirancang untuk menemani perjalanan ibu hamil dari garis dua hingga menjadi orang tua.
          </p>
          <p className="text-xs text-charcoal-light/80 font-semibold pl-1 text-center">
            ✨ Mari bersantai sejenak, Mommy. Ada tempat aman untuk setiap keraguan Mommy.
          </p>
        </div>

        {/* PRIORITAS 4 — Testimonial relocated DI BAWAH CTA */}
        <div className="max-w-md mx-auto bg-white/90 backdrop-blur-xs p-4 rounded-2xl shadow-sm border border-cream-dark flex items-center gap-3.5 text-left transform hover:scale-[1.01] transition-transform duration-300">
          <div className="w-10 h-10 rounded-full bg-warm-pink-light flex items-center justify-center font-bold text-xs text-warm-pink-dark flex-shrink-0 shadow-3xs">
            M
          </div>
          <div>
            <div className="flex gap-0.5 mb-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-xs font-extrabold text-charcoal leading-tight">
              "Hati adem & gak panik lagi. Panduan ini beneran jadi penyelamat aku saat cemas tengah malam."
            </p>
            <p className="text-[10px] text-charcoal-light font-bold mt-0.5">
              Mommy Arina — Jakarta (Hamil Trimester 2)
            </p>
          </div>
        </div>

        {/* Trust Strip — PRIORITAS 5 (Reordered Badges) */}
        <div className="pt-6 border-t border-cream-dark flex flex-wrap justify-center items-center gap-y-2 gap-x-4 text-[11px] md:text-xs text-charcoal-light font-bold w-full">
          <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-cream-dark shadow-3xs">
            🤰 Dibuat untuk Ibu Hamil & Ibu Baru
          </span>
          <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-cream-dark shadow-3xs">
            📱 Akses Selamanya
          </span>
          <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-cream-dark shadow-3xs">
            🔒 Pembelian Aman
          </span>
          <span className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-cream-dark shadow-3xs">
            📧 Materi Digital Instan
          </span>
        </div>
      </div>
    </section>
  );
}
