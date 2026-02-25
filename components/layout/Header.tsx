"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useState } from "react";

export default function Header() {
  const scrollDirection = useScrollDirection();
  const isVisible = scrollDirection === null || scrollDirection === "up";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`bg-[#3d6034] text-white fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
      <div className='w-full max-w-[1920px] mx-auto px-10 py-[15px]'>
        <div className='flex h-[35px] items-center justify-between'>
          {/* 로고 */}
          <Link
            href='/'
            className='flex items-center hover:opacity-80 transition-opacity'>
            <Image
              src='/images/homeLogo.png'
              alt='Jeonlog'
              width={120}
              height={35}
              className='h-auto w-auto'
              priority
            />
          </Link>

          {/* 데스크톱 네비게이션 */}
          <div className='hidden md:flex items-center gap-6'>
            <nav className='flex items-center gap-6'>
              <Link
                href='/about-us'
                className='text-sm font-medium text-white hover:text-white/80 transition-colors'>
                전:록소개
              </Link>
              <Link
                href='/partnership'
                className='text-sm font-medium text-white hover:text-white/80 transition-colors'>
                제휴문의
              </Link>
              <Link
                href='/partners'
                className='text-sm font-medium text-white hover:text-white/80 transition-colors'>
                파트너스
              </Link>
            </nav>
            <Button
              variant='secondary'
              size='sm'
              className='bg-white text-[#3d6034] hover:bg-white/90 rounded-md'>
              앱 다운로드
            </Button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden text-white'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
            <span className='sr-only'>메뉴 열기</span>
          </Button>
        </div>

        {/* 모바일 메뉴 드롭다운 */}
        {isMobileMenuOpen && (
          <div className='md:hidden absolute top-[65px] left-0 right-0 bg-[#3d6034] border-t border-white/20'>
            <nav className='flex flex-col space-y-4 p-4'>
              <Link
                href='/about-us'
                className='text-lg font-medium hover:text-white/80 transition-colors'
                onClick={() => setIsMobileMenuOpen(false)}>
                전록소개
              </Link>
              <Link
                href='/partnership'
                className='text-lg font-medium hover:text-white/80 transition-colors'
                onClick={() => setIsMobileMenuOpen(false)}>
                제휴문의
              </Link>
              <Link
                href='/partners'
                className='text-lg font-medium hover:text-white/80 transition-colors'
                onClick={() => setIsMobileMenuOpen(false)}>
                파트너스
              </Link>
              <Button
                variant='default'
                className='mt-4 w-full bg-white text-[#3d6034] hover:bg-white/90'>
                앱 다운로드
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
