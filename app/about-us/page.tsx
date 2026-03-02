"use client";

import Image from "next/image";
import ScrollableContainer from "@/components/pages/Home/mockScroll";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export default function AboutUs() {
  const { ref: ref1, isVisible: isVisible1 } = useSectionAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  const { ref: ref2, isVisible: isVisible2 } = useSectionAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <ScrollableContainer>
      {/* 첫 번째 이미지 */}
      <section
        ref={ref1 as React.RefObject<HTMLElement>}
        className={`w-full section-fade-in ${isVisible1 ? "visible" : ""}`}>
        <div className='w-full'>
          <Image
            src='/images/introduce/intro1_1920.png'
            alt='소개 1'
            width={1920}
            height={1080}
            className='w-full h-auto object-contain'
            unoptimized
          />
        </div>
      </section>

      {/* 아래 화살표 */}
      <section className='w-full flex justify-center py-8'>
        <div className='w-12 h-12'>
          <Image
            src='/images/downArrow.png'
            alt='아래 화살표'
            width={48}
            height={48}
            className='w-full h-full object-contain'
            unoptimized
          />
        </div>
      </section>

      {/* 2, 3, 4, 5번 이미지 */}
      <section
        ref={ref2 as React.RefObject<HTMLElement>}
        className={`w-full section-fade-in ${isVisible2 ? "visible" : ""}`}>
        <div className='w-full space-y-0'>
          <div className='w-full'>
            <Image
              src='/images/introduce/intro2_1920.png'
              alt='소개 2'
              width={1920}
              height={1080}
              className='w-full h-auto object-contain'
              unoptimized
            />
          </div>
          <div className='w-full'>
            <Image
              src='/images/introduce/intro3_1920.png'
              alt='소개 3'
              width={1920}
              height={1080}
              className='w-full h-auto object-contain'
              unoptimized
            />
          </div>
          <div className='w-full'>
            <Image
              src='/images/introduce/intro4_1920.png'
              alt='소개 4'
              width={1920}
              height={1080}
              className='w-full h-auto object-contain'
              unoptimized
            />
          </div>
          <div className='w-full'>
            <Image
              src='/images/introduce/intro5_1920.png'
              alt='소개 5'
              width={1920}
              height={1080}
              className='w-full h-auto object-contain'
              unoptimized
            />
          </div>
        </div>
      </section>
    </ScrollableContainer>
  );
}
