import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag } from "lucide-react";

const NAMES = [
  "ADINDA RANI", "MEIDY SAFIRA", "PUTRI AMALIA", "DIAN KUSUMA", "INDAH LESTARI",
  "RIZKA PRATIWI", "CITRA DEWI", "ANISA FITRIANI", "SITI RAHMAH", "DINI FEBRIANTI",
  "AMALIA KUSUMA", "FENNY CHANDRA", "RINA WIDYASTUTI", "LESTARI DEWI", "AYU SARTIKA",
  "NIA KURNIAWATI", "BELLA INDAH", "SHEILA MARGARETHA", "WULAN PERMATA", "RATNA SARI"
];

const CITIES = [
  "SURABAYA", "JAKARTA", "BANDUNG", "MEDAN", "SEMARANG",
  "MAKASSAR", "PALEMBANG", "YOGYAKARTA", "DENPASAR", "BALIKPAPAN"
];

const TIME_AGO = [
  "Baru saja", "1 menit yang lalu", "2 menit yang lalu", "3 menit yang lalu", "5 menit yang lalu"
];

interface PurchaseNotification {
  name: string;
  city: string;
  time: string;
}

export default function SocialProofPopup() {
  const [notification, setNotification] = useState<PurchaseNotification | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let active = true;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let hideTimeoutId: ReturnType<typeof setTimeout> | null = null;

    const scheduleNext = () => {
      if (!active) return;
      // Random delay between 5000 and 15000 ms
      const randomDelay = Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000;
      
      timeoutId = setTimeout(() => {
        if (!active) return;
        
        const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
        const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];
        const randomTime = TIME_AGO[Math.floor(Math.random() * TIME_AGO.length)];

        setNotification({
          name: randomName,
          city: randomCity,
          time: randomTime
        });

        // Hide after 3.5 seconds
        hideTimeoutId = setTimeout(() => {
          setNotification(null);
          // Once hidden, schedule the NEXT one
          scheduleNext();
        }, 3500);

      }, randomDelay);
    };

    // First display after 2.5 seconds
    timeoutId = setTimeout(() => {
      if (!active) return;
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];
      const randomTime = TIME_AGO[Math.floor(Math.random() * TIME_AGO.length)];

      setNotification({
        name: randomName,
        city: randomCity,
        time: randomTime
      });

      hideTimeoutId = setTimeout(() => {
        setNotification(null);
        scheduleNext();
      }, 3500);
    }, 2500);

    return () => {
      active = false;
      if (timeoutId) clearTimeout(timeoutId);
      if (hideTimeoutId) clearTimeout(hideTimeoutId);
    };
  }, []);

  return (
    <div className="fixed top-20 md:top-auto md:bottom-6 left-1/2 -translate-x-1/2 md:left-6 md:translate-x-0 z-50 pointer-events-none max-w-[270px] sm:max-w-xs md:max-w-sm w-[calc(100vw-32px)]">
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: isMobile ? -40 : 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isMobile ? -30 : 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-white/95 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl border border-cream-dark shadow-2xl flex items-center gap-2.5 md:gap-3.5 pointer-events-auto"
            id="social-proof-toast"
          >
            {/* Soft pink notification icon */}
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-warm-pink-light text-warm-pink-dark flex items-center justify-center flex-shrink-0 shadow-2xs">
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
            </div>

            {/* Notification content */}
            <div className="flex-1 min-w-0 text-left">
              <p className="text-[8px] md:text-[10px] text-stone-400 font-extrabold tracking-wider uppercase mb-0.5">
                NOTIFIKASI PEMBELIAN
              </p>
              <p className="text-[10px] md:text-xs font-black text-charcoal truncate">
                {notification.name} <span className="text-stone-400 font-normal">dari</span> {notification.city}
              </p>
              <p className="text-[8px] md:text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                telah membeli produk ini • {notification.time}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
