import { useState } from "react";

interface ProfessionImageProps {
  src: string;
  alt: string;
  className?: string;
}

/** Nuotrauka su atsargine vieta, jei paveikslėlio nepavyksta užkrauti. */
export default function ProfessionImage({
  src,
  alt,
  className = "",
}: ProfessionImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-5xl ${className}`}
      >
        <span aria-hidden="true">🎓</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`pointer-events-none select-none object-cover ${className}`}
    />
  );
}
