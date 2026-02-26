"use client";

import { useState, useEffect, useRef } from "react";
import { partners } from "@/lib/partners";
import Image from "next/image";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCards, setShowCards] = useState(true);
  const [showArrow, setShowArrow] = useState(true);
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, isVisible: isSectionVisible } = useSectionAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  const partnersName = partners.map((partner) => partner.name);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      // 애니메이션이 90도 돌아가서 글자가 안 보일 때(0.3초 지점) 텍스트 변경
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % partnersName.length);
      }, 600);

      // 애니메이션 전체 시간(0.6초) 뒤에 클래스 제거
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }, 3000);

    return () => clearInterval(interval);
  }, [partnersName.length]);

  // 스크롤 위치에 따라 화살표 표시/숨김
  useEffect(() => {
    const handleScroll = () => {
      if (!showCards || !cardsRef.current) {
        setShowArrow(true);
        return;
      }

      const cardsTop = cardsRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // 카드 섹션이 화면 상단에 보이면 화살표 숨김, 그렇지 않으면 표시
      setShowArrow(cardsTop > windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 초기 체크

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showCards]);

  // 카드 섹션이 나타날 때 애니메이션 트리거
  useEffect(() => {
    if (showCards) {
      // 약간의 지연 후 애니메이션 시작
      const timer = setTimeout(() => {
        setIsCardsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
    // showCards가 false일 때는 비동기로 처리하여 에러 방지
    const timer = setTimeout(() => {
      setIsCardsVisible(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [showCards]);

  // 초기 마운트 시 카드 애니메이션 시작
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCardsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleShowCards = () => {
    setShowCards(true);
    // 카드가 나타난 후 부드럽게 스크롤
    setTimeout(() => {
      const cardsSection = document.getElementById("partners-cards");
      if (cardsSection) {
        cardsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className='relative bg-gradient-to-b from-white to-[#304D29]'>
      <div className='min-h-screen flex flex-col items-center justify-center px-4'>
        <div
          className={`container mx-auto max-w-6xl text-center section-fade-in ${
            isSectionVisible ? "visible" : ""
          }`}>
          <p className='text-4xl md:text-4xl text-[#3d6034] mb-6 font-pretendard text-[15px] leading-normal tracking-normal font-extrabold'>
            전:록과 함께하고 있는
          </p>

          {/* 3D 컨테이너 */}
          <div className='inline-block perspective-1000'>
            <div
              className={`transform-gpu relative ${
                isAnimating ? "animate-flip-3d" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}>
              {/* 배경 이미지 */}
              <div className='relative inline-block'>
                <Image
                  src='/images/partnersNameBorder.png'
                  alt=''
                  width={400}
                  height={150}
                  className='w-full h-full object-contain'
                />
                {/* 갤러리 이름 */}
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

        {/* 아래 화살표  */}
        {showArrow && (
          <button
            onClick={handleShowCards}
            className='fixed bottom-8 justify-center items-center -translate-x-1/2 animate-bounce cursor-pointer hover:opacity-70 transition-opacity z-50'
            aria-label='갤러리 카드 보기'>
            <svg
              width='40'
              height='24'
              viewBox='0 0 40 24'
              fill='none'
              className='mx-auto'>
              <path
                d='M2 2L20 20L38 2'
                stroke='#fff'
                strokeWidth='3'
                strokeLinecap='round'
              />
            </svg>
          </button>
        )}
      </div>

      <div
        ref={cardsRef}
        id='partners-cards'
        className={`container mx-auto max-w-7xl py-20 px-4 transition-all duration-1000 ease-out ${
          isCardsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}>
        {/* 5열 그리드 레이아웃 - 겹침 효과 */}
        <div className='flex justify-center gap-4 md:gap-6 lg:gap-8'>
          {/* Column 1: id 1, 2, 3 */}
          <div className='flex flex-col gap-4 md:gap-6'>
            {partners
              .filter((partner) => ["1", "2", "3"].includes(partner.id))
              .sort((a, b) => parseInt(a.id) - parseInt(b.id))
              .map((partner, index) => (
                <div
                  key={partner.id}
                  className={`relative hover:opacity-90 transition-all hover:scale-105 cursor-pointer ${
                    isCardsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transform: `translateY(${index * 20}px)`,
                    zIndex: 10 - index,
                    transitionDelay: `${index * 100}ms`,
                    transitionDuration: "600ms",
                    transitionTimingFunction: "ease-out",
                  }}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={240}
                    height={300}
                    className='w-[200px] md:w-[240px] h-auto object-contain'
                  />
                </div>
              ))}
          </div>

          {/* Column 2: id 4, 5, 6 */}
          <div className='flex flex-col gap-4 md:gap-6'>
            {partners
              .filter((partner) => ["4", "5", "6"].includes(partner.id))
              .sort((a, b) => parseInt(a.id) - parseInt(b.id))
              .map((partner, index) => (
                <div
                  key={partner.id}
                  className={`relative hover:opacity-90 transition-all hover:scale-105 cursor-pointer ${
                    isCardsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transform: `translateY(${index * 20}px)`,
                    zIndex: 10 - index,
                    transitionDelay: `${(index + 3) * 100}ms`,
                    transitionDuration: "600ms",
                    transitionTimingFunction: "ease-out",
                  }}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={240}
                    height={300}
                    className='w-[200px] md:w-[240px] h-auto object-contain'
                  />
                </div>
              ))}
          </div>

          {/* Column 3: id 7, 8, 9, 10 */}
          <div className='flex flex-col gap-4 md:gap-6'>
            {partners
              .filter((partner) => ["7", "8", "9", "10"].includes(partner.id))
              .sort((a, b) => parseInt(a.id) - parseInt(b.id))
              .map((partner, index) => (
                <div
                  key={partner.id}
                  className={`relative hover:opacity-90 transition-all hover:scale-105 cursor-pointer ${
                    isCardsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transform: `translateY(${index * 20}px)`,
                    zIndex: 10 - index,
                    transitionDelay: `${(index + 6) * 100}ms`,
                    transitionDuration: "600ms",
                    transitionTimingFunction: "ease-out",
                  }}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={240}
                    height={300}
                    className='w-[200px] md:w-[240px] h-auto object-contain'
                  />
                </div>
              ))}
          </div>

          {/* Column 4: id 11, 12, 13, 14 */}
          <div className='flex flex-col gap-4 md:gap-6'>
            {partners
              .filter((partner) =>
                ["11", "12", "13", "14"].includes(partner.id)
              )
              .sort((a, b) => parseInt(a.id) - parseInt(b.id))
              .map((partner, index) => (
                <div
                  key={partner.id}
                  className={`relative hover:opacity-90 transition-all hover:scale-105 cursor-pointer ${
                    isCardsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transform: `translateY(${index * 20}px)`,
                    zIndex: 10 - index,
                    transitionDelay: `${(index + 10) * 100}ms`,
                    transitionDuration: "600ms",
                    transitionTimingFunction: "ease-out",
                  }}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={240}
                    height={300}
                    className='w-[200px] md:w-[240px] h-auto object-contain'
                  />
                </div>
              ))}
          </div>

          {/* Column 5: id 15, 16, 17 */}
          <div className='flex flex-col gap-4 md:gap-6'>
            {partners
              .filter((partner) => ["15", "16", "17"].includes(partner.id))
              .sort((a, b) => parseInt(a.id) - parseInt(b.id))
              .map((partner, index) => (
                <div
                  key={partner.id}
                  className={`relative hover:opacity-90 transition-all hover:scale-105 cursor-pointer ${
                    isCardsVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transform: `translateY(${index * 20}px)`,
                    zIndex: 10 - index,
                    transitionDelay: `${(index + 14) * 100}ms`,
                    transitionDuration: "600ms",
                    transitionTimingFunction: "ease-out",
                  }}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={240}
                    height={300}
                    className='w-[200px] md:w-[240px] h-auto object-contain'
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
