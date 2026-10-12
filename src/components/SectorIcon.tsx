import { useState } from "react";
import type { Sector } from "../data/appData";

interface SectorIconProps {
  sector: Pick<Sector, "image" | "icon">;
  /** Dydžio ir formos klasės (Tailwind), pvz. `h-24 w-24`. */
  className?: string;
  /** Emoji dydžio klasė, naudojama tik atsarginiam variantui. */
  iconClassName?: string;
}

/**
 * Sektoriaus ikona: iliustracija baltoje suapvalintoje plytelėje.
 * Jei paveikslėlio nėra arba jo nepavyksta užkrauti, rodoma emoji ikona.
 */
export default function SectorIcon({
  sector,
  className = "h-24 w-24",
  iconClassName = "text-6xl",
}: SectorIconProps) {
  const [failed, setFailed] = useState(false);

  if (!sector.image || failed) {
    return (
      <span
        className={`flex select-none items-center justify-center ${iconClassName}`}
        aria-hidden="true"
      >
        {sector.icon}
      </span>
    );
  }

  return (
    <img
      src={sector.image}
      alt=""
      aria-hidden="true"
      draggable={false}
      onError={() => setFailed(true)}
      className={`pointer-events-none select-none rounded-2xl bg-white object-contain ${className}`}
    />
  );
}
