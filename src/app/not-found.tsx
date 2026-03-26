import Link from "next/link";

const NotFound = () => {
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
          CETTE PAGE N&apos;EXISTE PAS
        </h1>

        {/* Content */}
        <div>
          <h2 className="text-xs sm:text-sm font-bold tracking-widest mb-3">OUPSSSSS !</h2>
          <p className="text-[11px] sm:text-xs leading-relaxed opacity-90 max-w-xl">
            il semblerait que cette page ait pris son envol vers des contrées inconnues… pas de panique ! il te suffit juste de suivre les oiseaux et de revenir à la page d&apos;accueil et en attendant, tends l&apos;oreille… on entendrait presque un petit cui-cui au loin…
          </p>
        </div>

        {/* Easter egg */}
        <p className="font-salted text-sm sm:text-base mt-20 opacity-90">
          OU ALORS LE BRUIT D&apos;UN FESTIVALIER A 6H DU MATIN....
        </p>
      </div>
    </main>
  );
};

export default NotFound;
