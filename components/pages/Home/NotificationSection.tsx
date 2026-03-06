"use client";

import Image from "next/image";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export default function NotificationSection() {
  const { ref, isVisible } = useSectionAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-[#F0FAED] pt-0 pb-20 section-fade-in ${
        isVisible ? "visible" : ""
      }`}
      style={{
        background: "linear-gradient(to bottom, #F0FAED, #3d6034)",
      }}>
      <div className='container mx-auto max-w-7xl mb-16'>
        {/* 텍스트 헤더 */}
        <div className='text-left'>
          <p className='text-[41.19px] font-semibold text-[#3D6034] font-pretendard mb-6 leading-[100%] tracking-[-0.02em]'>
            알림
          </p>
          <h2 className='text-[71.14px] font-semibold text-black font-pretendard leading-[140%] tracking-[-0.02em] mb-4'>
            기다리던 전시를, 놓친 기억 있으신가요?
          </h2>
          <p className='text-lg text-black font-pretendard'>
            관심만 남기면, 끝나기 전에 다시 불빛이 켜집니다.
          </p>
        </div>
      </div>

      {/* 이미지 - 중앙 정렬, 크기 제한 */}
      <div className='w-full flex items-center justify-center px-4'>
        <div className='max-w-[1200px] w-full'>
          <Image
            src='/images/home/home11_2_1920.png'
            alt='알림 기능'
            width={1920}
            height={1080}
            className='w-full h-auto object-contain'
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
