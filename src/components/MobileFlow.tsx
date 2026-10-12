import { useState } from "react";
import { appData, isSectorId } from "../data/appData";
import SubMenuMobile from "./SubMenuMobile";
import SwipeQuiz from "./SwipeQuiz";

interface MobileFlowProps {
  specParam: string;
  /** Profesijos id iš nuorodos (`&prof=...`); jei neegzistuoja, rodomas sektoriaus meniu. */
  initialProfessionId?: string | null;
}

export default function MobileFlow({ specParam, initialProfessionId = null }: MobileFlowProps) {
  const [professionId, setProfessionId] = useState<string | null>(initialProfessionId);

  if (!isSectorId(specParam)) {
    return (
      <main className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center bg-slate-900 p-6 text-center text-white">
        <p className="text-6xl" aria-hidden="true">
          🤔
        </p>
        <h1 className="mt-4 text-2xl font-bold">Sektorius nerastas</h1>
        <p className="mt-2 text-slate-300">
          Nuskenuok QR kodą iš ekrano dar kartą.
        </p>
      </main>
    );
  }

  const sector = appData.sectors[specParam];
  const profession = sector.professions.find((p) => p.id === professionId);

  if (profession) {
    // `key` užtikrina, kad kiekvienas įėjimas į viktoriną prasideda iš naujo.
    return (
      <SwipeQuiz
        key={profession.id}
        profession={profession}
        sectorIcon={sector.icon}
        onExit={() => setProfessionId(null)}
      />
    );
  }

  return <SubMenuMobile sector={sector} onSelect={setProfessionId} />;
}
