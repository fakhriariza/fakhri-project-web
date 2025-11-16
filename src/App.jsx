import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Hero from "./Hero";
import ServicesSection from "./ServiceSection";
import BackgroundEffects from "./BackgroundEffects";
import Navbar from "./Navbar";
import WhyChooseUs from "./WhyChooseUs";

export default function App() {
  return (
    <div className="w-screen min-h-screen relative">
      {" "}
      {/* Hapus overflow-hidden */}
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
    </div>
  );
}
