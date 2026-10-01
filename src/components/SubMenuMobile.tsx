import { ChevronRight } from "lucide-react";
import type { Sector } from "../data/appData";
import ProfessionImage from "./ProfessionImage";

interface SubMenuMobileProps {
  sector: Sector;
  onSelect: (professionId: string) => void;
}

export default function SubMenuMobile({ sector, onSelect }: SubMenuMobileProps) {
  const { title, professions } = sector;

  return (
    <main className="mx-auto min-h-screen max-w-md bg-menu-bg p-6 text-slate-900">
      <img
        src="/logo/pmc-logo.png"
        alt="Panevėžio mokymo centras"
        draggable={false}
        className="mx-auto mb-6 h-24 w-auto select-none"
      />

      <header className="mb-6 text-center">
        <h1 className="text-xl font-extrabold leading-tight">{title}</h1>
        <p className="text-sm text-slate-700">
          Pasirink profesiją ir atsakyk į 5 klausymus
        </p>
      </header>

      {professions.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-slate-500 p-6 text-center text-slate-700">
          Šio sektoriaus profesijos bus pridėtos netrukus.
        </p>
      ) : (
        <ul className="space-y-4 pb-6">
          {professions.map((profession) => (
            <li key={profession.id}>
              <button
                type="button"
                onClick={() => onSelect(profession.id)}
                className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-card-bg p-3 text-left text-white transition hover:brightness-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400 active:scale-[0.98]"
              >
                <ProfessionImage
                  src={profession.image}
                  icon={profession.icon}
                  alt=""
                  className="h-20 w-20 shrink-0 rounded-xl"
                  iconClassName="text-4xl"
                />
                <span className="flex-1 text-lg font-semibold leading-snug">
                  {profession.title}
                </span>
                <ChevronRight className="shrink-0 text-slate-200" aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
