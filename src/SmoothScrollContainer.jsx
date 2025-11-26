import { useState, useEffect, useRef } from "react";
import { ScrollContext } from "./App";

export default function SmoothScrollContainer({ children }) {
  const scrollContainerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [targetScrollY, setTargetScrollY] = useState(0);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element && scrollContainerRef.current) {
      const elementTop = element.offsetTop;
      const navbarHeight = 96; // Adjust based on your navbar height
      const targetPosition = elementTop - navbarHeight;
      const maxScroll =
        scrollContainerRef.current.scrollHeight - window.innerHeight;
      const newTarget = Math.max(0, Math.min(targetPosition, maxScroll));
      setTargetScrollY(newTarget);
    }
  };

  useEffect(() => {
    let animationFrameId;

    const smoothScroll = () => {
      const diff = targetScrollY - scrollY;
      const isMobile = window.innerWidth < 768;
      const delta = diff * (isMobile ? 0.3 : 0.3);

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
        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="will-change-transform"
          style={{
            transition: "none",
            backfaceVisibility: "hidden",
            perspective: 1000,
          }}
        >
          {children}
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
