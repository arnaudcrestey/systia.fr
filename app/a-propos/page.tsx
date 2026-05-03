import { PageHero } from '@/components/page-hero';
import { Surface } from '@/components/ui';

export const metadata = {
  title: 'À propos | SYSTIA',
  description:
    'SYSTIA conçoit des systèmes numériques clairs, structurés et crédibles pour transformer une expertise en prises de contact qualifiées.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#F5F7FB]">
      <PageHero
        eyebrow="À propos"
        title="Une approche conçue pour structurer une expertise et la transformer en demandes qualifiées."
        description={
          "SYSTIA conçoit des systèmes numériques simples, lisibles et crédibles pour rendre une activité plus claire, plus compréhensible et plus engageante.\nL’enjeu n’est pas seulement d’être visible, mais de construire un dispositif capable de créer les bonnes prises de contact."
        }
        primaryCta={{ href: '/contact', label: 'Présenter une situation' }}
      />

      <section className="section-spacing pt-6">
        <div className="container-layout grid gap-5 sm:gap-6 lg:grid-cols-2">
          <Surface className="border border-black/5 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-ink sm:text-2xl">
              Positionnement
            </h2>

            <p className="mt-4 text-base font-medium leading-7 text-ink sm:leading-8">
              SYSTIA ne conçoit pas de simples sites.
            </p>

            <p className="mt-2 text-base font-medium leading-7 text-ink sm:leading-8">
              SYSTIA conçoit des systèmes numériques.
            </p>

            <p className="mt-3 text-base leading-7 text-slate sm:leading-8">
              Des dispositifs capables de capter l’attention, de poser les bonnes
              questions et de transformer une expertise en demande concrète.
            </p>
          </Surface>

          <Surface className="border border-black/5 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-ink sm:text-2xl">
              Méthode
            </h2>

            <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
              Le travail part toujours du réel : l’activité, ses enjeux, ses
              publics et ses usages.
            </p>

            <p className="mt-3 text-base leading-7 text-slate sm:leading-8">
              L’objectif est ensuite de clarifier, structurer et concevoir un
              dispositif clair, fluide et cohérent.
            </p>

            <p className="mt-3 text-base leading-7 text-slate sm:leading-8">
              Chaque élément est pensé pour être compris rapidement et utilisé
              concrètement.
            </p>
          </Surface>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-layout">
          <Surface className="border border-black/5 bg-white p-6 sm:p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                Origine de l’approche
              </h2>

              <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
                SYSTIA s’appuie sur une double culture : la compréhension des
                situations humaines complexes et la conception de dispositifs
                numériques structurés.
              </p>

              <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
                Cette approche vient d’un parcours de plus de 25 ans dans des
                environnements exigeants, où l’écoute, l’analyse et la mise en
                clarté sont essentielles.
              </p>

              <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
                Appliquée au numérique, cette expérience permet de concevoir des
                systèmes qui ne se limitent pas à l’apparence, mais qui servent
                réellement la compréhension, la relation et la prise de décision.
              </p>

              <p className="mt-4 text-base font-medium leading-7 text-ink sm:leading-8">
                La finalité est simple : concevoir des systèmes utiles, lisibles
                et cohérents.
              </p>
            </div>
          </Surface>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-layout grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Surface className="border border-black/5 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink sm:text-xl">
              Ce qui est conçu
            </h3>

            <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
              Des points d’entrée, mini-sites, diagnostics interactifs et
              parcours digitaux pensés pour capter l’attention et déclencher un
              premier contact qualifié.
            </p>
          </Surface>

          <Surface className="border border-black/5 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink sm:text-xl">
              Ce qui est recherché
            </h3>

            <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
              Concevoir des dispositifs visibles, compréhensibles et engageants,
              sans complexité inutile.
            </p>

            <p className="mt-3 text-base leading-7 text-slate sm:leading-8">
              Améliorer l’expérience utilisateur, la perception globale de
              l’activité et la qualité des premiers échanges.
            </p>
          </Surface>

          <Surface className="border border-black/5 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink sm:text-xl">
              Ce que cela change
            </h3>

            <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
              Une activité mieux présentée, plus crédible et plus clairement
              comprise.
            </p>

            <p className="mt-3 text-base leading-7 text-slate sm:leading-8">
              Un système qui soutient la visibilité, facilite la prise de contact
              et renforce la cohérence du parcours.
            </p>
          </Surface>
        </div>
      </section>

      <section className="section-spacing pt-0 pb-16">
        <div className="container-layout">
          <Surface className="border border-black/5 bg-white p-6 sm:p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                Pour qui
              </h2>

              <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
                SYSTIA intervient auprès de professionnels dont l’activité repose
                sur une expertise réelle.
              </p>

              <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
                Des métiers où la valeur existe déjà, mais reste parfois difficile
                à structurer, à rendre lisible et à présenter de façon claire et
                différenciante.
              </p>

              <p className="mt-6 text-base font-medium leading-7 text-ink sm:leading-8">
                Lorsqu’un écart apparaît entre la valeur réelle d’une activité et
                la manière dont elle est perçue, un travail de clarification et
                de structuration devient nécessaire.
              </p>
            </div>
          </Surface>
        </div>
      </section>
    </div>
  );
}
