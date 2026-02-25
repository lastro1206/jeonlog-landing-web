import Link from "next/link";

export default function Footer() {
  return (
    <footer className='bg-[#3d6034] text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        {/* 상단: 브랜드명과 회사 정보 */}
        <div className='mb-8'>
          {/* 브랜드명 */}
          <h2 className='text-2xl font-bold mb-6'>전:록</h2>

          {/* 회사 정보 */}
          <div className='text-sm space-y-2'>
            <p>
              대표: 권혁준 | 개인정보책임관리자: 권혁준 | 사업자 등록번호: -
            </p>
            <p>06778 서울시 서초구 양재동 247-9, 201호 (070-5029-1422)</p>
          </div>
        </div>

        {/* 하단: 네비게이션 링크 */}
        <div className='border-t border-white/20 pt-6'>
          <nav className='flex items-center space-x-6'>
            <Link
              href='/about-us'
              className='text-[15px] underline hover:opacity-80 transition-opacity'>
              회사소개
            </Link>
            <Link
              href='/customer-center'
              className='text-[15px] underline hover:opacity-80 transition-opacity'>
              고객센터
            </Link>
            <Link
              href='/partnership'
              className='text-[15px] underline hover:opacity-80 transition-opacity'>
              제휴문의
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
