import React from "react";
import { Rocket, Zap, ArrowRight, Sparkles } from "lucide-react";
import RotateBanner from "./RotateBanner";

// RotateBanner component placeholder - replace with your actual component
// const RotateBanner = () => (
//   <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-full text-sm text-green-700 mb-8 hover:scale-105 transition cursor-pointer">
//     <Sparkles className="w-4 h-4" />
//     <span>New: AI-Powered Launch Templates</span>
//     <ArrowRight className="w-4 h-4" />
//   </div>
// );

export default function Hero() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex flex-col items-center justify-center pb-32">
      <div className="text-center max-w-4xl mx-auto">
        <RotateBanner />

        {/* Main Heading */}
        <h1 className="font-epilogue text-5xl md:text-7xl lg:text-7xl font-bold text-gray-900 mb-2 leading-tight">
          Dari Ide Jadi Nyata
          <span
            className="block bg-gradient-to-r from-[#064E3B] via-[#0F9D58] to-[#053B33]
 bg-clip-text text-transparent"
          >
            Bangun Websitemu Sendiri Bersama Kami
          </span>
        </h1>

        {/* Subheading */}
        <p className="font-manrope text-xl md:text-2xl text-gray-900 mb-12 max-w-2xl mx-auto leading-relaxed">
          Bukan template. Bukan copy-paste. Website khusus buat kamu.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="font-epilogue group px-8 py-4 bg-gradient-to-r text-xl md:text-xl lg:text-xl  from-[#064E3B] to-[#0F9D58]  rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-105 flex items-center gap-2 cursor-pointer">
            Lihat Layanan
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>
          <button
            className=" font-epilogue group px-8 py-4 text-xl md:text-xl lg:text-xl bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-full text-gray-900 font-semibold text-lg 
  hover:bg-green-500/20 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 transition-all flex items-center gap-2 cursor-pointer "
          >
            Portofolio
          </button>
        </div>
      </div>
    </div>
  );
}
