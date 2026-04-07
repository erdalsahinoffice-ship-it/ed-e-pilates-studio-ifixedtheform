import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, ArrowSquareOut, CalendarBlank } from "@phosphor-icons/react";

const studios = [
  {
    id: "edze",
    name: "Edże Reformer Pilates",
    tagline: "Tutaj wszystko się zaczęło",
    description: "Edże Pilates Studio w Krakowie znajduje się przy ul. Blich 3/15, w samym sercu miasta, z bardzo łatwym dojazdem. Studio mieści się w pięknej kamienicy, na pierwszym piętrze, co zapewnia komfort i wygodę dla każdego klienta już od momentu wejścia.\n\nTo miejsce wyróżnia się autorskimi formatami zajęć. Prowadzimy zarówno grupowe zajęcia klasycznego pilatesu na reformerze i towerze, jak i bardziej dynamiczne treningi funkcjonalne, inspirowane stylem crossfit – oczywiście z wykorzystaniem sprzętu Pilates.\n\nW studiu znajduje się również mały, klimatyczny ogródek, gdzie latem istnieje możliwość treningów na świeżym powietrzu. To także idealna przestrzeń, żeby chwilę odetchnąć przed zajęciami i napić się chłodnej lemoniady.\n\nWnętrze studia ma wyjątkowy charakter – znajdziesz tutaj wiele elementów inspirowanych Turcją i Azją Centralną. Dzięki temu atmosfera jest bardzo ciepła i niepowtarzalna. Klienci często mówią, że czują się tu jak w innym świecie – trochę jak w domu, w otoczeniu bliskich, z nutą tureckiej gościnności.",
    address: "Blich 3/15, 31-502 Kraków",
    district: "Śródmieście · Kraków",
    bookingUrl: "https://app.fitssey.com/Edzepilates/frontoffice",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.5!2d19.9455226!3d50.0604494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bdb259c12d3%3A0x4ecb21129ee17377!2sED%C5%BBE+PILATES+STUDIO!5e0!3m2!1spl!2spl!4v1680000000002",
    mapUrl: "https://www.google.com/maps/place/ED%C5%BBE+PILATES+STUDIO/@50.0604494,19.9455226,17z/data=!3m1!4b1!4m6!3m5!1s0x47165bdb259c12d3:0x4ecb21129ee17377!8m2!3d50.0604494!4d19.9480975!16s%2Fg%2F11vcxqr48g?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D",
    image: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1775056049640-0.png",
    accentColor: "hsl(340,55%,60%)",
    accentLight: "hsl(340,60%,95%)",
  },
  {
    id: "nish",
    name: "Nish Pilates Studio",
    tagline: "Butikowa precyzja na Podgórzu",
    description: "Nish Pilates Studio znajduje się na nowym osiedlu na Podgórzu – w spokojnej, pięknej okolicy, która od razu wprowadza w inny klimat.\n\nTo wyjątkowa przestrzeń, stworzona w stylu łączącym Moroko, Bali i Japandi. Wnętrze jest ciepłe, estetyczne i bardzo dopracowane – miejsce, do którego chce się wracać nie tylko na trening, ale też dla samej atmosfery.\n\nStudio wyróżnia się tym, że pracujemy głównie na klasycznym sprzęcie Pilates od najlepszych światowych marek – Contrology oraz Legacy. To sprzęt tworzony przez mistrzów klasycznego pilatesu, co pozwala pracować w najbardziej autentyczny i jakościowy sposób.\n\nW ofercie znajdują się różnorodne zajęcia grupowe, jednak największy nacisk kładziemy na klasyczny pilates. Prowadzimy również zajęcia dla kobiet w ciąży oraz młodych mam, dbając o bezpieczeństwo i świadomą pracę z ciałem na każdym etapie.\n\nIdea studia powstała z marzenia Edże. Już przy otwieraniu pierwszego studia miała wizję stworzenia tak pięknej, dopracowanej przestrzeni, jednak wtedy nie było jeszcze możliwości finansowych, aby ją w pełni zrealizować. To marzenie zostało z nią i z czasem przerodziło się w Nish – miejsce stworzone dokładnie tak, jak sobie wyobrażała.\n\nOd zawsze bliski był jej również klasyczny pilates, ale jednocześnie nie chciała rezygnować z nowoczesnego i rehabilitacyjnego podejścia. Edże wierzy, że najważniejsze nie jest tylko to, na jakim sprzęcie pracujemy, ale przede wszystkim wiedza, doświadczenie i uważność instruktora oraz fizjoterapeuty.\n\nI właśnie z tego połączenia powstało Nish Pilates Studio – miejsce, gdzie estetyka spotyka się z jakością, a trening ma prawdziwe znaczenie.",
    address: "Tadeusza Szafrana 5A/4LU, 30-363 Kraków",
    district: "Podgórze · Kraków",
    bookingUrl: "https://app.fitssey.com/nishpilates/frontoffice",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.8!2d19.9301459!3d50.0344332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165d5b8daf1d9d%3A0x1dcf5470b7981ecb!2sNish+Reformer+Pilates+Studio!5e0!3m2!1spl!2spl!4v1680000000003",
    mapUrl: "https://www.google.com/maps/place/Nish+Reformer+Pilates+Studio/@50.0344332,19.9301459,17z/data=!3m1!4b1!4m6!3m5!1s0x47165d5b8daf1d9d:0x1dcf5470b7981ecb!8m2!3d50.0344332!4d19.9327208!16s%2Fg%2F11yn9knldx?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D",
    image: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1775057614347-0.jpeg",
    accentColor: "hsl(340,35%,52%)",
    accentLight: "hsl(340,30%,96%)",
  },
];

