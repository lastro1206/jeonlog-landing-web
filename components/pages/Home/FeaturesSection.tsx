"use client";

import Image from "next/image";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

interface FeatureBlockProps {
  image1: string;
  image2: string;
  alt: string;
}

function FeatureBlock({ image1, image2, alt }: FeatureBlockProps) {
  const { ref, isVisible } = useSectionAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`section-fade-in ${isVisible ? "visible" : ""}`}>
      {/* 병렬 이미지 배치 */}
      <div className='flex flex-col md:flex-row gap-4 md:gap-6 w-full'>
        <div className='flex-1 min-w-0'>
          <Image
            src={image1}
            alt={`${alt} 1`}
            width={960}
            height={600}
            className='w-full h-auto object-contain'
          />
        </div>
        <div className='flex-1 min-w-0'>
          <Image
            src={image2}
            alt={`${alt} 2`}
            width={960}
            height={600}
            className='w-full h-auto object-contain'
          />
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const { ref, isVisible } = useSectionAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-[#F0FAED] py-20 section-fade-in ${
        isVisible ? "visible" : ""
      }`}>
      <div className='container mx-auto max-w-7xl px-4'>
        {/* 텍스트 헤더 */}
        <div className='text-center mb-16'>
          <p className='text-[41.19px] font-semibold text-[#3D6034] font-pretendard mb-6 text-left leading-[100%] tracking-[-0.02em]'>
            카테고리
          </p>
          <h2 className='text-[71.14px] font-semibold text-black font-pretendard text-left leading-[140%] tracking-[-0.02em]'>
            내 취향,
            <br />
            알고리즘과 큐레이팅으로
            <br />
            정확하게
          </h2>
        </div>
      </div>

      {/* 기능 블록들 - 전체 너비 */}
      <div className='w-full'>
        <div className='container mx-auto max-w-7xl px-4 space-y-12 md:space-y-16'>
          {/* 장르 섹션 */}
          <FeatureBlock
            image1='/images/home/home5_pa1_1920.png'
            image2='/images/home/home5_pa2_1920.png'
            alt='장르 필터'
          />

          {/* 테마 섹션 */}
          <FeatureBlock
            image1='/images/home/home6_pa1_1920.png'
            image2='/images/home/home6_pa2_1920.png'
            alt='테마 필터'
          />

          {/* 공간 섹션 */}
          <FeatureBlock
            image1='/images/home/home7_pa1_1920.png'
            image2='/images/home/home7_pa2_1920.png'
            alt='공간 필터'
          />
        </div>
      </div>
    </section>
  );
}
