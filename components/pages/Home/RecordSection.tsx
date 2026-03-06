"use client";

import Image from "next/image";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export default function RecordSection() {
  const { ref, isVisible } = useSectionAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    // 배경색이 있는 부모 컨테이너 (곡선 바깥쪽 색상)
    <div className='relative bg-[#F0FAED]'>
      <section
        ref={ref as React.RefObject<HTMLElement>}
        className={`bg-white pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-16 sm:pb-24 md:pb-32 lg:pb-40 relative section-fade-in ${
          isVisible ? "visible" : ""
        }`}
        style={{
          // 하단을 반원 모양으로 만드는 핵심 스타일
          borderBottomLeftRadius: "50% 550px",
          borderBottomRightRadius: "50% 550px",
        }}>
        <div className='container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 mb-8 sm:mb-12 md:mb-16'>
          {/* 텍스트 헤더 */}
          <div className='text-center'>
            <p className='text-base sm:text-lg md:text-xl lg:text-[24px] font-semibold text-[#3D6034] font-pretendard mb-2 sm:mb-3 md:mb-4 tracking-tight'>
              기록
            </p>
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-bold text-black font-pretendard leading-[1.3] tracking-tight'>
              오래도록 기억하는 <br className='md:hidden' /> 전시 경험
            </h2>
          </div>
        </div>

        {/* 이미지 및 레이아웃 */}
        <div className='w-full flex flex-col items-center justify-center px-4'>
          <div className='max-w-[600px] w-full relative'>
            {/* 핸드폰 목업 내부 이미지 */}
            <div className='relative z-10'>
              <Image
                src='/images/home/home10_2.png'
                alt='기록 기능 상세'
                width={600}
                height={1000}
                className='w-full h-auto object-contain'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
