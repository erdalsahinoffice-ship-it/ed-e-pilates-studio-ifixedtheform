import React, { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

const navLinks = [
  { label: "Historia powstania", href: "#about" },
  { label: "Studia", href: "#studios" },
  { label: "Zajęcia", href: "#classes" },
  { label: "Galeria zdjęć", href: "#galeria" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sectionIds = ["about", "studios", "classes", "galeria", "contact"];
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm border-b border-rose-100 shadow-sm" : "bg-transparent"
        }`}
        style={{ minHeight: "64px" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-4 cursor-pointer"
            aria-label="Edże Pilates – Strona główna"
          >
            <img
              src="https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774069040691-0.png"
              alt="Edże Pilates Studio"
              className="h-12 w-auto object-contain"
            />
            <img
              src="https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774969460026-0.png"
              alt="Nish Pilates Studio"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-3 text-sm font-body font-medium cursor-pointer transition-colors duration-200 group ${
                    isActive ? "text-rose-500" : "text-charcoal hover:text-rose-500"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  <span className={`absolute bottom-1 left-4 right-4 h-0.5 bg-rose-400 transition-transform duration-200 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
                </button>
              );
            })}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={() => handleNavClick("#studios")}
                className="px-5 py-2 rounded-full border border-rose-300 text-rose-500 font-body font-medium text-sm cursor-pointer transition-all duration-200 hover:bg-rose-50"
              >
                Edże Pilates Studio
              </button>
              <button
                onClick={() => handleNavClick("#studios")}
                className="px-5 py-2 rounded-full bg-rose-400 text-white font-body font-medium text-sm cursor-pointer transition-all duration-200 hover:bg-rose-500"
              >
                Nish Pilates Studio
              </button>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-charcoal cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {mobileOpen ? <X size={28} weight="bold" /> : <List size={28} weight="bold" />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} aria-hidden="true" />
      )}

      {/* Mobile panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white flex flex-col pt-20 pb-8 px-8 transition-transform duration-300 shadow-2xl ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobilne"
      >
        <button className="absolute top-4 right-4 p-2 text-charcoal cursor-pointer" onClick={() => setMobileOpen(false)} aria-label="Zamknij menu">
          <X size={28} weight="bold" />
        </button>
        <nav className="flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-left px-4 py-3 rounded-xl font-body font-medium text-base cursor-pointer transition-colors duration-200 ${
                  isActive ? "bg-rose-50 text-rose-500" : "text-charcoal hover:bg-rose-50 hover:text-rose-500"
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={() => handleNavClick("#studios")}
              className="w-full py-3 rounded-full border border-rose-300 text-rose-500 font-body font-medium text-sm cursor-pointer transition-all duration-200 hover:bg-rose-50"
            >
              Zarezerwuj Edże Pilates Studio
            </button>
            <button
              onClick={() => handleNavClick("#studios")}
              className="w-full py-3 rounded-full bg-rose-400 text-white font-body font-medium text-sm cursor-pointer transition-all duration-200 hover:bg-rose-500"
            >
              Zarezerwuj Nish Pilates Studio
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
