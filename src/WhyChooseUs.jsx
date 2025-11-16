import React from "react";
import { Sparkles, Palette, Wrench, DollarSign } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Ariza Studio",
      icon: Palette,
      points: [
        "Full custom website/app sesuai keinginanmu",
        "Cepat dan berpengalaman",
        "Bebas revisi apa saja",
        "Pengurusan domain dan email premium",
        "Harga terjangkau, satu kali pembayaran",
      ],
    },
    {
      title: "Jasa buat website lain",
      icon: Wrench,
      points: [
        "Website hanya mengikuti template yang ada",
        "Harga tambahan jika ingin fitur lainnya seperti email",
        "Revisi terbatas karena hanya mengukuti template",
      ],
    },
    {
      title: "Website Builder",
      icon: DollarSign,
      points: [
        "Website terbatas, UI website hanya sesuai template",
        "Harga tambahan jika ingin fitur lainnya seperti email",
        "Mengganti domain harus upgrade ke premium",
      ],
    },
  ];

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-[#0F9D58] rounded-full text-sm text-[#0F9D58] mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Keunggulan Kami</span>
        </div>

        <h2 className="font-epilogue text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
          Mengapa Harus Kami?
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`group relative backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 hover:scale-105 cursor-pointer min-h-[400px] ${
              index === 0
                ? "bg-gradient-to-br from-[#0F9D58]/20 via-[#0F9D58]/10 to-[#064E3B]/20 border-[#0F9D58] hover:shadow-2xl hover:shadow-[#0F9D58]/30 hover:from-[#0F9D58]/30 hover:to-[#064E3B]/30"
                : "bg-white/5 border-white/20 hover:border-gray-400/50 hover:shadow-xl hover:bg-white/10"
            }`}
          >
            {/* Extra glow effect for first card */}
            {index === 0 && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F9D58]/5 via-transparent to-[#064E3B]/5 group-hover:from-[#0F9D58]/15 group-hover:to-[#064E3B]/15 transition-all duration-300 rounded-3xl"></div>
            )}

            <div className="relative z-10">
              {/* Icon */}
              <div
                className={`mb-6 w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                  index === 0
                    ? "bg-gradient-to-r from-[#0F9D58] to-[#064E3B]"
                    : "bg-gray-600"
                }`}
              >
                <reason.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-epilogue text-2xl font-bold text-gray-900 mb-6">
                {reason.title}
              </h3>

              {/* Points */}
              <ul className="space-y-3">
                {reason.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="font-manrope text-base text-gray-900 leading-relaxed flex items-start gap-2"
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
