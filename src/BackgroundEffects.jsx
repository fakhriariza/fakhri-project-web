import React from "react";
import { Rocket, Zap, ArrowRight, Sparkles } from "lucide-react";

export default function BackgroundEffects() {
  return (
    <>
      {/* Full page background - FIXED */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#ffffff] via-[#f8faf9] to-[#e8f5e9] -z-10"></div>

      {/* Animated background elements - FIXED */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Floating particles animation - FIXED */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#C8F8E4] rounded-full animate-bounce opacity-10"
          style={{ animationDuration: "3s" }}
        ></div>

        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#B2F1D7] rounded-full animate-bounce opacity-10"
          style={{ animationDuration: "4s", animationDelay: "1s" }}
        ></div>

        <div
          className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-[#A0E8D0] rounded-full animate-bounce opacity-10"
          style={{ animationDuration: "5s", animationDelay: "2s" }}
        ></div>
      </div>
    </>
  );
}
