import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Check, HelpCircle } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean; time: string }>>([
    {
      text: "Halo Mommy! 🌸 Saya Amanda dari SmartMomGuide. Ada yang bisa saya bantu terkait detail panduan atau cara pemesanan?",
      isBot: true,
      time: "09:00"
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    // Add user message
    const userMsg = {
      text,
      isBot: false,
      time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Simulate friendly customer support bot reply after a short delay
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "Terima kasih banyak Mommy sudah menghubungi Amanda! ❤️ Ada yang bisa Amanda bantu terkait pemesanan atau detail produk SmartMom Guide?";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes("didapat") || lowerText.includes("apa saja yang didapat") || lowerText.includes("materi") || lowerText.includes("isi")) {
        replyText = "Mommy akan mendapatkan Paket Mega Bonus Bundle lengkap senilai total *Rp1.722.000*, yang terdiri dari:\n\n" +
          "1. 📙 *Ebook SmartMom Guide PDF* (Masa Kehamilan s/d Anak Usia 5 Tahun)\n" +
          "2. 🗓️ *Printable Parenting Planner Premium* (Checklist lahiran, tracker minum susu, dll.)\n" +
          "3. 🎈 *60.000+ Kids Activities Bundle* (Aktivitas sensorik & motorik anti-gadget)\n" +
          "4. 🎓 *39.000+ Printable Edukasi Siap Cetak* (Flashcard, poster, game edukatif)\n" +
          "5. 🧠 *Brain & Finger Gym Pack* (Stimulasi otak kiri & kanan)\n" +
          "6. 🎨 *300+ Mewarnai Anak Pack* (Halaman mewarnai lucu siap cetak)\n" +
          "7. 💻 *Dashboard Web Interaktif* (Membaca bab instan hemat kuota di web)\n" +
          "8. 📖 *3D Flipbook Premium + Budget Planner* (Simulasi buku fisik & planner keuangan)\n\n" +
          "Semua produk ini bisa Mommy miliki hanya dengan investasi promo sekali bayar seumur hidup! 🥰";
      } else if (lowerText.includes("berapa lama") || lowerText.includes("lama saya") || lowerText.includes("kapan") || lowerText.includes("mendapatkan") || lowerText.includes("pengiriman") || lowerText.includes("terima")) {
        replyText = "Setelah pembayaran berhasil dikonfirmasi, ebook beserta seluruh bonus premiumnya akan *langsung terkirim otomatis detik itu juga melalui WhatsApp resmi & email Mommy*! ⚡\n\nJadi tidak perlu menunggu, Mommy bisa langsung mendownload dan membacanya di HP, tablet, atau laptop saat ini juga. Sangat praktis!";
      } else if (lowerText.includes("bonus") || lowerText.includes("apa saja bonusnya") || lowerText.includes("planner")) {
        replyText = "Tentu Mommy! Selain Ebook Utama, Mommy mendapatkan 7 bonus eksklusif siap pakai:\n\n" +
          "✨ Printable Parenting Planner (PDF siap cetak)\n" +
          "✨ 60.000+ Kids Activities (Anti-screentime)\n" +
          "✨ 39.000+ Printable Edukasi (Flashcard & puzzle)\n" +
          "✨ Brain & Finger Gym Pack (Stimulasi kecerdasan)\n" +
          "✨ 300+ Halaman Mewarnai Anak Lucu\n" +
          "✨ Dashboard Web Interaktif (Akses cepat)\n" +
          "✨ 3D Flipbook Premium & Budget Planner Keuangan Keluarga\n\nSemua file bonus berformat resolusi tinggi siap cetak berulang kali di rumah Mommy! 🖨️";
      } else if (lowerText.includes("harga") || lowerText.includes("berapa harganya") || lowerText.includes("bayar") || lowerText.includes("diskon") || lowerText.includes("voucher") || lowerText.includes("promo")) {
        replyText = "Kabar gembira buat Mommy! 😍\n\nHarga promo khusus bulan ini adalah *Rp79.000* (dari harga normal Rp199.000).\n\nEits, masih ada tambahan diskon *36%* lagi! Mommy tinggal masukkan kode kupon:\n\n🎁 *IBUCERDAS*\n\ndi halaman checkout. Harganya akan langsung terpotong menjadi hanya *± Rp50.500 (kurang lebih Rp49.000) saja!* 💸\n\nInvestasi sekali bayar, akses selamanya tanpa biaya bulanan. Jangan sampai kelewatan promo bulan ini ya Mom! ⏰";
      } else if (lowerText.includes("aman") || lowerText.includes("apakah ini aman") || lowerText.includes("pembayaran")) {
        replyText = "Sangat aman dan terpercaya, Mommy! 🛡️\n\nPembayaran diproses melalui platform resmi *Lynk.id*. Mommy bisa memilih metode pembayaran yang paling nyaman:\n\n✅ QRIS (GoPay, OVO, DANA, ShopeePay, LinkAja)\n✅ Transfer Bank / Virtual Account\n\nSemua transaksi terenkripsi aman, dan materi langsung terkirim otomatis ke email & nomor WhatsApp Mommy setelah pembayaran sukses!";
      }

      setMessages((prev) => [
        ...prev,
        {
          text: replyText,
          isBot: true,
          time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })
        }
      ]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40 font-sans">
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative bg-[#25D366] text-white p-4 rounded-full shadow-2xl cursor-pointer flex items-center justify-center gap-2 hover:bg-[#20ba56] transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300 group"
        aria-label="Akses WhatsApp Bantuan"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500"></span>
        </span>
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out font-bold text-sm whitespace-nowrap">
          Tanya Kak Amanda
        </span>
      </motion.button>

      {/* Mini Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[340px] bg-white rounded-3xl shadow-2xl border border-cream-dark overflow-hidden flex flex-col max-h-[480px]"
          >
            {/* Chat Drawer Header */}
            <div className="bg-[#075E54] text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-800 text-sm">
                    KA
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Kak Amanda</h4>
                  <p className="text-[10px] text-emerald-100">SmartMom Concierge • Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-[#128C7E] rounded-full transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-[#ECE5DD] space-y-3 min-h-[160px] max-h-[220px]">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed shadow-xs whitespace-pre-line ${
                      m.isBot
                        ? "bg-white text-charcoal rounded-tl-none"
                        : "bg-[#DCF8C6] text-charcoal rounded-tr-none"
                    }`}
                  >
                    <p>{m.text}</p>
                    <div className="flex items-center justify-end gap-1 text-[9px] text-stone-400 mt-1 font-semibold">
                      <span>{m.time}</span>
                      {!m.isBot && <Check className="w-3 h-3 text-sky-500" />}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-stone-500 p-2.5 rounded-2xl rounded-tl-none text-[11px] shadow-xs italic flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-stone-400 animate-bounce [animation-delay:0.4s]" />
                    Amanda sedang mengetik...
                  </div>
                </div>
              )}
            </div>

            {/* Quick Helper Questions */}
            <div className="bg-cream-light p-2.5 border-t border-cream-dark flex flex-col gap-1.5 overflow-y-auto max-h-[140px] shrink-0">
              <span className="text-[9px] font-black text-stone-400 uppercase tracking-wider pl-1">FAQ Terkait Panduan:</span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => handleSendMessage("Apa saja yang didapat?")}
                  className="text-[10px] font-bold bg-white text-soft-teal border border-cream-dark hover:border-warm-pink rounded-full px-2.5 py-1 text-left transition-all cursor-pointer"
                >
                  📦 Apa saja yang didapat?
                </button>
                <button
                  onClick={() => handleSendMessage("Berapa lama saya akan mendapatkannya?")}
                  className="text-[10px] font-bold bg-white text-soft-teal border border-cream-dark hover:border-warm-pink rounded-full px-2.5 py-1 text-left transition-all cursor-pointer"
                >
                  ⚡ Berapa lama saya akan mendapatkan?
                </button>
                <button
                  onClick={() => handleSendMessage("Apa saja bonusnya?")}
                  className="text-[10px] font-bold bg-white text-soft-teal border border-cream-dark hover:border-warm-pink rounded-full px-2.5 py-1 text-left transition-all cursor-pointer"
                >
                  🎁 Apa saja bonusnya?
                </button>
                <button
                  onClick={() => handleSendMessage("Berapa harganya?")}
                  className="text-[10px] font-bold bg-white text-soft-teal border border-cream-dark hover:border-warm-pink rounded-full px-2.5 py-1 text-left transition-all cursor-pointer"
                >
                  💸 Berapa harganya?
                </button>
                <button
                  onClick={() => handleSendMessage("Apakah ini aman?")}
                  className="text-[10px] font-bold bg-white text-soft-teal border border-cream-dark hover:border-warm-pink rounded-full px-2.5 py-1 text-left transition-all cursor-pointer"
                >
                  🛡️ Apakah ini aman?
                </button>
              </div>
            </div>

            {/* Input Message Area */}
            <div className="p-3 bg-white border-t border-cream-dark flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ketik pertanyaan Mommy di sini..."
                className="flex-1 px-3 py-2 bg-stone-100 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#075E54] font-medium"
              />
              <button
                onClick={() => handleSendMessage()}
                className="p-2 bg-[#075E54] text-white rounded-xl hover:bg-[#128C7E] transition-colors focus:outline-none"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
