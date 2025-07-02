import Image from "next/image";
import banner from "../../../public/assets/images/checkout/checkout.png";

export default function PageTitle({ children }) {
  return (
    <div className="max-h-[300px]  max-w-[1140px] relative">
      <Image src={banner} width={1140} height={300} alt="banner" />
      <div className=" w-full top-0 h-full absolute bg-gradient-to-r from-black/90 text-white flex items-center">
        <div className="w-full  xl:m-16 lg:m-16 md:p-10  p-4 absolute  xl:space-y-6 lg:space-y-6 md:space-y-6 space-y-3 top-0">
          <h1 className="xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold ">
            {children}
          </h1>
        </div>
      </div>
      <div className="absolute bottom-0 shadow-lg flex  justify-center w-full ">
        <div className="bg-[#FF3811] w-[max-content] xl:p-2.5 lg:p-2.5 md:2.5 p-1.5  text-white  rounded-t-2xl">
          <p className="font-semibold xl:text-base lg:text-base md:text-base text-sm ">
            Home / {children}
          </p>
        </div>
      </div>
    </div>
  );
}
// bg-[#FF3811]
