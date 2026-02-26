"use client";

import { useState, useEffect } from "react";
import { partners } from "@/lib/partners";
import Image from "next/image";

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCards, setShowCards] = useState(false);

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
    <section className='relative bg-gradient-to-b from-white to-[#304D29]'>
      <div className='min-h-screen flex flex-col items-center justify-center px-4'>
        <div className='container mx-auto max-w-6xl text-center'>
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

        {/* 화살표 아이콘 */}
        <button
          onClick={handleShowCards}
          className='animate-bounce mt-8 cursor-pointer hover:opacity-70 transition-opacity mx-auto px-4 flex justify-center items-center'
          aria-label='갤러리 카드 보기'>
          <svg
            width='40'
            height='24'
            viewBox='0 0 40 24'
            fill='none'
            className='mx-auto'>
            <path
              d='M2 2L20 20L38 2'
              stroke='#3d6034'
              strokeWidth='3'
              strokeLinecap='round'
            />
          </svg>
        </button>
      </div>

      {showCards && (
        <div
          id='partners-cards'
          className='container mx-auto max-w-7xl py-20 px-4 animate-fade-in'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
            {partners.map((partner, index) => {
              const isDark = index % 2 === 0;

              return (
                <div
                  key={partner.id}
                  className={`p-6 ${
                    isDark
                      ? "bg-[#3d6034] text-white"
                      : "bg-white text-gray-900"
                  } hover:opacity-90 transition-opacity cursor-pointer`}>
                  <div className='text-center'>
                    <h3 className='font-bold text-lg mb-2'>{partner.name}</h3>
                    {partner.nameEn && (
                      <p
                        className={`text-sm ${
                          isDark ? "text-white/80" : "text-gray-600"
                        }`}>
                        {partner.nameEn}
                      </p>
                    )}
                    <p
                      className={`text-xs mt-4 ${
                        isDark ? "text-white/60" : "text-gray-400"
                      }`}>
                      jeon:log partner
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
