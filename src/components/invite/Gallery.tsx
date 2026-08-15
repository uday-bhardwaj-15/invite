import { useRef, useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const slides = [
  { src: g1, alt: "White roses and candles on a draped wedding table" },
  { src: g2, alt: "Floral wedding mandap with white drapes and candles" },
  { src: g3, alt: "Wedding table setting with gold cutlery and rose petals" },
  { src: g4, alt: "Garden wedding aisle with lanterns and rose petals" },
];

export function Gallery() {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  const go = (next: number) => setIndex((next + slides.length) % slides.length);

  return (
    <div className="mx-auto max-w-3xl px-4">
      <div
        className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]"
        onPointerDown={(e) => (startX.current = e.clientX)}
        onPointerUp={(e) => {
          if (startX.current === null) return;
          const dx = e.clientX - startX.current;
          if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
          startX.current = null;
        }}
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              width={1400}
              height={900}
              loading="lazy"
              className="aspect-[14/9] w-full shrink-0 object-cover"
            />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent" />
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show photo ${i + 1}`}
            onClick={() => go(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-7 bg-primary" : "w-1.5 bg-primary/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
