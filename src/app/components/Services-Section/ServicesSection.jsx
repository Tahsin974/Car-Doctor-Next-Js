import SectionTitle from "@/components/SectionTitle/SectionTitle";

import ServiceCard from "./ServiceCard/ServiceCard";
import servicesData from "@/app/actions/Services-Data/servicesData";

export default async function ServicesSection() {
  const services = await servicesData();

  return (
    <div className=" bg-base-100 min-h-screen space-y-6 px-4">
      <SectionTitle></SectionTitle>
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 justify-items-center">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline">More Services</button>
      </div>
    </div>
  );
}
