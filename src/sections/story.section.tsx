"use client";

import { useState, useCallback } from "react";

const aftermovies = [
  { year: "2025", videoId: "tcTKM0RbZW4" },
  { year: "2024", videoId: "uVFtK7z_2Hg" },
  { year: "2023", videoId: "B23eCA_GXxU" },
  { year: "2022", videoId: "t0_NekCoW0I" },
];

const FADE_MS = 250;

export const StorySection = () => {
  const [activeAftermovie, setActiveAftermovie] = useState<string | null>(null);
  const [displayedAftermovie, setDisplayedAftermovie] = useState<string | null>(null);
  const [videoVisible, setVideoVisible] = useState(false);

  const handleSelect = useCallback((videoId: string) => {
    if (activeAftermovie === videoId) {
      setVideoVisible(false);
      setTimeout(() => {
        setActiveAftermovie(null);
        setDisplayedAftermovie(null);
      }, FADE_MS);
    } else if (!displayedAftermovie) {
      setActiveAftermovie(videoId);
      setDisplayedAftermovie(videoId);
      setTimeout(() => setVideoVisible(true), 30);
    } else {
      setVideoVisible(false);
      setActiveAftermovie(videoId);
      setTimeout(() => {
        setDisplayedAftermovie(videoId);
        setTimeout(() => setVideoVisible(true), 30);
      }, FADE_MS);
    }
  }, [activeAftermovie, displayedAftermovie]);

  return (
    <section
      id="story"
      data-navbar-theme="light"
      className="bg-[#6683BE] py-16 md:py-24 text-[#FDFCEB] font-roboto"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Title */}
        <h2 className="font-salted text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-12 md:mb-16">
          HISTOIRE
        </h2>

        {/* Two text columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-16 text-sm md:text-[15px] leading-relaxed font-light">
          <p>
            Découvrez Les CuicuiteDays, un festival musical unique en son genre qui célèbre sa troisième édition publique. Né d&apos;une réunion amicale entre étudiants, cet événement s&apos;est transformé en un véritable festival ouvert à tous, porté par une équipe passionnée et dynamique. ☀️
          </p>
          <p>
            Durant deux jours intenses, profitez d&apos;une programmation exceptionnelle avec plus de 10 artistes sur scène, des animations variées, une sélection de food-trucks gourmands, le tout dans une ambiance festive et conviviale. Un événement culturel incontournable qui ne cesse de grandir et d&apos;enchanter son public 🎉
          </p>
        </div>

        {/* Main video */}
        <h3 className="font-bold text-xs sm:text-sm md:text-base tracking-widest mb-4 uppercase">
          LES CUICUITE DAYS : 1 AN DANS LES COULISSES DU FESTIVAL
        </h3>

        <div className="aspect-video w-full rounded-xl overflow-hidden bg-[#C4C8D4]/40 mb-4">
          <iframe
            src="https://www.youtube.com/embed/JAjCfDK8glY"
            title="Les CuicuiteDays : 1 an dans les coulisses du festival"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Maman text */}
        <p className="font-salted text-xs sm:text-sm md:text-base text-right mb-12 md:mb-16">
          MAMAAAAAn, JE SUIS PASSÉE À LA TÉLÉ !
        </p>

        {/* Aftermovie title */}
        <h2 className="font-salted text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 md:mb-10">
          AFTERMOVIE
        </h2>

        {/* Year buttons */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8">
          {aftermovies.map(({ year, videoId }) => (
            <button
              key={year}
              onClick={() => handleSelect(videoId)}
              className={`font-salted text-sm sm:text-base px-4 h-9 pb-1 rounded-lg border-2 border-[#1a1a1a]/50 transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer ${
                activeAftermovie === videoId
                  ? "bg-[#FFDD93] text-[#1a1a1a] shadow-md"
                  : "bg-[#FFDD93]/75 text-[#1a1a1a] hover:bg-[#FFDD93]"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Aftermovie video player — fade transition */}
        <div
          className={`transition-opacity duration-[250ms] ${displayedAftermovie ? "block" : "hidden"} ${videoVisible ? "opacity-100" : "opacity-0"}`}
        >
          {displayedAftermovie && (
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-[#C4C8D4]/40">
              <iframe
                src={`https://www.youtube.com/embed/${displayedAftermovie}?autoplay=1`}
                title="Aftermovie"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
