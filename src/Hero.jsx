import React, { useEffect, useState, useContext } from "react";
import { Rocket, Zap, ArrowRight, Sparkles } from "lucide-react";
import RotateBanner from "./RotateBanner";
import { ScrollContext } from "./App";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const { scrollToElement } = useContext(ScrollContext);

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex flex-col items-center justify-center pb-32 overflow-hidden">
      <div className="text-center max-w-4xl mx-auto">
        {/* Banner with fade and scale animation */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isLoaded
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 -translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <RotateBanner />
        </div>

        {/* Main Heading - First Line */}
        <h1 className="font-epilogue text-4xl md:text-7xl lg:text-7xl font-bold text-gray-900 mb-2 leading-tight">
          <span
            className={`block transition-all duration-1000 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-8 blur-sm"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            Dari Ide Jadi Nyata
          </span>

          {/* Main Heading - Second Line with Gradient */}
          <span
            className={`block bg-gradient-to-r from-[#064E3B] via-[#0F9D58] to-[#053B33] bg-clip-text text-transparent transition-all duration-1000 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-8 blur-sm"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            Bangun Websitemu Sendiri Bersama Kami
          </span>
        </h1>

        {/* Subheading with fade and slide up */}
        <p
          className={`font-manrope text-xl md:text-2xl text-gray-900 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          Bukan template. Bukan copy-paste. Website khusus buat kamu.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <button
              onClick={() => scrollToElement("layanan")}
              className="font-epilogue group px-8 py-4 bg-gradient-to-r text-xl md:text-xl lg:text-xl from-[#064E3B] to-[#0F9D58] rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer"
            >
              Lihat Layanan
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>

          {/* Secondary Button */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-95"
            }`}
            style={{ transitionDelay: "1150ms" }}
          >
            <button className="font-epilogue group px-8 py-4 text-xl md:text-xl lg:text-xl bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-full text-gray-900 font-semibold hover:bg-green-500/20 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer">
              Portofolio
            </button>
          </div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating circle 1 */}
          <div
            className={`absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-[#0F9D58]/10 to-[#064E3B]/10 rounded-full blur-3xl transition-all duration-[2000ms] ease-out ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{ transitionDelay: "500ms" }}
          />

          {/* Floating circle 2 */}
          <div
            className={`absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-[#064E3B]/10 to-[#0F9D58]/10 rounded-full blur-3xl transition-all duration-[2000ms] ease-out ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          />

          {/* Floating circle 3 */}
          <div
            className={`absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-[#0F9D58]/5 to-[#053B33]/5 rounded-full blur-2xl transition-all duration-[2000ms] ease-out ${
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
            style={{ transitionDelay: "900ms" }}
          />
        </div>
      </div>
    </div>
  );
}
