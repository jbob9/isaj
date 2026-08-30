import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type GalleryCategory = "Tout" | "Établissement" | "Vie scolaire";

type GalleryItem = {
  id: number;
  title: string;
  category: Exclude<GalleryCategory, "Tout">;
  image: string;
  alt: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Photographie de l'ISAJ",
    category: "Établissement",
    image: "/isaj-1.jpeg",
    alt: "Photographie locale de l'Institution le Saint Justien",
  },
  {
    id: 2,
    title: "Photographie de l'ISAJ",
    category: "Vie scolaire",
    image: "/isaj-2.jpeg",
    alt: "Élèves ou espace de l'Institution le Saint Justien",
  },
  {
    id: 3,
    title: "Photographie de l'ISAJ",
    category: "Vie scolaire",
    image: "/isaj-3.jpeg",
    alt: "Moment de vie à l'Institution le Saint Justien",
  },
  {
    id: 4,
    title: "Photographie de l'ISAJ",
    category: "Établissement",
    image: "/isaj-4.jpeg",
    alt: "Image locale de l'Institution le Saint Justien",
  },
];

const categories: GalleryCategory[] = ["Tout", "Établissement", "Vie scolaire"];

const GalleryContentPage = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("Tout");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const filteredItems =
    activeCategory === "Tout"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (event.key === "Escape") setSelectedImageIndex(null);
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  useEffect(() => {
    if (selectedImageIndex === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedImageIndex]);

  return (
    <section className="mx-auto max-w-7xl px-4 pt-12 pb-24 sm:px-6 lg:px-8 lg:pt-16 lg:pb-32">
      <a
        href="/"
        className="group text-ink-mute hover:text-ink inline-flex items-center gap-2 text-[0.85rem] transition-colors"
      >
        <ArrowLeft
          size={15}
          className="transition-transform group-hover:-translate-x-0.5"
        />
        Retour à l'accueil
      </a>

      <div className="mt-10 mb-12 grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <p className="text-ink-mute mb-4 text-[0.72rem] tracking-[0.22em] uppercase">
            Galerie · {galleryItems.length} images
          </p>
          <h1 className="tracking-headline balance text-ink text-[2rem] leading-[1.02] font-semibold sm:text-5xl md:text-[5.5rem]">
            Images de{" "}
            <span className="font-display text-brand-deep font-normal italic">
              l'ISAJ.
            </span>
          </h1>
        </div>
        <p className="pretty text-ink-mute max-w-md text-[1rem] leading-relaxed lg:col-span-4">
          Une sélection de photographies locales de l'Institution le Saint
          Justien. Le contexte précis de chaque image est à confirmer.
        </p>
      </div>

      <div className="mb-12 flex flex-wrap items-center gap-x-1 gap-y-2 border-y border-black/[0.07] py-4">
        <span className="text-ink-mute mr-2 hidden text-[0.72rem] tracking-[0.18em] uppercase sm:inline">
          Filtrer
        </span>
        {categories.map((category) => {
          const active = activeCategory === category;
          const count =
            category === "Tout"
              ? galleryItems.length
              : galleryItems.filter((item) => item.category === category)
                  .length;
          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setSelectedImageIndex(null);
              }}
              aria-pressed={active}
              className={`group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.88rem] font-medium transition-all ${active ? "bg-ink text-white" : "text-ink-mute hover:text-ink hover:bg-black/[0.04]"}`}
            >
              {category}
              <span
                className={`tabular text-[0.7rem] ${active ? "text-white/55" : "text-ink-mute/70"}`}
              >
                {String(count).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelectedImageIndex(index)}
            aria-label={`Agrandir ${item.title}`}
            className="group bg-ink relative mb-5 block w-full cursor-zoom-in break-inside-avoid overflow-hidden rounded-[1.25rem] text-left lg:mb-6"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="h-auto w-full object-cover transition-all duration-[1200ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="from-ink/85 via-ink/30 pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t to-transparent p-6">
              <div>
                <p className="text-[0.65rem] tracking-[0.18em] text-white/65 uppercase">
                  {item.category}
                </p>
                <h2 className="font-display mt-1 text-[1.15rem] leading-tight font-medium text-white">
                  {item.title}
                </h2>
              </div>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md">
                <ArrowUpRight size={15} />
              </span>
            </div>
          </button>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="py-24 text-center">
          <p className="font-display text-ink text-[1.5rem] italic">
            Aucune image dans cette catégorie.
          </p>
          <p className="text-ink-mute mt-3 text-[0.9rem]">
            Les images seront ajoutées après validation.
          </p>
        </div>
      )}

      {selectedImageIndex !== null && (
        <div
          className="bg-ink/95 fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md md:p-8"
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Aperçu de la galerie"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between p-5 md:p-7">
            <p className="tabular text-[0.78rem] tracking-[0.18em] text-white/55 uppercase">
              {String(selectedImageIndex + 1).padStart(2, "0")} /{" "}
              {String(filteredItems.length).padStart(2, "0")}
            </p>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedImageIndex(null);
              }}
              className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white"
              aria-label="Fermer"
            >
              <X size={18} />
            </button>
          </div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white md:left-8"
            aria-label="Image précédente"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white hover:text-white md:right-8"
            aria-label="Image suivante"
          >
            <ChevronRight size={22} />
          </button>
          <div
            className="relative flex max-h-[88vh] w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].alt}
              className="max-h-[78vh] max-w-full rounded-[1.25rem] object-contain"
            />
            <div className="mt-6 max-w-2xl text-center text-white">
              <p className="text-[0.7rem] tracking-[0.22em] text-white/45 uppercase">
                {filteredItems[selectedImageIndex].category}
              </p>
              <h2 className="font-display mt-2 text-[1.5rem] leading-tight font-medium md:text-[2rem]">
                {filteredItems[selectedImageIndex].title}
              </h2>
            </div>
          </div>
        </div>
      )}

      <div className="mt-20 grid grid-cols-1 items-center gap-6 rounded-[1.75rem] border border-black/[0.06] bg-white p-9 md:grid-cols-2 md:p-12">
        <div>
          <p className="text-ink-mute text-[0.72rem] tracking-[0.22em] uppercase">
            Visiter l'ISAJ
          </p>
          <h2 className="tracking-headline text-ink mt-3 text-3xl leading-[1.1] font-semibold md:text-[2.5rem]">
            Les images seront complétées avec des{" "}
            <span className="font-display text-brand-deep font-normal italic">
              contenus validés.
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <a
            href="/contact"
            className="group bg-ink hover:bg-ink-soft inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[0.95rem] font-medium text-white transition-all active:scale-[0.98]"
          >
            Nous contacter <ArrowUpRight size={16} />
          </a>
          <a
            href="/enrollment"
            className="text-ink-mute decoration-ink/15 hover:text-ink hover:decoration-ink text-[0.85rem] font-medium underline decoration-1 underline-offset-[6px] transition-colors"
          >
            Demander une inscription
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryContentPage;
