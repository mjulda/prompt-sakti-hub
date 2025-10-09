import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 39,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset when timer reaches zero
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-destructive text-destructive-foreground rounded-xl w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center shadow-lg animate-scale-in">
        <span className="text-3xl sm:text-4xl font-bold">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-sm sm:text-base font-semibold mt-2 text-foreground">
        {label}
      </span>
    </div>
  );

  return (
    <div className="bg-card border-2 border-destructive/20 rounded-2xl p-6 sm:p-8 shadow-xl animate-fade-in">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="h-5 w-5 text-destructive animate-pulse" />
        <h3 className="text-xl sm:text-2xl font-bold text-center text-destructive">
          Promo Berakhir dan Harga Kembali Normal dalam waktu:
        </h3>
      </div>
      
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        <TimeBox value={timeLeft.hours} label="Jam" />
        <span className="text-3xl font-bold text-destructive mb-6">:</span>
        <TimeBox value={timeLeft.minutes} label="Menit" />
        <span className="text-3xl font-bold text-destructive mb-6">:</span>
        <TimeBox value={timeLeft.seconds} label="Detik" />
      </div>

      <p className="text-center mt-4 text-sm text-muted-foreground">
        ⚡ Jangan lewatkan kesempatan hemat hingga 40%!
      </p>
    </div>
  );
};
