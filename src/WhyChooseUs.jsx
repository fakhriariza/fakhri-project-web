import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Palette, Wrench, DollarSign, CircleX } from "lucide-react";

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
      title: "Ariza Studio",
      icon: Palette,
      points: [
        "Full custom website/app sesuai keinginanmu",
        "Cepat dan berpengalaman",
        "Bebas revisi apa saja",
        "domain dan email premium diurus oleh Ariza Studio",
        "Harga terjangkau, satu kali pembayaran bukan perbulan",
      ],
    },
    {
      title: "Tempat Jasa Buat Website Lain",
      icon: CircleX,
      points: [
        "Website hanya mengikuti template yang ada",
        "Harga tambahan jika ingin fitur lainnya seperti email, kalender, book meeting",
        "Revisi terbatas karena hanya mengukuti template",
        "Banyak biaya tambahan yang tidak kamu pahami",
      ],
    },
    {
      title: "Website Builder",
      icon: CircleX,
      points: [
        "Website terbatas, UI website hanya mengikuti sesuai template",
        "Domain dan segala isi website harus diurus sendiri",
        "Pembayaran setiap bulan, butuh biaya tambahan untuk upgrade fitur",
        "Tidak bebas menentukan fitur karena harus mengikuti tema atau template",
      ],
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
          <span>Keunggulan Kami</span>
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
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`group relative backdrop-blur-sm border rounded-3xl p-8 transition-all duration-700 hover:scale-105 cursor-pointer min-h-[400px] ${
              index === 0
                ? "bg-gradient-to-br from-[#0F9D58]/20 via-[#0F9D58]/10 to-[#064E3B]/20 border-[#0F9D58] hover:shadow-2xl hover:shadow-[#0F9D58]/30 hover:from-[#0F9D58]/30 hover:to-[#064E3B]/30"
                : "bg-white/5 border-white/20 hover:border-gray-400/50 hover:shadow-xl hover:bg-white/10"
            } ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
            style={{ transitionDelay: `${300 + index * 150}ms` }}
          >
            {/* Extra glow effect for first card */}
            {index === 0 && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F9D58]/5 via-transparent to-[#064E3B]/5 group-hover:from-[#0F9D58]/15 group-hover:to-[#064E3B]/15 transition-all duration-300 rounded-3xl"></div>
            )}

            <div className="relative z-10">
              {/* Icon with rotation animation */}
              <div
                className={`mb-6 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-700 group-hover:scale-110 ${
                  index === 0
                    ? "bg-gradient-to-r from-[#0F9D58] to-[#064E3B]"
                    : "bg-gray-600"
                } ${
                  isVisible ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"
                }`}
                style={{ transitionDelay: `${350 + index * 150}ms` }}
              >
                <reason.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3
                className={`font-epilogue text-2xl font-bold text-gray-900 mb-6 transition-all duration-700 ${
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
                    className={`font-manrope text-base text-gray-900 leading-relaxed flex items-start gap-2 transition-all duration-700 ${
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
                        index === 0 ? "bg-[#0F9D58]" : "bg-gray-600"
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
