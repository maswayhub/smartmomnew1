import React from "react";
import { Heart, Check } from "lucide-react";

export default function DaddySection() {
  const daddyPoints = [
    { title: "Pahami Perubahan Emosi Istri", desc: "Dapatkan tips praktis memahami fluktuasi hormon Mommy, agar Daddy tahu cara meresponsnya dengan penuh kesabaran dan cinta." },
    { title: "Panduan Menjadi Suami Siaga", desc: "Checklist persiapan krusial bagi Daddy menjelang hari H persalinan agar tidak panik dan tahu apa yang harus dilakukan." },
    { title: "Pembagian Tugas Pasca Melahirkan", desc: "Langkah kompak memandikan, menyendawakan, dan menenangkan bayi rewel demi menghindari kelelahan ekstrem pada Mommy." }
  ];

  return (
    <section id="untuk-daddy" className="py-16 md:py-24 bg-gradient-to-br from-[#f0f9ff] to-[#f8fafc] border-b border-cream-dark">
      <div className="w-full max-w-4xl mx-auto px-6 space-y-12">
        
        <div className="bg-white p-8 md:p-14 rounded-[36px] border border-sky-100 shadow-md max-w-3xl mx-auto space-y-8 relative overflow-hidden">
          {/* Decorative heart icon */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/30 rounded-full blur-2xl -translate-y-6 translate-x-6" />
          
          <div className="space-y-4 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 bg-sky-100 text-sky-700 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest">
              🧔🏻‍♂️ KHUSUS UNTUK DADDY / CALON AYAH
            </span>
            <h2 className="text-2.5xl md:text-4xl font-black text-charcoal tracking-tight">
              Untuk Daddy yang Ingin Lebih Siap
            </h2>
            <div className="w-16 h-1 bg-sky-400 rounded-full mx-auto md:mx-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Short Quote Column */}
            <div className="md:col-span-5 bg-sky-50/50 p-6 rounded-2xl border border-sky-100 text-center md:text-left space-y-3">
              <p className="text-base font-extrabold text-sky-900 leading-relaxed italic">
                "Kehamilan bukan hanya perjalanan Mommy. SmartMom Guide juga membantu Daddy memahami perubahan emosi, kebutuhan, dan cara mendampingi istri dengan lebih baik."
              </p>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Heart className="w-4 h-4 text-sky-500 fill-sky-500" />
                <span className="text-xs text-sky-800 font-bold">Kolaborasi Indah Ayah & Ibu</span>
              </div>
            </div>

            {/* List Column */}
            <div className="md:col-span-7 space-y-5">
              <p className="text-xs md:text-sm text-stone-500 font-bold">
                Sekitar 20-30% pembeli SmartMom Guide adalah suami hebat yang ingin belajar, atau dibeli bersama sebagai bekal masa depan. Di panduan ini, Daddy akan belajar:
              </p>
              
              <div className="space-y-4">
                {daddyPoints.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div className="space-y-0.5 text-left">
                      <h4 className="font-extrabold text-sm text-charcoal">{item.title}</h4>
                      <p className="text-xs text-stone-500 leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
