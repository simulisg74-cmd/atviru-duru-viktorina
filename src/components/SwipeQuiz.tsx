import { ArrowLeft, Check, X } from "lucide-react";
import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import TinderCard from "react-tinder-card";
import type { Profession, Question, Sector } from "../data/appData";
import LoseScreen from "./LoseScreen";
import ProfessionImage from "./ProfessionImage";
import SectorIcon from "./SectorIcon";
import WinScreen from "./WinScreen";

type Direction = "left" | "right" | "up" | "down";
type AnswerDirection = "left" | "right";
type Hint = AnswerDirection | null;

interface TinderCardApi {
  swipe(dir?: Direction): Promise<void>;
}

/** Atstumas (px), nuo kurio velkama kortelė laikoma „pabraukta“. */
const SWIPE_THRESHOLD_PX = 90;
/** Konstanta (ne nauja masyvo reikšmė kiekvieną kartą), kad biblioteka neperkurtų gestų klausytojų. */
const PREVENTED_DIRECTIONS: string[] = ["up", "down"];

const isAnswerDirection = (dir: Direction): dir is AnswerDirection =>
  dir === "left" || dir === "right";

function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j] as T, result[i] as T];
  }
  return result;
}

/* ------------------------------------------------------------------ */
/* Viena kortelė                                                       */
/* ------------------------------------------------------------------ */

interface SwipeCardProps {
  index: number;
  total: number;
  question: Question;
  profession: Profession;
  /** Spalvos užuomina rodoma tik viršutinei kortelei. */
  hint: Hint;
  onSwiped: (index: number, dir: Direction) => void;
  onLeftScreen: () => void;
  onHint: (hint: Hint) => void;
  register: (index: number, api: TinderCardApi | null) => void;
}

// `memo` + stabilūs callback'ai: velkant kortelę perpiešiamas tik turinys,
// o bibliotekos gestų klausytojai lieka nepakeisti.
const SwipeCard = memo(function SwipeCard({
  index,
  total,
  question,
  profession,
  hint,
  onSwiped,
  onLeftScreen,
  onHint,
  register,
}: SwipeCardProps) {
  const handleSwipe = useCallback(
    (dir: Direction) => onSwiped(index, dir),
    [index, onSwiped],
  );
  const handleFulfilled = useCallback(
    (dir: Direction) => onHint(isAnswerDirection(dir) ? dir : null),
    [onHint],
  );
  const handleUnfulfilled = useCallback(() => onHint(null), [onHint]);
  const setRef = useCallback(
    (api: TinderCardApi | null) => register(index, api),
    [index, register],
  );

  const border =
    hint === "right"
      ? "border-emerald-400"
      : hint === "left"
        ? "border-rose-400"
        : "border-slate-400/40";

  return (
    <TinderCard
      ref={setRef}
      className="absolute inset-0 cursor-grab select-none active:cursor-grabbing"
      preventSwipe={PREVENTED_DIRECTIONS}
      swipeRequirementType="position"
      swipeThreshold={SWIPE_THRESHOLD_PX}
      onSwipe={handleSwipe}
      onCardLeftScreen={onLeftScreen}
      onSwipeRequirementFulfilled={handleFulfilled}
      onSwipeRequirementUnfulfilled={handleUnfulfilled}
    >
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-3xl border-4 bg-quiz-card shadow-2xl transition-colors ${border}`}
      >
        <ProfessionImage
          src={profession.image}
          icon={profession.icon}
          alt={profession.title}
          className="h-2/5 w-full"
          iconClassName="text-8xl"
        />

        <div className="flex flex-1 flex-col justify-center gap-3 p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Teiginys {index + 1} / {total}
          </p>
          <p className="text-xl font-semibold leading-snug text-slate-900">
            {question.text}
          </p>
        </div>

        {/* Spalvinis sluoksnis velkant: žalia – TIESA, raudona – NETIESA. */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-150 ${
            hint === null ? "opacity-0" : "opacity-100"
          } ${hint === "right" ? "bg-emerald-500/40" : "bg-rose-500/40"}`}
        >
          <span
            className={`rounded-2xl border-4 bg-slate-900/60 px-5 py-2 text-4xl font-black tracking-wider ${
              hint === "right"
                ? "rotate-12 border-emerald-300 text-emerald-300"
                : "-rotate-12 border-rose-300 text-rose-300"
            }`}
          >
            {hint === "right" ? "TIESA" : "NETIESA"}
          </span>
        </div>
      </div>
    </TinderCard>
  );
});

/* ------------------------------------------------------------------ */
/* Viktorina                                                           */
/* ------------------------------------------------------------------ */

interface SwipeQuizProps {
  profession: Profession;
  sector: Pick<Sector, "image" | "icon">;
  onExit: () => void;
}

interface Stats {
  swiped: number;
  score: number;
}

