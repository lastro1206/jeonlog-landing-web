import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "전:록 소개",
  description: "전:록은 데이터가 고르는 추천과 사람이 완성한 큐레이션으로 서울의 모든 전시를 한눈에 볼 수 있는 플랫폼입니다.",
  keywords: [
    "전록 소개",
    "Jeonlog 소개",
    "전시 플랫폼 소개",
    "전시 큐레이션",
    "문화 플랫폼",
  ],
  openGraph: {
    title: "전:록 소개",
    description: "데이터가 고르는 추천과 사람이 완성한 큐레이션으로 서울의 모든 전시를 한눈에 볼 수 있는 플랫폼입니다.",
    url: "https://jeonlog.com/about-us",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

