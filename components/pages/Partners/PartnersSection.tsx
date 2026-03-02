"use client";

import { useState, useEffect, useRef } from "react";
import { partners } from "@/lib/partners";
import Image from "next/image";

export default function PartnersSection() {
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsCardsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    // pt-[510px]를 주어 마이너스 translateY 수치가 첫 번째 컴포넌트를 침범하지 않게 함
    <section
      id='partners-cards'
      className='relative bg-gradient-to-b from-[#7a9a75] via-[#8aaa85] to-[#3d6034] overflow-hidden pt-[200px] sm:pt-[300px] md:pt-[400px] lg:pt-[510px] pb-12 sm:pb-16 md:pb-20'>
      <div
        ref={cardsRef}
        className={`container mx-auto max-w-7xl px-3 sm:px-4 md:px-6 transition-all duration-1000 ease-out ${
          isCardsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}>
        <div className='flex justify-center gap-2 sm:gap-3 md:gap-4 flex-wrap sm:flex-nowrap'>
          {/* 각 Column의 디자인 수치는 원본 그대로 유지 */}
          <div className='flex flex-col gap-1.5 sm:gap-2'>
            {partners
              .filter((p) => ["1", "2", "3"].includes(p.id))
              .map((partner, index) => (
                <div
                  key={partner.id}
                  className='relative transition-all'
                  style={{
                    transform: `translateY(${
                      index === 0 ? 0 : index * (isMobile ? -6 : -12)
                    }px)`,
                    zIndex: 10 - index,
                  }}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={300.44}
                    height={412.5}
                    className='w-[120px] sm:w-[180px] md:w-[220px] lg:w-[250px] xl:w-[300.44px] h-auto'
                  />
                </div>
              ))}
          </div>

          <div className='flex flex-col gap-1.5 sm:gap-2'>
            {partners
              .filter((p) => ["4", "5", "6"].includes(p.id))
              .map((partner, index) => {
                const offset = isMobile ? -115 : -230;
                const gap = isMobile ? -6 : -12;
                return (
                  <div
                    key={partner.id}
                    className='relative transition-all'
                    style={{
                      transform: `translateY(${
                        index === 0 ? offset : index * gap + offset
                      }px)`,
                      zIndex: 10 - index,
                    }}>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={300.44}
                      height={412.5}
                      className='w-[120px] sm:w-[180px] md:w-[220px] lg:w-[250px] xl:w-[300.44px] h-auto'
                    />
                  </div>
                );
              })}
          </div>

          <div className='flex flex-col gap-1.5 sm:gap-2'>
            {partners
              .filter((p) => ["7", "8", "9", "10"].includes(p.id))
              .map((partner, index) => {
                const offset = isMobile ? -175 : -350;
                const gap = isMobile ? -6 : -12;
                return (
                  <div
                    key={partner.id}
                    className='relative transition-all'
                    style={{
                      transform: `translateY(${
                        index === 0 ? offset : index * gap + offset
                      }px)`,
                      zIndex: 10 - index,
                    }}>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={300.44}
                      height={412.5}
                      className='w-[120px] sm:w-[180px] md:w-[220px] lg:w-[250px] xl:w-[300.44px] h-auto'
                    />
                  </div>
                );
              })}
          </div>

          <div className='flex flex-col gap-1.5 sm:gap-2'>
            {partners
              .filter((p) => ["11", "12", "13", "14"].includes(p.id))
              .map((partner, index) => {
                const offset = isMobile ? -252 : -505;
                const gap = isMobile ? -6 : -12;
                return (
                  <div
                    key={partner.id}
                    className='relative transition-all'
                    style={{
                      transform: `translateY(${
                        index === 0 ? offset : index * gap + offset
                      }px)`,
                      zIndex: 10 - index,
                    }}>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={300.44}
                      height={412.5}
                      className='w-[120px] sm:w-[180px] md:w-[220px] lg:w-[250px] xl:w-[300.44px] h-auto'
                    />
                  </div>
                );
              })}
          </div>

          <div className='flex flex-col gap-1.5 sm:gap-2'>
            {partners
              .filter((p) => ["15", "16", "17"].includes(p.id))
              .map((partner, index) => {
                const offset = isMobile ? -136 : -273;
                const gap = isMobile ? 6 : 12;
                return (
                  <div
                    key={partner.id}
                    className='relative transition-all'
                    style={{
                      transform: `translateY(${
                        index === 0 ? offset : index * gap + offset
                      }px)`,
                      zIndex: 10 - index,
                    }}>
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={300.44}
                      height={412.5}
                      className='w-[120px] sm:w-[180px] md:w-[220px] lg:w-[250px] xl:w-[300.44px] h-auto'
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
