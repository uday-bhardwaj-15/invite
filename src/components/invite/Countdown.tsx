import { useEffect, useState } from "react";
import { invite } from "@/data/invite";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

export function Countdown() {
  const target = new Date(invite.weddingDate).getTime();
  const [time, setTime] = useState(() => diff(target));

  useEffect(() => {
    const id = window.setInterval(() => setTime(diff(target)), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  const cells = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds],
  ] as const;

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
      {cells.map(([label, value]) => (
        <div
          key={label}
          className="w-[72px] rounded-xl bg-blush/60 py-4 text-center shadow-[var(--shadow-soft)] sm:w-[84px]"
        >
          <div className="font-display text-3xl font-semibold tabular-nums text-primary sm:text-4xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="font-display mt-1 text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
