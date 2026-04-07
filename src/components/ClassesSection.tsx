import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ShieldCheck } from "@phosphor-icons/react";

const BOOKING_EDZE = "https://app.fitssey.com/Edzepilates/frontoffice";
const BOOKING_NISH = "https://app.fitssey.com/nishpilates/frontoffice";

const services = [
  {
    title: "Treningi indywidualne",
    description:
      "To najbardziej spersonalizowana forma pracy, stworzona dla osób, które oczekują maksymalnych efektów, pełnej uwagi instruktora i treningu dopasowanego dokładnie do swojego ciała.\n\nPracujemy na pełnym wyposażeniu klasycznego Pilatesu: Cadillac, Reformer, Tower, Wunda Chair, Spine Corrector, Foot Corrector, beczka oraz mata. Dzięki temu każdy trening jest różnorodny, precyzyjny i dopasowany do Twoich potrzeb – niezależnie od poziomu czy celu.\n\nTreningi indywidualne w naszym studiu to coś więcej niż zwykłe ćwiczenia. To świadomy proces, prowadzony przez specjalistów:\n\n– redukcja masy ciała – treningi prowadzone według indywidualnie rozpisanych programów przez specjalistów\n– klasyczny pilates – sesje prowadzone przez certyfikowanych Comprehensive Classical Pilates Instructor\n– fizjoterapia i rehabilitacja – praca z ciałem pod okiem magistra fizjoterapii\n– treningi dla kobiet w ciąży – bezpieczne i świadome zajęcia prowadzone przez fizjoterapeutkę uroginekologiczną\n\nKażdy trening jest dopasowany indywidualnie – z uwzględnieniem Twojego stanu zdrowia, możliwości i celu. Dzięki temu osiągasz efekty szybciej, bezpieczniej i bardziej świadomie.\n\nTo przestrzeń, w której jakość, wiedza i doświadczenie mają realne znaczenie.",
  },
  {
    title: "Szkolenia dla instruktorów",
    description:
      "Szkolenia prowadzone przez Edże i jej zespół to coś znacznie więcej niż nauka Pilatesu. To kompleksowe podejście do pracy z człowiekiem – oparte na doświadczeniu, praktyce i realnych efektach.\n\nSpotkania odbywają się cyklicznie, w małych, kameralnych grupach. Dzięki temu każdy uczestnik ma przestrzeń do nauki, zadawania pytań i pracy praktycznej na wysokim poziomie.\n\nTo, co wyróżnia te szkolenia, to autorski system pracy Edże, który łączy klasyczny pilates z nowoczesnym podejściem do treningu i elementami terapii manualnej. Uczysz się nie tylko ćwiczeń, ale przede wszystkim tego, jak pracować z klientem indywidualnie.\n\nPodczas szkoleń nauczysz się:\n– jak prowadzić świadome i skuteczne treningi indywidualne\n– jak wykorzystywać elementy terapii manualnej w pracy z klientem\n– jak pracować z osobami z różnymi potrzebami i ograniczeniami\n– jak tworzyć programy treningowe ukierunkowane na redukcję masy ciała i realne efekty\n– jak budować relację z klientem i prowadzić go w sposób profesjonalny i bezpieczny\n\nTo szkolenia dla osób, które chcą wejść na wyższy poziom – nie tylko jako instruktor, ale jako specjalista.\n\nFilozofia Edże jest prosta: najważniejsza nie jest sama metoda, ale sposób, w jaki pracujesz z człowiekiem. Dlatego te szkolenia zmieniają nie tylko sposób prowadzenia zajęć, ale całe podejście do pracy.\n\nTo więcej niż pilates. To realna wiedza, którą wykorzystasz w praktyce.",
  },
];


