"use client";

import Image from "next/image";

export default function RotatingGallery() {
  return (
    <div className='absolute inset-0 overflow-hidden'>
      {/* 회전하는 이미지 */}
      <div className='absolute top-[-30px] md:top-[-50px] left-1/2 transform -translate-x-1/2 w-[1400px] h-[1400px] md:w-[1800px] md:h-[1800px]'>
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
