import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Envelope, InstagramLogo, Clock } from "@phosphor-icons/react";
import { useMutation } from "@animaapp/playground-react-sdk";

// ─── Formspree endpoint ───────────────────────────────────────────────────────
// 1. Go to https://formspree.io/f/new (free, no credit card)
// 2. Enter contact@edzepilates.info as the destination email
// 3. Replace the placeholder below with your Formspree form ID (e.g. "xpwzabcd")
const FORMSPREE_ID = "YOUR_FORMSPREE_ID";
// ─────────────────────────────────────────────────────────────────────────────

interface FormState { name: string; email: string; message: string; }
interface FormErrors { name?: string; email?: string; message?: string; }

const studios = [
  {
    name: "Edże Studio",
    accentColor: "hsl(340,55%,60%)",
    address: "Blich 3/15, 31-502 Kraków",
    phone: "+48 576 113 288",
    email: null,
    instagram: "https://instagram.com/edze_pilatestudio",
    instagramHandle: "@edze_pilatestudio",
    hours: null,
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.5!2d19.9455226!3d50.0604494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165bdb259c12d3%3A0x4ecb21129ee17377!2sED%C5%BBE+PILATES+STUDIO!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl",
  },
  {
    name: "Nish Studio",
    accentColor: "hsl(340,40%,52%)",
    address: "Tadeusza Szafrana 5A/4LU, 30-363 Kraków",
    phone: "+48 723 105 849",
    email: null,
    instagram: "https://instagram.com/nish_pilates_krakow",
    instagramHandle: "@nish_pilates_krakow",
    hours: null,
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.8!2d19.9301459!3d50.0344332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165d5b8daf1d9d%3A0x1dcf5470b7981ecb!2sNish+Reformer+Pilates+Studio!5e0!3m2!1spl!2spl!4v1700000000001!5m2!1spl!2spl",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { create, isPending: isSending } = useMutation("ContactSubmission");

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Imię i nazwisko jest wymagane.";
    if (!form.email.trim()) errs.email = "Adres e-mail jest wymagany.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Podaj prawidłowy adres e-mail.";
    if (!form.message.trim()) errs.message = "Wiadomość jest wymagana.";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitError(null);
    try {
      // 1. Save to database
      await create({ name: form.name, email: form.email, message: form.message });

      // 2. Send email via Formspree (if ID is configured)
      if (FORMSPREE_ID && FORMSPREE_ID !== "YOUR_FORMSPREE_ID") {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        });
        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data?.error || "Formspree error");
        }
      }

      setSubmitted(true);
    } catch (err) {
      setSubmitError("Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na contact@edzepilates.info");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof FormErrors])
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const inputClass = (err?: string) =>
    `w-full px-4 py-3 rounded-xl border font-body text-sm text-charcoal bg-white placeholder:text-gray-400 focus:outline-none transition-colors duration-200 ${
      err
        ? "border-red-300 focus:ring-2 focus:ring-red-200"
        : "border-rose-200 focus:ring-2 focus:ring-rose-200 focus:border-rose-300"
    }`;

  return (
    <section id="contact" className="py-24 px-6 bg-white" aria-label="Kontakt">
      <div className="max-w-6xl mx-auto">
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
            Znajdź nas
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-charcoal tracking-headline">
            Nasze Studia
          </h2>
          <p className="mt-4 text-base font-body text-charcoal/60 max-w-md mx-auto">
            Dwa studia, jedna pasja. Odwiedź nas w Krakowie i zarezerwuj swoje miejsce.
          </p>
        </motion.div>

        {/* Studios grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {studios.map((studio, i) => (
            <motion.div
              key={studio.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid hsl(340,40%,90%)" }}
            >
              {/* Map */}
              <div className="w-full h-48 overflow-hidden">
                <iframe
                  src={studio.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${studio.name}`}
                />
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col gap-3" style={{ background: "hsl(340,50%,97%)" }}>
                <h3
                  className="text-base font-headline font-bold mb-1"
                  style={{ color: studio.accentColor }}
                >
                  {studio.name}
                </h3>

                <div className="flex items-start gap-3">
                  <MapPin size={17} weight="duotone" className="mt-0.5 shrink-0" style={{ color: studio.accentColor }} />
                  <span className="text-sm font-body text-charcoal/70">{studio.address}</span>
                </div>

                {studio.phone && (
                  <div className="flex items-center gap-3">
                    <Phone size={17} weight="duotone" className="shrink-0" style={{ color: studio.accentColor }} />
                    <a
                      href={`tel:${studio.phone.replace(/\s/g, "")}`}
                      className="text-sm font-body font-semibold text-charcoal hover:text-rose-500 transition-colors"
                    >
                      {studio.phone}
                    </a>
                  </div>
                )}

                {studio.email && (
                  <div className="flex items-center gap-3">
                    <Envelope size={17} weight="duotone" className="shrink-0" style={{ color: studio.accentColor }} />
                    <a
                      href={`mailto:${studio.email}`}
                      className="text-sm font-body text-charcoal/70 hover:text-rose-500 transition-colors"
                    >
                      {studio.email}
                    </a>
                  </div>
                )}

                {studio.hours && (
                  <div className="flex items-start gap-3">
                    <Clock size={17} weight="duotone" className="mt-0.5 shrink-0" style={{ color: studio.accentColor }} />
                    <span className="text-sm font-body text-charcoal/70">{studio.hours}</span>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <InstagramLogo size={17} weight="duotone" style={{ color: studio.accentColor }} />
                  <a
                    href={studio.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-body font-medium hover:text-rose-500 transition-colors"
                    style={{ color: studio.accentColor }}
                  >
                    {studio.instagramHandle}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-headline font-bold text-charcoal">Napisz do nas</h3>
            <p className="text-sm font-body text-charcoal/55 mt-2">
              Pytania o zajęcia lub cokolwiek innego? Chętnie odpiszemy.
            </p>
          </motion.div>

          {submitted ? (
            <div
              className="rounded-3xl p-10 text-center flex flex-col items-center gap-4"
              style={{ background: "hsl(340,50%,97%)", border: "1px solid hsl(340,40%,90%)" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: "hsl(340,55%,60%)" }}
              >
                <Envelope size={28} weight="duotone" className="text-white" />
              </div>
              <h3 className="text-xl font-headline font-bold text-charcoal">Wiadomość wysłana!</h3>
              <p className="text-base font-body text-charcoal/65">
                Dziękujemy za kontakt — odezwiemy się bardzo szybko.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: "", email: "", message: "" });
                }}
                className="mt-2 px-6 py-2.5 rounded-full font-body font-medium text-sm cursor-pointer transition-all duration-200 hover:shadow-md"
                style={{ background: "hsl(340,55%,60%)", color: "white" }}
              >
                Wyślij kolejną wiadomość
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-body font-semibold text-charcoal">
                  Imię i nazwisko *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Twoje imię i nazwisko"
                  className={inputClass(errors.name)}
                  aria-required="true"
                />
                {errors.name && (
                  <span className="text-xs font-body text-red-500" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-body font-semibold text-charcoal">
                  E-mail *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="twoj@email.pl"
                  className={inputClass(errors.email)}
                  aria-required="true"
                />
                {errors.email && (
                  <span className="text-xs font-body text-red-500" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-body font-semibold text-charcoal">
                  Wiadomość *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Jak możemy Ci pomóc?"
                  rows={5}
                  className={inputClass(errors.message)}
                  aria-required="true"
                  style={{ resize: "none" }}
                />
                {errors.message && (
                  <span className="text-xs font-body text-red-500" role="alert">
                    {errors.message}
                  </span>
                )}
              </div>
              {submitError && (
                <p className="text-xs font-body text-red-500 text-center" role="alert">{submitError}</p>
              )}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 rounded-full font-body font-semibold text-sm cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "hsl(340,55%,60%)", color: "white" }}
              >
                {isSending ? "Wysyłanie…" : "Wyślij wiadomość"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
