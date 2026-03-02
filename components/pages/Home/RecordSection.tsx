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
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-white pt-20 pb-0 section-fade-in ${
        isVisible ? "visible" : ""
      }`}>
      <div className='container mx-auto max-w-7xl px-4 mb-16'>
        {/* 텍스트 헤더 */}
        <div className='text-center'>
          <p className='text-[41.19px] font-semibold text-[#3D6034] font-pretendard mb-6 leading-[100%] tracking-[-0.02em]'>
            기록
          </p>
          <h2 className='text-[71.14px] font-semibold text-black font-pretendard leading-[140%] tracking-[-0.02em]'>
            오래도록 기억하는 전시 경험
          </h2>
        </div>
      </div>

      {/* 이미지 - 전체 너비 */}
      <div className='w-full'>
        <Image
          src='/images/home/home10_2.png'
          alt='기록 기능'
          width={1920}
          height={1080}
          className='w-full h-auto object-cover'
          unoptimized
        />
      </div>
    </section>
  );
}
