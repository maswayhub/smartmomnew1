import { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, ShieldCheck, Mail, Phone, User, ChevronRight, FileDown, ExternalLink, QrCode, CreditCard, Wallet } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "input" | "payment" | "success";

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<Step>("input");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [selectedPayment, setSelectedPayment] = useState<string>("qris");

  // Track InitiateCheckout when modal opens
  useEffect(() => {
    if (isOpen) {
      (window as any).fbq?.("track", "InitiateCheckout");
    }
  }, [isOpen]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", phone: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Nama lengkap wajib diisi ya Mommy";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi untuk pengiriman panduan";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email kurang sesuai";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor WhatsApp aktif wajib diisi";
      isValid = false;
    } else if (formData.phone.length < 9) {
      newErrors.phone = "Nomor WhatsApp terlalu pendek";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNextStep = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      (window as any).fbq?.("track", "AddPaymentInfo");
      setStep("payment");
    }
  };

  const handlePaymentSubmit = () => {
    (window as any).fbq?.("track", "Purchase", {
      value: 99000,
      currency: "IDR"
    });
    setStep("success");
  };

  const resetModal = () => {
    setStep("input");
    setFormData({ name: "", email: "", phone: "" });
    setErrors({ name: "", email: "", phone: "" });
    onClose();
  };

  // Simulated PDF download helper
  const handleDownloadSample = () => {
    // Generate a simple text file representing the digital guide and trigger download
    const element = document.createElement("a");
    const file = new Blob([
      `--- SMARTMOMGUIDE DIGITAL SAMPLE ---\n\nHalo Mommy ${formData.name || "Sobat Mom"}!\n\nSelamat! Ini adalah file sampel akses instan SmartMomGuide Anda.\n\nEbook Utama (Masa Kehamilan - 5 Tahun) & seluruh paket bonus siap cetak telah dialokasikan untuk email Anda: ${formData.email || "yulius4788@gmail.com"}.\n\nSilakan kunjungi Folder Google Drive Resmi Kami di: https://drive.google.com/drive/folders/mock-smartmom-guide\n\nSelamat mendampingi buah hati tercinta dengan penuh cinta dan rasa percaya diri!\n\nSalam Hangat,\nSmartMomGuide Team 2026`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "SmartMomGuide_Akses_Digital.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetModal}
          className="fixed inset-0 bg-charcoal/60 backdrop-blur-xs"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
          className="relative bg-cream-light w-full max-w-lg rounded-3xl shadow-2xl border border-cream-dark overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-cream-dark flex justify-between items-center bg-white">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-soft-teal animate-pulse" />
                <span className="text-xs font-semibold tracking-wider text-soft-teal uppercase">
                  Checkout Aman (via Lynk.id)
                </span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mt-1">SmartMomGuide Package</h3>
            </div>
            <button
              onClick={resetModal}
              className="p-2 text-charcoal-light hover:text-charcoal hover:bg-cream/40 rounded-full transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content / Scrollable Area */}
          <div className="p-6 overflow-y-auto flex-1">
            {/* Step Indicators */}
            {step !== "success" && (
              <div className="flex items-center justify-center gap-4 mb-6 text-xs font-semibold uppercase tracking-wider">
                <span className={`flex items-center gap-1.5 pb-1 border-b-2 transition-colors ${step === "input" ? "border-warm-pink text-warm-pink-dark" : "border-transparent text-charcoal-light"}`}>
                  1. Informasi Mommy
                </span>
                <ChevronRight className="w-4 h-4 text-cream-dark" />
                <span className={`flex items-center gap-1.5 pb-1 border-b-2 transition-colors ${step === "payment" ? "border-warm-pink text-warm-pink-dark" : "border-transparent text-charcoal-light"}`}>
                  2. Metode Pembayaran
                </span>
              </div>
            )}

            {step === "input" && (
              <form onSubmit={handleNextStep} className="space-y-4">
                <div className="bg-warm-pink-light/40 p-4 rounded-2xl border border-warm-pink/15 text-xs text-charcoal-light leading-relaxed mb-4">
                  🌸 <strong>Pemberitahuan:</strong> Pastikan Mommy mengisi alamat email dengan benar ya, karena akses langsung ke Google Drive berisi ebook & ribuan file siap cetak akan otomatis dikirimkan ke email tersebut.
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-charcoal flex items-center gap-1.5">
                    <User className="w-4 h-4 text-warm-pink" />
                    Nama Lengkap Mommy
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Mommy Indah Lestari"
                    className={`w-full px-4 py-3 bg-white rounded-xl border ${errors.name ? 'border-red-400 focus:ring-red-100' : 'border-cream-dark focus:ring-warm-pink/20'} focus:outline-none focus:ring-3 font-medium transition-all text-sm`}
                  />
                  {errors.name && <p className="text-xs text-red-500 font-medium pl-1">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-charcoal flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-warm-pink" />
                    Alamat Email Mommy
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Contoh: mommyindah@gmail.com"
                    className={`w-full px-4 py-3 bg-white rounded-xl border ${errors.email ? 'border-red-400 focus:ring-red-100' : 'border-cream-dark focus:ring-warm-pink/20'} focus:outline-none focus:ring-3 font-medium transition-all text-sm`}
                  />
                  {errors.email && <p className="text-xs text-red-500 font-medium pl-1">{errors.email}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-charcoal flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-warm-pink" />
                    Nomor WhatsApp Aktif
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Contoh: 081234567890"
                    className={`w-full px-4 py-3 bg-white rounded-xl border ${errors.phone ? 'border-red-400 focus:ring-red-100' : 'border-cream-dark focus:ring-warm-pink/20'} focus:outline-none focus:ring-3 font-medium transition-all text-sm`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 font-medium pl-1">{errors.phone}</p>}
                </div>

                {/* Summary Box */}
                <div className="bg-white p-4 rounded-2xl border border-cream-dark mt-6">
                  <div className="flex justify-between items-center text-xs font-semibold text-charcoal-light">
                    <span>Total Harga Paket</span>
                    <span className="line-through text-red-400">Rp199.000</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm font-bold text-charcoal">Spesial Hari Ini (Sekali Bayar)</span>
                    <span className="text-lg font-extrabold text-soft-teal-dark">Rp99.000</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-soft-teal hover:bg-soft-teal-dark active:scale-[0.98] text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Lanjut ke Pembayaran
                  <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            )}

            {step === "payment" && (
              <div className="space-y-5">
                <h4 className="font-bold text-sm text-charcoal-light uppercase tracking-wider">
                  Pilih Saluran Pembayaran Aman
                </h4>

                <div className="grid grid-cols-1 gap-3">
                  {/* QRIS Option */}
                  <label className={`flex items-center justify-between p-4 bg-white rounded-2xl border cursor-pointer transition-all ${selectedPayment === "qris" ? "border-soft-teal bg-soft-teal/5 shadow-xs" : "border-cream-dark hover:border-warm-pink/40"}`}>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="payment_method"
                        checked={selectedPayment === "qris"}
                        onChange={() => setSelectedPayment("qris")}
                        className="text-soft-teal focus:ring-soft-teal"
                      />
                      <div className="flex items-center gap-2">
                        <QrCode className="w-5 h-5 text-soft-teal-dark" />
                        <div>
                          <p className="font-bold text-charcoal text-sm">QRIS (Otomatis & Instan)</p>
                          <p className="text-xs text-charcoal-light">Bisa scan dari GoPay, OVO, ShopeePay, DANA & M-Banking</p>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold bg-soft-teal-light/20 text-soft-teal-dark px-2 py-0.5 rounded-full">Populer</span>
                  </label>

                  {/* Virtual Account Option */}
                  <label className={`flex items-center gap-3 p-4 bg-white rounded-2xl border cursor-pointer transition-all ${selectedPayment === "va" ? "border-soft-teal bg-soft-teal/5 shadow-xs" : "border-cream-dark hover:border-warm-pink/40"}`}>
                    <input
                      type="radio"
                      name="payment_method"
                      checked={selectedPayment === "va"}
                      onChange={() => setSelectedPayment("va")}
                      className="text-soft-teal focus:ring-soft-teal"
                    />
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-charcoal-light" />
                      <div>
                        <p className="font-bold text-charcoal text-sm">Transfer Virtual Account</p>
                        <p className="text-xs text-charcoal-light">BCA, Mandiri, BRI, BNI (Verifikasi Otomatis)</p>
                      </div>
                    </div>
                  </label>

                  {/* E-Wallet Direct Option */}
                  <label className={`flex items-center gap-3 p-4 bg-white rounded-2xl border cursor-pointer transition-all ${selectedPayment === "wallet" ? "border-soft-teal bg-soft-teal/5 shadow-xs" : "border-cream-dark hover:border-warm-pink/40"}`}>
                    <input
                      type="radio"
                      name="payment_method"
                      checked={selectedPayment === "wallet"}
                      onChange={() => setSelectedPayment("wallet")}
                      className="text-soft-teal focus:ring-soft-teal"
                    />
                    <div className="flex items-center gap-2">
                      <Wallet className="w-5 h-5 text-charcoal-light" />
                      <div>
                        <p className="font-bold text-charcoal text-sm">E-Wallet Direct</p>
                        <p className="text-xs text-charcoal-light">DANA, OVO, LinkAja</p>
                      </div>
                    </div>
                  </label>
                </div>

                {/* QRIS Visualizer if selected */}
                {selectedPayment === "qris" && (
                  <div className="bg-white p-6 rounded-2xl border border-cream-dark flex flex-col items-center justify-center space-y-3">
                    <div className="text-xs font-bold text-charcoal-light uppercase tracking-widest bg-stone-100 px-3 py-1 rounded-md">
                      QRIS INDONESIA
                    </div>
                    {/* Simulated QR Code using styling */}
                    <div className="w-44 h-44 bg-charcoal p-2 rounded-xl flex items-center justify-center relative shadow-md">
                      <div className="absolute inset-4 bg-white grid grid-cols-4 gap-1 p-2">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className={`rounded-xs ${
                              (i % 3 === 0 || i % 7 === 0 || i === 0 || i === 3 || i === 12 || i === 15)
                                ? "bg-charcoal"
                                : "bg-neutral-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="z-10 bg-white font-black text-[10px] text-charcoal px-1.5 py-0.5 rounded-sm border border-charcoal uppercase shadow-xs">
                        SMG
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-semibold text-charcoal-light">Silakan scan kode QR di atas untuk menyelesaikan pendaftaran.</p>
                      <p className="text-xs font-bold text-soft-teal-dark mt-1">Total: Rp99.000</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between gap-4 mt-6">
                  <button
                    onClick={() => setStep("input")}
                    className="flex-1 py-4 px-4 bg-cream text-charcoal font-bold rounded-2xl hover:bg-cream-dark transition-all text-sm text-center"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={handlePaymentSubmit}
                    className="flex-[2] bg-soft-teal hover:bg-soft-teal-dark active:scale-[0.98] text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                  >
                    Konfirmasi Pembayaran
                  </button>
                </div>
              </div>
            )}

            {step === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-6"
              >
                <div className="flex justify-center">
                  <div className="bg-emerald-50 p-4 rounded-full border border-emerald-100">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-charcoal">Pembayaran Berhasil! 🎉</h3>
                  <p className="text-sm font-semibold text-charcoal-light">
                    Selamat Mommy <span className="text-soft-teal-dark font-bold">{formData.name}</span>, akun Mommy telah aktif!
                  </p>
                  <p className="text-xs text-charcoal-light leading-relaxed px-4">
                    Seluruh paket SmartMomGuide & Mega Bonus Digital telah dialokasikan dan dikirimkan ke email: <span className="font-bold text-charcoal">{formData.email}</span>
                  </p>
                </div>

                {/* Simulated Google Drive & PDF download widget */}
                <div className="bg-white p-5 rounded-2xl border border-cream-dark space-y-4 max-w-sm mx-auto shadow-sm">
                  <p className="text-xs font-bold text-charcoal flex items-center justify-center gap-1">
                    📂 Akses Instan Google Drive
                  </p>
                  
                  <button
                    onClick={handleDownloadSample}
                    className="w-full bg-warm-pink hover:bg-warm-pink-dark text-white font-bold py-3 px-4 rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 text-xs"
                  >
                    <FileDown className="w-4 h-4" />
                    Unduh Akses Digital (File .TXT)
                  </button>

                  <a
                    href="https://drive.google.com/drive/folders/mock-smartmom-guide"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-cream hover:bg-cream-dark text-charcoal-light hover:text-charcoal font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs border border-cream-dark"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Buka Folder Google Drive
                  </a>
                </div>

                <div className="text-xs text-charcoal-light pt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Akses tersimpan selamanya di akun Mommy.
                </div>

                <button
                  onClick={resetModal}
                  className="w-full bg-charcoal hover:bg-charcoal/90 text-white font-bold py-3.5 px-6 rounded-2xl transition-all text-sm"
                >
                  Selesai & Tutup
                </button>
              </motion.div>
            )}
          </div>

          {/* Footer Safe Seals */}
          <div className="bg-white px-6 py-4 border-t border-cream-dark flex items-center justify-center gap-4 text-[11px] text-charcoal-light font-medium">
            <span className="flex items-center gap-1 text-emerald-600">
              <ShieldCheck className="w-4 h-4" />
              Sertifikasi Aman SSL
            </span>
            <span>•</span>
            <span>Garanasi Akses Selamanya</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
