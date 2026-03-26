import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Date", href: "#date" },
  { label: "Line up", href: "#line-up" },
  { label: "Histoire", href: "#story" },
  { label: "Merchandising", href: "https://egalclothing.com/collections/cuicuitedays-2k26" },
  { label: "Billeterie", href: "https://link.cuicuitedays.fr/tickets-website-2k26" },
];

const social = [
  { label: "Instagram", href: "https://www.instagram.com/cuicuitedays/" },
  { label: "Tiktok", href: "https://www.tiktok.com/@cuicuitedays" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100089684250095" },
  { label: "Youtube", href: "https://www.youtube.com/channel/UCZuHbkmPVDTc3SAgTYzzgfA" },
];

const association = [
  { label: "Nous Contacter", href: "mailto:contact@cuicuitedays.fr" },
  { label: "Crédits", href: "/credits" },
];

const legal = [
  { label: "Conditions générales de ventes", href: "https://info.helloasso.com/cgu-utilisateurs" },
  { label: "Mentions légales", href: "/mentions-legales" },
];

const FooterColumn = ({ title, links }: { title: string; links: { label: string; href: string }[] }) => (
  <div className="flex flex-col gap-3">
    <p className="font-bold text-sm md:text-base mb-1">{title}</p>
    {links.map(({ label, href }) => (
      <Link
        key={label}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="text-sm text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-colors duration-150 leading-snug"
      >
        {label}
      </Link>
    ))}
  </div>
);

export const Footer = () => {
  return (
    <footer className="bg-white py-10 md:py-14 px-6 sm:px-10 md:px-16 font-roboto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 md:gap-16">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/image/logobigcuicuite.png"
            alt="Les CuicuiteDays"
            width={160}
            height={100}
            className="w-32 md:w-40 object-contain"
          />
        </div>

        {/* Columns */}
        <div className="flex flex-wrap gap-10 md:gap-16 flex-1">
          <FooterColumn title="Navigation" links={navigation} />
          <FooterColumn title="Social" links={social} />
          <FooterColumn title="Association" links={association} />
          <FooterColumn title="Légal" links={legal} />
        </div>
      </div>
    </footer>
  );
};
