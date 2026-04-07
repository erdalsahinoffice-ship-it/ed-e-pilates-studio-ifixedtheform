import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";

const plans = [
  {
    name: "Pakiet Intro",
    tag: "Idealny na Start",
    price: "150",
    currency: "PLN",
    period: "jednorazowo",
    description: "Zaczynasz z Pilates? Wypróbuj nas z 3 zajęciami grupowymi w specjalnej cenie startowej.",
    features: ["3 zajęcia grupowe na reformerze", "Ważny 30 dni", "Opieka instruktorki", "Bezpłatne zwiedzanie studia"],
    cta: "Skorzystaj z oferty",
    highlight: false,
  },
  {
    name: "Karnet Miesięczny",
    tag: "Najpopularniejszy",
    price: "499",
    currency: "PLN",
    period: "/ miesiąc",
    description: "Nielimitowane zajęcia grupowe każdego miesiąca. Najlepsza wartość dla regularnych ćwiczących.",
    features: ["Nielimitowane zajęcia grupowe", "Priorytetowe rezerwacje", "1 wejście gościnne / miesiąc", "Dostęp do materiałów online"],
    cta: "Zarezerwuj teraz",
    highlight: true,
  },
  {
    name: "Trening Prywatny",
    tag: "1 na 1",
    price: "220",
    currency: "PLN",
    period: "/ sesja",
    description: "W pełni spersonalizowane sesje dostosowane do Twoich celów, ciała i tempa.",
    features: ["60-min sesja prywatna", "Indywidualny program ćwiczeń", "Rehabilitacja po kontuzjach", "Elastyczne godziny"],
    cta: "Zarezerwuj sesję",
    highlight: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="py-24 px-6" style={{ background: "hsl(340,30%,97%)" }} aria-label="Pricing">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-3 text-sm font-body font-medium uppercase tracking-widest" style={{ color: "hsl(340,55%,60%)" }}>
            Przejrzysty Cennik
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-charcoal tracking-headline">
            Wybierz Swój Plan
          </h2>
          <p className="mt-4 text-base font-body text-charcoal/60 max-w-md mx-auto">
            Proste ceny. Żadnych ukrytych opłat. Twój pierwszy krok ku silniejszemu i spokojniejszemu życiu.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative flex flex-col rounded-2xl overflow-hidden transition-transform duration-200 hover:scale-[1.02]"
              style={plan.highlight
                ? { background: "hsl(340,55%,60%)", border: "2px solid hsl(340,55%,60%)" }
                : { background: "white", border: "1px solid hsl(340,30%,91%)" }
              }
            >
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-body font-semibold"
                  style={plan.highlight
                    ? { background: "rgba(255,255,255,0.2)", color: "white" }
                    : { background: "hsl(340,60%,93%)", color: "hsl(340,40%,45%)" }
                  }
                >
                  {plan.tag}
                </span>
              </div>

              <div className="p-8 flex flex-col gap-4 flex-1">
                <h3 className="text-lg font-headline font-bold" style={{ color: plan.highlight ? "white" : "hsl(340,20%,20%)" }}>
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-headline font-bold leading-tight" style={{ color: plan.highlight ? "white" : "hsl(340,20%,20%)" }}>
                    {plan.price}
                  </span>
                  <span className="text-sm font-body mb-1" style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "hsl(0,0%,50%)" }}>
                    {plan.currency} {plan.period}
                  </span>
                </div>
                <p className="text-sm font-body leading-relaxed" style={{ color: plan.highlight ? "rgba(255,255,255,0.85)" : "hsl(340,10%,45%)" }}>
                  {plan.description}
                </p>

                <ul className="flex flex-col gap-2.5 mt-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle size={17} weight="duotone" className="shrink-0 mt-0.5" style={{ color: plan.highlight ? "rgba(255,255,255,0.9)" : "hsl(340,55%,60%)" }} />
                      <span className="text-sm font-body" style={{ color: plan.highlight ? "rgba(255,255,255,0.85)" : "hsl(340,10%,40%)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <button
                    onClick={() => {
                      const el = document.getElementById("studios");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full py-3.5 rounded-full font-body font-semibold text-sm cursor-pointer transition-all duration-200"
                    style={plan.highlight
                      ? { background: "white", color: "hsl(340,55%,60%)" }
                      : { background: "hsl(340,55%,60%)", color: "white" }
                    }
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
