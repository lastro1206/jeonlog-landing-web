import PartnersSection from "@/components/pages/Partners/PartnersSection";
import PartnersHeroSection from "@/components/pages/Partners/PartnersHeroSection";

export default function Partners() {
  return (
    <div className='min-h-screen bg-white'>
      <PartnersHeroSection />
      <PartnersSection />
    </div>
  );
}
