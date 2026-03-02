"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export default function HeroSection() {
  const { ref, isVisible } = useSectionAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative w-full overflow-hidden bg-black section-fade-in ${
        isVisible ? "visible" : ""
      }`}
      style={{ height: "100vh" }}>
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/home/home1.png'
          alt='Gallery background'
          fill
          className='object-cover opacity-80'
          priority
          quality={100}
        />
      </div>

      <div className='relative z-10 h-full flex flex-col items-center justify-between py-8 sm:py-12 md:py-16 lg:py-20'>
        <div className='flex gap-2 sm:gap-3'>
          <Button className='bg-[#4c6b43] hover:bg-[#3d5a34] text-white rounded-md px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm'>
            <span className='font-semibold'>App Store</span>
          </Button>
          <Button className='bg-[#4c6b43] hover:bg-[#3d5a34] text-white rounded-md px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm'>
            <span className='font-semibold'>Google Play</span>
          </Button>
        </div>

        <div className='text-center text-white px-4 sm:px-6 md:px-8'>
          <p className='text-[28.08px] font-normal leading-[100%] tracking-[-0.03em] mb-3 sm:mb-4 font-pretendard text-center opacity-90'>
            전시를 기록하고, 전시를 추천하다.
          </p>
          <h1
            className='mb-6 sm:mb-8 md:mb-10'
            style={{
              fontFamily:
                "var(--font-apple-sd-gothic-neo-b00), -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: 400,
              fontSize: "74.88px",
              lineHeight: "100%",
              letterSpacing: "-0.02em",
            }}>
            당신만을 위한 <br className='md:hidden' /> 전시 추천 플랫폼
          </h1>

          {/* 화살표 아이콘 */}
          <button
            onClick={handleScrollDown}
            className='animate-bounce mt-2 sm:mt-3 md:mt-4 cursor-pointer hover:opacity-70 transition-opacity'
            aria-label='스크롤 다운'>
            <svg
              width='32'
              height='32'
              className='sm:w-10 sm:h-10 md:w-[40px] md:h-[40px]'
              viewBox='0 0 48 48'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect
                width='48'
                height='48'
                fill='white'
                fillOpacity='0.01'
              />
              <path
                d='M37 18L25 30L13 18'
                stroke='white'
                strokeWidth='4'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
