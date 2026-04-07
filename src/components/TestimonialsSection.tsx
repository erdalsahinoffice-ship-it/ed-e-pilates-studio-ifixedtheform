import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Agnieszka",
    initials: "A",
    studio: "Edże Studio",
    stars: 5,
    text: "Najlepsze studio pilates w Krakowie! Instruktorzy są niezwykle profesjonalni i dbają o każdego uczestnika. Po kilku tygodniach regularnych zajęć zauważyłam ogromną różnicę w swojej postawie i samopoczuciu.",
  },
  {
    name: "Karolina",
    initials: "K",
    studio: "Edże Studio",
    stars: 5,
    text: "Atmosfera w studiu jest wyjątkowa — czuć, że każdy szczegół jest przemyślany. Instruktorki podchodzą indywidualnie do każdej osoby, korekty są bardzo pomocne. Zdecydowanie polecam!",
  },
  {
    name: "Marta",
    initials: "M",
    studio: "Edże Studio",
    stars: 5,
    text: "Zaczęłam chodzić na Edże Pilates na polecenie fizjoterapeuty i to był strzał w dziesiątkę. Bóle pleców minęły, sylwetka się wyprostowała, a zajęcia sprawiają mi ogromną przyjemność. Wracam tu co tydzień!",
  },
  {
    name: "Dominika",
    initials: "D",
    studio: "Edże Studio",
    stars: 5,
    text: "Cudowne miejsce i niesamowity zespół. Studio jest pięknie urządzone, sprzęt na najwyższym poziomie. Czuję się tu bezpiecznie i zmotywowana. Efekty widoczne już po miesiącu regularnych treningów.",
  },
  {
    name: "Joanna",
    initials: "J",
    studio: "Edże Studio",
    stars: 5,
    text: "Profesjonalizm i serdeczność – to dwa słowa, które najlepiej opisują Edże. Zajęcia są świetnie przygotowane, instruktor dokładnie tłumaczy każde ćwiczenie. To miejsce zmotywowało mnie do regularnego ruchu!",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-white"
      aria-label="Opinie klientów"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span
            className="inline-block mb-3 text-sm font-body font-medium uppercase tracking-widest"
            style={{ color: "hsl(340,55%,60%)" }}
          >
            Opinie Google
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-charcoal tracking-headline">
            Uwielbiane przez naszą społeczność
          </h2>
          {/* Google rating summary */}
          <div className="mt-5 flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} weight="fill" style={{ color: "#fbbc04" }} />
              ))}
            </div>
            <p className="text-sm font-body text-charcoal/55 mt-1">
              5.0 · Ocena Google · 100% pozytywnych opinii
            </p>
          </div>
        </motion.div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="rounded-3xl p-10 text-center max-w-2xl mx-auto w-full"
              style={{
                background: "hsl(340,50%,97%)",
                border: "1px solid hsl(340,40%,90%)",
              }}
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} size={18} weight="fill" style={{ color: "#fbbc04" }} />
                ))}
              </div>

              <p
                className="text-base md:text-lg font-body leading-relaxed mb-8 italic"
                style={{ color: "hsl(340,15%,35%)" }}
              >
                &#34;{t.text}&#34;
              </p>

              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-headline font-bold text-white text-sm shrink-0"
                  style={{ background: "hsl(340,55%,60%)" }}
                >
                  {t.initials}
                </div>
                <div className="text-left">
                  <p className="font-body font-bold text-charcoal text-sm">{t.name}</p>
                  <p className="font-body text-xs" style={{ color: "hsl(340,40%,55%)" }}>
                    {t.studio} · Google Maps
                  </p>
                </div>
                {/* Google logo badge */}
                <div className="ml-2 w-6 h-6 shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8" role="tablist">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Opinia ${i + 1}`}
              className="rounded-full cursor-pointer transition-all duration-200"
              style={{
                width: i === current ? "24px" : "10px",
                height: "10px",
                background:
                  i === current ? "hsl(340,55%,60%)" : "hsl(340,30%,82%)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
