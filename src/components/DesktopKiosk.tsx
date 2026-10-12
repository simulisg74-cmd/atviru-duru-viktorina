import { QRCodeSVG } from "qrcode.react";
import { appData, SECTOR_IDS } from "../data/appData";
import SectorIcon from "./SectorIcon";

function sectorUrl(key: string): string {
  return window.location.origin + "/?spec=" + key;
}

function professionsLabel(count: number): string {
  const lastTwo = count % 100;
  const last = count % 10;
  if (last === 1 && lastTwo !== 11) return `${count} profesija`;
  if (last === 0 || (lastTwo >= 11 && lastTwo <= 19)) return `${count} profesijų`;
  return `${count} profesijos`;
}

export default function DesktopKiosk() {
  return (
    <main className="min-h-screen bg-slate-900 px-8 py-10 lg:px-16">
      <header className="mx-auto mb-12 max-w-5xl text-center">
        <h1 className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-amber-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent lg:text-7xl">
          Nuskenuok ir žaisk!
        </h1>
        <p className="mt-5 text-xl text-slate-300 lg:text-3xl">
          Nuskenuok sektoriaus QR kodą, pasirink profesiją ir brauk kortas:
          dešinėn – tiesa, kairėn – netiesa.
        </p>
      </header>

      <section
        aria-label="Sektoriai"
        className="mx-auto grid max-w-[1800px] grid-cols-2 gap-6 lg:grid-cols-3 2xl:grid-cols-4"
      >
        {SECTOR_IDS.map((key) => {
          const sector = appData.sectors[key];
          const { title, professions } = sector;
          const available = professions.length > 0;

          return (
            <article
              key={key}
              className="flex flex-col items-center gap-4 rounded-3xl border border-white/10 bg-slate-800/70 p-6 text-center shadow-xl shadow-black/30 transition duration-300 hover:z-10 hover:scale-105 hover:border-indigo-400/70 hover:bg-slate-800"
            >
              <SectorIcon sector={sector} className="h-28 w-28 lg:h-32 lg:w-32" />
              <h2 className="flex min-h-16 items-center text-xl font-bold leading-snug lg:text-2xl">
                {title}
              </h2>

              {available ? (
                <>
                  <div className="inline-block rounded-xl bg-white p-6 shadow-[0_0_40px_rgba(255,255,255,0.25)]">
                    <QRCodeSVG
                      value={sectorUrl(key)}
                      size={180}
                      level="M"
                      fgColor="#000000"
                      bgColor="#ffffff"
                      title={`QR kodas: ${title}`}
                    />
                  </div>
                  <p className="text-sm font-medium text-indigo-300">
                    {professionsLabel(professions.length)}
                  </p>
                </>
              ) : (
                <div className="flex h-[276px] w-full items-center justify-center rounded-3xl border-2 border-dashed border-slate-600 text-lg font-semibold text-slate-400">
                  Netrukus
                </div>
              )}
            </article>
          );
        })}
      </section>
    </main>
  );
}
