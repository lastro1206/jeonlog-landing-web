"use client";

import Image from "next/image";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export default function SearchSection() {
  const { ref, isVisible } = useSectionAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-[#F0FAED] py-20 px-4 section-fade-in ${
        isVisible ? "visible" : ""
      }`}>
      <div className='container mx-auto max-w-7xl px-4'>
        {/* 텍스트 헤더 */}
        <div className='text-left mb-[216px]'>
          <p className='text-[41.19px] font-semibold text-[#3D6034] font-pretendard mb-6 leading-[100%] tracking-[-0.02em]'>
            검색
          </p>
          <h2 className='text-[71.14px] font-semibold text-black font-pretendard leading-[140%] tracking-[-0.02em]'>
            나만을 위한
            <br />
            추천 검색어부터,
            <br />
            인기 검색어까지
          </h2>
        </div>

        {/* 이미지 그리드 - 중앙정렬 */}
        <div className='flex justify-center w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-[56.16px] w-full max-w-[1302.96px]'>
            {/* 첫 번째 이미지 */}
            <div className='w-full md:w-[496.0986328125px] h-auto md:h-[486.31805419921875px] mx-auto md:mx-0'>
              <div
                className='relative w-full'
                style={{ aspectRatio: "496.0986328125 / 486.31805419921875" }}>
                <Image
                  src='/images/home/home9_2.png'
                  alt='인기 검색어'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 496px'
                  unoptimized
                />
              </div>
            </div>
            {/* 두 번째 이미지 */}
            <div className='w-full md:w-[501.71484375px] h-auto md:h-[407.69146728515625px] mx-auto md:mx-0'>
              <div
                className='relative w-full'
                style={{ aspectRatio: "501.71484375 / 407.69146728515625" }}>
                <Image
                  src='/images/home/home9_3.png'
                  alt='최근 검색어'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 501px'
                  unoptimized
                />
              </div>
            </div>
            {/* 세 번째 이미지 */}
            <div className='w-full md:w-[496.0986328125px] h-auto md:h-[418.9068298339844px] mx-auto md:mx-0'>
              <div
                className='relative w-full'
                style={{ aspectRatio: "496.0986328125 / 418.9068298339844" }}>
                <Image
                  src='/images/home/home9_4.png'
                  alt='좋아하실 것 같아요!'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 496px'
                  unoptimized
                />
              </div>
            </div>
            {/* 네 번째 이미지 */}
            <div className='w-full md:w-[501.71484375px] h-auto md:h-[416.6294860839844px] mx-auto md:mx-0'>
              <div
                className='relative w-full'
                style={{ aspectRatio: "501.71484375 / 416.6294860839844" }}>
                <Image
                  src='/images/home/home9_5.png'
                  alt='최근 본 전시'
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, 501px'
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
