"use client";

import { useState, useEffect } from "react";
import { partners } from "@/lib/partners";
import Image from "next/image";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export default function PartnersHeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showArrow, setShowArrow] = useState(true);
  const partnersName = partners.map((partner) => partner.name);

  const { ref: sectionRef, isVisible: isSectionVisible } = useSectionAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % partnersName.length);
      }, 600);
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }, 3000);
    return () => clearInterval(interval);
  }, [partnersName.length]);

  useEffect(() => {
    const handleScroll = () => {
      const cardsSection = document.getElementById("partners-cards");
      if (!cardsSection) {
        setShowArrow(true);
        return;
      }
      const cardsTop = cardsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      // 카드 섹션이 화면에 보이기 시작하면 화살표 숨김
      setShowArrow(cardsTop > windowHeight * 0.5);
    };

    // 초기 체크 (약간의 지연을 두어 DOM이 준비된 후 체크)
    const timer = setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleShowCards = () => {
    const cardsSection = document.getElementById("partners-cards");
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    // 높이를 줄여서 더 컴팩트하게 표시
    <div className='h-[85vh] sm:h-[88vh] md:h-[92vh] min-h-[400px] sm:min-h-[500px] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 bg-white relative z-10 overflow-hidden'>
      {/* 갤러리 이름 컨테이너 위쪽은 흰색 배경 */}
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto max-w-6xl text-center section-fade-in relative z-10 ${
          isSectionVisible ? "visible" : ""
        }`}>
        <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#3d6034] mb-3 sm:mb-4 md:mb-5 lg:mb-6 font-pretendard leading-normal tracking-normal font-extrabold px-2'>
          전:록과 함께하고 있는
        </h1>

        <div className='inline-block perspective-1000'>
          <div
            className={`transform-gpu relative ${
              isAnimating ? "animate-flip-3d" : ""
            }`}
            style={{ transformStyle: "preserve-3d" }}>
            <div className='relative inline-block w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] 2xl:w-[400px]'>
              <Image
                src='/images/partnersNameBorder.png'
                alt={`${partnersName[currentIndex]} 파트너 갤러리 로고`}
                width={400}
                height={150}
                className='w-full h-full object-contain'
                priority
              />
              <div className='absolute inset-0 flex items-center justify-center px-1 sm:px-2'>
                <h2 className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold text-gray-900 tracking-tight text-[#3d6034] whitespace-nowrap'>
                  {partnersName[currentIndex]}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#3d6034] mt-2 sm:mt-3 md:mt-4 font-pretendard leading-normal tracking-normal font-extrabold px-2'>
          소개합니다
        </p>
      </div>

      {/* 갤러리 이름 컨테이너 아래부터 그라데이션 시작 */}
      <div className='absolute bottom-0 left-0 right-0 h-[55%] sm:h-[60%] bg-gradient-to-b from-transparent via-[#f5f9f4] to-[#7a9a75] pointer-events-none'></div>

      <button
        onClick={handleShowCards}
        className={`fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-50 transition-opacity duration-500 ease-in-out ${
          showArrow ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ transform: "translateX(-50%)" }}
        aria-label='갤러리 카드 보기'>
        <svg
          width='32'
          height='32'
          className={`sm:w-10 sm:h-10 md:w-[40px] md:h-[40px] ${
            showArrow ? "animate-bounce" : ""
          }`}
          viewBox='0 0 48 48'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <rect
            width='48'
            height='48'
            fill='white'
            fillOpacity='0.01'
          />
          <path
            d='M37 18L25 30L13 18'
            stroke='#fff'
            strokeWidth='4'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </div>
  );
}
