import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Accueil", match: (p: string) => p === "/" },
  {
    href: "/curriculum",
    label: "Programme",
    match: (p: string) => p.startsWith("/curriculum") || p.startsWith("/grade"),
  },
  { href: "/gallery", label: "Galerie", match: (p: string) => p.startsWith("/gallery") },
  { href: "/teams", label: "Notre équipe", match: (p: string) => p.startsWith("/teams") },
  { href: "/contact", label: "Contact", match: (p: string) => p.startsWith("/contact") },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(window.location.pathname);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/[0.06] bg-[var(--color-paper)]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-18">
          <a
            href="/"
            className="group flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="font-display text-[1.6rem] leading-none font-semibold tracking-tight text-[var(--color-ink)]">
              ISAJ
            </span>
            <span className="font-display text-[1.6rem] leading-none text-[var(--color-brand)]">.</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => {
              const active = l.match(path);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`group relative rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors ${
                    active
                      ? "text-[var(--color-ink)]"
                      : "text-[var(--color-ink-mute)] hover:text-[var(--color-ink)]"
                  }`}
                >
                  {l.label}
                  <span
                    className={`pointer-events-none absolute inset-x-4 -bottom-0.5 h-px origin-left bg-[var(--color-ink)] transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <a
              href="/enrollment"
              className="group inline-flex items-center gap-1.5 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--color-ink-soft)] active:scale-[0.97]"
            >
              Inscrire
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="/enrollment"
              className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-xs font-medium text-white"
            >
              Inscrire
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="rounded-full p-2 text-[var(--color-ink)] transition-colors hover:bg-black/5"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-3xl border border-black/[0.06] bg-white/95 p-3 shadow-ink backdrop-blur-xl">
            {links.map((l) => {
              const active = l.match(path);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                    active
                      ? "bg-[var(--color-brand-soft)] text-[var(--color-brand-deep)]"
                      : "text-[var(--color-ink)] hover:bg-black/[0.03]"
                  }`}
                >
                  {l.label}
                  <ArrowUpRight size={16} className="opacity-50" />
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
