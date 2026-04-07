import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774276642094-0.jpeg"
          alt="Reformer Pilates studio"
          className="w-full h-full object-cover object-center scale-105"
          loading="eager"
        />
        {/* Layered gradient overlay — warm beige/white wash */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(252,247,242,0.55) 0%, rgba(255,251,249,0.45) 40%, rgba(255,243,245,0.38) 70%, rgba(255,255,255,0.30) 100%)",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(210,185,175,0.18) 100%)",
          }}
        />
      </div>

      {/* Subtle decorative lines */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Thin horizontal rule top */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.6, ease: "easeInOut" }}
          className="absolute top-[18%] left-[10%] right-[10%] h-px origin-left"
          style={{ background: "linear-gradient(to right, transparent, rgba(195,155,145,0.35), transparent)" }}
        />
        {/* Thin horizontal rule bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.8, ease: "easeInOut" }}
          className="absolute bottom-[18%] left-[10%] right-[10%] h-px origin-right"
          style={{ background: "linear-gradient(to right, transparent, rgba(195,155,145,0.35), transparent)" }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">

        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)",
            letterSpacing: "0.28em",
            color: "hsl(340,30%,52%)",
          }}
          className="mb-6 uppercase"
        >
          Reformer Pilates · Kraków
        </motion.p>

        {/* Diamond separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex items-center gap-4 mb-7"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300/60" />
          <div
            className="w-1.5 h-1.5 rotate-45"
            style={{ background: "hsl(340,40%,68%)" }}
          />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300/60" />
        </motion.div>

        {/* Main headline — DWA STUDIA PILATESU W KRAKOWIE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              fontSize: "clamp(1.8rem, 5.5vw, 4.2rem)",
              letterSpacing: "0.14em",
              lineHeight: 1.15,
              color: "hsl(340,18%,22%)",
              textTransform: "uppercase",
            }}
          >
            Dwa Studia Pilatesu<br />w Krakowie
          </h1>
        </motion.div>

        {/* Bottom separator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.05 }}
          className="flex items-center gap-4 mt-7 mb-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300/60" />
          <div
            className="w-1.5 h-1.5 rotate-45"
            style={{ background: "hsl(340,40%,68%)" }}
          />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300/60" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
            letterSpacing: "0.12em",
            color: "hsl(340,20%,48%)",
          }}
          className="mb-10"
        >
          Siła · Równowaga · Elegancja
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("studios")}
            className="w-full sm:w-auto px-9 py-3.5 rounded-full font-body font-medium text-sm tracking-widest uppercase cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{
              background: "hsl(340,42%,58%)",
              color: "white",
              letterSpacing: "0.15em",
            }}
          >
              Zarezerwuj Edże Pilates Studio
          </button>
          <button
            onClick={() => scrollTo("studios")}
            className="w-full sm:w-auto px-9 py-3.5 rounded-full font-body font-medium text-sm tracking-widest uppercase cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-105"
            style={{
              border: "1.5px solid hsl(340,42%,62%)",
              color: "hsl(340,42%,50%)",
              background: "rgba(255,255,255,0.75)",
              letterSpacing: "0.15em",
            }}
          >
            Zarezerwuj Nish Pilates Studio
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <div className="w-5 h-9 rounded-full border border-rose-300/60 flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 rounded-full"
            style={{ background: "hsl(340,40%,68%)" }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
