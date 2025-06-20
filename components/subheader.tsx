'use client';

import { useEffect, useRef, useState } from "react";

export default function Subheader({ onHiddenChange }: { onHiddenChange?: (hidden: boolean) => void }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current === 0) {
        setHidden(false);
        onHiddenChange?.(false);
      } else if (current > 40) {
        setHidden(true);
        onHiddenChange?.(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onHiddenChange]);

  return (
    <div
      className={`w-full h-16 bg-[#edf0f2] flex items-center justify-between transition-transform duration-200 z-40 fixed top-0 left-0 right-0 ${hidden ? "-translate-y-20" : "translate-y-0"}`}
    >
      <div className="flex items-center gap-3 pl-40">
        <img src="/IconLocation.png" alt="location" className="h-6 w-6" />
        <span className="font-sans text-lg font-465">Московская обл., г. Электросталь, ул. Горького, 41А</span>
      </div>
      <div className="flex items-center gap-3 pr-40">
        <img src="/IconPhone.png" alt="phone" className="h-6 w-6" />
        <a
          href="tel:+74959610618"
          className="font-sans text-lg font-465 relative group transition-colors"
        >
          <span className="group-hover:text-[#002f45] transition-colors duration-200">+7 (495) 961-06-18</span>
          <span className="absolute left-0 right-0 -bottom-1 h-1 rounded bg-[#ffc600] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></span>
        </a>
      </div>
    </div>
  );
} 