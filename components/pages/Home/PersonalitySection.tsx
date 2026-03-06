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
        {/* 텍스트와 이미지 */}
        <div className='w-full'>
          {/* 텍스트 */}
          <div className='mb-8 md:mb-12 p-8 md:p-12  text-right'>
            <h3 className='text-[41.19px] font-semibold text-[#3d6034] font-pretendard leading-[100%] tracking-[-0.02em] text-right'>
              개인화
            </h3>
            <p className='text-[71.14px] font-semibold text-black font-pretendard leading-[140%] tracking-[-0.02em] text-right'>
              내 취향대로, <br />
              어울리는 전시를 추천해요
            </p>
          </div>

          {/* 이미지 */}
          <div className='w-full flex'>
            <div>
              <Image
                src='/images/home/home8_2.png'
                alt='앱 개인화 화면'
                width={1920}
                height={1080}
                className='w-[1200px] h-auto object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
