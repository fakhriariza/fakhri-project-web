import React, { useContext, useState } from "react";
import { Rocket, Menu, X } from "lucide-react";
import { ScrollContext } from "./App";
import arizaLogo from "./assets/ariza_logo.png";

export default function Navbar() {
  const { scrollToElement } = useContext(ScrollContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 px-6 py-6 flex items-center justify-between max-w-7xl mx-auto bg-transparent backdrop-blur-md border-b border-green-500/10">
      {/* Left Logo */}
      <div className="flex items-center gap-2">
        <img src={arizaLogo} className="w-32"></img>
        {/* <Rocket className="w-8 h-8 text-green-600" />
        <span className="font-epilogue text-xl lmd:text-2xl lg:text-3xl font-bold text-gray-900">
          Ariza Studio
        </span> */}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 font-manrope">
        <a
          className="text-gray-600 hover:text-gray-900 transition cursor-pointer"
          onClick={() => scrollToElement("layanan")}
        >
          Layanan
        </a>

        <a
          className="text-gray-600 hover:text-gray-900 transition cursor-pointer"
          onClick={() => scrollToElement("harga")}
        >
          Harga
        </a>

        <a className="text-gray-600 hover:text-gray-900 transition cursor-pointer">
          Portofolio
        </a>

        <a className="text-gray-600 hover:text-gray-900 transition cursor-pointer">
          Tentang
        </a>

        <button
          onClick={() => scrollToElement("kontak")}
          className="font-bold px-5 py-2 bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-full text-gray-900 hover:bg-green-500/20 transition cursor-pointer"
        >
          Kontak
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="w-7 h-7 text-black" />
        ) : (
          <Menu className="w-7 h-7 text-black" />
        )}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg px-6 py-4 flex flex-col gap-4 md:hidden text-black font-manrope">
          <a
            className="cursor-pointer"
            onClick={() => {
              scrollToElement("layanan");
              setOpen(false);
            }}
          >
            Layanan
          </a>

          <a
            className="cursor-pointer"
            onClick={() => {
              scrollToElement("harga");
              setOpen(false);
            }}
          >
            Harga
          </a>

          <a className="cursor-pointer">Portofolio</a>
          <a className="cursor-pointer">Tentang</a>

          <button
            onClick={() => {
              scrollToElement("kontak");
              setOpen(false);
            }}
            className="font-bold px-5 py-2 bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-full text-gray-900 hover:bg-green-500/20 transition cursor-pointer"
          >
            Kontak
          </button>
        </div>
      )}
    </nav>
  );
}
