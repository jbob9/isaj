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
    title: "Vidéo de l'ISAJ à confirmer",
    description:
      "Le contenu et le contexte de cette vidéo restent à confirmer par l'établissement.",
    src: "/videos/kids.mp4",
    poster: "/kids-1.jpeg",
    tag: "Campus",
  },
  {
    id: 2,
    title: "Vidéo de l'ISAJ à confirmer",
    description:
      "Le contexte et la date de cette vidéo restent à confirmer par l'établissement.",
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
          <p className="text-ink-mute mb-4 text-[0.72rem] tracking-[0.22em] uppercase">
            L'école en mouvement
          </p>
          <h2 className="tracking-headline balance text-ink text-[1.75rem] leading-[1.05] font-semibold sm:text-4xl md:text-[3.25rem]">
            Vivez{" "}
            <span className="font-display text-brand-deep font-normal italic">
              l'ISAJ
            </span>{" "}
            de l'intérieur
          </h2>
        </div>
        <p className="pretty text-ink-mute text-[0.95rem] leading-relaxed lg:col-span-4">
          Les vidéos de l'ISAJ seront présentées avec leur contexte et leur
          autorisation de publication confirmés.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Featured player */}
        <div className="lg:col-span-8">
          <div className="bg-ink shadow-ink-lg relative overflow-hidden rounded-[2rem]">
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
                <div className="bg-ink/50 absolute inset-0 flex flex-col items-center justify-center backdrop-blur-[2px]">
                  <button
                    onClick={handlePlayPause}
                    className="group/btn flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/20"
                    aria-label="Lire la vidéo"
                  >
                    <Play size={28} className="ml-1 text-white" fill="white" />
                  </button>
                  <div className="mt-6 max-w-sm px-8 text-center">
                    <p className="text-[0.72rem] tracking-[0.18em] text-white/50 uppercase">
                      {active.tag}
                    </p>
                    <h3 className="font-display mt-2 text-[1.35rem] leading-tight font-medium text-white italic">
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
                  <div className="bg-ink/50 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 backdrop-blur-sm">
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
              <span className="bg-brand/20 text-brand-soft rounded-full px-3 py-1 text-[0.72rem] font-medium tracking-[0.14em] uppercase">
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
                    ? "ring-brand ring-2 ring-offset-2"
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
                  <div className="bg-ink/30 absolute inset-0" />

                  {/* Play indicator */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm transition-all ${
                        isActive ? "bg-brand" : "bg-white/20"
                      }`}
                    >
                      <Play
                        size={13}
                        className="ml-0.5 text-white"
                        fill="white"
                      />
                    </div>
                  </div>

                  {/* Index */}
                  <span className="tabular absolute top-3 left-3 text-[0.68rem] font-medium text-white/70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {isActive && (
                    <span className="bg-brand absolute top-3 right-3 rounded-full px-2 py-0.5 text-[0.65rem] font-medium tracking-wide text-white uppercase">
                      En cours
                    </span>
                  )}
                </div>

                {/* Card text */}
                <div className="bg-white px-4 py-3">
                  <p
                    className={`text-[0.88rem] leading-snug font-medium transition-colors ${
                      isActive
                        ? "text-brand-deep"
                        : "text-ink group-hover:text-brand-deep"
                    }`}
                  >
                    {video.title}
                  </p>
                  <p className="text-ink-mute mt-0.5 line-clamp-1 text-[0.75rem]">
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
