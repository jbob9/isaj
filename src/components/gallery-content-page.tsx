import { ArrowLeft, Camera, Maximize2, Sparkles } from "lucide-react";
import { useState } from "react";

type GalleryCategory = "All" | "Academic" | "Creative" | "Sports" | "Events";

const galleryItems = [
  {
    id: 1,
    title: "Science Fair Success",
    category: "Academic",
    image:
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800",
    size: "large",
  },
  {
    id: 2,
    title: "Morning Art Studio",
    category: "Creative",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    size: "small",
  },
  {
    id: 3,
    title: "Championship Spirit",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&q=80&w=800",
    size: "medium",
  },
  {
    id: 4,
    title: "Annual Drama Production",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=800",
    size: "medium",
  },
  {
    id: 5,
    title: "Coding for Beginners",
    category: "Academic",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    size: "small",
  },
  {
    id: 6,
    title: "Music Conservatory",
    category: "Creative",
    image:
      "https://images.unsplash.com/photo-1514119412350-e174d90d280e?auto=format&fit=crop&q=80&w=800",
    size: "large",
  },
  {
    id: 7,
    title: "Summer Sports Camp",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1519766428956-8a1b75224e79?auto=format&fit=crop&q=80&w=800",
    size: "small",
  },
  {
    id: 8,
    title: "Graduation Celebration",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800",
    size: "medium",
  },
];

const categories: GalleryCategory[] = [
  "All",
  "Academic",
  "Creative",
  "Sports",
  "Events",
];
const GalleryContentPage = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="animate-in fade-in slide-in-from-bottom-6 mx-auto max-w-7xl px-4 py-12 duration-700 sm:px-6 lg:px-8">
      <div className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row">
        <div>
          <button className="group mb-6 flex items-center text-slate-500 transition-colors hover:text-blue-600">
            <ArrowLeft
              size={20}
              className="mr-2 transform transition-transform group-hover:-translate-x-1"
            />
            Back to Home
          </button>
          <h1 className="text-4xl leading-tight font-bold text-slate-900 md:text-6xl">
            Moments of{" "}
            <span className="font-serif text-blue-600 italic">Discovery</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-500">
            A visual window into the daily adventures and achievements of our
            Edukids family.
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
            onClick={() => setActiveCategory(cat)}
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
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group animate-in zoom-in relative break-inside-avoid overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl shadow-blue-900/5 duration-500"
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
                <div className="flex items-center gap-2 text-xs font-bold text-blue-300">
                  <Sparkles size={14} /> View Story
                </div>
              </div>
            </div>

            {/* Floating Action */}
            <div className="absolute top-6 right-6 flex h-12 w-12 translate-x-4 transform items-center justify-center rounded-2xl bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
              <Maximize2 size={20} />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-24 text-center">
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
      </div>
    </section>
  );
};

export default GalleryContentPage;
