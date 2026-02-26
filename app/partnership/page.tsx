import RotatingGallery from "@/components/pages/Partnership/RotatingGallery";
import { Button } from "@/components/ui/button";

export default function Partnership() {
  return (
    <div className='min-h-screen bg-white relative'>
      {/* 회전하는 갤러리 이미지 - 전체 화면 배경 */}
      <div className='absolute inset-0 overflow-hidden'>
        <RotatingGallery />
      </div>

      {/* 가운데 텍스트 영역 */}
      <div className='relative z-20 min-h-screen flex items-end justify-center py-20'>
        <div className='text-center px-4'>
          <h1 className='text-base md:text-base font-semibold tracking-tight mb-2 text-gray-900 font-pretendard'>
            제휴 · 협업 문의
          </h1>

          {/* 이메일 버튼 */}
          <Button className='bg-black text-white font-semibold hover:bg-gray-800 rounded-full px-6 py-3 mb-8 font-pretendard text-[15px] leading-normal tracking-normal'>
            jeonlogofficial@gmail.com
          </Button>

          {/* 설명 텍스트 */}
          <div className='space-y-2 text-black font-pretendard leading-normal tracking-normal'>
            <p className='text-[24px] md:text-[24px] font-bold leading-normal tracking-normal'>
              <span className='text-[#3d6034]'>전:록</span>과 함께할 파트너를
              찾습니다
            </p>
            <p className='text-[24px] md:text-[24px] font-bold leading-normal tracking-normal'>
              기관 · 갤러리 · 브랜드의 다양한 협업 제안을 환영합니다
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
