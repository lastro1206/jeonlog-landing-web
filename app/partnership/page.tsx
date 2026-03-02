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
      <div className='relative z-20 min-h-screen flex items-end justify-center py-32'>
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center px-4 section-fade-in ${
            isVisible ? "visible" : ""
          }`}>
          <h1 className='text-[22.5px] font-semibold leading-[155%] tracking-[-0.02em] mb-2 text-[#1a1a1a] font-pretendard'>
            제휴 · 협업 문의
          </h1>

          {/* 이메일 버튼 */}
          <Button className='bg-black text-white font-semibold hover:bg-gray-800 rounded-[1873.13px] w-[350px] h-[65px] px-[37.5px] py-[15px] gap-[18.75px] mb-8 font-pretendard text-[22.5px] leading-[155%] tracking-normal'>
            jeonlogofficial@gmail.com
          </Button>

          {/* 설명 텍스트 */}
          <div className='space-y-2 text-black font-pretendard leading-[155%] tracking-[-0.01em]'>
            <p className='text-[30px] font-semibold leading-[155%] tracking-[-0.01em]'>
              <span className='text-[#3d6034] font-bold'>전:록</span>과 함께할
              파트너를 찾습니다
            </p>
            <p className='text-[30px] font-semibold leading-[155%] tracking-[-0.01em]'>
              기관 · 갤러리 · 브랜드의 다양한 협업 제안을 환영합니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
