import { Play } from "lucide-react";
import { useRef, useState } from "react";

type Video = {
  id: number;
  title: string;
  description: string;
  src: string;
  poster?: string;
};

const videos: Video[] = [
  {
    id: 1,
    title: "Visite du campus ISAJ",
    description:
      "Découvrez nos espaces d'apprentissage, de sport et de créativité.",
    src: "/videos/kids.mp4",
    poster: "/kids-1.jpeg",
  },
  {
    id: 2,
    title: "Cérémonie du 18 mai",
    description: "Un moment fort de fierté pour nos élèves et leurs familles.",
    src: "/videos/phanphare.mp4",
    poster: "/isaj-2.jpeg",
  },
];

const VideoShowcase = () => {
  const [activeId, setActiveId] = useState(videos[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const active = videos.find((v) => v.id === activeId)!;

  const handleSelect = (id: number) => {
    if (id === activeId) return;
    setActiveId(id);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  };

  const handlePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="mx-auto max-w-7xl overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="mb-4 block text-xs font-bold tracking-widest text-blue-500 uppercase">
            Notre école en vidéo
          </span>
          <h2 className="text-4xl leading-tight font-bold text-[#3D2C26] md:text-5xl">
            Vivez{" "}
            <span className="font-serif text-blue-500 italic">l'ISAJ</span> de
            l'intérieur
          </h2>
        </div>
        <p className="max-w-sm text-base leading-relaxed text-gray-500">
          Des moments authentiques, filmés au cœur du campus — pour que vous
          puissiez ressentir la vie à l'Institution le Saint Justien.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Featured player */}
        <div className="lg:col-span-8">
          <div className="group relative overflow-hidden rounded-3xl bg-[#3D2C26] shadow-2xl shadow-blue-900/10">
            <div className="relative aspect-video w-full">
              <video
                ref={videoRef}
                key={active.src}
                poster={active.poster}
                className="h-full w-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                preload="none"
              >
                <source src={active.src} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>

              {/* Overlay — shown when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                  <button
                    onClick={handlePlay}
                    className="group/btn flex h-20 w-20 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/25"
                    aria-label="Lire la vidéo"
                  >
                    <Play
                      size={32}
                      className="ml-1 text-white transition-transform group-hover/btn:scale-110"
                      fill="white"
                    />
                  </button>
                  <div className="mt-5 max-w-lg px-6 text-center">
                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      {active.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">
                      {active.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Play/pause toggle when playing */}
              {isPlaying && (
                <button
                  onClick={handlePlay}
                  className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 transition-opacity hover:opacity-100"
                  aria-label="Pause"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm">
                    <div className="flex gap-1.5">
                      <span className="h-6 w-1.5 rounded-full bg-white" />
                      <span className="h-6 w-1.5 rounded-full bg-white" />
                    </div>
                  </div>
                </button>
              )}
            </div>

            {/* Caption bar */}
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <p className="text-sm font-bold text-white">{active.title}</p>
                <p className="text-xs text-white/55">{active.description}</p>
              </div>
              <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                ISAJ
              </span>
            </div>
          </div>
        </div>

        {/* Sidebar — thumbnail list */}
        <div className="flex flex-row gap-4 lg:col-span-4 lg:flex-col">
          {videos.map((video) => {
            const isActive = video.id === activeId;
            return (
              <button
                key={video.id}
                onClick={() => handleSelect(video.id)}
                className={`group flex flex-1 flex-col overflow-hidden rounded-2xl border-2 text-left shadow-lg transition-all duration-300 lg:flex-none ${
                  isActive
                    ? "border-blue-500 shadow-blue-200"
                    : "border-transparent bg-white shadow-gray-100/80 hover:border-blue-200 hover:shadow-blue-100"
                }`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden rounded-t-xl">
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-blue-600"
                          : "bg-white/20 group-hover:bg-white/30"
                      }`}
                    >
                      <Play
                        size={14}
                        className="ml-0.5 text-white"
                        fill="white"
                      />
                    </div>
                  </div>
                  {isActive && (
                    <div className="absolute top-2 left-2 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">
                      En cours
                    </div>
                  )}
                </div>

                {/* Card text */}
                <div className="p-4">
                  <p
                    className={`text-sm leading-snug font-bold ${
                      isActive ? "text-blue-600" : "text-[#3D2C26]"
                    }`}
                  >
                    {video.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-gray-400">
                    {video.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer note */}
      <p className="mt-8 text-center text-sm text-gray-400">
        Pour voir toutes nos vidéos, suivez-nous sur{" "}
        <a
          href="#"
          className="font-medium text-blue-500 underline decoration-blue-200 underline-offset-4 hover:text-blue-600"
        >
          Facebook
        </a>{" "}
        et{" "}
        <a
          href="#"
          className="font-medium text-blue-500 underline decoration-blue-200 underline-offset-4 hover:text-blue-600"
        >
          Instagram
        </a>
        .
      </p>
    </section>
  );
};

export default VideoShowcase;
