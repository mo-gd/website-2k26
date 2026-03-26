import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
};

const sections = [
  {
    title: "ÉDITEUR DU SITE",
    content:
      "le site www.cuicuitedays.fr (ci-après dénommé le « site ») est édité et exploité par l'association lcds evenements (ci-après dénommée « lcds évenements »), association loi 1901, représentée par m. augustin fouillet, en qualité de président. responsable de la publication : m. hugo campos, hcampospro@gmail.com.",
  },
  {
    title: "HÉBERGEMENT",
    content:
      "l'hébergement du site est assuré par : github. le déploiement du site est assuré par : railway. le nom de domaine est attribuer par ovh, 2 rue kellermann, 59100 roubaix, france.",
  },
  {
    title: "PROPRIÉTÉ INTELLECTUELLE",
    content:
      "tout le contenu du site www.cuicuitedays.fr, incluant de façon non limitative les textes, images, graphismes, logos, vidéos et icônes, est la propriété exclusive de l'association lcds événements, sauf mention contraire.\ntoute reproduction, représentation, distribution, modification ou adaptation, totale ou partielle, de ces éléments est interdite sans autorisation écrite préalable de l'association lcds événements.",
  },
  {
    title: "MARQUES",
    content:
      "les dénominations sociales, marques et signes distinctifs figurant sur le site sont protégés par les lois françaises et internationales. toute utilisation, reproduction, diffusion ou représentation de tout ou partie d'un des signes précités sans autorisation expresse écrite est interdite.",
  },
  {
    title: "LIMITATION DE RESPONSABILITÉ",
    content:
      "nous nous efforçons d'assurer, au mieux de nos possibilités, l'exactitude et l'actualité des informations diffusées sur le site. nous nous réservons le droit de corriger et de modifier le contenu du site à tout moment et sans préavis. il appartient aux visiteurs du site de vérifier l'information donnée sur le site par d'autres moyens, y compris en nous contactant directement. nous déclinons toute responsabilité (a) pour toute imprécision, inexactitude ou omission relative aux informations disponibles sur le site, (b) pour les dommages résultant d'une modification des informations figurant sur le site causés par une éventuelle manipulation frauduleuse effectuée par des tiers et (c) pour tous dommages, directs ou indirects, quelles qu'en soient les causes, origines, nature ou conséquences, provoqués à raison de l'accès de quiconque au site ou de l'impossibilité d'y accéder, de même que l'utilisation du site et/ou du crédit accordé à une quelconque information provenant directement ou indirectement de ce dernier.",
  },
  {
    title: "CONTACT",
    content:
      "notre service de relations clients est joignable à l'adresse mail suivante : communication.cuicuitedays@gmail.com",
  },
];

const MentionsLegalesPage = () => {
  return (
    <main className="bg-gradient-landing min-h-dvh text-[#FDFCEB] font-roboto">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 pt-32 pb-20">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-10 opacity-80 hover:opacity-100 transition-opacity"
        >
          ← Retour
        </Link>

        {/* Title */}
        <h1 className="font-salted text-4xl sm:text-5xl md:text-6xl mb-14 leading-none">
          MENTIONS LÉGALES
        </h1>

        {/* Sections */}
        <div className="flex flex-col gap-10">
          {sections.map(({ title, content }) => (
            <div key={title}>
              <h2 className="text-xs sm:text-sm font-bold tracking-widest mb-3">{title}</h2>
              <p className="text-[11px] sm:text-xs leading-relaxed opacity-90 whitespace-pre-line">
                {content}
              </p>
            </div>
          ))}
        </div>

        {/* Easter egg */}
        <p className="font-salted text-sm sm:text-base mt-20 opacity-90">
          QUI ES-TU, UN ESPION ? PERSONNE NE VIENT JUSQU&apos;ICI NORMALEMENT.
        </p>
      </div>
    </main>
  );
};

export default MentionsLegalesPage;
