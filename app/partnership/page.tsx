"use client";

import RotatingGallery from "@/components/pages/Partnership/RotatingGallery";
import { Button } from "@/components/ui/button";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export default function Partnership() {
  const { ref, isVisible } = useSectionAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <div className='min-h-screen bg-white relative'>
      {/* 회전하는 갤러리 이미지 - 전체 화면 배경 */}
      <div className='absolute inset-0 overflow-hidden'>
        <RotatingGallery />
      </div>

      {/* 가운데 텍스트 영역 */}
      <div className='relative z-20 min-h-screen flex items-center justify-center py-8 sm:py-16 md:py-24 lg:py-32'>
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center px-4 sm:px-6 md:px-8 section-fade-in ${
            isVisible ? "visible" : ""
          }`}>
          <h1 className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22.5px] font-semibold leading-[155%] tracking-[-0.02em] mb-2 sm:mb-3 md:mb-4 text-[#1a1a1a] font-pretendard'>
            제휴 · 협업 문의
          </h1>

          {/* 이메일 버튼 */}
          <Button className='bg-black text-white font-semibold hover:bg-gray-800 rounded-[1873.13px] w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] h-[50px] sm:h-[55px] md:h-[65px] px-4 sm:px-6 md:px-[37.5px] py-2 sm:py-3 md:py-[15px] gap-2 sm:gap-3 md:gap-[18.75px] mb-6 sm:mb-7 md:mb-8 font-pretendard text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22.5px] leading-[155%] tracking-normal'>
            jeonlogofficial@gmail.com
          </Button>

          {/* 설명 텍스트 */}
          <div className='space-y-2 sm:space-y-3 md:space-y-4 text-black font-pretendard leading-[155%] tracking-[-0.01em]'>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] font-semibold leading-[155%] tracking-[-0.01em] px-2'>
              <span className='text-[#3d6034] font-bold'>전:록</span>과 함께할
              파트너를 찾습니다
            </p>
            <p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] font-semibold leading-[155%] tracking-[-0.01em] px-2'>
              기관 · 갤러리 · 브랜드의 다양한 협업 제안을 환영합니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
