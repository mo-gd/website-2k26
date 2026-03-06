"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { href: "#line-up", label: "Line up" },
  { href: "#date", label: "Date" },
  { href: "#story", label: "Histoire" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#merchandising", label: "Merch" },
];

const ticketUrl = "https://link.cuicuitedays.fr/tickets-website-2k26";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Desktop navbar — centered pill */}
      <header className={`hidden lg:block fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? "top-4" : "top-6"}`}>
        <nav className="flex items-center gap-8 bg-[#6784BE]/40 border border-[#FDFCEB]/20 shadow-lg backdrop-blur-xl rounded-full py-3 px-10 text-[#FDFCEB]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="hover:scale-105 tracking-widest transition-all duration-200 inline-block text-sm font-light hover:text-white"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}

          <Link
            className="tracking-widest inline-block text-sm font-bold hover:text-white transition-colors duration-200"
            target="_blank"
            href={ticketUrl}
          >
            Billetterie
          </Link>
        </nav>
      </header>

      {/* Mobile/Tablet navbar — Billetterie left, burger right */}
      <header className={`lg:hidden fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-300 ${scrolled ? "top-4" : "top-6"}`}>
        <div className="flex items-center justify-between">
          <Link
            href={ticketUrl}
            target="_blank"
            className="bg-[#6784BE]/60 border border-[#FDFCEB]/20 backdrop-blur-xl rounded-full py-3 px-6 sm:px-8 text-[#FDFCEB] text-sm font-bold tracking-widest hover:bg-[#6784BE]/80 transition-colors duration-200"
          >
            Billetterie
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#6784BE]/60 border border-[#FDFCEB]/20 backdrop-blur-xl rounded-full p-3 text-[#FDFCEB] hover:bg-[#6784BE]/80 transition-colors duration-200"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" className={`transition-all duration-300 origin-center ${isOpen ? "translate-y-[5px] rotate-45" : ""}`} />
              <line x1="4" y1="12" x2="20" y2="12" className={`transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
              <line x1="4" y1="17" x2="20" y2="17" className={`transition-all duration-300 origin-center ${isOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </svg>
          </button>
        </div>

        {/* Dropdown menu */}
        <div
          className={`absolute top-full right-4 sm:right-6 mt-3 bg-[#6784BE]/90 border border-[#FDFCEB]/20 backdrop-blur-xl rounded-2xl py-4 px-6 text-[#FDFCEB] transition-all duration-300 origin-top-right ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="tracking-widest text-sm font-light hover:text-white transition-colors duration-200 whitespace-nowrap"
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Backdrop overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 -z-10"
            onClick={closeMenu}
          />
        )}
      </header>
    </>
  );
};
