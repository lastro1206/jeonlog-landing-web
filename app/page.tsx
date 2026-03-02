import type { Metadata } from "next";
import ScrollableContainer from "@/components/pages/Home/mockScroll";
import HeroSection from "@/components/pages/Home/HeroSection";
import SeoulExhibitionSection from "@/components/pages/Home/SeoulExhibitionSection";
import TasteCurationSection from "@/components/pages/Home/TasteCurationSection";
import FeaturesSection from "@/components/pages/Home/FeaturesSection";
import PersonalitySection from "@/components/pages/Home/PersonalitySection";
import SearchSection from "@/components/pages/Home/SearchSection";
import RecordSection from "@/components/pages/Home/RecordSection";
import NotificationSection from "@/components/pages/Home/NotificationSection";

export const metadata: Metadata = {
  title: "Jeon:log - 당신을 위한 전시 플랫폼",
  description:
    "서울의 모든 전시를 하나의 플랫폼에서 한눈에 확인하고, 데이터가 고르는 추천과 사람이 완성한 큐레이션으로 새로운 관람의 기준을 제안합니다.",
  keywords: [
    "전시 추천",
    "서울 전시",
    "전시 플랫폼",
    "전시 큐레이션",
    "미술관",
    "갤러리",
    "전시회",
    "문화 플랫폼",
  ],
  openGraph: {
    title: "Jeon:log - 당신을 위한 전시 플랫폼",
    description:
      "서울의 모든 전시를 하나의 플랫폼에서 한눈에 확인하고, 맞춤형 큐레이션으로 새로운 관람의 기준을 제안합니다.",
    url: "https://jeonlog.com",
    images: [
      {
        url: "/images/home/home1.png",
        width: 1200,
        height: 630,
        alt: "Jeon:log 전시 플랫폼",
      },
    ],
  },
};

export default function Home() {
  return (
    <ScrollableContainer>
      <HeroSection />
      <SeoulExhibitionSection />
      <TasteCurationSection />
      <FeaturesSection />
      <PersonalitySection />
      <SearchSection />
      <RecordSection />
      <NotificationSection />
    </ScrollableContainer>
  );
}
