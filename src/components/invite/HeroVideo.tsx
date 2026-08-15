import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import poster from "@/assets/hero-poster.jpg";
import heroLoop from "@/assets/hero-loop.mp4.asset.json";
import { invite } from "@/data/invite";

export function HeroVideo() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative h-[100svh] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroLoop.url}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.3 0.05 300 / 0.35) 0%, transparent 35%, oklch(0.3 0.05 300 / 0.25) 70%, var(--background) 100%)",
        }}
      />

      <div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{
          transform: `translateY(${offset * 0.22}px)`,
          opacity: Math.max(0, 1 - offset / 620),
        }}
      >
        <span className="text-lg text-ivory/90">&#10084;</span>
        <p className="font-script mt-2 max-w-xs text-xl leading-relaxed text-ivory/95 drop-shadow-lg sm:max-w-sm sm:text-2xl">
          We are honored to welcome you to the Wedding ceremony of...
        </p>

        <div className="mt-8">
          <h1 className="font-script gold-text text-6xl leading-none drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)] sm:text-8xl">
            {invite.groom.name}
          </h1>
          <div className="font-display mt-4 space-y-0.5 text-sm text-ivory/90">
            <p>{invite.groom.parents}</p>
            <p>{invite.groom.education}</p>
            <p>{invite.groom.title}</p>
          </div>
        </div>

        <p className="font-script my-4 text-3xl text-ivory/85">&amp;</p>

        <div>
          <h2 className="font-script gold-text text-6xl leading-none drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)] sm:text-8xl">
            {invite.bride.name}
          </h2>
          <div className="font-display mt-4 space-y-0.5 text-sm text-ivory/90">
            <p>{invite.bride.parents}</p>
            <p>{invite.bride.education}</p>
            <p>{invite.bride.title}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center text-ivory/85">
        <span className="font-display text-[0.65rem] uppercase tracking-[0.5em]">Scroll</span>
        <ChevronDown
          className="mt-1 h-5 w-5"
          style={{ animation: "soft-float 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
