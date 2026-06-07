import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import scienceFair from "../assets/1.jpeg";
import codingForBeginners from "../assets/5.jpeg";
import musicConservatory from "../assets/6.jpeg";
import summerSportsCamp from "../assets/7.jpeg";
import graduationCelebration from "../assets/8.jpeg";

type GalleryCategory =
  | "Tout"
  | "Académique"
  | "Créative"
  | "Sportif"
  | "Événements";

type Item = {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, "Tout">;
  image: string;
  year: string;
};

const galleryItems: Item[] = [
  {
    id: 1,
    title: "Réussite à l'exposition scientifique",
    category: "Académique",
    image: "/isaj-2.jpeg",
    year: "2025",
  },
  {
    id: 2,
    title: "Atelier d'art du matin",
    category: "Créative",
    image: "/isaj-3.jpeg",
    year: "2025",
  },
  {
    id: 3,
    title: "Esprit de champion",
    category: "Sportif",
    image: "/isaj-4.jpeg",
    year: "2025",
  },
  {
    id: 4,
    title: "Production théâtrale annuelle",
    category: "Événements",
    image: graduationCelebration.src,
    year: "2024",
  },
  {
    id: 5,
    title: "Cours du matin · Maternelle",
    category: "Académique",
    image: "/isaj-1.jpeg",
    year: "2024",
  },
  {
    id: 6,
    title: "Conservatoire de musique",
    category: "Créative",
    image: musicConservatory.src,
    year: "2025",
  },
  {
    id: 7,
    title: "Camp sportif d'été",
    category: "Sportif",
    image: summerSportsCamp.src,
    year: "2024",
  },
  {
    id: 8,
    title: "Remise des diplômes",
    category: "Événements",
    image: scienceFair.src,
    year: "2024",
  },
  {
    id: 10,
    title: "Atelier des jeunes explorateurs",
    category: "Académique",
    image: codingForBeginners.src,
    year: "2025",
  },
];

const categories: GalleryCategory[] = [
  "Tout",
  "Académique",
  "Créative",
  "Sportif",
  "Événements",
];

const GalleryContentPage = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("Tout");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "Tout"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [selectedImageIndex]);

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length,
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 pb-24 sm:px-6 lg:px-8 lg:pt-16 lg:pb-32">
      {/* Breadcrumb */}
      <a
        href="/"
        className="group inline-flex items-center gap-2 text-[0.85rem] text-ink-mute transition-colors hover:text-ink"
      >
        <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
        Retour à l'accueil
      </a>

      {/* Header */}
      <div className="mt-10 mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.22em] text-ink-mute">
            Galerie · {galleryItems.length} moments
          </p>
          <h1 className="tracking-headline balance text-[2rem] leading-[1.02] font-semibold text-ink sm:text-5xl md:text-[5.5rem]">
            Moments de <span className="font-display italic font-normal text-brand-deep">découverte.</span>
          </h1>
        </div>
        <p className="pretty max-w-md text-[1rem] leading-relaxed text-ink-mute lg:col-span-4">
          Une fenêtre visuelle sur les aventures et les réussites quotidiennes de la famille ISAJ — saisons 2024 et 2025.
        </p>
      </div>

      {/* Filter Tabs — inline editorial pills */}
      <div className="mb-12 flex flex-wrap items-center gap-x-1 gap-y-2 border-y border-black/[0.07] py-4">
        <span className="mr-2 hidden text-[0.72rem] tracking-[0.18em] text-ink-mute uppercase sm:inline">
          Filtrer
        </span>
        {categories.map((cat) => {
          const active = activeCategory === cat;
          const count =
            cat === "Tout"
              ? galleryItems.length
              : galleryItems.filter((i) => i.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedImageIndex(null);
              }}
              className={`group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.88rem] font-medium transition-all ${
                active
                  ? "bg-ink text-white"
                  : "text-ink-mute hover:bg-black/[0.04] hover:text-ink"
              }`}
            >
              {cat}
              <span
                className={`tabular text-[0.7rem] ${
                  active ? "text-white/55" : "text-ink-mute/70"
                }`}
              >
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      {/* Masonry grid — subtle border, no heavy white frames */}
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setSelectedImageIndex(index)}
            className="group relative mb-5 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-[1.25rem] bg-ink lg:mb-6"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-auto w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />

            {/* Subtle bottom-gradient caption (always visible, intensifies on hover) */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent p-6 opacity-90 transition-opacity duration-500 group-hover:opacity-100">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/65">
                  {item.category} · {item.year}
                </p>
                <h3 className="font-display mt-1 text-[1.15rem] leading-tight font-medium text-white">
                  {item.title}
                </h3>
              </div>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-white group-hover:text-ink">
                <ArrowUpRight size={15} />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="py-24 text-center">
          <p className="font-display text-[1.5rem] italic text-ink">
            Aucun moment dans cette catégorie pour l'instant.
          </p>
          <p className="mt-3 text-[0.9rem] text-ink-mute">
            Revenez bientôt — la galerie s'enrichit chaque semaine.
          </p>
        </div>
      )}

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md md:p-8"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Top bar */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5 md:p-7">
            <p className="tabular text-[0.78rem] tracking-[0.18em] text-white/55 uppercase">
              {String(selectedImageIndex + 1).padStart(2, "0")} /{" "}
              {String(filteredItems.length).padStart(2, "0")}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImageIndex(null);
              }}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Prev/Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white md:left-8"
            aria-label="Précédent"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white md:right-8"
            aria-label="Suivant"
          >
            <ChevronRight size={22} />
          </button>

          {/* Image + caption */}
          <div
            className="relative flex max-h-[88vh] w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].title}
              className="max-h-[78vh] max-w-full rounded-[1.25rem] object-contain"
            />
            <div className="mt-6 max-w-2xl text-center text-white">
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-white/45">
                {filteredItems[selectedImageIndex].category} ·{" "}
                {filteredItems[selectedImageIndex].year}
              </p>
              <h3 className="font-display mt-2 text-[1.5rem] leading-tight font-medium md:text-[2rem]">
                {filteredItems[selectedImageIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* Tour CTA — quiet editorial */}
      <div className="mt-20 grid grid-cols-1 items-center gap-6 rounded-[1.75rem] border border-black/[0.06] bg-white p-9 md:grid-cols-2 md:p-12">
        <div>
          <p className="text-[0.72rem] uppercase tracking-[0.22em] text-ink-mute">
            Visiter le campus
          </p>
          <h2 className="tracking-headline mt-3 text-3xl font-semibold leading-[1.1] text-ink md:text-[2.5rem]">
            Les photos racontent, <span className="font-display italic font-normal text-brand-deep">la visite révèle.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[0.95rem] font-medium text-white transition-all hover:bg-ink-soft active:scale-[0.98]"
          >
            Réserver une visite
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="/enrollment"
            className="text-[0.85rem] font-medium text-ink-mute underline decoration-ink/15 decoration-1 underline-offset-[6px] transition-colors hover:text-ink hover:decoration-ink"
          >
            S'inscrire pour 2026
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryContentPage;
