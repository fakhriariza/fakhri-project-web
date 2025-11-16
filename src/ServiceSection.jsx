import React from "react";
import { Globe, Laptop, Sparkles } from "lucide-react";

export default function ServicesSection() {
  return (
    <div className="w-screen min-h-screen bg-transparant relative overflow-hidden py-20 px-6">
      {/* Animated background elements */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="lg:pr-12">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-[#0F9D58] rounded-full text-sm text-[#0F9D58] mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Layanan Kami</span>
            </div>

            <h2 className="font-epilogue text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-2 leading-tight">
              Kami Membantumu Menciptakan{" "}
              <span className="bg-gradient-to-r from-[#064E3B] via-[#0F9D58] to-[#053B33] bg-clip-text text-transparent">
                Website dengan Karaktermu Sendiri
              </span>
            </h2>
            <p className="font-manrope text-lg md:text-xl text-gray-900 leading-relaxed">
              Kami memahami keinginanmu untuk membangun website dengan ciri khas
              dan karaktermu sendiri. Perbedaan persona itu yang membuat kamu
              dan bisnismu menjadi unik!
            </p>
            <p className="font-manrope text-lg md:text-xl text-gray-900 leading-relaxed mt-4">
              Kami menyediakan akses sebesar-besarnya untuk permintaan website
              idealmu, sampai kamu merasa website ini adalah kamu banget!
            </p>
          </div>

          {/* Right Side - Service Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 - Landing Page */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-[#053B33] rounded-2xl p-8 hover:bg-white/10 hover:border-[#0F9D58] hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 cursor-pointer overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-transparent to-blue-500/0 group-hover:from-green-50 group-hover:to-green-500/10 transition-all duration-300"></div>

              <div className="relative z-10">
                <div className="mb-4 w-12 h-12 bg-gradient-to-r from-[#064E3B] to-[#0F9D58]  rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
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

            {/* Card 2 - Website/App */}
            <div className="group relative bg-white/5 backdrop-blur-sm border border-[#053B33] rounded-2xl p-8 hover:bg-white/10 hover:border-[#0F9D58] hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 cursor-pointer overflow-hidden">
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
                  <br></br> Bangun website atau aplikasi sesuai kebutuhan kamu
                  dan bisnismu. Unik, profesional, dan tepat sasaran sesuai
                  strategi bisnismu!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
