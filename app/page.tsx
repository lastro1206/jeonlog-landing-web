import ScrollableContainer from "@/components/pages/Home/mockScroll";
import HeroSection from "@/components/pages/Home/HeroSection";
import SeoulExhibitionSection from "@/components/pages/Home/SeoulExhibitionSection";
import TasteCurationSection from "@/components/pages/Home/TasteCurationSection";
import FeaturesSection from "@/components/pages/Home/FeaturesSection";
import PersonalitySection from "@/components/pages/Home/PersonalitySection";
import SearchSection from "@/components/pages/Home/SearchSection";
import RecordSection from "@/components/pages/Home/RecordSection";
import NotificationSection from "@/components/pages/Home/NotificationSection";

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
