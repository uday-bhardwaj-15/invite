import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import track from "@/assets/wedding-theme.mp3.asset.json";

export function MusicToggle({ started }: { started: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!started) return;
    const el = audioRef.current;
    if (!el) return;
    el.volume = 0.45;
    el.play().then(
      () => setPlaying(true),
      () => setPlaying(false),
    );
  }, [started]);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) {
      el.volume = 0.45;
      el.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={track.url} loop preload="auto" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Mute music" : "Play music"}
        className="fixed right-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-card/80 text-primary shadow-[var(--shadow-soft)] backdrop-blur-md transition-transform hover:scale-105"
      >
        {playing ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </button>
    </>
  );
}
