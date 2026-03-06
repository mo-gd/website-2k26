import Image from "next/image";
import Link from "next/link";

export const TimeTableSection = () => {
  return (
    <section id="date" className="bg-[#EDB2D0] min-h-dvh flex items-center flex-col gap-12 md:gap-20 relative overflow-x-clip py-16 md:py-26 px-4">
      <div className="flex items-center flex-col gap-8 md:gap-12 text-[#FDFCEB] z-10">
        <h2 className="font-light tracking-wider text-2xl sm:text-3xl md:text-5xl flex items-center gap-4 md:gap-8">
          VENDREDI

          <span className="font-bold">13 JUIN</span>
        </h2>

        <div className="flex items-center gap-2 flex-col">
          <div className="flex items-center justify-between gap-8 sm:gap-16 md:gap-24 text-xl sm:text-2xl md:text-4xl">
            <p className="font-salted mb-2 md:mb-4">MAINSTAGE</p>

            <span className="font-mono tracking-widest">19:00→23:00</span>
          </div>

          <div className="flex items-center justify-between gap-8 sm:gap-10 md:gap-12 text-xl sm:text-2xl md:text-4xl">
            <p className="font-salted mb-2 md:mb-4">BIVOUAC STAGE</p>

            <span className="font-mono tracking-widest">03:00→05:00</span>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col gap-8 md:gap-12 text-[#FDFCEB] z-10">
        <h2 className="font-light tracking-wider text-2xl sm:text-3xl md:text-5xl flex items-center gap-4 md:gap-8">
          SAMEDI

          <span className="font-bold">14 JUIN</span>
        </h2>

        <div className="flex items-center gap-2 flex-col">
          <div className="flex items-center justify-between gap-8 sm:gap-16 md:gap-24 text-xl sm:text-2xl md:text-4xl">
            <p className="font-salted mb-2 md:mb-4">MAINSTAGE</p>

            <span className="font-mono tracking-widest">19:00→23:00</span>
          </div>

          <div className="flex items-center justify-between gap-8 sm:gap-10 md:gap-12 text-xl sm:text-2xl md:text-4xl">
            <p className="font-salted mb-2 md:mb-4">BIVOUAC STAGE</p>

            <span className="font-mono tracking-widest">03:00→05:00</span>
          </div>
        </div>
      </div>

      <Link
        href="https://link.cuicuitedays.fr/tickets-website-2k26"
        target="_blank"
        className="group relative z-10 px-6 pt-2 pb-4 border-2 border-[#000000] rounded-2xl bg-[#FFDD93] font-salted text-xl md:text-2xl align-middle transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,221,147,0.6)] hover:bg-[#ffe5a8] active:scale-95"
      >
        <span className="inline-block transition-transform duration-300 group-hover:animate-wiggle">
          JE VEUX MON TICKEEEEEET
        </span>
      </Link>

      <Image
        src="/image/plant-left.svg"
        alt="Illustration d'une plante dans la direction artistique du festival Les CuicuiteDays"
        width={340}
        height={750}
        className="absolute bottom-0 left-0 w-[120px] sm:w-[180px] md:w-[280px]"
      />

      <Image
        src="/image/plant-right.svg"
        alt="Illustration d'une plante dans la direction artistique du festival Les CuicuiteDays"
        width={315}
        height={450}
        className="absolute bottom-0 right-0 w-[120px] sm:w-[180px] md:w-[260px]"
      />
    </section>
  );
};
