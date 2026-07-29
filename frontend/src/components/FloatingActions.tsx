import React, { useState, useEffect } from 'react';
import { ArrowUp, Send } from 'lucide-react';

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of Back to Top button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Telegram FAB */}
      <a 
        href="https://t.me/cryptowithshola" 
        target="_blank" 
        rel="noreferrer"
        className="w-12 h-12 bg-[#229ED9] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 relative group"
        aria-label="Join our Telegram"
      >
        <Send size={24} className="ml-[-2px] mt-[2px]" />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-[#229ED9] text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md">
          Join Telegram
        </span>
      </a>

      {/* Back to Top FAB */}
      <button 
        onClick={scrollToTop}
        className={`w-12 h-12 bg-[#1c1917] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-amber-600 hover:scale-110 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to Top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}
