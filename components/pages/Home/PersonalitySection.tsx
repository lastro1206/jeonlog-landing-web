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
      <div className='container mx-auto max-w-7xl'>
        {/* 이미지와 텍스트 오버레이 */}
        <div className='relative w-full'>
          {/* 이미지 */}
          <div className='w-full'>
            <Image
              src='/images/home/home8_2.png'
              alt='앱 개인화 화면'
              width={1920}
              height={1080}
              className='w-full h-auto object-cover'
            />
          </div>

          {/* 텍스트 오버레이 */}
          <div className='absolute -top-[100px] right-0 p-8 md:p-12 space-y-4 text-right'>
            <h3 className='text-[41.19px] font-semibold text-[#3d6034] font-pretendard leading-[100%] tracking-[-0.02em] text-right'>
              개인화
            </h3>
            <p className='text-[71.14px] font-semibold text-black font-pretendard leading-[140%] tracking-[-0.02em] text-right'>
              내 취향대로, <br />
              어울리는 전시를 추천해요
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
