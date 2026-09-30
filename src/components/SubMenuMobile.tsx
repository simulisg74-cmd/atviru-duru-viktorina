import { ChevronRight } from "lucide-react";
import type { Sector } from "../data/appData";
import ProfessionImage from "./ProfessionImage";

interface SubMenuMobileProps {
  sector: Sector;
  onSelect: (professionId: string) => void;
}

export default function SubMenuMobile({ sector, onSelect }: SubMenuMobileProps) {
  const { title, icon, professions } = sector;

  return (
    <main className="mx-auto min-h-screen max-w-md bg-slate-900 p-6 text-white">
      <header className="mb-6 flex items-center gap-3">
        <span className="text-4xl" aria-hidden="true">
          {icon}
        </span>
        <div>
          <h1 className="text-xl font-extrabold leading-tight">{title}</h1>
          <p className="text-sm text-slate-400">
            Pasirink profesiją ir atsakyk į teiginius
          </p>
        </div>
      </header>

      {professions.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-slate-600 p-6 text-center text-slate-400">
          Šio sektoriaus profesijos bus pridėtos netrukus.
        </p>
      ) : (
        <ul className="space-y-4 pb-6">
          {professions.map((profession) => (
            <li key={profession.id}>
              <button
                type="button"
                onClick={() => onSelect(profession.id)}
                className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-slate-800 p-3 text-left transition hover:bg-slate-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400 active:scale-[0.98]"
              >
                <ProfessionImage
                  src={profession.image}
                  alt=""
                  className="h-20 w-20 shrink-0 rounded-xl"
                />
                <span className="flex-1">
                  <span className="block text-lg font-semibold leading-snug">
                    {profession.title}
                  </span>
                  <span className="text-sm text-slate-400">
                    Teiginių: {profession.questions.length}
                  </span>
                </span>
                <ChevronRight className="shrink-0 text-slate-400" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
