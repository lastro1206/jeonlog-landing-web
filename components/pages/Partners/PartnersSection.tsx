"use client";

import { useState, useEffect } from "react";
import { partners } from "@/lib/partners";

export default function PartnersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const koreanPartners = partners.filter(
    (partner) => partner.name && /[가-힣]/.test(partner.name)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      // 애니메이션이 90도 돌아가서 글자가 안 보일 때(0.3초 지점) 텍스트 변경
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % koreanPartners.length);
      }, 300);

      // 애니메이션 전체 시간(0.6초) 뒤에 클래스 제거
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }, 3000);

    return () => clearInterval(interval);
  }, [koreanPartners.length]);

  return (
    <section className='relative min-h-screen bg-gradient-to-b from-white to-[#3d6034] py-20 px-4'>
      <div className='container mx-auto max-w-6xl text-center mb-16'>
        <p className='text-lg md:text-xl text-gray-700 mb-6'>
          전:록과 함께하고 있는
        </p>

        {/* 3D 컨테이너 */}
        <div className='inline-block mb-6 perspective-1000'>
          <div className='bg-yellow-100 rounded-full px-10 py-4 min-w-[280px] min-h-[80px] flex items-center justify-center shadow-sm'>
            <div
              className={`transform-gpu ${
                isAnimating ? "animate-flip-3d" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}>
              <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight'>
                {koreanPartners[currentIndex].name}
              </h2>
            </div>
          </div>
        </div>

        <p className='text-lg md:text-xl text-gray-700 mt-4'>소개합니다</p>
      </div>
      {/* 아래 화살표 */}
      <div className='flex justify-center'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          className='text-[#3d6034]'>
          <path
            d='M6 9L12 15L18 9'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>

      {/* 파트너 카드 그리드 */}
      <div className='container mx-auto max-w-7xl'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
          {partners.map((partner, index) => {
            const isDark = index % 2 === 0;

            return (
              <div
                key={partner.id}
                className={`p-6 ${
                  isDark ? "bg-[#3d6034] text-white" : "bg-white text-gray-900"
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
    </section>
  );
}
