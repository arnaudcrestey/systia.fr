import Link from 'next/link';

type PricingItem = {
  title: string;
  subtitle: string;
  amount: string;
  description: string;
  details: string[];
  featured?: boolean;
  startingFrom?: boolean;
  progression?: string;
  progressionLabel?: string;
};

const pricingItems: PricingItem[] = [
  {
    title: 'Faire le point avant d’agir',
    subtitle: 'Clarifier votre besoin',
    amount: '190',
    description:
      'Pour comprendre la situation et définir les priorités.',
    details: [
      'Compréhension de votre situation',
      'Clarification de votre besoin',
      'Définition des priorités',
      'Première direction à envisager',
    ],
    progression: '190 € HT',
    progressionLabel: 'Première étape',
  },
  {
    title: 'Point d’entrée sur mesure',
    subtitle: 'Construire un premier outil utile',
    amount: '490',
    description:
      'Un premier outil concret, pensé à partir de votre besoin et directement utile à votre activité.',
    details: [
      'Faire le point avant d’agir inclus',
      'Besoin et priorités déjà clarifiés',
      'Parcours utilisateur structuré',
      'Conception du point d’entrée',
    ],
    featured: true,
    progression: '+ 300 €',
    progressionLabel: 'Après le premier échange',
  },
  {
    title: 'Système complet',
    subtitle: 'Site vivant et parcours utilisateur',
    amount: '1 390',
    description:
      'Un système complet conçu pour évoluer avec l’activité, sans repartir de zéro à chaque nouvelle étape.',
    details: [
      'Faire le point avant d’agir inclus',
      'Point d’entrée sur mesure inclus',
      'Site et parcours utilisateur complet',
      'Continuité entre les outils et les contenus',
      'Site conçu pour évoluer avec votre activité',
    ],
    startingFrom: true,
    progression: '+ 900 €',
    progressionLabel: 'Après le point d’entrée',
  },
];

export const metadata = {
  title: 'Tarifs',
  description:
    'Formats, tarifs et accompagnements sur mesure pour la conception de systèmes numériques premium.',
};

function PriceDisplay({
  amount,
  startingFrom,
}: {
  amount: string;
  startingFrom?: boolean;
}) {
  return (
    <div className="mt-6 flex items-end">
      <div className="flex min-w-0 flex-wrap items-end gap-x-2 gap-y-1">
        {startingFrom ? <span className="w-full text-sm font-medium text-slate">À partir de</span> : null}
        <span className="whitespace-nowrap text-[31px] font-semibold tracking-[-0.045em] text-ink sm:text-[34px] lg:text-[35px]">
          {amount} €
        </span>

        <span className="pb-[6px] text-[10px] font-semibold uppercase tracking-[0.18em] text-slate/60 sm:text-[11px]">
          HT
        </span>
      </div>
    </div>
  );
}

