interface LoseScreenProps {
  score: number;
  total: number;
  onExit: () => void;
}

export default function LoseScreen({ score, total, onExit }: LoseScreenProps) {
  return (
    <div className="bg-menu-bg">
      <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center p-6 text-center text-slate-900">
        <p className="text-7xl" aria-hidden="true">
          😕
        </p>
        <h1 className="mt-6 text-3xl font-extrabold text-rose-700">
          Šįkart nepavyko
        </h1>
        <p className="mt-6 text-6xl font-black tabular-nums">
          {score}/{total}
        </p>
        <p className="mt-3 text-lg text-slate-700">
          Laimėjimui reikia atsakyti teisingai į visus {total} teiginius.
        </p>
        <button
          type="button"
          onClick={onExit}
          className="mt-10 w-full rounded-2xl bg-indigo-500 py-5 text-xl font-bold text-white transition hover:bg-indigo-400 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 active:scale-95"
        >
          Grįžti į profesijas
        </button>
      </main>
    </div>
  );
}
