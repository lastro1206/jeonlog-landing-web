import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-primary text-primary-foreground'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-6'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0'>
          {/* 저작권 */}
          <p className='text-sm text-primary-foreground/60'>
            © {currentYear} Jeonlog. All rights reserved.
          </p>

          {/* Quick Links */}
          <nav className='flex items-center space-x-4'>
            <Link
              href='/about-us'
              className='text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors'>
              전록소개
            </Link>
            <Link
              href='/partnership'
              className='text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors'>
              제휴문의
            </Link>
            <Link
              href='/partners'
              className='text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors'>
              파트너스
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
