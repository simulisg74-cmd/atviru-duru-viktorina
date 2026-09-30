import confetti from "canvas-confetti";
import { useEffect, useState } from "react";

const pad = (n: number): string => n.toString().padStart(2, "0");

function formatTime(d: Date): string {
  return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function formatDate(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function useNow(): Date {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return now;
}

function fireConfetti(): () => void {
  const end = Date.now() + 2500;
  const colors = ["#818cf8", "#e879f9", "#fcd34d", "#34d399"];
  const options = { disableForReducedMotion: true, colors } as const;

  confetti({ ...options, particleCount: 160, spread: 100, origin: { y: 0.6 } });

  const id = window.setInterval(() => {
    if (Date.now() > end) {
      window.clearInterval(id);
      return;
    }
    confetti({ ...options, particleCount: 40, angle: 60, spread: 60, origin: { x: 0, y: 0.7 } });
    confetti({ ...options, particleCount: 40, angle: 120, spread: 60, origin: { x: 1, y: 0.7 } });
  }, 250);

  return () => {
    window.clearInterval(id);
    confetti.reset();
  };
}

export default function WinScreen() {
  const now = useNow();

  useEffect(() => fireConfetti(), []);

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-8 bg-slate-900 p-6 text-center text-white">
      <h1 className="bg-gradient-to-r from-amber-300 via-fuchsia-400 to-indigo-400 bg-clip-text text-6xl font-black leading-tight tracking-tight text-transparent">
        LAIMĖJAI!
      </h1>

      <section
        aria-label="Patvirtinimas stende"
        className="w-full animate-pulse-glow rounded-3xl border-4 border-amber-300 bg-slate-800 p-6"
      >
        <p className="text-xl font-bold text-amber-300">
          Parodyk šį ekraną stende
        </p>

        <time
          dateTime={now.toISOString()}
          className="mt-4 block font-mono text-6xl font-extrabold tabular-nums tracking-wider"
        >
          {formatTime(now)}
        </time>
        <p className="mt-1 text-sm text-slate-400">{formatDate(now)}</p>

        <p className="mt-4 text-sm font-semibold text-red-500">
          (Ekrano nuotraukos negalioja – laikas turi tiksėti!)
        </p>
      </section>
    </main>
  );
}
