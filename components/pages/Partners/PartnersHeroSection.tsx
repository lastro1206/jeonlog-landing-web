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
    <div className='h-[92vh] min-h-[500px] flex flex-col items-center justify-center px-4 bg-white relative z-10 overflow-hidden'>
      {/* 갤러리 이름 컨테이너 위쪽은 흰색 배경 */}
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className={`container mx-auto max-w-6xl text-center section-fade-in relative z-10 ${
          isSectionVisible ? "visible" : ""
        }`}>
        <p className='text-4xl md:text-4xl text-[#3d6034] mb-6 font-pretendard text-[15px] leading-normal tracking-normal font-extrabold'>
          전:록과 함께하고 있는
        </p>

        <div className='inline-block perspective-1000'>
          <div
            className={`transform-gpu relative ${
              isAnimating ? "animate-flip-3d" : ""
            }`}
            style={{ transformStyle: "preserve-3d" }}>
            <div className='relative inline-block'>
              <Image
                src='/images/partnersNameBorder.png'
                alt=''
                width={400}
                height={150}
                className='w-full h-full object-contain'
              />
              <div className='absolute inset-0 flex items-center justify-center'>
                <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight text-[#3d6034] whitespace-nowrap'>
                  {partnersName[currentIndex]}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <p className='text-4xl md:text-4xl text-[#3d6034] mt-4 font-pretendard text-[15px] leading-normal tracking-normal font-extrabold'>
          소개합니다
        </p>
      </div>

      {/* 갤러리 이름 컨테이너 아래부터 그라데이션 시작 */}
      <div className='absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-b from-transparent via-[#f5f9f4] to-[#7a9a75] pointer-events-none'></div>

      <button
        onClick={handleShowCards}
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-50 transition-opacity duration-500 ease-in-out ${
          showArrow ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ transform: "translateX(-50%)" }}
        aria-label='갤러리 카드 보기'>
        <svg
          width='40'
          height='24'
          viewBox='0 0 40 24'
          fill='none'
          className={showArrow ? "animate-bounce" : ""}>
          <path
            d='M2 2L20 20L38 2'
            stroke='#3d6034'
            strokeWidth='3'
            strokeLinecap='round'
          />
        </svg>
      </button>
    </div>
  );
}
