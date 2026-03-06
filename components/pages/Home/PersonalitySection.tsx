"use client";

import Image from "next/image";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export default function PersonalitySection() {
  const { ref, isVisible } = useSectionAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-white py-20 px-4 section-fade-in ${
        isVisible ? "visible" : ""
      }`}>
      <div className='container mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
        {/* 텍스트와 이미지 */}
        <div className='w-full'>
          {/* 텍스트 */}
          <div className='mb-6 sm:mb-8 md:mb-12 p-4 sm:p-6 md:p-8 lg:p-12 text-right'>
            <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[41.19px] font-semibold text-[#3d6034] font-pretendard leading-[100%] tracking-[-0.02em] text-right mb-2 sm:mb-3 md:mb-4'>
              개인화
            </h3>
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[71.14px] font-semibold text-black font-pretendard leading-[140%] tracking-[-0.02em] text-right'>
              내 취향대로, <br />
              어울리는 전시를 추천해요
            </p>
          </div>

          {/* 이미지 */}
          <div className='w-full flex justify-start overflow-x-auto'>
            <div className='w-full max-w-full'>
              <Image
                src='/images/home/home8_2.png'
                alt='앱 개인화 화면'
                width={1920}
                height={1080}
                className='w-full sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] h-auto object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
