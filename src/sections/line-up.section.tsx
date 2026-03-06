"use client";

import Image from "next/image";
import { Fragment, useCallback, useRef, useState } from "react";

type Artist = {
  time: string;
  name: string;
  genre: string;
  image: string;
};

const vendrediArtists: Artist[] = [
  { time: "21:00", name: "HEADS UP", genre: "PUNK ROCK", image: "/image/lineupelements/headsup.png" },
  { time: "22:30", name: "SUPA MANA", genre: "REGGAE DUB", image: "/image/lineupelements/supermana.png" },
  { time: "00:00", name: "GOHÔ", genre: "ELECTRO/DUB", image: "/image/lineupelements/goho.png" },
  { time: "01:30", name: "BORIS & MORIS", genre: "ELECTRO/DUB", image: "/image/lineupelements/boris&moris.png" },
  { time: "03:00", name: "ALURA", genre: "TECHNO/TRANS/HYPNOTIC", image: "/image/lineupelements/alura.png" },
];

const samediArtists: Artist[] = [
  { time: "16:30", name: "HANAKA", genre: "TECHNO MELODIC", image: "/image/lineupelements/hanaka.png" },
  { time: "20:30", name: "FUTURE RUPTURE", genre: "POP ROCK/ELECTRO", image: "/image/lineupelements/futurrupture.png" },
  { time: "22:00", name: "SOOM T", genre: "HIP HOP/ REGGAE", image: "/image/lineupelements/soomt.png" },
  { time: "23:30", name: "JIVE ME", genre: "ELECTRO/POP", image: "/image/lineupelements/jivem.png" },
  { time: "01:30", name: "HUMAIN", genre: "ELECTRO", image: "/image/lineupelements/humain.png" },
];

