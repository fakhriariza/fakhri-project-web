import React, { useContext } from "react";
import { Rocket, Zap, ArrowRight, Sparkles } from "lucide-react";
import { ScrollContext } from "./App";

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const { scrollToElement } = useContext(ScrollContext);

  return (
    <nav className="sticky top-0 z-50 px-6 py-6 flex items-center justify-between max-w-7xl mx-auto bg-transparent backdrop-blur-md border-b border-green-500/10">
      <div className="flex items-center gap-2">
        <Rocket className="w-8 h-8 text-green-600" />
        <span className="font-epilogue text-3xl font-bold text-gray-900">
          Ariza Studio
        </span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-manrope">
        <a
          className="text-gray-600 hover:text-gray-900 transition  cursor-pointer"
          onClick={() => {
            scrollToElement("layanan");
          }}
        >
          Layanan
        </a>
        <a
          className="text-gray-600 hover:text-gray-900 transition  cursor-pointer"
          onClick={() => {
            scrollToElement("harga");
          }}
        >
          Harga
        </a>
        <a className="text-gray-600 hover:text-gray-900 transition  cursor-pointer">
          Portofolio
        </a>
        <a className="text-gray-600 hover:text-gray-900 transition  cursor-pointer">
          Tentang
        </a>
        <button
          onClick={() => {
            scrollToElement("kontak");
          }}
          className="font-bold px-5 py-2 bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-full text-gray-900 hover:bg-green-500/20 transition cursor-pointer"
        >
          Kontak
        </button>
      </div>
    </nav>
  );
}
