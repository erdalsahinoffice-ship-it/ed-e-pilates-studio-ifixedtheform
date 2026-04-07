import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const trainers = [
  {
    name: "Uğur",
    role: "Instruktor",
    bio: "Uğur to doświadczony instruktor z wieloletnią praktyką w pracy z ciałem. Specjalizuje się w budowaniu siły, poprawie postawy oraz bezpiecznym prowadzeniu zajęć dla każdego poziomu zaawansowania.",
    image: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774281960524-0.png",
  },
  {
    name: "Edże",
    role: "Założycielka i Ekspertka Pilates",
    bio: "Ece – założycielka i magister fizjoterapii, specjalizująca się w pracy z ciałem poprzez Pilates. Jej podejście łączy precyzję, doświadczenie i najwyższe standardy treningu.",
    image: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774284684755-0.png",
  },
];

export default function TrainersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="trainers" className="py-24 px-6 bg-white" aria-label="Nasi Instruktorzy">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span
            className="inline-block mb-3 text-sm font-body font-medium uppercase tracking-widest"
            style={{ color: "hsl(340,55%,60%)" }}
          >
            Poznaj Zespół
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-charcoal tracking-headline">
            Nasi Instruktorzy
          </h2>
          <p className="mt-4 text-base font-body text-charcoal/60 max-w-md mx-auto">
            Certyfikowani, pełni pasji i głęboko zaangażowani w Twój postęp — nasi instruktorzy są sercem obu studiów.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="group flex flex-col items-center text-center"
            >
              {/* Photo */}
              <div
                className="relative w-52 h-52 rounded-full overflow-hidden mb-6 transition-transform duration-300 group-hover:scale-105"
                style={{ border: "3px solid hsl(340,50%,88%)", boxShadow: "0 8px 32px rgba(200,100,130,0.12)" }}
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Decorative diamond */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-rose-300/60" />
                <div className="w-1.5 h-1.5 rotate-45" style={{ background: "hsl(340,40%,68%)" }} />
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-rose-300/60" />
              </div>

              <h3
                className="text-2xl font-headline font-bold text-charcoal mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {trainer.name}
              </h3>
              <p
                className="text-xs font-body font-medium uppercase tracking-widest mb-4"
                style={{ color: "hsl(340,55%,60%)" }}
              >
                {trainer.role}
              </p>
              <p className="text-sm font-body text-charcoal/65 leading-relaxed max-w-xs">
                {trainer.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
