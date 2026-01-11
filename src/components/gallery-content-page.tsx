import {
  ArrowLeft,
  Camera,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

type GalleryCategory = "Tout" | "Académique" |"Créative" |"Sportif" | "Événements";

const galleryItems = [
  {
    id: 1,
    title: "Science Fair Success",
    category: "Académique",
    image:
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800",
    size: "large",
  },
  {
    id: 2,
    title: "Morning Art Studio",
    category: "Créative",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    size: "small",
  },
  {
    id: 3,
    title: "Championship Spirit",
    category: "Sportif",
    image:
      "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80&w=800",
    size: "medium",
  },
  {
    id: 4,
    title: "Annual Drama Production",
    category: "Événements",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800",
    size: "medium",
  },
  {
    id: 5,
    title: "Coding for Beginners",
    category: "Académique",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    size: "small",
  },
  {
    id: 6,
    title: "Music Conservatory",
    category: "Créative",
    image:
      "https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&q=80&w=800",
    size: "large",
  },
  {
    id: 7,
    title: "Summer Sports Camp",
    category: "Sportif",
    image:
      "https://images.unsplash.com/photo-1519766428956-8a1b75224e79?auto=format&fit=crop&q=80&w=800",
    size: "small",
  },
  {
    id: 8,
    title: "Graduation Celebration",
    category: "Événements",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
    size: "medium",
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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const filteredItems =
    activeCategory === "Tout"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  // Handle keyboard navigation for the lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
    <section className="animate-in fade-in slide-in-from-bottom-6 mx-auto max-w-7xl px-4 py-12 duration-700 sm:px-6 lg:px-8">
      <div className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <a
            href="/"
            className="group mb-6 flex items-center text-slate-500 transition-colors hover:text-blue-600"
          >
            <ArrowLeft
              size={20}
              className="mr-2 transform transition-transform group-hover:-translate-x-1"
            />
            Retour à l'accueil
          </a>
          <h1 className="text-4xl leading-tight font-bold text-slate-900 md:text-6xl">
            Moments de{" "}
            <span className="font-serif text-blue-600 italic">découverte</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-500">
            Une fenêtre visuelle sur les aventures et les réussites quotidiennes de notre famille Institution le Saint Justien (ISAJ).
          </p>
        </div>

        <div className="relative hidden lg:block">
          <div
            className="flex h-24 w-24 animate-spin items-center justify-center rounded-full bg-blue-100"
            style={{ animationDuration: "15s" }}
          >
            <Camera className="text-blue-500" size={32} />
          </div>
          <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-blue-500"></div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="mb-16 flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setSelectedImageIndex(null);
            }}
            className={`rounded-2xl px-8 py-3 font-bold transition-all ${
              activeCategory === cat
                ? "scale-105 bg-blue-600 text-white shadow-lg shadow-blue-200"
                : "border border-slate-100 bg-white text-slate-500 hover:bg-blue-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry-style Grid */}
      <div className="columns-1 gap-8 space-y-8 sm:columns-2 lg:columns-3">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedImageIndex(index)}
            className="group animate-in zoom-in relative cursor-pointer break-inside-avoid overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl shadow-blue-900/5 duration-500"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                <span className="mb-3 inline-block rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                  {item.category}
                </span>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Floating Action */}
            <div className="absolute top-6 right-6 flex h-12 w-12 translate-x-4 transform items-center justify-center rounded-2xl bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
              <Maximize2 size={20} />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="animate-in fade-in fixed inset-0 z-100 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-sm duration-300 md:p-8">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 z-110 rounded-full p-2 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X size={32} />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 z-110 rounded-full p-3 text-white/50 transition-colors hover:bg-white/10 hover:text-white md:left-8"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 z-110 rounded-full p-3 text-white/50 transition-colors hover:bg-white/10 hover:text-white md:right-8"
          >
            <ChevronRight size={48} />
          </button>

          <div className="animate-in zoom-in relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center duration-500">
            <img
              src={filteredItems[selectedImageIndex].image}
              alt={filteredItems[selectedImageIndex].title}
              className="max-h-[80vh] max-w-full rounded-3xl border-4 border-white/10 object-contain shadow-2xl"
            />
            <div className="mt-6 text-center text-white">
              <span className="mb-3 inline-block rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase">
                {filteredItems[selectedImageIndex].category}
              </span>
              <h3 className="text-2xl font-bold md:text-3xl">
                {filteredItems[selectedImageIndex].title}
              </h3>
            </div>
          </div>

          {/* Click outside to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedImageIndex(null)}
          ></div>
        </div>
      )}

      {/* CTA Section */}
      {/* <div className="mt-24 text-center">
        <div className="mx-auto max-w-3xl rounded-[3rem] border border-blue-50 bg-white p-12 shadow-sm">
          <h3 className="mb-4 text-2xl font-bold text-slate-900">
            Want to see our campus in person?
          </h3>
          <p className="mb-8 text-slate-500">
            Photos capture a moment, but a visit captures the feeling. Join us
            for our next tour.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-slate-900 px-10 py-4 font-bold text-white shadow-xl shadow-slate-200 transition-all hover:bg-slate-800">
              Schedule a Tour
            </button>
            <button className="rounded-2xl border border-blue-100 bg-blue-50 px-10 py-4 font-bold text-blue-600 transition-all hover:bg-blue-100">
              Watch Video Tour
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default GalleryContentPage;
