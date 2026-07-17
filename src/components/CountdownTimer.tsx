import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const COUNTDOWN_KEY = "smartmom_promo_countdown_target";
    const TWELVE_HOURS_MS = 12 * 60 * 60 * 1000;
    
    let targetTime = localStorage.getItem(COUNTDOWN_KEY);
    let targetTimestamp = targetTime ? parseInt(targetTime, 10) : 0;

    // If target timestamp doesn't exist, is invalid, or has expired, initialize a new 12-hour window
    if (!targetTimestamp || targetTimestamp < Date.now()) {
      targetTimestamp = Date.now() + TWELVE_HOURS_MS;
      localStorage.setItem(COUNTDOWN_KEY, targetTimestamp.toString());
    }

    const updateTimer = () => {
      const now = Date.now();
      let diff = targetTimestamp - now;

      // Reset timer automatically to maintain active promotional urgency
      if (diff <= 0) {
        targetTimestamp = Date.now() + TWELVE_HOURS_MS;
        localStorage.setItem(COUNTDOWN_KEY, targetTimestamp.toString());
        diff = TWELVE_HOURS_MS;
      }

      const totalSeconds = Math.floor(diff / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({ hours, minutes, seconds });
    };

    updateTimer(); // Initial call
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div 
      className="flex flex-col items-center justify-center p-4 bg-rose-50 border border-rose-100 rounded-2xl max-w-sm mx-auto space-y-2.5 shadow-2xs"
      id="promo-countdown-widget"
    >
      <div className="flex items-center gap-1.5 text-[11px] font-black text-rose-600 uppercase tracking-widest">
        <Clock className="w-3.5 h-3.5 animate-pulse" />
        SISA WAKTU PROMO TERBATAS
      </div>
      
      <div className="flex items-center gap-2">
        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="bg-rose-600 text-white font-black text-lg md:text-xl px-3 py-1.5 rounded-lg shadow-sm font-mono min-w-[38px] text-center">
            {formatNumber(timeLeft.hours)}
          </div>
          <span className="text-[9px] font-extrabold text-rose-500/80 mt-1 uppercase tracking-wider">Jam</span>
        </div>

        <span className="text-rose-600 font-black text-xl mb-4">:</span>

        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="bg-rose-600 text-white font-black text-lg md:text-xl px-3 py-1.5 rounded-lg shadow-sm font-mono min-w-[38px] text-center">
            {formatNumber(timeLeft.minutes)}
          </div>
          <span className="text-[9px] font-extrabold text-rose-500/80 mt-1 uppercase tracking-wider">Menit</span>
        </div>

        <span className="text-rose-600 font-black text-xl mb-4">:</span>

        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="bg-rose-600 text-white font-black text-lg md:text-xl px-3 py-1.5 rounded-lg shadow-sm font-mono min-w-[38px] text-center">
            {formatNumber(timeLeft.seconds)}
          </div>
          <span className="text-[9px] font-extrabold text-rose-500/80 mt-1 uppercase tracking-wider">Detik</span>
        </div>
      </div>
    </div>
  );
}
