"use client";

import Image from "next/image";
import { useSectionAnimation } from "@/hooks/useSectionAnimation";

export default function TasteCurationSection() {
  const { ref, isVisible } = useSectionAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`w-full section-fade-in ${isVisible ? "visible" : ""}`}>
      <Image
        src='/images/home/home3_1920.png'
        alt='앱 소개'
        width={1920}
        height={1080}
        className='w-full h-auto object-cover'
        priority
      />
    </section>
  );
}
