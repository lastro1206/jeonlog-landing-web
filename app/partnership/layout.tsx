import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "제휴 · 협업 문의",
  description: "전:록과 함께할 파트너를 찾습니다. 기관, 갤러리, 브랜드의 다양한 협업 제안을 환영합니다.",
  keywords: [
    "전록 제휴",
    "Jeonlog 제휴",
    "협업 문의",
    "파트너십",
    "갤러리 제휴",
    "미술관 제휴",
  ],
  openGraph: {
    title: "제휴 · 협업 문의 - Jeon:log",
    description: "전:록과 함께할 파트너를 찾습니다. 기관, 갤러리, 브랜드의 다양한 협업 제안을 환영합니다.",
    url: "https://jeonlog.com/partnership",
  },
};

export default function PartnershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

