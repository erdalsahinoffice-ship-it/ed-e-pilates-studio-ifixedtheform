import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { X } from "@phosphor-icons/react";

const galleryImages = [
  {
    src: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774280383810-0.jpeg",
    alt: "Reformer Pilates – ćwiczenie na reformerze",
  },
  {
    src: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774280383829-1.jpeg",
    alt: "Zajęcia grupowe – instruktorka prowadzące ćwiczenia",
  },
  {
    src: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774280383861-2.jpeg",
    alt: "Sesja na reformerze – skupienie i kontrola ruchu",
  },
  {
    src: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774280767335-0.jpeg",
    alt: "Zajęcia grupowe na reformerach – studio Edże",
  },
  {
    src: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774280767364-1.jpeg",
    alt: "Stretching na reformerze – ćwiczenie z widokiem na ogród",
  },
  {
    src: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774280767422-2.jpeg",
    alt: "Instruktorka na reformerze – profesjonalne prowadzenie zajęć",
  },
  {
    src: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774976273287-0.jpeg",
    alt: "Edże Pilates Studio – założycielka",
  },
  {
    src: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774976273290-1.jpeg",
    alt: "Pilates reformer – przed i po",
  },
  {
    src: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774976273294-2.jpeg",
    alt: "Klasyczny Pilates na reformerze – zajęcia grupowe",
  },
];

export default function GaleriaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % galleryImages.length));

  return (
    <section
      id="galeria"
      className="py-28 px-6"
      style={{ background: "hsl(340,18%,97%)" }}
      aria-label="Galeria zdjęć"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── HEADER ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span
            className="inline-block mb-3 text-xs font-body font-semibold uppercase tracking-[0.2em]"
            style={{ color: "hsl(340,55%,60%)" }}
          >
            Nasze przestrzenie i chwile
          </span>
          <h2 className="text-3xl md:text-[2.6rem] font-headline font-bold text-charcoal leading-tight tracking-headline">
            Galeria zdjęć
          </h2>
          <p className="mt-4 text-sm md:text-base font-body text-charcoal/55 max-w-xl mx-auto leading-relaxed">
            Zajrzyj za kulisy naszych studiów – klimat, sprzęt, ludzie i chwile, które sprawiają, że Pilates jest czymś więcej niż treningiem.
          </p>
        </motion.div>

        {/* ── GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.07 * i, ease: "easeOut" }}
              className="group overflow-hidden rounded-2xl cursor-pointer"
              style={{
                aspectRatio: "3/4",
                boxShadow: "0 4px 20px rgba(160,80,100,0.09)",
                border: "1px solid hsl(340,25%,93%)",
              }}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Zamknij"
          >
            <X size={32} weight="bold" />
          </button>

          <button
            className="absolute left-4 text-white/70 hover:text-white text-3xl font-bold px-3 py-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Poprzednie"
          >
            ‹
          </button>

          <motion.img
            key={lightbox}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-h-[88vh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 text-white/70 hover:text-white text-3xl font-bold px-3 py-2 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Następne"
          >
            ›
          </button>

          <div className="absolute bottom-4 text-white/50 text-xs font-body">
            {lightbox + 1} / {galleryImages.length}
          </div>
        </motion.div>
      )}
    </section>
  );
}
