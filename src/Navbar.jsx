import React, { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { ScrollContext } from "./App";
import { useNavigate, useLocation } from "react-router-dom";
import arizaLogo from "./assets/logofix.svg";

export default function Navbar() {
  const contextRef = useContext(ScrollContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (elementId) => {
    if (location.pathname !== "/") {
      // Not on homepage, navigate to home first
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        if (contextRef?.current?.scrollToElement) {
          contextRef.current.scrollToElement(elementId);
        }
      }, 100);
    } else {
      // Already on homepage, just scroll
      if (contextRef?.current?.scrollToElement) {
        contextRef.current.scrollToElement(elementId);
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 px-6 py-6 flex items-center justify-between max-w-7xl mx-auto bg-transparent backdrop-blur-md border-b border-green-500/10">
      {/* Left Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={arizaLogo} className="w-32" alt="Ariza Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 font-manrope">
        <a
          className="text-gray-600 hover:text-gray-900 transition cursor-pointer"
          onClick={() => handleScroll("layanan")}
        >
          Layanan
        </a>

        <a
          className="text-gray-600 hover:text-gray-900 transition cursor-pointer"
          onClick={() => handleScroll("harga")}
        >
          Harga
        </a>

        <a
          className="text-gray-600 hover:text-gray-900 transition cursor-pointer"
          onClick={() => navigate("/portofolio")}
        >
          Portofolio
        </a>

        <a className="text-gray-600 hover:text-gray-900 transition cursor-pointer">
          Tentang
        </a>

        <button
          onClick={() => handleScroll("kontak")}
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
              handleScroll("layanan");
              setOpen(false);
            }}
          >
            Layanan
          </a>

          <a
            className="cursor-pointer"
            onClick={() => {
              handleScroll("harga");
              setOpen(false);
            }}
          >
            Harga
          </a>

          <a
            className="cursor-pointer"
            onClick={() => {
              navigate("/portofolio");
              setOpen(false);
            }}
          >
            Portofolio
          </a>

          <a className="cursor-pointer">Tentang</a>

          <button
            onClick={() => {
              handleScroll("kontak");
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
