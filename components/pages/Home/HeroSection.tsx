"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className='relative w-full h-screen min-h-[600px] overflow-hidden bg-black'>
      {/* 배경 이미지: 전체 화면을 꽉 채우도록 설정 */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/home1.png'
          alt='Gallery background'
          fill
          className='object-cover opacity-80' // 이미지 대비를 위해 투명도 조절 가능
          priority
          quality={100}
        />
      </div>

      {/* 전체 컨텐츠를 감싸는 컨테이너 */}
      <div className='relative z-10 h-full flex flex-col items-center justify-between py-12 md:py-20'>
        {/* 상단: 앱 다운로드 버튼 (이미지처럼 나란히 배치) */}
        <div className='flex gap-3'>
          <Button className='bg-[#4c6b43] hover:bg-[#3d5a34] text-white rounded-md px-5 py-2 flex items-center gap-2 text-sm'>
            <span className='font-semibold'>App Store</span>
          </Button>
          <Button className='bg-[#4c6b43] hover:bg-[#3d5a34] text-white rounded-md px-5 py-2 flex items-center gap-2 text-sm'>
            <span className='font-semibold'>Google Play</span>
          </Button>
        </div>

        {/* 하단: 메인 카피와 화살표 */}
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
