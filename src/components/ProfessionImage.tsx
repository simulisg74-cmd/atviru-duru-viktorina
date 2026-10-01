import { useState } from "react";

interface ProfessionImageProps {
  /** Nuotraukos adresas. */
  src?: string;
  /** Emoji ikona; jei nurodyta, rodoma vietoj nuotraukos. */
  icon?: string;
  alt: string;
  className?: string;
  /** Ikonos dydžio klasė (Tailwind), pvz. `text-5xl`. */
  iconClassName?: string;
}

/**
 * Profesijos vaizdas: emoji ikona arba nuotrauka su atsargine vieta,
 * jei paveikslėlio nepavyksta užkrauti.
 * Ikona yra tekstas (ne SVG), kad nesutrikdytų `react-tinder-card` gestų.
 */
export default function ProfessionImage({
  src,
  icon,
  alt,
  className = "",
  iconClassName = "text-5xl",
}: ProfessionImageProps) {
  const [failed, setFailed] = useState(false);

  if (icon || failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex select-none items-center justify-center bg-gradient-to-br from-indigo-600 to-fuchsia-600 ${iconClassName} ${className}`}
      >
        <span aria-hidden="true">{icon ?? "🎓"}</span>
      </div>
    );
  }

  // SVG iliustracijos – ikonos be fono, rodomos visos (be apkarpymo).
  const fit = src.toLowerCase().endsWith(".svg")
    ? "object-contain p-2"
    : "object-cover";

  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`pointer-events-none select-none ${fit} ${className}`}
    />
  );
}