export const LineUpSection = () => {
  const [hoveredArtist, setHoveredArtist] = useState<Artist | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    mousePosRef.current = { x: e.clientX, y: e.clientY };
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  }, []);

  const renderArtistRow = (artist: Artist) => (
    <Fragment key={artist.name}>
      <span className="justify-self-end text-right pr-1.5 sm:pr-2 md:pr-3 font-mono text-[10px] sm:text-xs md:text-base lg:text-lg tracking-widest whitespace-nowrap self-baseline">
        {artist.time}
      </span>
      <span
        className="justify-self-center font-bold text-lg sm:text-xl md:text-3xl lg:text-4xl whitespace-nowrap text-center self-baseline transition-opacity duration-200 lg:cursor-none"
        onMouseEnter={() => setHoveredArtist(artist)}
        onMouseLeave={() => setHoveredArtist(null)}
      >
        {artist.name}
      </span>
      <span className="justify-self-start text-left pl-1.5 sm:pl-2 md:pl-3 text-[7px] sm:text-[9px] md:text-xs lg:text-sm tracking-wider whitespace-nowrap self-baseline">
        {artist.genre}
      </span>
    </Fragment>
  );

  return (
    <section
      id="line-up"
      className="bg-[#FDFCEB] relative overflow-x-clip py-16 md:py-24 text-[#CC1D1D] font-roboto"
      onMouseMove={handleMouseMove}
    >
      {/* Guitar - top left */}
      <Image
        src="/image/lineupelements/_Éléments_musique.svg"
        alt=""
        width={123}
        height={264}
        className="absolute top-4 left-2 sm:top-6 sm:left-4 md:top-10 md:left-6 w-[90px] sm:w-[120px] md:w-[160px] lg:w-[200px] -rotate-12 pointer-events-none select-none"
      />

      {/* Microphone - top right */}
      <Image
        src="/image/lineupelements/_Éléments_musique-2.svg"
        alt=""
        width={190}
        height={230}
        className="absolute top-10 right-4 sm:top-14 sm:right-8 md:top-16 md:right-16 w-[60px] sm:w-[80px] md:w-[110px] lg:w-[130px] rotate-12 pointer-events-none select-none"
      />

      {/* DJ Platines - left, between sections */}
      <Image
        src="/image/lineupelements/_Éléments_musique-4.svg"
        alt=""
        width={260}
        height={227}
        className="absolute -left-6 sm:-left-4 md:-left-2 lg:left-2 top-[46%] md:top-[44%] -translate-y-1/2 w-[70px] sm:w-[100px] md:w-[150px] lg:w-[200px] -rotate-6 pointer-events-none select-none"
      />

      {/* Music notes - right, between sections */}
      <Image
        src="/image/lineupelements/_Éléments_musique-3.svg"
        alt=""
        width={113}
        height={263}
        className="absolute -right-2 sm:right-0 md:right-4 lg:right-8 top-[43%] md:top-[42%] -translate-y-1/2 w-[35px] sm:w-[45px] md:w-[65px] lg:w-[85px] rotate-6 pointer-events-none select-none"
      />

      {/* DJ Platines flipped - bottom right */}
      <Image
        src="/image/lineupelements/_Éléments_musique-5.svg"
        alt=""
        width={253}
        height={105}
        className="absolute bottom-6 right-0 sm:bottom-8 sm:right-2 md:bottom-12 md:right-6 w-[80px] sm:w-[110px] md:w-[150px] lg:w-[190px] rotate-6 pointer-events-none select-none"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col px-4 sm:px-8 md:px-16">
        {/* Title */}
        <div className="relative mb-10 md:mb-16 self-center">
          <h2 className="font-salted text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-none text-center">LINE UP</h2>
          <p className="font-salted text-[8px] sm:text-[9px] md:text-[10px] leading-tight absolute top-1/2 left-full ml-2 sm:ml-3 -rotate-6 whitespace-nowrap">
            C'EST "LA PROGRAMMATION"
            <br />
            POUR LES NULS EN ANGLAIS.
          </p>
        </div>

        {/* VENDREDI */}
        <h3 className="tracking-[0.3em] text-base sm:text-lg md:text-2xl font-light mb-5 md:mb-8 text-center">VENDREDI</h3>

        <div
          className="grid gap-y-3 sm:gap-y-4 md:gap-y-5 mb-4 md:mb-6 w-fit mx-auto items-baseline"
          style={{ gridTemplateColumns: "auto auto auto" }}
        >
          {vendrediArtists.map(renderArtistRow)}
        </div>

        {/* ÇA TUEEEEE */}
        <p className="font-salted text-xs sm:text-sm md:text-base text-center mb-8 md:mb-12">
          ÇA TUEEEEE
        </p>

        {/* SAMEDI */}
        <h3 className="tracking-[0.3em] text-base sm:text-lg md:text-2xl font-light mb-5 md:mb-8 text-center">SAMEDI</h3>

        <div
          className="grid gap-y-3 sm:gap-y-4 md:gap-y-5 mb-8 md:mb-12 w-fit mx-auto items-baseline"
          style={{ gridTemplateColumns: "auto auto auto" }}
        >
          {samediArtists.map(renderArtistRow)}
        </div>

        {/* DJ SNAKE */}
        <div className="flex flex-col items-center gap-0 mb-4 self-center">
          <span className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl">DJ SNAKE</span>
          <p className="font-salted text-[10px] sm:text-xs md:text-sm text-center leading-tight mt-1">
            BON, C'EST FAUX...
            <br />
            MAIS UN JOUR, PEUT-ÊTRE.
          </p>
        </div>
      </div>

      {/* Custom cursor image - desktop only */}
      {hoveredArtist && (
        <div
          ref={cursorRef}
          className="hidden lg:block fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2"
          style={{
            left: mousePosRef.current.x,
            top: mousePosRef.current.y,
          }}
        >
          <Image
            src={hoveredArtist.image}
            alt={hoveredArtist.name}
            width={150}
            height={150}
            className="rounded-full object-cover w-[150px] h-[150px]"
          />
        </div>
      )}
    </section>
  );
};
