"use client";

import Image from "next/image";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export default function SeoulExhibitionSection() {
  const { ref, isVisible } = useSectionAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-[#F9F2E8] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 section-fade-in ${
        isVisible ? "visible" : ""
      }`}>
      <div className='container mx-auto max-w-4xl text-center'>
        <Image
          src='/images/home/home2.png'
          alt='Seoul Exhibition'
          width={1000}
          height={1000}
          className='w-full h-full object-cover'
          priority
        />
      </div>
    </section>
  );
}
