import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "파트너스",
  description: "전:록과 함께하고 있는 파트너 갤러리와 미술관을 소개합니다. 국립중앙박물관, 일민미술관, 금호미술관 등 다양한 파트너들과 함께합니다.",
  keywords: [
    "전록 파트너스",
    "Jeonlog 파트너스",
    "파트너 갤러리",
    "파트너 미술관",
    "제휴 갤러리",
    "제휴 미술관",
  ],
  openGraph: {
    title: "파트너스 - Jeon:log",
    description: "전:록과 함께하고 있는 파트너 갤러리와 미술관을 소개합니다.",
    url: "https://jeonlog.com/partners",
  },
};

export default function PartnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

