import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const storyParagraphs = [
  "Cześć, z tej strony Edże 😊",
  "Jestem właścicielką dwóch pięknych studiów stworzonych z duszy młodej dziewczyny, która w 2015 roku przyjechała do Polski na studia – nie znając języka, nie mając tu nikogo bliskiego.",
  "Studiowałam fizjoterapię… po polsku. Dla mnie wtedy to była trochę śmieszno-tragiczna historia, bo nauka języka kosztowała mnie naprawdę dużo łez. Ale dziś piszę to wszystko po polsku i jestem z tego dumna 😊",
  "Ukończyłam studia z fizjoterapii i rehabilitacji z wyróżnieniem – bo włożyłam w to ogrom pracy. Tak naprawdę zakochałam się w fizjoterapii dopiero na magisterce, kiedy w pełni zrozumiałam, że to jest to, co chcę robić. Wiedziałam jednak jedno – nie widzę siebie w szpitalu. Chciałam stworzyć coś swojego.",
  "I wróciłam do czegoś, co kiedyś uratowało mnie jako 15-letnią dziewczynę – do Pilatesu. Miałam wady postawy, byłam wysoką, trochę zagubioną dziewczyną… i właśnie wtedy trafiłam na Pilates. Nie wiedziałam wtedy, że stanie się on tak ważną częścią mojego życia.",
  "Dziś łączę Pilates z fizjoterapią – i to jest moja największa siła. To niesamowite uczucie, kiedy Twoje hobby i kierunek studiów stają się Twoją wymarzoną pracą. Dlatego tak bardzo kocham to, co robię i cały czas chcę się rozwijać.",
  "Bardzo uważnie dobieram instruktorów i fizjoterapeutów do mojego zespołu. Wierzę, że nasza praca niesie ogromną odpowiedzialność – trochę jak w zawodzie lekarza. Ludzie powierzają nam swoje ciało, swoje zdrowie. A naszym zadaniem jest pomóc i przede wszystkim – nie zaszkodzić. Dlatego ciągły rozwój i edukacja są dla mnie absolutną podstawą.",
  "Od niedawna rozwijam też swoje drugie marzenie – szkolenia. Uczę młodych trenerów, którzy chcą pracować w Pilatesie, ale nie prowadzę „klasycznych\" kursów. Łączę wiedzę z fizjoterapii, Pilatesu i terapii manualnej. Pokazuję, jak pracować indywidualnie z klientem, jak naprawdę go zrozumieć i prowadzić bezpiecznie.",
  "Tworzę do tego wiele materiałów i wkładam w to całe serce – bo wiem, jak ważne jest dobre przygotowanie na początku tej drogi.",
  "I czuję, że to dopiero początek ✨",
];

function InstagramReel() {
  useEffect(() => {
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full" style={{ maxWidth: 400, margin: "0 auto" }}>
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/DQrh4nWDBDy/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: 16,
            boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
            margin: "0 auto",
            maxWidth: 400,
            width: "100%",
            minWidth: 280,
            padding: 0,
          }}
        >
          <a
            href="https://www.instagram.com/reel/DQrh4nWDBDy/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "hsl(340,55%,60%)", display: "block", padding: "16px", textAlign: "center", fontFamily: "sans-serif", fontSize: 14 }}
          >
            Zobacz reel na Instagramie ↗
          </a>
        </blockquote>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6" style={{ background: "hsl(340,30%,97%)" }} aria-label="O nas – Edże Pilates">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-3 text-sm font-body font-medium uppercase tracking-widest" style={{ color: "hsl(340,55%,60%)" }}>
            Poznaj nas lepiej
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-charcoal tracking-headline">
            Historia Edże
          </h2>
        </motion.div>

        {/* Reel + story */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start"
        >
          {/* Instagram Reel */}
          <InstagramReel />

          {/* Story text */}
          <div className="flex flex-col gap-5">
            {storyParagraphs.map((p, i) => (
              <p key={i} className="text-base font-body text-charcoal/75 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
