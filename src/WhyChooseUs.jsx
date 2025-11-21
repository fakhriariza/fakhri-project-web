import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Check, X } from "lucide-react";
import arizaLogo from "./assets/logo_a_black.png";

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const reasons = [
    {
      title: "Ariza Labs",
      icon: arizaLogo,
      points: [
        "Full custom website/app sesuai keinginanmu",
        "Cepat dan berpengalaman",
        "Bebas revisi apa saja",
        "Domain dan email premium diurus oleh Ariza Labs",
        "Harga terjangkau, satu kali pembayaran bukan perbulan",
      ],
      isHighlight: true,
    },
    {
      title: "Tempat Jasa Buat Website Lain",
      icon: X,
      points: [
        "Website hanya mengikuti template yang ada",
        "Harga tambahan jika ingin fitur lainnya seperti email, kalender, book meeting",
        "Revisi terbatas karena hanya mengukuti template",
        "Banyak biaya tambahan yang tidak kamu pahami",
      ],
      isHighlight: false,
    },
    {
      title: "Website Builder",
      icon: X,
      points: [
        "Website terbatas, UI website hanya mengikuti sesuai template",
        "Domain dan segala isi website harus diurus sendiri",
        "Pembayaran setiap bulan, butuh biaya tambahan untuk upgrade fitur",
        "Tidak bebas menentukan fitur karena harus mengikuti tema atau template",
      ],
      isHighlight: false,
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="relative z-10 max-w-7xl mx-auto px-6 py-20"
    >
      {/* Header */}
      <div className="text-center mb-16">
        {/* Badge with scale animation */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-[#0F9D58] rounded-full text-sm text-[#0F9D58] mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <Sparkles className="w-4 h-4" />
          <span>Perbandingan Layanan</span>
        </div>

        {/* Heading with fade and slide down */}
        <h2
          className={`font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: "150ms" }}
        >
          Mengapa Harus Kami?
        </h2>
        <p
          className={`font-manrope text-lg text-gray-600 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Lihat mengapa Ariza Labs adalah pilihan terbaik
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`group relative backdrop-blur-sm border rounded-3xl p-8 transition-all duration-700 ${
              reason.isHighlight
                ? "hover:scale-105 cursor-pointer md:col-span-1"
                : ""
            } min-h-[400px] ${
              reason.isHighlight
                ? "bg-gradient-to-br from-[#0F9D58]/20 via-[#0F9D58]/10 to-[#064E3B]/20 border-[#0F9D58] hover:shadow-2xl hover:shadow-[#0F9D58]/30 hover:from-[#0F9D58]/30 hover:to-[#064E3B]/30"
                : "bg-white/5 border-white/20 grayscale hover:grayscale-0 transition-all"
            } ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
            style={{ transitionDelay: `${300 + index * 150}ms` }}
          >
            {/* Highlight Badge */}
            {reason.isHighlight && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#0F9D58] to-[#064E3B] text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap animate-pulse">
                ⭐ PILIHAN TERBAIK
              </div>
            )}

            {/* Extra glow effect for first card */}
            {reason.isHighlight && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F9D58]/5 via-transparent to-[#064E3B]/5 group-hover:from-[#0F9D58]/15 group-hover:to-[#064E3B]/15 transition-all duration-300 rounded-3xl"></div>
            )}

            <div className="relative z-10">
              {/* Icon with rotation animation */}
              <div
                className={`mb-6 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                  reason.isHighlight ? "group-hover:scale-105" : ""
                } ${reason.isHighlight ? "bg-black" : "bg-gray-400"} ${
                  isVisible ? "opacity-100 rotate-0" : "opacity-0 -rotate-12"
                }`}
                style={{ transitionDelay: `${350 + index * 120}ms` }}
              >
                {reason.isHighlight ? (
                  <img src={reason.icon} className="w-7 h-7" />
                ) : (
                  <reason.icon className="w-7 h-7 text-white" />
                )}
              </div>

              {/* Title */}
              <h3
                className={`font-epilogue text-2xl font-bold ${
                  reason.isHighlight ? "text-gray-900" : "text-gray-500"
                } mb-6 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                {reason.title}
              </h3>

              {/* Points with staggered animation */}
              <ul className="space-y-3">
                {reason.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className={`font-manrope text-base leading-relaxed flex items-start gap-2 transition-all duration-700 ${
                      reason.isHighlight ? "text-gray-900" : "text-gray-500"
                    } ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{
                      transitionDelay: `${
                        450 + index * 150 + pointIndex * 80
                      }ms`,
                    }}
                  >
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        reason.isHighlight ? "bg-[#0F9D58]" : "bg-gray-400"
                      }`}
                    ></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
