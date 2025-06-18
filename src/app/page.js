import AboutUsSection from "./components/AboutUs-Section/AboutUsSection";
import HomeBannerSection from "./components/HomeBanner-Section/HomeBannerSection";
import ServicesSection from "./components/Services-Section/ServicesSection";

export default function Home() {
  return (
    <div className="max-w-[1140px] mx-auto space-y-24 ">
      <HomeBannerSection />
      <AboutUsSection />
      <ServicesSection />
    </div>
  );
}
