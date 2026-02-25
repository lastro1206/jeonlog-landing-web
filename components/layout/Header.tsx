"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export default function Header() {
  const scrollDirection = useScrollDirection();
  const isVisible = scrollDirection === null || scrollDirection === "up";
  return (
    <header
      className={`bg-[#3d6034] text-primary-foreground sticky top-0 z-50 border-b border-primary/20 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          {/* 로고 */}
          <Link
            href='/'
            className='flex items-center space-x-2 hover:opacity-80 transition-opacity'>
            <Leaf className='h-6 w-6' />
            <span className='text-xl font-bold'>Jeonlog</span>
          </Link>

          {/* 네비게이션 */}
          <nav className='hidden md:flex items-center space-x-6'>
            <Link
              href='/about-us'
              className='text-sm font-medium hover:text-primary-foreground/80 transition-colors'>
              전:록소개
            </Link>
            <Link
              href='/partnership'
              className='text-sm font-medium hover:text-primary-foreground/80 transition-colors'>
              제휴문의
            </Link>
            <Link
              href='/partners'
              className='text-sm font-medium hover:text-primary-foreground/80 transition-colors'>
              파트너스
            </Link>
            <Link
              href='/'
              className='text-sm font-medium hover:text-primary-foreground/80 transition-colors'>
              <Button variant='secondary'>앱 다운로드</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