function ServiceCard({ title, description }: { title: string; description: string }) {
  const [expanded, setExpanded] = React.useState(false);
  const paragraphs = description.split("\n\n").filter(Boolean);
  const preview = paragraphs.slice(0, 2);
  const rest = paragraphs.slice(2);

  return (
    <div
      className="flex-1 bg-white rounded-2xl px-7 py-6"
      style={{ border: "1px solid hsl(340,25%,90%)", boxShadow: "0 2px 12px rgba(180,100,120,0.06)" }}
    >
      <div
        className="inline-block w-8 h-px mb-4 rounded-full"
        style={{ background: "hsl(340,55%,72%)" }}
      />
      <h3 className="text-base font-headline font-bold text-charcoal mb-3">{title}</h3>
      <div className="text-sm font-body text-charcoal/60 leading-relaxed space-y-3">
        {preview.map((p, i) => <p key={i}>{p}</p>)}
        {rest.length > 0 && (
          <>
            {expanded && rest.map((p, i) => <p key={i + 100}>{p}</p>)}
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-1 text-xs font-semibold uppercase tracking-widest transition-colors duration-150"
              style={{ color: "hsl(340,55%,60%)" }}
            >
              {expanded ? "Pokaż mniej ▲" : "Czytaj więcej ▼"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function ClassesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const galleryRef = useRef(null);
  const galleryInView = inView;

  return (
    <section
      id="classes"
      className="py-28 px-6"
      style={{ background: "hsl(340,20%,98%)" }}
      aria-label="Zajęcia i Usługi"
    >
      <div className="max-w-6xl mx-auto">

        {/* ── HEADER ── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center mb-6"
        >
          <span
            className="inline-block mb-3 text-xs font-body font-semibold uppercase tracking-[0.2em]"
            style={{ color: "hsl(340,55%,60%)" }}
          >
            To historia dziewczyny, która została – i zbudowała wszystko od zera
          </span>
          <h2 className="text-3xl md:text-[2.6rem] font-headline font-bold text-charcoal leading-tight tracking-headline">
            Zajęcia grupowe na Reformerze i Towerze
          </h2>
          <p className="mt-5 text-base font-body text-charcoal/60 max-w-xl mx-auto leading-relaxed">
            To zajęcia prowadzone w kameralnych grupach – maksymalnie do 6 osób. Edże świadomie stawia na małą liczbę uczestników, ponieważ najważniejsza jest dla niej jakość pracy, a nie ilość.
          </p>
        </motion.div>

        {/* ── INTRO TEXT ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-center text-sm md:text-base font-body text-charcoal/55 max-w-2xl mx-auto mb-14 leading-relaxed"
        >
          Dzięki temu każdy ma przestrzeń, żeby ćwiczyć uważnie i poprawnie. Instruktor może skupić się na każdej osobie, korygować błędy i dostosować ćwiczenia do indywidualnych potrzeb. Zajęcia prowadzone są na bardzo wysokim poziomie – przez instruktorów z wieloletnim doświadczeniem, którzy regularnie się szkolą i rozwijają. To sprawia, że trening jest nie tylko efektywny, ale też bezpieczny i świadomy.
        </motion.p>

        {/* ── SERVICE PILLS ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-6 justify-center mb-16"
        >
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} description={s.description} />
          ))}
        </motion.div>

        {/* ── TRUST BLOCK ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <div className="flex justify-center mb-4">
            <ShieldCheck size={32} weight="duotone" style={{ color: "hsl(340,55%,60%)" }} />
          </div>
          <h3 className="text-xl md:text-2xl font-headline font-bold text-charcoal mb-3">
            Trenujesz pod okiem specjalistów
          </h3>
          <p className="text-sm md:text-base font-body text-charcoal/60 leading-relaxed">
            Łączymy Pilates z fizjoterapią, aby zapewnić bezpieczny i skuteczny trening. Dbamy nie tylko o efekty, ale przede wszystkim o zdrowie i komfort naszych klientów.
          </p>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.38, ease: "easeOut" }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <p className="text-sm font-body font-semibold uppercase tracking-widest text-charcoal/40 mb-1">
            Zarezerwuj swoje miejsce i zacznij już dziś
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={BOOKING_EDZE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-body font-semibold uppercase tracking-widest transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "hsl(340,55%,60%)", color: "#fff" }}
            >
              Zarezerwuj Edże Studio
              <ArrowRight size={15} weight="bold" />
            </a>
            <a
              href={BOOKING_NISH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-body font-semibold uppercase tracking-widest transition-all duration-200 hover:bg-rose-50"
              style={{ border: "1.5px solid hsl(340,55%,60%)", color: "hsl(340,55%,60%)" }}
            >
              Zarezerwuj Nish Studio
              <ArrowRight size={15} weight="bold" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
