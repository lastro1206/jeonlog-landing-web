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
          src='/images/home1.png'
          alt='Gallery background'
          fill
          className='object-cover opacity-80'
          priority
          quality={100}
        />
      </div>

      <div className='relative z-10 h-full flex flex-col items-center justify-between py-12 md:py-20'>
        <div className='flex gap-3'>
          <Button className='bg-[#4c6b43] hover:bg-[#3d5a34] text-white rounded-md px-5 py-2 flex items-center gap-2 text-sm'>
            <span className='font-semibold'>App Store</span>
          </Button>
          <Button className='bg-[#4c6b43] hover:bg-[#3d5a34] text-white rounded-md px-5 py-2 flex items-center gap-2 text-sm'>
            <span className='font-semibold'>Google Play</span>
          </Button>
        </div>

        <div className='text-center text-white px-4'>
          <p className='text-base md:text-lg mb-4 font-light tracking-wide opacity-90'>
            전시를 기록하고, 전시를 추천하다.
          </p>
          <h1 className='text-4xl md:text-6xl font-regular mb-10 tracking-tight leading-tight'>
            당신만을 위한 <br className='md:hidden' /> 전시 추천 플랫폼
          </h1>

          {/* 화살표 아이콘 */}
          <button
            onClick={handleScrollDown}
            className='animate-bounce mt-4 cursor-pointer hover:opacity-70 transition-opacity'
            aria-label='스크롤 다운'>
            <svg
              width='40'
              height='24'
              viewBox='0 0 40 24'
              fill='none'
              className='mx-auto'>
              <path
                d='M2 2L20 20L38 2'
                stroke='white'
                strokeWidth='3'
                strokeLinecap='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
