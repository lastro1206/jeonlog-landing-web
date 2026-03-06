"use client";

import Image from "next/image";

export default function RotatingGallery() {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {/* 회전하는 이미지 - 해상도에 따라 크기 조정 */}
      <div className='absolute top-[-20px] sm:top-[-30px] md:top-[-40px] lg:top-[-50px] xl:top-[-60px] 2xl:top-[-70px] left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px] md:w-[1200px] md:h-[1200px] lg:w-[1400px] lg:h-[1400px] xl:w-[1600px] xl:h-[1600px] 2xl:w-[1800px] 2xl:h-[1800px]'>
        <Image
          src='/images/circleExhibition.png'
          alt='Rotating gallery exhibition'
          fill
          className='object-contain animate-rotate-slow'
          unoptimized
        />
      </div>
    </div>
  );
}
