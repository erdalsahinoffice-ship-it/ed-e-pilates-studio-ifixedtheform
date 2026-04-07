<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
<!-- NEXT_ENTRY_HERE -->

## 2026-04-07 (Contact form email sending via Formspree)
- ContactSection: form now POSTs to Formspree (https://formspree.io/f/${FORMSPREE_ID}) on submit → emails contact@edzepilates.info
- DB save (useMutation ContactSubmission) still runs first; Formspree call is second
- FORMSPREE_ID constant at top of file — replace "YOUR_FORMSPREE_ID" with real ID from formspree.io
- Error message updated to reference correct email (contact@edzepilates.info)

## 2026-04-01 (Nish studio card image → NISH dark green square logo)
- StudiosSection: replaced Nish card image with new NISH dark green/pink square logo (uploaded-asset-1775057614347-0.jpeg)

## 2026-04-01 (Edże studio card image → new pink script logo)
- StudiosSection: replaced Edże card image with new pink script logo (uploaded-asset-1775056049640-0.png)

## 2026-03-31 (Galeria zdjęć added to navbar)
- Navbar: added "Galeria zdjęć" link (#galeria) between "Zajęcia" and "Kontakt" in both desktop and mobile nav
- Updated sectionIds scroll tracker array to include "galeria"

## 2026-03-31 (Galeria zdjęć — new section)
- Created src/components/GaleriaSection.tsx: 9-photo grid (6 existing + 3 new uploads) with lightbox
- Removed gallery grid from ClassesSection.tsx (photos now live in GaleriaSection)
- App.tsx: GaleriaSection inserted between ClassesSection and TrainersSection
- New photos: Edże portrait, before/after reformer, group reformer class (Nish)

## 2026-03-31 (Booking URLs, wider cards, SDK contact form, AnimaProvider)
- ClassesSection: fixed BOOKING_EDZE/BOOKING_NISH URLs to correct Fitssey frontoffice pages
- ClassesSection: "Treningi indywidualne" & "Szkolenia" cards now full-width flex, "Czytaj więcej" expand toggle added via ServiceCard component
- ContactSection: wired to Anima SDK useMutation("ContactSubmission") — form now saves to DB on submit; loading + error states added
- index.tsx: wrapped app with AnimaProvider from @animaapp/playground-react-sdk
- package.json: added @animaapp/playground-react-sdk 0.10.0

## 2026-03-31 (Studios section + Navbar nav label update)
- Navbar: "O nas" → "Historia powstania"
- StudiosSection Edże: new photo (uploaded-asset-1774971774538-0.jpeg), full long-form description with "Czytaj więcej" expand
- StudiosSection Nish: full long-form description with "Czytaj więcej" expand
- StudioCard now splits description on double newlines, shows 2 paragraphs by default, rest behind toggle

## 2026-03-31 (Hero headline + Navbar logos + Button labels)
- Hero: replaced "Edże & Nish" stacked headline with "Dwa Studia Pilatesu w Krakowie" in Playfair Display
- Navbar: added Nish Pilates Studio logo next to Edże logo in top-left corner
- Navbar desktop buttons: "Edże Studio" → "Edże Pilates Studio", "Nish Studio" → "Nish Pilates Studio"
- Hero + mobile nav CTA buttons: "Zarezerwuj Edże" → "Zarezerwuj Edże Pilates Studio", "Zarezerwuj Nish" → "Zarezerwuj Nish Pilates Studio"

## 2026-03-23 (Favicon + Page Title Update)
- Updated favicon in index.html to Edże Pilates Studio logo (uploaded-asset-1774287626605-0.png)
- Updated page title from "Anima Project" to "Edże Pilates Studio"

## 2026-03-23 (TrainersSection: Edże card update)
- Renamed "Ece" → "Edże" in trainers array
- Updated Edże card photo to new uploaded portrait (uploaded-asset-1774284684755-0.png)

## 2026-03-23 (Comprehensive multi-section update #2)
- TrainersSection: Ece card updated with real photo (same as Uğur asset), new title "Założycielka i Ekspertka Pilates", new bio
- Navbar: removed Nish logo — only Edże Pilates Studio logo remains in top left
- Footer: removed Cennik from Nawigacja, updated both studio addresses (Blich 3/15 & Szafrana 5A)
- StudiosSection: real Google Maps embed + mapUrl for "Otwórz w Google Maps" button on both studios; Znajdź nas tab opens correct pins
- ContactSection: removed email + hours from Edże card; fixed both map embeds to real studio coordinates

## 2026-03-23 (Multi-section update)
- Uğur trainer card: new real photo, removed "Edże & Nish" from role → just "Instruktor"
- InstagramSection: replaced AI placeholder images with real uploaded studio photos (Edże + Nish)
- StudiosSection + ContactSection: updated Edże address (Blich 3/15) & phone (576113288), Nish address (Szafrana 5A) & phone (723105849)
- Navbar: removed "Cennik" link from both desktop and mobile nav + sectionIds scroll tracker
- AboutSection: show all storyParagraphs by default, removed "Czytaj więcej" expand/collapse button

## 2026-03-23 (ClassesSection Gallery → Small Cards)
- Replaced asymmetric gallery layout with uniform 6-card grid (3 cols, 2 rows, 3:4 aspect ratio)
- Added 3 new real studio photos (group reformer class, garden stretch, instructor demo)
- Each card has rounded-2xl corners, soft shadow, hover zoom, staggered fade-in animation
- Grid is fully responsive: 2-col on mobile, 3-col on sm+

## 2026-03-23 (ClassesSection Premium Redesign)
<!-- NEXT_ENTRY_HERE -->

## 2026-03-23 (ClassesSection Premium Redesign)
- Full redesign of ClassesSection: hybrid layout with header, intro text, service pills, photo gallery, trust block + CTA
- Used 3 real studio photos (uploaded): inverted reformer, group class, reformer session
- Masonry-style 3-col 2-row gallery grid with hover zoom effects
- Trust block with ShieldCheck icon, dual CTA booking buttons (Edże + Nish)
- All text in Polish, soft pink/beige premium palette

## 2026-03-23 (Major Section Overhaul)
- Removed PricingSection entirely from App.tsx (import + render)
- Replaced TrainersSection with 2 real instructors: Uğur (generated portrait) + Ece (placeholder pending generation)
- Updated TestimonialsSection: "Uwielbiane przez naszą społeczność", 5 realistic Polish Google-style reviews, yellow Google stars + Google SVG logo badge
- Updated ContactSection: real Edże data (Karmelicka 11/6, +48 723 105 849, contact@edzepilates.info, hours, map embed), Nish (Podgórze), studio cards with maps stacked above form
- Updated InstagramSection: "Obserwuj nas", two-account layout @edze_pilatestudio + @nish_pilates_krakow each with 3-post grid + follow button

## 2026-03-23 (Hero Cover Image Update #2)
<!-- NEXT_ENTRY_HERE -->

## 2026-03-23 (Major Section Overhaul)
- Removed PricingSection entirely from App.tsx (import + render)
- Replaced TrainersSection with 2 real instructors: Uğur (generated portrait) + Ece (placeholder pending generation)
- Updated TestimonialsSection: "Uwielbiane przez naszą społeczność", 5 realistic Polish Google-style reviews, yellow Google stars + Google SVG logo badge
- Updated ContactSection: real Edże data (Karmelicka 11/6, +48 723 105 849, contact@edzepilates.info, hours, map embed), Nish (Podgórze), studio cards with maps stacked above form
- Updated InstagramSection: "Obserwuj nas", two-account layout @edze_pilatestudio + @nish_pilates_krakow each with 3-post grid + follow button

## 2026-03-23 (Hero Cover Image Update #2)
- Replaced hero background with second uploaded photo (uploaded-asset-1774276642094-0.jpeg)
- Updated object-position to object-center for better framing

## 2026-03-23 (Hero Cover Image Update)
- Replaced hero background with new B&W pilates photo (uploaded-asset-1774276391511-0.jpeg)
- Reduced warm overlay opacity so the new photo is more visible (0.55→0.30 range)
- Set object-position to object-top to keep the subject framed correctly

## 2026-03-21 (Add Fitssey Base Code)
- Added Fitssey widget base script before </body> in index.html
- Script initializes lb widget with 'Edzepilates' account for all pages

## 2026-03-21 (Simplify AboutSection)
- Removed original two-column intro (image + text), values grid, and related motion blocks
- AboutSection now contains only "Poznaj nas lepiej / Historia Edże" with reel + story text

## 2026-03-21 (Fix Instagram Reel Embed)
- Replaced broken iframe embed with official Instagram blockquote + embed.js script method
- Added InstagramReel component with useEffect to load/process embed.js
- Fallback link shown before script loads

## 2026-03-21 (About – Founder Story + Reel)
- Added founder story section to AboutSection with Instagram reel embed (DQrh4nWDBDy)
- Story text split into `storyParagraphs` array with expand/collapse toggle (shows 3 paragraphs by default)
- Two-column layout: reel iframe left, story text right; reel capped at 400px max-width

## 2026-03-21 (Hero Minor Tweak)
- Slightly reduced headline sizes: Edże clamp(2.6rem,8vw,6.2rem), Nish clamp(2.4rem,7.5vw,5.8rem), & clamp(1.2rem,2.4vw,1.75rem)
- Removed "Scroll" text label from scroll indicator (arrow only remains)

## 2026-03-21 (Hero Typography Scale Down)
- Reduced "Edże" font size: clamp(4.5rem,14vw,11rem) → clamp(3rem,9vw,7rem)
- Reduced "Nish" font size: clamp(4rem,13vw,10rem) → clamp(2.8rem,8.5vw,6.5rem)
- Reduced "&" font size: clamp(2rem,4vw,3rem) → clamp(1.4rem,2.8vw,2rem)

## 2026-03-21 (Hero Redesign)
- Premium hero: "Edże" in Playfair Display serif + "Nish" in Great Vibes script
- Added Cormorant Garamond for tagline/pre-title italic, imported all 3 fonts in index.css
- Luxury layout: decorative diamond separators, thin gradient rules, warm beige overlay, vignette
- CTA buttons refined to uppercase tracked style, scroll indicator with italic label

## 2026-03-21
<!-- NEXT_ENTRY_HERE -->

## 2026-03-21 (Hero Redesign)
- Premium hero: "Edże" in Playfair Display serif + "Nish" in Great Vibes script
- Added Cormorant Garamond for tagline/pre-title italic, imported all 3 fonts in index.css
- Luxury layout: decorative diamond separators, thin gradient rules, warm beige overlay, vignette
- CTA buttons refined to uppercase tracked style, scroll indicator with italic label

## 2026-03-21
- Translated entire website to Polish (all components: Navbar, Hero, About, Studios, Classes, Trainers, Pricing, Testimonials, Instagram, Contact, Footer)
- All UI text, labels, placeholders, aria-labels, validation messages and CTAs now in Polish
- Brand name and proper nouns (studio names, city, Instagram handles) kept unchanged

## 2026-03-17
- Full brand website redesign for Edże Pilates (two-studio brand: Edże + Nish)
- New sections: StudiosSection (2 iframes + maps), TrainersSection, InstagramSection
- Soft pink color theme (hsl 340) throughout all components
- Hero has two CTA buttons (Book Edże / Book Nish), nav updated to match
- Deleted BookingSection.tsx and BookingModal.tsx (replaced by StudiosSection)

## 2026-03-12
<changelog>
<!-- NEXT_ENTRY_HERE -->

## 2026-03-17
- Full brand website redesign for Edże Pilates (two-studio brand: Edże + Nish)
- New sections: StudiosSection (2 iframes + maps), TrainersSection, InstagramSection
- Soft pink color theme (hsl 340) throughout all components
- Hero has two CTA buttons (Book Edże / Book Nish), nav updated to match
- Deleted BookingSection.tsx and BookingModal.tsx (replaced by StudiosSection)

## 2026-03-12
- Shifted full color palette from sage/olive/green → soft pink/rose (HSL 340) in `src/index.css` and `tailwind.config.js`
- Replaced custom `BookingSection.tsx` schedule grid with embedded Fitssey iframe (`https://app.fitssey.com/Edzepilates/frontoffice`)
- Updated navbar and footer logo accent colors to match new pink theme
- Removed `BookingModal.tsx` dependency (no longer used by BookingSection)
</changelog>
