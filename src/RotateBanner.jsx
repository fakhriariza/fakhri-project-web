import { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

function RotateBanner() {
  const messages = [
    "Buat website landing page",
    "Buat website personal branding",
    "Buat website toko UMKM",
    "Buat aplikasi untuk cafe",
    "Buat aplikasi untuk restoran",
    "Buat website LMS",
    "Buat website admin",
    "Buat website e-commerce",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setIsAnimating(false);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-epilogue inline-flex items-center gap-6 px-4 py-2 bg-transparant backdrop-blur-sm border border-emerald-500 rounded-full text-sm text-gray-900 mb-4 hover:scale-105 transition cursor-pointer overflow-hidden">
      <div className="min-w-[220px] relative h-5 overflow-hidden flex items-center justify-center">
        <span
          className={`absolute inset-0 flex items-center justify-center text-center transition-all duration-400 ${
            isAnimating
              ? "opacity-0 translate-y-full"
              : "opacity-100 translate-y-0"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {messages[currentIndex]}
        </span>
      </div>
    </div>
  );
}

export default RotateBanner;
