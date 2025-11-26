import "./index.css";
import Hero from "./Hero";
import ServicesSection from "./ServiceSection";
import BackgroundEffects from "./BackgroundEffects";
import WhyChooseUs from "./WhyChooseUs";
import LandingPackages from "./LandingPackages";
import Phase from "./Phase";
import Faq from "./Faq";

export default function Home({ layananRef, hargaRef, kontakRef }) {
  return (
    <div className="w-screen min-h-screen relative">
      <BackgroundEffects />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <LandingPackages />
      <Phase />
      <Faq />
    </div>
  );
}