export default function SwipeQuiz({
  profession,
  sector,
  onExit,
}: SwipeQuizProps) {
  // Klausimų tvarka sumaišoma vieną kartą įėjus į profesiją.
  const [questions] = useState<readonly Question[]>(() =>
    shuffle(profession.questions),
  );
  const total = questions.length;

  const [stats, setStats] = useState<Stats>({ swiped: 0, score: 0 });
  const [leftCount, setLeftCount] = useState(0);
  const [hint, setHint] = useState<Hint>(null);

  const answered = useRef<Set<number>>(new Set());
  const cardApis = useRef<(TinderCardApi | null)[]>([]);

  const register = useCallback((index: number, api: TinderCardApi | null) => {
    cardApis.current[index] = api;
  }, []);

  const handleSwiped = useCallback(
    (index: number, dir: Direction) => {
      const question = questions[index];
      if (!question || !isAnswerDirection(dir) || answered.current.has(index)) {
        return;
      }
      answered.current.add(index);

      // Dešinė = TIESA, kairė = NETIESA.
      const correct = (dir === "right") === question.isTrue;
      setStats((prev) => ({
        swiped: prev.swiped + 1,
        score: prev.score + (correct ? 1 : 0),
      }));
      setHint(null);
    },
    [questions],
  );

  const handleLeftScreen = useCallback(() => setLeftCount((n) => n + 1), []);

  /** Programinis brūkštelėjimas (mygtukai / klaviatūra). */
  const swipeTop = useCallback((dir: AnswerDirection) => {
    const index = answered.current.size;
    void cardApis.current[index]?.swipe(dir);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") swipeTop("left");
      else if (e.key === "ArrowRight") swipeTop("right");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [swipeTop]);

  if (total === 0) {
    return (
      <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center gap-6 bg-menu-bg p-6 text-center text-slate-900">
        <p>Šiai profesijai dar nėra teiginių.</p>
        <button
          type="button"
          onClick={onExit}
          className="rounded-2xl bg-indigo-500 px-6 py-4 font-bold"
        >
          Grįžti į profesijas
        </button>
      </main>
    );
  }

  // Rezultatas vertinamas tik kai paskutinė kortelė išskrido iš ekrano.
  if (leftCount >= total) {
    return stats.score === total ? (
      <WinScreen />
    ) : (
      <LoseScreen score={stats.score} total={total} onExit={onExit} />
    );
  }

  const current = Math.min(stats.swiped + 1, total);

  return (
    <div className="bg-menu-bg">
      <main className="mx-auto flex h-dvh max-w-md flex-col overflow-hidden overscroll-none bg-menu-bg p-6 text-slate-900">
        <header className="mb-4 flex items-center gap-3">
          <button
            type="button"
            onClick={onExit}
            aria-label="Grįžti į profesijas"
            className="rounded-full bg-white/60 p-2 text-slate-800 transition hover:bg-white/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400"
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <SectorIcon
            sector={sector}
            className="h-10 w-10 shrink-0"
            iconClassName="text-2xl"
          />
          <h1 className="text-sm font-semibold leading-tight text-slate-800">
            {profession.title}
          </h1>
        </header>

        <div
          role="progressbar"
          aria-label="Viktorinos eiga"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={stats.swiped}
          className="h-3 shrink-0 overflow-hidden rounded-full bg-slate-500/30"
        >
          <div
            className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400 transition-all duration-500"
            style={{ width: `${(stats.swiped / total) * 100}%` }}
          />
        </div>
        <div className="mt-2 flex shrink-0 justify-between text-sm text-slate-600">
          <span>
            Kortelė {current} iš {total}
          </span>
          <span>
            Teisingai: <b className="text-slate-900">{stats.score}</b>
          </span>
        </div>

        {/* Kortelių sritis: touch-none, kad brūkštelėjimas nescrollintų puslapio. */}
        <div className="relative mt-4 min-h-0 flex-1 touch-none">
          {/* Kraštų indikatoriai */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 -left-6 z-20 w-20 bg-gradient-to-r from-rose-500/70 to-transparent transition-opacity duration-150 ${
              hint === "left" ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 -right-6 z-20 w-20 bg-gradient-to-l from-emerald-500/70 to-transparent transition-opacity duration-150 ${
              hint === "right" ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Atvirkštinė tvarka: pirmas klausimas DOM'e paskutinis, todėl yra viršuje. */}
          {questions
            .map((question, index) => ({ question, index }))
            .reverse()
            .map(({ question, index }) => (
              <SwipeCard
                key={index}
                index={index}
                total={total}
                question={question}
                profession={profession}
                hint={index === stats.swiped ? hint : null}
                onSwiped={handleSwiped}
                onLeftScreen={handleLeftScreen}
                onHint={setHint}
                register={register}
              />
            ))}
        </div>

        <footer className="mt-4 shrink-0">
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => swipeTop("left")}
              aria-label="Netiesa"
              className={`flex flex-1 flex-col items-center gap-1 rounded-2xl border-2 border-rose-500 py-3 font-bold text-rose-700 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-400 active:scale-95 ${
                hint === "left" ? "scale-105 bg-rose-500/30" : "bg-rose-500/10"
              }`}
            >
              <X aria-hidden="true" />
              <span className="text-sm">← NETIESA</span>
            </button>
            <button
              type="button"
              onClick={() => swipeTop("right")}
              aria-label="Tiesa"
              className={`flex flex-1 flex-col items-center gap-1 rounded-2xl border-2 border-emerald-500 py-3 font-bold text-emerald-700 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 active:scale-95 ${
                hint === "right"
                  ? "scale-105 bg-emerald-500/30"
                  : "bg-emerald-500/10"
              }`}
            >
              <Check aria-hidden="true" />
              <span className="text-sm">TIESA →</span>
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
