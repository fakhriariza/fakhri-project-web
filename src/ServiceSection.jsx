import React, { useEffect, useRef, useState } from "react";
import { Globe, Laptop, Sparkles } from "lucide-react";

export default function ServicesSection() {
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
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
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

  return (
    <div
      id="layanan"
      ref={sectionRef}
      className="w-screen bg-transparant relative overflow-hidden py-20 px-6"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="lg:pr-12">
            {/* Small badge with animation */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-[#0F9D58] rounded-full text-sm text-[#0F9D58] mb-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Layanan Kami</span>
            </div>

            {/* Heading with animation */}
            <h2
              className={`font-epilogue text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              Kami Membantumu Menciptakan{" "}
              <span className="bg-gradient-to-r from-[#064E3B] via-[#0F9D58] to-[#053B33] bg-clip-text text-transparent">
                Website dengan Karaktermu Sendiri
              </span>
            </h2>

            {/* First paragraph with animation */}
            <p
              className={`font-manrope text-lg md:text-xl text-gray-900 leading-relaxed transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              Kami memahami keinginanmu untuk membangun website dengan ciri khas
              dan karaktermu sendiri. Perbedaan persona itu yang membuat kamu
              dan bisnismu menjadi unik!
            </p>

            {/* Second paragraph with animation */}
            <p
              className={`font-manrope text-lg md:text-xl text-gray-900 leading-relaxed mt-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              Kami menyediakan akses sebesar-besarnya untuk permintaan website
              idealmu, sampai kamu merasa website ini adalah kamu banget!
            </p>
          </div>

          {/* Right Side - Service Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 - Landing Page with animation */}
            <div
              className={`group relative bg-white/5 backdrop-blur-sm border border-[#053B33] rounded-2xl p-8 hover:bg-white/10 hover:border-[#0F9D58] hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-700 cursor-pointer overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
              style={{ transitionDelay: "1100ms" }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-blue-500/0 group-hover:from-green-50 group-hover:to-green-500/10 transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="mb-4 w-12 h-12 bg-gradient-to-r from-[#064E3B] to-[#0F9D58] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-epilogue text-2xl font-bold text-gray-900 mb-3">
                  Full Custom Landing Page
                </h3>
                <p className="font-manrope text-base text-gray-900 leading-relaxed">
                  Impresi pertama selalu penting!
                  <br />
                  Bangun website landing page sesuai dengan karaktermu sendiri.
                  Cepat dan bisa langsung rilis!
                </p>
              </div>
            </div>

            {/* Card 2 - Website/App with animation */}
            <div
              className={`group relative bg-white/5 backdrop-blur-sm border border-[#053B33] rounded-2xl p-8 hover:bg-white/10 hover:border-[#0F9D58] hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-700 cursor-pointer overflow-hidden ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12"
              }`}
              style={{ transitionDelay: "1300ms" }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 group-hover:from-green-50 group-hover:to-green-500/10 transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="mb-4 w-12 h-12 bg-gradient-to-r from-[#064E3B] to-[#0F9D58] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Laptop className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-epilogue text-2xl font-bold text-gray-900 mb-3">
                  Full Custom Website/App
                </h3>
                <p className="font-manrope text-base text-gray-900 leading-relaxed">
                  Ide kamu selalu unik!
                  <br /> Bangun website atau aplikasi sesuai kebutuhan kamu dan
                  bisnismu. Unik, profesional, dan tepat sasaran sesuai strategi
                  bisnismu!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
