import React from "react";
import { Check } from "lucide-react";

export default function EmotionalBenefits() {
  const benefits = [
    {
      title: "Lebih Tenang Menghadapi Persalinan",
      desc: "Menghapus bayangan cemas atau takut rasa sakit berlebih karena Mommy sudah membekali diri dengan panduan napas dan langkah rileks.",
    },
    {
      title: "Tidak Panik Saat Bayi Menangis",
      desc: "Mommy paham betul kode tangisan si kecil—apakah ia lapar, kembung, kepanasan, atau hanya butuh didekap hangat.",
    },
    {
      title: "Tidak Perlu Membuka Puluhan Artikel Setiap Hari",
      desc: "Menghemat energi mental Mommy dari banjir informasi internet dan forum yang sering kali malah membuat Mommy stres.",
    },
    {
      title: "Lebih Percaya Diri Mengambil Keputusan",
      desc: "Mengasuh si kecil dengan tegap dan tenang tanpa perlu baper atau merasa tersindir oleh omongan orang di sekitar.",
    },
    {
      title: "Suami Juga Bisa Ikut Belajar",
      desc: "Bahasa panduan yang sangat simpel dan praktis memudahkan suami untuk mengerti tugas pendampingan tanpa perlu berdebat.",
    },
    {
      title: "Memiliki Satu Tempat Kembali Setiap Kali Bingung",
      desc: "Kapan pun Mommy ragu atau cemas, cukup buka smartphone dan temukan jawaban yang menenangkan dalam hitungan detik.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-cream-dark">
      <div className="w-full max-w-4xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-warm-pink-dark">
            BUKAN SEKADAR DAFTAR MATERI
          </span>
          <h2 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight">
            Yang Akan Mommy Rasakan Setelah Memiliki SmartMom Guide
          </h2>
          <div className="w-16 h-1 bg-warm-pink mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="bg-cream-light/40 p-6 rounded-3xl border border-cream-dark/40 flex gap-4 hover:border-warm-pink/30 hover:bg-white transition-all"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-1">
                ✓
              </div>
              <div className="space-y-1 text-left">
                <h4 className="font-extrabold text-sm md:text-base text-charcoal leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-charcoal-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
