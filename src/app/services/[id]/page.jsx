import serviceDetails from "@/app/actions/Services-Data/serviceDetails";
import servicesData from "@/app/actions/Services-Data/servicesData";
import PageTitle from "@/components/PageTitle/PageTitle";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default async function ServiceDetailsPage({ params }) {
  const id = (await params).id;
  const data = await serviceDetails(id);
  const { img, title, description, facility, price } = data;
  const services = await servicesData();

  return (
    <div className="space-y-28">
      <PageTitle>Service Details</PageTitle>

      <div className="grid xl:grid-cols-3 lg:grid-cols-3  gap-5 px-4">
        <article className="flex-1 space-y-5 xl:col-span-2 lg:col-span-2">
          {/*Service Banner */}
          <Image src={img} width={752} height={400} alt={title} />
          {/* Service Name */}
          <h1 className="xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-bold">
            {title}
          </h1>
          {/* Service Description */}
          <p className="text-justify">{description}</p>
          {/* Service Facilities */}
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-4">
            {facility.map((fac, index) => (
              <div
                key={index}
                className="card max-w-[364px] min-h-[204] bg-[#F3F3F3]  border-t-2 border-t-[#FF3811] shadow-sm"
              >
                <div className="card-body text-black">
                  <h2 className="card-title">{fac.name}</h2>
                  <p className="text-justify">{fac.details}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
        <aside className="space-y-3.5">
          {/* services */}
          <div className="bg-[#F3F3F3] p-3.5 ">
            <h3 className="text-3xl font-bold py-2">Services</h3>
            <div className="space-y-3.5">
              {services.map((service) => (
                <div
                  key={service._id}
                  className={`flex   shadow-sm py-4 px-2.5 items-center justify-between ${
                    service._id == id
                      ? "bg-[#FF3811] text-white"
                      : "bg-base-100"
                  } `}
                >
                  <h2 className="text-lg font-bold">{service.title}</h2>

                  <Link
                    href={`/services/${service._id}`}
                    className={`${
                      service._id == id ? "text-white " : "text-[#FF3811] "
                    } text-lg`}
                  >
                    <FaArrowRight />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CheckOut Button */}
          <div className="space-y-3.5 w-full">
            <h1 className="text-3xl font-bold">Price ${price}</h1>
            <button className="btn bg-[#FF3811] border-[#FF3811] text-white w-full">
              Proceed Checkout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
