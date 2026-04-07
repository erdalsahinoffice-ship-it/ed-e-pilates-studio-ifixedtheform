import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { InstagramLogo, ArrowSquareOut } from "@phosphor-icons/react";

const accounts = [
  {
    handle: "@edze_pilatestudio",
    url: "https://instagram.com/edze_pilatestudio",
    label: "Edże Studio",
    accentColor: "hsl(340,55%,60%)",
    posts: [
      { image: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774280383810-0.jpeg", alt: "Zajęcia reformer pilates w Edże Studio" },
      { image: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774280383829-1.jpeg", alt: "Instruktorka prowadzi sesję reformer" },
      { image: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774280383861-2.jpeg", alt: "Grupowa sesja pilates Edże" },
    ],
  },
  {
    handle: "@nish_pilates_krakow",
    url: "https://instagram.com/nish_pilates_krakow",
    label: "Nish Studio",
    accentColor: "hsl(340,40%,52%)",
    posts: [
      { image: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774280767335-0.jpeg", alt: "Wnętrze Nish Pilates Studio" },
      { image: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774280767364-1.jpeg", alt: "Trening na reformerze w Nish" },
      { image: "https://c.animaapp.com/mmzuksfjFWfRXe/img/uploaded-asset-1774280767422-2.jpeg", alt: "Prywatna sesja pilates Nish" },
    ],
  },
];

export default function InstagramSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="instagram"
      className="py-24 px-6"
      style={{ background: "hsl(340,30%,97%)" }}
      aria-label="Instagram"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <InstagramLogo size={22} weight="duotone" style={{ color: "hsl(340,55%,60%)" }} />
            <span
              className="text-sm font-body font-medium uppercase tracking-widest"
              style={{ color: "hsl(340,55%,60%)" }}
            >
              Znajdź nas na Instagramie
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-charcoal tracking-headline mb-3">
            Obserwuj nas
          </h2>
          <p className="text-base font-body text-charcoal/55 max-w-md mx-auto">
            Za kulisami, zajęcia, wskazówki i inspiracje — obserwuj oba studia po codzienne treści o ruchu.
          </p>
        </motion.div>

        {/* Two-account layout */}
        <div className="flex flex-col gap-12">
          {accounts.map((account, ai) => (
            <motion.div
              key={account.handle}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ai * 0.15, ease: "easeOut" }}
            >
              {/* Account header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: account.accentColor }}
                  >
                    <InstagramLogo size={20} weight="fill" className="text-white" />
                  </div>
                  <div>
                    <p
                      className="text-sm font-body font-bold"
                      style={{ color: account.accentColor }}
                    >
                      {account.handle}
                    </p>
                    <p className="text-xs font-body text-charcoal/50">{account.label}</p>
                  </div>
                </div>
                <a
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full font-body font-medium text-xs border transition-all duration-200 hover:shadow-sm"
                  style={{
                    borderColor: account.accentColor,
                    color: account.accentColor,
                    background: "white",
                  }}
                  aria-label={`Obserwuj ${account.handle} na Instagramie`}
                >
                  Obserwuj <ArrowSquareOut size={12} weight="bold" />
                </a>
              </div>

              {/* Post grid */}
              <div className="grid grid-cols-3 gap-3">
                {account.posts.map((post, pi) => (
                  <motion.a
                    key={pi}
                    href={account.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: ai * 0.15 + pi * 0.07, ease: "easeOut" }}
                    className="group relative aspect-square overflow-hidden rounded-2xl block"
                    aria-label={post.alt}
                  >
                    <img
                      src={post.image}
                      alt={post.alt}
                      className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ background: "rgba(200,80,100,0.35)" }}
                    >
                      <InstagramLogo size={32} weight="fill" className="text-white" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
