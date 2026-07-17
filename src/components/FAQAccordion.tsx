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
          question: "Apakah mudah dipahami?",
          answer: (
            <p>
              Ya, 100%! Bahasa yang digunakan dalam ebook ini sangat <strong>sederhana, santun, hangat, dan langsung berfokus ke praktik nyata</strong> di kehidupan sehari-hari, bebas dari teori medis yang rumit dan membosankan.
            </p>
          )
        },
        {
          id: "t5",
          question: "Apakah suami juga bisa membacanya?",
          answer: (
            <p>
              Tentu saja! Kami menyediakan panduan khusus agar Ayah (suami) lebih siap secara mental dan sigap dalam membantu merawat bayi, sehingga Mommy tidak kelelahan sendirian dan pengasuhan si kecil bisa dinikmati bersama dengan penuh bahagia.
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
                      <th className="p-3 border-b border-cream-dark">Produk Premium</th>
                      <th className="p-3 border-b border-cream-dark text-right">Nilai Riil</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-cream-dark/60">
                    <tr>
                      <td className="p-3">📙 Ebook SmartMom Guide PDF</td>
                      <td className="p-3 text-right font-semibold">Rp199.000</td>
                    </tr>
                    <tr>
                      <td className="p-3">🗓️ Printable Parenting Planner</td>
                      <td className="p-3 text-right font-semibold">Rp129.000</td>
                    </tr>
                    <tr>
                      <td className="p-3">🎈 60.000+ Kids Activities Bundle</td>
                      <td className="p-3 text-right font-semibold">Rp399.000</td>
                    </tr>
                    <tr>
                      <td className="p-3">🎓 39.000+ Printable Edukasi Siap Cetak</td>
                      <td className="p-3 text-right font-semibold">Rp299.000</td>
                    </tr>
                    <tr>
                      <td className="p-3">🧠 Brain & Finger Gym Pack</td>
                      <td className="p-3 text-right font-semibold">Rp199.000</td>
                    </tr>
                    <tr>
                      <td className="p-3">🎨 300+ Mewarnai Anak Pack</td>
                      <td className="p-3 text-right font-semibold">Rp99.000</td>
                    </tr>
                    <tr>
                      <td className="p-3">💻 Dashboard Web Interaktif</td>
                      <td className="p-3 text-right font-semibold">Rp149.000</td>
                    </tr>
                    <tr>
                      <td className="p-3">📖 3D Flipbook Premium + Budget Planner</td>
                      <td className="p-3 text-right font-semibold">Rp248.000</td>
                    </tr>
                    <tr className="bg-warm-pink-light/30">
                      <td className="p-3 font-bold text-charcoal">TOTAL NILAI PAKET:</td>
                      <td className="p-3 text-right font-extrabold text-red-600">Rp1.722.000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-yellow-100/70 border border-yellow-200 rounded-xl p-3 text-center text-xs md:text-sm font-black text-charcoal">
                🎉 Spesial promo hari ini Mommy cukup membayar <span className="text-rose-600 text-base">Rp79.000</span> saja seumur hidup!
              </div>
            </div>
          )
        },
        {
          id: "b2",
          question: "Masih ada diskon lagi?",
          answer: (
            <div className="space-y-3">
              <p>Ada kabar gembira untuk Mommy! Mommy bisa klaim diskon tambahan sebesar <strong>36%</strong> dengan memasukkan kode kupon berikut di halaman checkout:</p>
              <div className="inline-block bg-yellow-200 border-2 border-dashed border-[#ffc300] text-charcoal text-center px-6 py-2.5 rounded-xl font-black text-lg tracking-wider">
                🎁 IBUCERDAS
              </div>
              <ul className="space-y-1 text-xs md:text-sm font-semibold text-stone-600 pl-1">
                <li>• Harga Promo Awal: <span className="line-through">Rp79.000</span></li>
                <li>• Setelah Input Voucher: <span className="text-rose-600 font-extrabold">± Rp50.500 (Kurang lebih Rp49.000) saja!</span></li>
                <li>• Masa Berlaku: <span className="text-amber-600">Terbatas khusus bulan ini saja</span>.</li>
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
                <li className="flex items-center gap-2">✅ <span>Dapatkan paket super lengkap senilai total <strong>Rp1.722.000</strong></span></li>
                <li className="flex items-center gap-2">✅ <span>Harga super murah promo bulan ini hanya <strong>Rp79.000</strong></span></li>
                <li className="flex items-center gap-2">✅ <span>Dapatkan harga makin hemat dengan kupon <strong>IBUCERDAS</strong> (potongan diskon 36%)</span></li>
                <li className="flex items-center gap-2 text-rose-600">⏳ <span><strong>Penawaran promo khusus bulan ini (hanya ± Rp50.500 / kurang lebih Rp49.000 saja dengan kupon!). Jangan sampai kelewatan ya Mom!</strong></span></li>
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
