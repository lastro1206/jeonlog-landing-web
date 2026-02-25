import ScrollableContainer from "@/components/pages/Home/mockScroll";
import HeroSection from "@/components/pages/Home/HeroSection";
import SeoulExhibitionSection from "@/components/pages/Home/SeoulExhibitionSection";

export default function Home() {
  return (
    <ScrollableContainer>
      <HeroSection />
      <SeoulExhibitionSection />
    </ScrollableContainer>
  );
}
