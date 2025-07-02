import AboutUsSection from "./components/AboutUs-Section/AboutUsSection";
import CompanyInfoSection from "./components/CompanyInfo-Section/CompanyInfoSection";
import HomeBannerSection from "./components/HomeBanner-Section/HomeBannerSection";
import ServicesSection from "./components/Services-Section/ServicesSection";

export default function Home() {
  return (
    <div className=" space-y-24  pb-24">
      <HomeBannerSection />
      <AboutUsSection />
      <ServicesSection />
      <CompanyInfoSection />
    </div>
  );
}
