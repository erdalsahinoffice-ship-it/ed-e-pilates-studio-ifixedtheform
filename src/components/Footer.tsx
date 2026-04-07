import React from "react";
import { InstagramLogo, FacebookLogo, MapPin } from "@phosphor-icons/react";

const footerLinks = [
  { label: "O nas", href: "#about" },
  { label: "Studia", href: "#studios" },
  { label: "Zajęcia", href: "#classes" },
  { label: "Kontakt", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6" style={{ background: "hsl(340,20%,16%)" }} aria-label="Site footer">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-headline font-bold" style={{ color: "hsl(340,55%,72%)" }}>Edże</span>
              <span className="text-2xl font-headline font-light text-white ml-1.5 tracking-wider text-sm uppercase">Pilates</span>
            </div>
            <p className="text-sm font-body leading-relaxed mb-5" style={{ color: "hsl(340,10%,65%)" }}>
              Dwa wyjątkowe studia Pilates w Krakowie. Siła, równowaga i elastyczność — dla każdego ciała.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com/edzepilates" target="_blank" rel="noopener noreferrer" aria-label="Edże Pilates on Instagram"
                className="transition-colors duration-200 cursor-pointer" style={{ color: "hsl(340,10%,55%)" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "hsl(340,55%,72%)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "hsl(340,10%,55%)")}
              >
                <InstagramLogo size={22} weight="duotone" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Edże Pilates on Facebook"
                className="transition-colors duration-200 cursor-pointer" style={{ color: "hsl(340,10%,55%)" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "hsl(340,55%,72%)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "hsl(340,10%,55%)")}
              >
                <FacebookLogo size={22} weight="duotone" />
              </a>
            </div>
          </div>

          {/* Studios */}
          <div>
            <h4 className="text-sm font-headline font-bold text-white uppercase tracking-widest mb-5">Nasze Studia</h4>
            <div className="flex flex-col gap-5">
              <div>
                <p className="text-sm font-body font-semibold mb-1" style={{ color: "hsl(340,55%,72%)" }}>Edże Reformer Pilates</p>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "hsl(340,30%,55%)" }} />
                  <p className="text-sm font-body" style={{ color: "hsl(340,10%,62%)" }}>Blich 3/15, 31-502 Kraków</p>
                </div>
                <a href="https://app.fitssey.com/Edzepilates/frontoffice" target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs font-body font-medium transition-colors duration-200"
                  style={{ color: "hsl(340,55%,72%)" }}>
                  Zarezerwuj zajęcia →
                </a>
              </div>
              <div>
                <p className="text-sm font-body font-semibold mb-1" style={{ color: "hsl(340,40%,68%)" }}>Nish Pilates Studio</p>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "hsl(340,30%,55%)" }} />
                  <p className="text-sm font-body" style={{ color: "hsl(340,10%,62%)" }}>Tadeusza Szafrana 5A/4LU, 30-363 Kraków</p>
                </div>
                <a href="https://app.fitssey.com/nishpilates/frontoffice" target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-2 text-xs font-body font-medium transition-colors duration-200"
                  style={{ color: "hsl(340,40%,68%)" }}>
                  Zarezerwuj zajęcia →
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-headline font-bold text-white uppercase tracking-widest mb-5">Nawigacja</h4>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <button key={link.label} onClick={() => scrollTo(link.href)}
                  className="text-left text-sm font-body cursor-pointer transition-colors duration-200"
                  style={{ color: "hsl(340,10%,62%)" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "white")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "hsl(340,10%,62%)")}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid hsl(340,15%,25%)" }}>
          <p className="text-xs font-body" style={{ color: "hsl(340,10%,48%)" }}>
            &copy; {new Date().getFullYear()} Edże Pilates. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs font-body transition-colors duration-200 cursor-pointer" style={{ color: "hsl(340,10%,48%)" }}>Polityka prywatności</a>
            <span style={{ color: "hsl(340,10%,35%)" }}>·</span>
            <a href="#" className="text-xs font-body transition-colors duration-200 cursor-pointer" style={{ color: "hsl(340,10%,48%)" }}>Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
