import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, Sparkles, BookOpen, CreditCard, Heart } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: ReactNode;
}

interface FAQCategory {
  categoryName: string;
  icon: ReactNode;
  items: FAQItem[];
}

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const categories: FAQCategory[] = [
    {
      categoryName: "Tentang SmartMom Guide",
      icon: <Heart className="w-5 h-5 text-warm-pink" />,
      items: [
        {
          id: "t1",
          question: "Apa itu SmartMom Guide?",
          answer: (
            <p>
              SmartMom Guide adalah ebook digital yang membantu calon ibu dan ibu baru menjalani kehamilan, persalinan, hingga merawat bayi dengan lebih tenang dan percaya diri.
            </p>
          )
        },
        {
          id: "t2",
          question: "Siapa yang cocok membaca ebook ini?",
          answer: (
            <div className="space-y-2">
              <p>Sangat cocok untuk:</p>
              <ul className="space-y-1.5 list-none pl-1">
                <li className="flex items-center gap-2"><span>👰</span> <span><strong>Calon pengantin</strong> (persiapan pranikah)</span></li>
                <li className="flex items-center gap-2"><span>🤰</span> <span><strong>Ibu hamil</strong> (Trimester 1, 2, & 3)</span></li>
                <li className="flex items-center gap-2"><span>👩‍🍼</span> <span><strong>Ibu baru</strong> (persalinan & menyusui)</span></li>
                <li className="flex items-center gap-2"><span>👨</span> <span><strong>Ayah</strong> yang ingin ikut belajar mengasuh bayi</span></li>
                <li className="flex items-center gap-2"><span>🎁</span> <span>Cocok juga sebagai <strong>kado/hadiah istimewa</strong> untuk kerabat calon ibu.</span></li>
              </ul>
            </div>
          )
        },
        {
          id: "t3",
          question: "Apa bedanya dengan tips di Instagram atau TikTok?",
          answer: (
            <p>
              Tips di media sosial sering kali <strong>terpisah-pisah, sepotong-sepotong, dan simpang siur</strong> sehingga membingungkan. SmartMom Guide menyusun semua materi secara <strong>lengkap, runtut, terstruktur rapi, dan mudah dipahami</strong> dalam satu ebook panduan praktis yang bisa Mommy buka kapan saja tanpa perlu pusing mencarinya kembali.
            </p>
          )
        },
        {
          id: "t4",
          question: "Apakah cocok untuk trimester pertama?",
          answer: (
            <p>
              <strong>Sangat cocok!</strong> Bahkan sangat disarankan dibaca sedini mungkin sejak garis dua. Bab-bab awal membahas tuntas tentang penanganan morning sickness, nutrisi krusial janin trimester pertama, hingga cara mengelola emosi dan kecemasan yang melonjak drastis di awal kehamilan.
            </p>
          )
        },
        {
          id: "t5",
          question: "Apakah ini menggantikan dokter?",
          answer: (
            <p>
              <strong>Tidak sama sekali.</strong> SmartMom Guide adalah panduan pendamping emosional dan praktis harian untuk membantu Mommy tenang dan terstruktur. Ini tidak menggantikan diagnosis, pemeriksaan medis rutin, atau saran dari dokter spesialis kandungan dan bidan Mommy.
            </p>
          )
        },
        {
          id: "t6",
          question: "Bagaimana jika saya mengalami kehamilan berisiko?",
          answer: (
            <p>
              Jika Mommy memiliki kondisi kehamilan berisiko (misal preeklamsia, diabetes gestasional, dll), Mommy tetap bisa membaca ebook ini untuk mendapatkan dukungan emosional dan tips pengasuhan umum. Namun, untuk tindakan medis dan saran diet spesifik, selalu prioritaskan arahan langsung dari dokter kandungan Mommy.
            </p>
          )
        },
        {
          id: "t7",
          question: "Apakah bisa dibaca bersama suami?",
          answer: (
            <p>
              <strong>Tentu saja, sangat disarankan!</strong> Kehamilan adalah perjalanan bersama. Membaca bersama suami sangat membantu menyamakan pemahaman tentang perubahan emosi Mommy, mempersiapkan checklist persalinan bersama, hingga membagi tugas merawat bayi pasca melahirkan dengan kompak tanpa perdebatan.
            </p>
          )
        },
        {
          id: "t8",
          question: "Bagaimana kalau saya tidak terbiasa membaca ebook?",
          answer: (
            <p>
              Tenang saja Mom! Kami mendesain SmartMom Guide dengan visual yang sangat cantik, interaktif, tidak membosankan, dan to-the-point. Selain format PDF standar, Mommy juga mendapatkan akses 3D Flipbook interaktif yang rasanya seperti membalik lembar buku asli, sangat nyaman dibaca di layar HP kapan saja.
            </p>
          )
        }
      ]
    },
    {
      categoryName: "Produk & Bonus",
      icon: <BookOpen className="w-5 h-5 text-soft-teal" />,
      items: [
        {
          id: "b1",
          question: "Apa saja yang saya dapatkan?",
          answer: (
            <div className="space-y-4">
              <p className="font-bold text-charcoal">Mommy akan mendapatkan akses lengkap paket berikut ini:</p>
              <div className="overflow-x-auto rounded-xl border border-cream-dark">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-cream/70 text-charcoal font-bold">
                      <th className="p-3 border-b border-cream-dark">Produk & Bonus</th>
                      <th className="p-3 border-b border-cream-dark text-right">Nilai Riil</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cream-dark/60">
                    <tr>
                      <td className="p-3">📙 Ebook SmartMom Guide Premium PDF</td>
                      <td className="p-3 text-right font-semibold">Rp199.000</td>
                    </tr>
                    <tr>
                      <td className="p-3">🗓️ Bonus: Printable Parenting Planner</td>
                      <td className="p-3 text-right font-semibold">Rp129.000</td>
                    </tr>
                    <tr>
                      <td className="p-3">💰 Bonus: Budget Planner Lahiran (Excel Kalkulator)</td>
                      <td className="p-3 text-right font-semibold">Rp99.000</td>
                    </tr>
                    <tr>
                      <td className="p-3">💻 Dashboard Web Interaktif + 3D Flipbook</td>
                      <td className="p-3 text-right font-semibold">Termasuk</td>
                    </tr>
                    <tr className="bg-warm-pink-light/30">
                      <td className="p-3 font-bold text-charcoal">TOTAL NILAI PAKET:</td>
                      <td className="p-3 text-right font-extrabold text-red-600">Rp427.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-yellow-100/70 border border-yellow-200 rounded-xl p-3 text-center text-xs md:text-sm font-black text-charcoal">
                🎉 Khusus Anda untuk Bulan Ini: <span className="line-through text-stone-400 mr-2">Rp199.000</span> <span className="text-rose-600 text-base font-black">Bayar Suka-suka!</span>
              </div>
            </div>
          )
        },
        {
          id: "b2",
          question: "Apakah perlu memasukkan kode kupon?",
          answer: (
            <div className="space-y-3">
              <p>Mommy <strong>tidak perlu memasukkan kode kupon</strong> apa pun!</p>
              <div className="inline-block bg-teal-50 border-2 border-dashed border-soft-teal text-charcoal text-center px-6 py-2.5 rounded-xl font-black text-base md:text-lg tracking-wider">
                ✨ Promo Bulan Ini: Bayar Suka-suka
              </div>
              <ul className="space-y-1 text-xs md:text-sm font-semibold text-stone-600 pl-1">
                <li>• Harga Normal: <span className="line-through">Rp199.000</span></li>
                <li>• Khusus Bulan Ini: <span className="text-rose-600 font-extrabold">Bayar Suka-suka di halaman checkout!</span></li>
                <li>• Akses: <span className="text-emerald-700">Langsung aktif seumur hidup, tanpa biaya langganan</span>.</li>
              </ul>
            </div>
          )
        }
      ]
    },
    {
      categoryName: "Pembayaran & Pengiriman",
      icon: <CreditCard className="w-5 h-5 text-[#075E54]" />,
      items: [
        {
          id: "p1",
          question: "Bagaimana cara pembayarannya?",
          answer: (
            <p>
              Proses transaksi 100% aman dan praktis melalui platform payment gateway resmi <strong>Lynk.id</strong>. Mommy bisa membayar menggunakan berbagai metode populer seperti: <strong>QRIS</strong> (bisa GoPay, ShopeePay, OVO, DANA, LinkAja) atau melalui <strong>Transfer Bank / Virtual Account</strong>.
            </p>
          )
        },
        {
          id: "p2",
          question: "Bagaimana saya menerima ebook?",
          answer: (
            <p>
              Setelah pembayaran berhasil dikonfirmasi oleh sistem, seluruh akses link download Google Drive, data ebook, dan bonus melimpah akan <strong>langsung dikirimkan secara otomatis detik itu juga melalui WhatsApp resmi dan Email Mommy</strong>. Tanpa menunggu lama, Mommy bisa langsung membacanya!
            </p>
          )
        },
        {
          id: "p3",
          question: "Apakah ini buku fisik?",
          answer: (
            <p>
              Bukan, ini adalah <strong>ebook/materi digital</strong> (PDF resolusi tinggi, interaktif web dashboard, & 3D Flipbook). Format digital ini memudahkan Mommy menyimpannya dengan aman di HP, tablet, maupun laptop. Mommy juga bebas mencetaknya sendiri di rumah jika lebih menyukai membaca versi fisik kertas.
            </p>
          )
        },
        {
          id: "p4",
          question: "Apakah bisa dibaca selamanya?",
          answer: (
            <p>
              Ya, betul! Sekali investasi, file ebook dan seluruh bonusnya akan <strong>menjadi milik pribadi Mommy selamanya</strong>. Tidak ada biaya langganan bulanan maupun biaya tersembunyi apa pun.
            </p>
          )
        },
        {
          id: "p5",
          question: "Bagaimana jika kesulitan mengakses ebook?",
          answer: (
            <p>
              Mommy tidak perlu khawatir sama sekali! Jika menemui kendala teknologi atau bingung cara membuka file, tim Customer Care kami siap membantu mendampingi Mommy via WhatsApp sampai semua file berhasil terunduh dengan aman.
            </p>
          )
        }
      ]
    },
    {
      categoryName: "Kenapa Harus Beli Sekarang?",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
      items: [
        {
          id: "c1",
          question: "Kenapa saya harus mengambil kesempatan ini sekarang juga?",
          answer: (
            <div className="space-y-3">
              <p>Masa tumbuh kembang buah hati Mommy tidak bisa diulang kembali. Memulai bekal ilmu yang tepat adalah wujud kasih sayang terbaik. Ambil sekarang karena:</p>
              <ul className="space-y-1.5 list-none pl-1 text-xs md:text-sm font-semibold">
                <li className="flex items-center gap-2">✅ <span>Dapatkan Ebook SmartMom Guide lengkap beserta <strong>Bonus Parenting Planner & Budget Planner Lahiran</strong></span></li>
                <li className="flex items-center gap-2">✅ <span>Harga normal <span className="line-through text-stone-400">Rp199.000</span> dicoret</span></li>
                <li className="flex items-center gap-2 text-rose-600">⏳ <span><strong>Penawaran promo khusus Anda untuk bulan ini: Bayar Suka-suka tanpa kupon! Jangan sampai kelewatan ya Mom!</strong></span></li>
              </ul>
            </div>
          )
        }
      ]
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto space-y-10" id="faq-section">
      {categories.map((cat, catIndex) => (
        <div key={catIndex} className="space-y-4">
          {/* Category Header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-cream/50 rounded-2xl border border-cream-dark/40 w-fit">
            {cat.icon}
            <span className="font-extrabold text-charcoal text-xs md:text-sm uppercase tracking-wider">
              {cat.categoryName}
            </span>
          </div>

          {/* Accordion Items for this Category */}
          <div className="space-y-3">
            {cat.items.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  id={`faq-item-${item.id}`}
                  className="bg-white rounded-2xl border border-cream-dark shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-warm-pink/20"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-warm-pink mt-1 flex-shrink-0" />
                      <span className="font-semibold text-charcoal text-base md:text-lg leading-snug">
                        {item.question}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="flex-shrink-0 bg-cream-light p-2 rounded-full text-charcoal-light"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-charcoal-light text-sm md:text-base border-t border-cream-light/60 leading-relaxed pl-14 whitespace-normal">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
