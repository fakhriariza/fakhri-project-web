import { useState, useEffect, useRef, createContext } from "react";
import "./index.css";
import Hero from "./Hero";
import ServicesSection from "./ServiceSection";
import BackgroundEffects from "./BackgroundEffects";
import Navbar from "./Navbar";
import WhyChooseUs from "./WhyChooseUs";
import LandingPackages from "./LandingPackages";
import Phase from "./Phase";
import Faq from "./Faq";
import Footer from "./Footer";
import Portfolio from "./Portofolio";

// Create context for scroll control
export const ScrollContext = createContext();

export default function App() {
  const scrollContainerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [targetScrollY, setTargetScrollY] = useState(0);
  const isMobile = window.innerWidth < 768;

  // Function to scroll to specific element
  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element && scrollContainerRef.current) {
      // Get element position
      const elementTop = element.offsetTop;

      // Navbar height (fixed navbar outside scroll container)
      const navbarHeight = 20; // Adjust if needed

      const targetPosition = elementTop - navbarHeight;
      const maxScroll =
        scrollContainerRef.current.scrollHeight - window.innerHeight;
      const newTarget = Math.max(0, Math.min(targetPosition, maxScroll));

      setTargetScrollY(newTarget);
    }
  };

  useEffect(() => {
    let animationFrameId;

    // Smooth scroll animation
    const smoothScroll = () => {
      const diff = targetScrollY - scrollY;

      // Deteksi device dan set smoothness factor
      const isMobile = window.innerWidth < 768;
      const delta = diff * (isMobile ? 0.3 : 0.1); // Mobile lebih cepat

      if (Math.abs(diff) > 0.5) {
        const newScrollY = scrollY + delta;
        setScrollY(newScrollY);

        if (scrollContainerRef.current) {
          scrollContainerRef.current.style.transform = `translateY(-${newScrollY}px)`;
        }

        animationFrameId = requestAnimationFrame(smoothScroll);
      } else {
        setScrollY(targetScrollY);
        if (scrollContainerRef.current) {
          scrollContainerRef.current.style.transform = `translateY(-${targetScrollY}px)`;
        }
      }
    };

    animationFrameId = requestAnimationFrame(smoothScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [scrollY, targetScrollY]);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY;
      const maxScroll =
        scrollContainerRef.current.scrollHeight - window.innerHeight;
      const newTargetScroll = Math.max(
        0,
        Math.min(targetScrollY + delta, maxScroll)
      );
      setTargetScrollY(newTargetScroll);
    };

    const handleTouchStart = (e) => {
      const touch = e.touches[0];
      scrollContainerRef.current.dataset.touchY = touch.clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const lastY = parseFloat(scrollContainerRef.current.dataset.touchY);
      const delta = (lastY - touch.clientY) * 2;
      const maxScroll =
        scrollContainerRef.current.scrollHeight - window.innerHeight;
      const newTargetScroll = Math.max(
        0,
        Math.min(targetScrollY + delta, maxScroll)
      );
      setTargetScrollY(newTargetScroll);
      scrollContainerRef.current.dataset.touchY = touch.clientY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [targetScrollY]);

  return (
    <ScrollContext.Provider value={{ scrollToElement }}>
      <div className="fixed inset-0 overflow-hidden">
        {/* Fixed Navbar - Outside scroll container */}
        <div className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md">
          <Navbar />
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="will-change-transform pt-24"
          style={{
            transition: "none",
            backfaceVisibility: "hidden",
            perspective: 1000,
          }}
        >
          <div className="w-screen min-h-screen relative">
            <BackgroundEffects />
            <Hero />
            <ServicesSection />
            <WhyChooseUs />
            <LandingPackages />
            <Phase />
            <Faq />

            {/* <Portfolio /> */}
            <Footer />
          </div>
        </div>

        {/* Custom Scrollbar */}
        <div className="fixed right-2 top-1/2 -translate-y-1/2 w-1 h-64 bg-gray-200/20 rounded-full overflow-hidden z-50">
          <div
            className="w-full bg-gradient-to-b from-[#064E3B] to-[#0F9D58] rounded-full transition-all duration-300"
            style={{
              height: `${Math.min(
                100,
                (window.innerHeight /
                  (scrollContainerRef.current?.scrollHeight ||
                    window.innerHeight)) *
                  100
              )}%`,
              transform: `translateY(${
                (scrollY /
                  ((scrollContainerRef.current?.scrollHeight ||
                    window.innerHeight) -
                    window.innerHeight)) *
                (256 -
                  256 *
                    (window.innerHeight /
                      (scrollContainerRef.current?.scrollHeight ||
                        window.innerHeight)))
              }px)`,
            }}
          />
        </div>
      </div>
    </ScrollContext.Provider>
  );
}
