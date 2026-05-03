'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { navigation } from '@/data/site';
import { ButtonLink } from '@/components/ui';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9def8]/80 bg-[#f8f9fe]/86 backdrop-blur-xl">
      <div className="container-layout flex h-20 items-center justify-between gap-5">
        <Link
          href="/home"
          className="group flex shrink-0 flex-col leading-tight"
          aria-label="Retour à l’accueil SYSTIA"
        >
          <span className="text-[22px] font-semibold tracking-[0.16em] text-[#10224a] transition group-hover:text-[#1d4ed8] sm:text-[24px]">
            SYSTIA
          </span>

          <span className="mt-1 max-w-[220px] text-[11px] font-medium tracking-[0.16em] text-[#6e7895] sm:max-w-none sm:text-[12px]">
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
                className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ease-premium ${
                  active
                    ? 'bg-[#10224a] text-white shadow-card'
                    : 'text-[#5b6474] hover:bg-white hover:text-[#10224a]'
                }`}
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
          className="inline-flex items-center justify-center rounded-full border border-[#d9def8] bg-white/90 p-3 text-[#10224a] shadow-[0_14px_34px_rgba(17,30,66,0.06)] transition hover:bg-white lg:hidden"
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
        <div className="border-t border-[#d9def8] bg-[#f8f9fe]/95 lg:hidden">
          <div className="container-layout flex flex-col gap-2 py-4">
            {navigation.map((item) => {
              const targetHref = item.href === '/' ? '/home' : item.href;
              const active = pathname === targetHref;

              return (
                <Link
                  key={item.href}
                  href={targetHref}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? 'bg-[#10224a] text-white'
                      : 'bg-white/75 text-[#10224a] hover:bg-white'
                  }`}
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
