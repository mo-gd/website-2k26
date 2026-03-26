"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { href: "#line-up", label: "Line up" },
  { href: "#date", label: "Date" },
  { href: "#story", label: "Histoire" },
  { href: "https://egalclothing.com/collections/cuicuitedays-2k26", label: "Merch" },
];

const ticketUrl = "https://link.cuicuitedays.fr/tickets-website-2k26";

const useNavbarTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const update = () => {
      const navY = 60;
      const sections = document.querySelectorAll<HTMLElement>("section[data-navbar-theme]");

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navY && rect.bottom > navY) {
          const value = section.dataset.navbarTheme;
          if (value === "light" || value === "dark") setTheme(value);
          break;
        }
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return theme;
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useNavbarTheme();

  const isDark = theme === "dark";

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

  const textColor = isDark ? "text-[#1a1a1a]" : "text-[#FDFCEB]";
  const glassBg = isDark ? "bg-black/10" : "bg-white/10";

  const glassHover = isDark ? "hover:bg-black/20" : "hover:bg-white/20";

  return (
    <>
      {/* Desktop navbar — centered pill */}
      <header className={`hidden lg:block fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? "top-4" : "top-6"}`}>
        <nav className={`flex items-center gap-8 ${glassBg} shadow-lg backdrop-blur-xl rounded-full py-3 px-10 ${textColor} transition-colors duration-500`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="hover:scale-105 tracking-widest transition-all duration-200 inline-block text-sm font-light"
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </Link>
          ))}

          <Link
            className="tracking-widest inline-block text-sm font-bold transition-colors duration-200"
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
            className={`${glassBg} backdrop-blur-xl rounded-full py-3 px-6 sm:px-8 ${textColor} text-sm font-bold tracking-widest ${glassHover} transition-colors duration-500`}
          >
            Billetterie
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${glassBg} backdrop-blur-xl rounded-full p-3 ${textColor} ${glassHover} transition-colors duration-500`}
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
          className={`absolute top-full right-4 sm:right-6 mt-3 ${glassBg} backdrop-blur-xl rounded-2xl py-4 px-6 ${textColor} transition-all duration-500 origin-top-right ${
            isOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="tracking-widest text-sm font-light transition-colors duration-200 whitespace-nowrap"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
