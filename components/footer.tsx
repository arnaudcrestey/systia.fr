import Link from 'next/link';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[#d9def8] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fe_100%)]">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        
        {/* GRID */}
        <div className="grid gap-12 sm:gap-14 md:grid-cols-[minmax(0,1.35fr)_180px_220px] md:items-start md:justify-between md:gap-16">

          {/* ===================== */}
          {/* BLOC GAUCHE SYSTIA */}
          {/* ===================== */}
          <div className="flex justify-center md:justify-start order-1">
            <div className="w-full max-w-[420px] md:max-w-[500px]">
              <div className="mx-auto flex w-full flex-col items-center text-center">

                <Link href="/home">
                  <div className="flex flex-col items-center leading-none">

                    {/* SYSTIA */}
                    <span
                      className={
                        serif.className +
                        " text-[56px] font-medium tracking-[-0.08em] text-[#10224a] sm:text-[64px] lg:text-[72px]"
                      }
                    >
                      SYSTIA
                    </span>

                    {/* BASELINE */}
                    <span
                      className={
                        serif.className +
                        " mt-2 text-[22px] font-medium tracking-[-0.035em] text-[#23345d] sm:text-[24px] lg:text-[26px]"
                      }
                    >
                      Conception de systèmes d’activité
                    </span>

                  </div>
                </Link>

                {/* Ligne */}
                <div className="mt-5 h-px w-20 bg-[#d7dceb]" />

                {/* TEXTE */}
                <p
                  className={
                    serif.className +
                    " mt-5 max-w-[26rem] text-[17px] italic leading-[1.7] text-[#5b6474] sm:max-w-[30rem] sm:text-[20px]"
                  }
                >
                  <span className="block">Clarifier l’activité, structurer l’offre</span>
                  <span className="block">
                    et concevoir les dispositifs qui génèrent des demandes.
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* ===================== */}
          {/* NAVIGATION */}
          {/* ===================== */}
          <div className="flex justify-center md:block md:justify-self-center order-2">
            <div className="w-full max-w-[220px] text-center md:w-[180px] md:text-left">

              <h3
                className={
                  inter.className +
                  " text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f172a] sm:text-xs"
                }
              >
                Navigation
              </h3>

              <nav className="mt-5 flex flex-col items-center gap-4 md:items-start">
                <Link href="/" className={inter.className + " text-[14px] text-[#475569] hover:text-[#1d4ed8]"}>
                  Accueil
                </Link>
                <Link href="/systeme" className={inter.className + " text-[14px] text-[#475569] hover:text-[#1d4ed8]"}>
                  Le système
                </Link>
                <Link href="/concepts" className={inter.className + " text-[14px] text-[#475569] hover:text-[#1d4ed8]"}>
                  Concepts
                </Link>
                <Link href="/a-propos" className={inter.className + " text-[14px] text-[#475569] hover:text-[#1d4ed8]"}>
                  À propos
                </Link>
                <Link href="/tarifs" className={inter.className + " text-[14px] text-[#475569] hover:text-[#1d4ed8]"}>
                  Tarifs
                </Link>
              </nav>
            </div>
          </div>

          {/* ===================== */}
          {/* COORDONNÉES */}
          {/* ===================== */}
          <div className="flex justify-center md:block md:justify-self-end order-3 mt-4 sm:mt-6 md:mt-0">
            <div className="w-full max-w-[260px] text-center md:w-[220px] md:text-left">

              {/* séparateur mobile */}
              <div className="mb-6 h-px w-12 bg-[#d7dceb] md:hidden mx-auto" />

              <h3
                className={
                  inter.className +
                  " text-[12px] font-semibold uppercase tracking-[0.24em] text-[#0f172a]"
                }
              >
                Coordonnées
              </h3>

              <div
                className={
                  inter.className +
                  " mt-6 flex flex-col items-center gap-5 text-[15px] text-[#334155] md:items-start"
                }
              >
                <a href="mailto:contact@systia.fr" className="break-all hover:text-[#1d4ed8]">
                  contact@systia.fr
                </a>

                <a href="tel:+33681952345" className="hover:text-[#1d4ed8]">
                  +33 6 81 95 23 45
                </a>

                <p>Vire, Normandie, France</p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* BAS FOOTER */}
        {/* ===================== */}
        <div className="mt-12 border-t border-[#d9def8] pt-6">
          <div
            className={
              inter.className +
              " flex flex-col gap-3 text-center text-[14px] text-[#64748b] md:flex-row md:items-center md:justify-between md:text-left"
            }
          >
            <p>© 2026 SYSTIA. Tous droits réservés.</p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
              <Link href="/mentions-legales" className="hover:text-[#1d4ed8]">
                Mentions légales
              </Link>
              <Link href="/politique-de-confidentialite" className="hover:text-[#1d4ed8]">
                Politique de confidentialité
              </Link>
              <Link href="/politique-de-cookies" className="hover:text-[#1d4ed8]">
                Politique de cookies
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