function CheckDot() {
  return (
    <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-[#2f6df6]" />
  );
}

export default function TarifsPage() {
  return (
    <section className="section-spacing overflow-hidden">
      <div className="container-layout">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-eyebrow">Formats & tarifs</span>

          <h1 className="mt-4 text-[2rem] font-semibold tracking-[-0.05em] text-ink sm:text-5xl lg:text-[60px] lg:leading-[1.04]">
            Faire évoluer l’essentiel
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-7 text-slate sm:text-lg sm:leading-8">
            Un site vivant qui avance avec votre activité, sans tout recommencer.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {pricingItems.map((item) => (
            <article
              key={item.title}
              className={`group relative flex h-full min-w-0 flex-col overflow-hidden rounded-[28px] border px-5 py-6 transition duration-300 sm:px-7 sm:py-8 lg:px-8 ${
                item.featured
                  ? 'border-[#2f6df6]/20 bg-white shadow-[0_20px_70px_rgba(47,109,246,0.12)] ring-1 ring-[#2f6df6]/12'
                  : 'border-white/70 bg-white/82 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur'
              }`}
            >
              {item.featured ? (
                <>
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#2f6df6_0%,#7ea7ff_100%)]" />
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#2f6df6]/[0.06] blur-3xl" />
                </>
              ) : (
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-slate-200/30 blur-3xl" />
              )}

              <div className="relative flex h-full flex-col">
                <div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <p className="pr-2 text-sm font-medium text-[#2f6df6]">
                        {item.subtitle}
                      </p>

                      {item.featured ? (
                        <span className="inline-flex shrink-0 whitespace-nowrap rounded-full bg-[#2f6df6]/10 px-3 py-1 text-[11px] font-semibold text-[#2f6df6] sm:text-xs">
                          Recommandé
                        </span>
                      ) : null}
                    </div>

                    <h2 className="max-w-[16ch] text-[28px] font-semibold leading-[1.08] tracking-[-0.04em] text-ink sm:text-[30px] lg:text-[32px]">
                      {item.title}
                    </h2>
                  </div>

                  <PriceDisplay
                    amount={item.amount}
                    startingFrom={item.startingFrom}
                  />

                  {item.progression && item.progressionLabel ? (
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#2f6df6]/10 bg-[#2f6df6]/[0.05] px-3 py-1.5">
                      <span className="text-xs font-semibold text-[#2f6df6]">
                        {item.progression}
                      </span>

                      <span className="text-xs text-slate/70">
                        {item.progressionLabel}
                      </span>
                    </div>
                  ) : null}

                  <p className="mt-5 text-sm leading-7 text-slate sm:text-[15px] sm:leading-8">
                    {item.description}
                  </p>
                </div>

                <div className="mt-7 h-px w-full bg-[linear-gradient(90deg,rgba(47,109,246,0.14),rgba(47,109,246,0.02))]" />

                <ul className="mt-7 space-y-3.5 text-sm text-slate sm:text-[15px] sm:leading-7">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <CheckDot />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grow" />
              </div>
            </article>
          ))}
        </div>

        <section aria-labelledby="paiement-title" className="mx-auto mt-8 max-w-5xl rounded-[28px] border border-[#2f6df6]/10 bg-white/80 p-5 sm:p-8">
          <p className="text-sm font-medium text-[#2f6df6]">La création, à votre rythme</p>
          <h2 id="paiement-title" className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Paiement du système complet
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate">À partir de 1 390 € HT, comptant ou échelonné sans supplément.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ['Comptant', '1 390 €', 'HT en une fois'],
              ['Sur 12 mois', '115,83 €', 'HT / mois environ'],
              ['Sur 24 mois', '57,92 €', 'HT / mois environ'],
            ].map(([title, amount, description]) => (
              <div key={title} className="min-w-0 rounded-2xl border border-[#2f6df6]/10 bg-[#2f6df6]/[0.035] p-5">
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-4 text-[28px] font-semibold tracking-tight text-ink">{amount}</p>
                <p className="mt-2 text-sm leading-6 text-slate">{description}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-slate">
            Exemple pour un système complet à 1 390 € HT : le total reste le même, quel que soit le mode de paiement.
            La dernière échéance ajuste les centimes. Votre devis précise le montant de votre projet et son échéancier,
            après déduction des étapes déjà réglées.
          </p>
          <p className="mt-2 text-sm font-medium leading-7 text-ink">
            Exemple sur 12 mois : une fois le site en ligne, comptez environ 144,83 € HT par mois
            (115,83 € pour la création + 29 € pour le suivi). Une fois la création entièrement réglée,
            seul le suivi à 29 € HT par mois continue. Si vous payez comptant, seul ce suivi est à régler après la mise en ligne.
          </p>
        </section>

        <section aria-labelledby="suivi-title" className="mx-auto mt-8 max-w-5xl rounded-[28px] border border-[#2f6df6]/15 bg-white/90 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-8">
          <p className="text-sm font-medium text-[#2f6df6]">Après la mise en ligne</p>
          <h2 id="suivi-title" className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Faire vivre votre site
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate sm:text-base">
            Un abonnement pour le fonctionnement du site. Des évolutions à la demande pour votre activité.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="min-w-0 rounded-2xl border border-[#2f6df6]/15 bg-[#2f6df6]/[0.04] p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-ink">Le suivi mensuel</h3>
              <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-4xl font-semibold tracking-tight text-ink">29 €</span>
                <span className="text-sm text-slate">HT / mois</span>
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate">
                {['Hébergement du site', 'Entretien technique', 'Assistance par e-mail pour les questions et problèmes liés au fonctionnement du site'].map((detail) => (
                  <li key={detail} className="flex items-start gap-3"><CheckDot /><span>{detail}</span></li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-slate">
                À partir de la mise en ligne. Les modifications de contenu et les nouvelles fonctionnalités ne sont pas incluses.
              </p>
            </article>
            <article className="min-w-0 rounded-2xl border border-[#2f6df6]/10 bg-white p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-ink">Une nouveauté à partager ?</h3>
              <p className="mt-2 text-sm leading-7 text-slate">Faites évoluer votre site.</p>
              <p className="mt-4 text-sm text-slate">À partir de</p>
              <p className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="text-4xl font-semibold tracking-tight text-ink">39 €</span>
                <span className="text-sm text-slate">HT / intervention</span>
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate">
                {['Annoncer une offre du moment', 'Présenter un produit de saison, comme la galette de janvier', 'Actualiser vos horaires', 'Mettre en avant un événement'].map((detail) => (
                  <li key={detail} className="flex items-start gap-3"><CheckDot /><span>{detail}</span></li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-6 text-slate">
                Pour une modification ciblée sur une page existante. Le prix est confirmé ensemble avant de commencer.
              </p>
              <p className="mt-3 text-sm leading-6 text-slate">
                Textes et photos fournis par vos soins. Pour une nouvelle page, un quiz ou une fonctionnalité supplémentaire,
                nous préparons un devis.
              </p>
            </article>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate">
            L’abonnement et les évolutions sont distincts du prix de création, y compris pour le système complet.
          </p>
        </section>

        <div className="mx-auto mt-8 max-w-5xl">
          <div className="rounded-[24px] border border-[#2f6df6]/10 bg-[#2f6df6]/[0.045] px-5 py-5 text-center sm:px-8 sm:py-6">
            <p className="text-sm font-semibold text-ink sm:text-[15px]">
              Chaque étape s’appuie sur la précédente et fait avancer votre projet.
            </p>

            <p className="mx-auto mt-2 max-w-3xl text-sm leading-7 text-slate">
              Les cent quatre-vingt-dix euros de « Faire le point avant d’agir » sont intégrés au point d’entrée,
              puis le point d’entrée est intégré au système complet : vous ne payez jamais deux fois le même travail.
            </p>
          </div>
        </div>

        <div className="mt-10 md:mt-12">
          <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/70 px-5 py-7 shadow-[0_20px_60px_rgba(15,23,42,0.04)] backdrop-blur sm:rounded-[32px] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-[#2f6df6]/[0.05] blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-slate-300/20 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-[760px]">
                <h3 className="text-[30px] font-semibold tracking-[-0.04em] text-ink sm:text-[34px] lg:text-[38px]">
                  Parlons de votre situation
                </h3>

                <p className="mt-4 max-w-[620px] text-sm leading-7 text-slate sm:text-base sm:leading-8">
                  Commençons par comprendre votre situation et clarifier votre besoin.
                </p>

                <p className="mt-3 max-w-[680px] text-sm leading-7 text-slate sm:text-base sm:leading-8">
                  Ce premier échange permet de définir les priorités et de choisir l’étape
                  la plus utile pour faire avancer votre activité.
                </p>

                <p className="mt-5 max-w-[720px] text-xs leading-6 text-slate/70 sm:text-sm">
                  Le premier échange et le point d’entrée sont proposés à prix fixe.
                  Le système complet démarre à 1 390 € HT et son tarif évolue selon l’ampleur,
                  les fonctionnalités et le niveau de personnalisation du projet.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#2f6df6] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(47,109,246,0.28)] transition duration-200 hover:-translate-y-[1px] hover:shadow-[0_22px_46px_rgba(47,109,246,0.34)] sm:px-7 sm:text-[15px]"
                >
                  Faire un point sur votre situation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
