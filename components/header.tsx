'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Cormorant_Garamond, Inter } from 'next/font/google';

import { navigation } from '@/data/site';
import { ButtonLink } from '@/components/ui';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9def8]/80 bg-[#f8f9fe]/92 backdrop-blur-xl">
      <div className="container-layout relative flex h-24 items-center justify-center lg:h-20 lg:justify-between">
        <Link
  href="/"
  className="group flex shrink-0 flex-col items-center text-center leading-none"
  aria-label="Retour à l’accueil SYSTIA"
>
  <span
    className={
      serif.className +
      " text-[42px] font-medium tracking-[-0.08em] text-[#10224a] transition group-hover:text-[#1d4ed8] sm:text-[48px] lg:text-[46px]"
    }
  >
    SYSTIA
  </span>

  <span
    className={
      serif.className +
      " mt-1 text-center text-[17px] font-medium tracking-[-0.035em] text-[#23345d] sm:text-[19px] lg:text-[18px]"
    }
  >
    Conception de systèmes d’activité
  </span>
</Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => {
            const targetHref = item.href === '/' ? '/home' : item.href;
            const active = pathname === targetHref;

            return (
              <Link
                key={item.href}
                href={targetHref}
                className={
                  inter.className +
                  ` rounded-full px-4 py-2 text-sm font-medium transition duration-300 ease-premium ${
                    active
                      ? 'bg-[#10224a] text-white shadow-card'
                      : 'text-[#5b6474] hover:bg-white hover:text-[#10224a]'
                  }`
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact">Parler de votre projet</ButtonLink>
        </div>

        <button
          type="button"
          className="absolute right-5 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#d9def8] bg-white/92 text-[#10224a] shadow-[0_18px_40px_rgba(17,30,66,0.08)] transition hover:bg-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#d9def8] bg-[#f8f9fe]/96 lg:hidden">
          <div className="container-layout flex flex-col gap-2 py-4">
            {navigation.map((item) => {
              const targetHref = item.href === '/' ? '/home' : item.href;
              const active = pathname === targetHref;

              return (
                <Link
                  key={item.href}
                  href={targetHref}
                  onClick={() => setOpen(false)}
                  className={
                    inter.className +
                    ` rounded-2xl px-4 py-3 text-center text-sm font-medium transition ${
                      active
                        ? 'bg-[#10224a] text-white'
                        : 'bg-white/78 text-[#10224a] hover:bg-white'
                    }`
                  }
                >
                  {item.label}
                </Link>
              );
            })}

            <ButtonLink
              href="/contact"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Parler de votre projet
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