function StudioCard({ studio, index }: { studio: typeof studios[0] & { mapUrl?: string }; index: number }) {
  const [tab, setTab] = useState<"booking" | "map">("booking");
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const paragraphs = studio.description.split("\n\n").filter(Boolean);
  const previewParagraphs = paragraphs.slice(0, 2);
  const hasMore = paragraphs.length > 2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col"
      style={{ border: "1px solid hsl(340,30%,91%)" }}
    >
      {/* Studio image header */}
      <div className="relative h-52 overflow-hidden">
        <img src={studio.image} alt={studio.name} className="w-full h-full object-cover object-center" loading="lazy" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${studio.accentColor}cc 0%, transparent 60%)` }} />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="text-xs font-body font-medium uppercase tracking-widest text-white/80">{studio.tagline}</span>
          <h3 className="text-2xl font-headline font-bold text-white mt-1">{studio.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-5 flex-1">
        <div className="flex flex-col gap-3">
          {(expanded ? paragraphs : previewParagraphs).map((p, i) => (
            <p key={i} className="text-sm font-body text-charcoal/70 leading-relaxed">{p}</p>
          ))}
          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm font-body font-semibold self-start cursor-pointer transition-colors duration-200 hover:opacity-80"
              style={{ color: studio.accentColor }}
            >
              {expanded ? "Zwiń ▲" : "Czytaj więcej ▼"}
            </button>
          )}
        </div>

        {/* Address */}
        <div className="flex items-start gap-2.5">
          <MapPin size={18} weight="duotone" className="mt-0.5 shrink-0" style={{ color: studio.accentColor }} />
          <div>
            <p className="text-sm font-body font-semibold text-charcoal">{studio.address}</p>
            <p className="text-xs font-body text-charcoal/50">{studio.district}</p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex rounded-full p-1 gap-1" style={{ background: studio.accentLight }}>
          <button
            onClick={() => setTab("booking")}
            className="flex-1 rounded-full py-2 text-xs font-body font-semibold cursor-pointer transition-all duration-200 flex items-center justify-center gap-1.5"
            style={tab === "booking"
              ? { background: studio.accentColor, color: "white" }
              : { background: "transparent", color: "hsl(340,20%,45%)" }
            }
          >
            <CalendarBlank size={14} weight="bold" />
            Zarezerwuj zajęcia
          </button>
          <button
            onClick={() => setTab("map")}
            className="flex-1 rounded-full py-2 text-xs font-body font-semibold cursor-pointer transition-all duration-200 flex items-center justify-center gap-1.5"
            style={tab === "map"
              ? { background: studio.accentColor, color: "white" }
              : { background: "transparent", color: "hsl(340,20%,45%)" }
            }
          >
            <MapPin size={14} weight="bold" />
            Znajdź nas
          </button>
        </div>

        {/* Booking iframe */}
        {tab === "booking" && (
          <div className="rounded-2xl overflow-hidden flex-1" style={{ border: `1px solid hsl(340,30%,90%)`, minHeight: "520px" }}>
            <iframe
              src={studio.bookingUrl}
              title={`${studio.name} – Class Booking`}
              width="100%"
              height="520"
              style={{ border: "none", display: "block", minHeight: "520px" }}
              loading="lazy"
              allow="payment"
              aria-label={`${studio.name} online booking`}
            />
          </div>
        )}

        {/* Map */}
        {tab === "map" && (
          <div className="flex flex-col gap-3">
            <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid hsl(340,30%,90%)`, height: "460px" }}>
              <iframe
                src={studio.mapSrc}
                title={`${studio.name} location map`}
                width="100%"
                height="460"
                style={{ border: "none", display: "block" }}
                loading="lazy"
                allowFullScreen
                aria-label={`${studio.name} location on Google Maps`}
              />
            </div>
            {studio.mapUrl && (
              <a
                href={studio.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-body font-medium transition-all duration-200 hover:opacity-90"
                style={{ background: studio.accentColor, color: "white" }}
              >
                <MapPin size={15} weight="bold" />
                Otwórz w Google Maps
              </a>
            )}
          </div>
        )}

        {/* External link */}
        <a
          href={studio.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2 text-sm font-body transition-colors duration-200"
          style={{ color: studio.accentColor }}
        >
          Otwórz pełny system rezerwacji <ArrowSquareOut size={14} weight="bold" />
        </a>
      </div>
    </motion.div>
  );
}

export default function StudiosSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="studios" className="py-24 px-6 bg-white" aria-label="Our studios">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-block mb-3 text-sm font-body font-medium uppercase tracking-widest" style={{ color: "hsl(340,55%,60%)" }}>
            Nasze Lokalizacje
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-charcoal tracking-headline">
            Dwa Studia w Krakowie
          </h2>
          <p className="mt-4 text-base font-body text-charcoal/60 max-w-xl mx-auto leading-relaxed">
            Oba studia łączy ta sama filozofia Edże — jakość i troska o każdą klientkę. Wybierz lokalizację, sprawdź grafik zajęć i zarezerwuj miejsce bezpośrednio poniżej.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {studios.map((studio, i) => (
            <StudioCard key={studio.id} studio={studio} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
