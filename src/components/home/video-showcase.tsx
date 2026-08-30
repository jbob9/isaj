import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";

type Video = {
  id: number;
  title: string;
  description: string;
  src: string;
  poster?: string;
  tag: string;
};

const videos: Video[] = [
  {
    id: 1,
    title: "Visite du campus ISAJ",
    description: "Découvrez nos espaces d'apprentissage, de sport et de créativité.",
    src: "/videos/kids.mp4",
    poster: "/kids-1.jpeg",
    tag: "Campus",
  },
  {
    id: 2,
    title: "Cérémonie du 18 main",
    description: "Un moment de fierté pour nos élèves et leurs familles.",
    src: "/videos/phanphare.mp4",
    poster: "/isaj-2.jpeg",
    tag: "Événement",
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

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      {/* Header */}
      <div className="mb-14 grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <p className="mb-4 text-[0.72rem] uppercase tracking-[0.22em] text-ink-mute">
            L'école en mouvement
          </p>
          <h2 className="tracking-headline balance text-[1.75rem] font-semibold leading-[1.05] text-ink sm:text-4xl md:text-[3.25rem]">
            Vivez{" "}
            <span className="font-display italic font-normal text-brand-deep">
              l'ISAJ
            </span>{" "}
            de l'intérieur
          </h2>
        </div>
        <p className="pretty text-[0.95rem] leading-relaxed text-ink-mute lg:col-span-4">
          Des moments authentiques filmés au cœur du campus — pour ressentir la
          vie quotidienne à l'Institution le Saint Justien.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Featured player */}
        <div className="lg:col-span-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-ink shadow-ink-lg">
            {/* Video */}
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
              </video>

              {/* Overlay — shown when paused */}
              {!isPlaying && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/50 backdrop-blur-[2px]">
                  <button
                    onClick={handlePlayPause}
                    className="group/btn flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20"
                    aria-label="Lire la vidéo"
                  >
                    <Play size={28} className="ml-1 text-white" fill="white" />
                  </button>
                  <div className="mt-6 max-w-sm px-8 text-center">
                    <p className="text-[0.72rem] uppercase tracking-[0.18em] text-white/50">
                      {active.tag}
                    </p>
                    <h3 className="font-display mt-2 text-[1.35rem] font-medium leading-tight italic text-white">
                      {active.title}
                    </h3>
                  </div>
                </div>
              )}

              {/* Tap to pause when playing */}
              {isPlaying && (
                <button
                  onClick={handlePlayPause}
                  className="absolute inset-0 flex cursor-pointer items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100"
                  aria-label="Pause"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-ink/50 backdrop-blur-sm">
                    <Pause size={18} className="text-white" fill="white" />
                  </div>
                </button>
              )}
            </div>

            {/* Caption bar */}
            <div className="flex items-center justify-between px-6 py-4">
              <div>
                <p className="text-[0.92rem] font-medium text-white">
                  {active.title}
                </p>
                <p className="text-[0.78rem] text-white/50">
                  {active.description}
                </p>
              </div>
              <span className="rounded-full bg-brand/20 px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-brand-soft">
                {active.tag}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail list */}
        <div className="flex flex-row gap-4 lg:col-span-4 lg:flex-col">
          {videos.map((video, idx) => {
            const isActive = video.id === activeId;
            return (
              <button
                key={video.id}
                onClick={() => handleSelect(video.id)}
                className={`group relative flex flex-1 flex-col overflow-hidden rounded-[1.25rem] text-left transition-all duration-300 lg:flex-none ${
                  isActive
                    ? "ring-2 ring-brand ring-offset-2"
                    : "ring-1 ring-black/[0.06] hover:ring-black/[0.12]"
                }`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-ink/30" />

                  {/* Play indicator */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-all ${
                        isActive ? "bg-brand" : "bg-white/20"
                      }`}
                    >
                      <Play size={13} className="ml-0.5 text-white" fill="white" />
                    </div>
                  </div>

                  {/* Index */}
                  <span className="absolute top-3 left-3 tabular text-[0.68rem] font-medium text-white/70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {isActive && (
                    <span className="absolute top-3 right-3 rounded-full bg-brand px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-white">
                      En cours
                    </span>
                  )}
                </div>

                {/* Card text */}
                <div className="bg-white px-4 py-3">
                  <p
                    className={`text-[0.88rem] font-medium leading-snug transition-colors ${
                      isActive ? "text-brand-deep" : "text-ink group-hover:text-brand-deep"
                    }`}
                  >
                    {video.title}
                  </p>
                  <p className="mt-0.5 line-clamp-1 text-[0.75rem] text-ink-mute">
                    {video.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;