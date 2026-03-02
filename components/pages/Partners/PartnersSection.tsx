"use client";

import { useState, useEffect, useRef } from "react";
import { partners } from "@/lib/partners";
import Image from "next/image";

export default function PartnersSection() {
  const [isCardsVisible, setIsCardsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

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
      className='relative bg-gradient-to-b from-[#7a9a75] via-[#8aaa85] to-[#3d6034] overflow-hidden pt-[510px] pb-20'>
      <div
        ref={cardsRef}
        className={`container mx-auto max-w-7xl px-4 transition-all duration-1000 ease-out ${
          isCardsVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}>
        <div className='flex justify-center gap-4'>
          {/* 각 Column의 디자인 수치는 원본 그대로 유지 */}
          <div className='flex flex-col gap-2'>
            {partners
              .filter((p) => ["1", "2", "3"].includes(p.id))
              .map((partner, index) => (
                <div
                  key={partner.id}
                  className='relative transition-all'
                  style={{
                    transform: `translateY(${index === 0 ? 0 : index * -12}px)`,
                    zIndex: 10 - index,
                  }}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={300.44}
                    height={412.5}
                  />
                </div>
              ))}
          </div>

          <div className='flex flex-col gap-2'>
            {partners
              .filter((p) => ["4", "5", "6"].includes(p.id))
              .map((partner, index) => (
                <div
                  key={partner.id}
                  className='relative transition-all'
                  style={{
                    transform: `translateY(${
                      index === 0 ? -230 : index * -12 - 230
                    }px)`,
                    zIndex: 10 - index,
                  }}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={300.44}
                    height={412.5}
                  />
                </div>
              ))}
          </div>

          <div className='flex flex-col gap-2'>
            {partners
              .filter((p) => ["7", "8", "9", "10"].includes(p.id))
              .map((partner, index) => (
                <div
                  key={partner.id}
                  className='relative transition-all'
                  style={{
                    transform: `translateY(${
                      index === 0 ? -350 : index * -12 - 350
                    }px)`,
                    zIndex: 10 - index,
                  }}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={300.44}
                    height={412.5}
                  />
                </div>
              ))}
          </div>

          <div className='flex flex-col gap-2'>
            {partners
              .filter((p) => ["11", "12", "13", "14"].includes(p.id))
              .map((partner, index) => (
                <div
                  key={partner.id}
                  className='relative transition-all'
                  style={{
                    transform: `translateY(${
                      index === 0 ? -505 : index * -12 - 505
                    }px)`,
                    zIndex: 10 - index,
                  }}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={300.44}
                    height={412.5}
                  />
                </div>
              ))}
          </div>

          <div className='flex flex-col gap-2'>
            {partners
              .filter((p) => ["15", "16", "17"].includes(p.id))
              .map((partner, index) => (
                <div
                  key={partner.id}
                  className='relative transition-all'
                  style={{
                    transform: `translateY(${
                      index === 0 ? -273 : index * 12 - 273
                    }px)`,
                    zIndex: 10 - index,
                  }}>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={300.44}
                    height={412.5}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
