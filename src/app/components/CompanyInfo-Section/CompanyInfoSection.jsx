import Image from "next/image";
import calender from "../../../../public/assets/icons/calender.svg";
import phone from "../../../../public/assets/icons/phone.svg";
import location from "../../../../public/assets/icons/location.svg";
export default function CompanyInfoSection() {
  return (
    <div className="bg-neutral-900 text-white min-h-[250px]  flex justify-center items-center">
      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 items-center justify-items-start xl:gap-28 lg:gap-24 md:gap-16 gap-10 p-4 ">
        <div className="flex items-center justify-center gap-2">
          <Image src={calender} height={41} width={41} alt="icon" />
          <div>
            <p className="text-base ">We are open monday-friday</p>
            <h1 className="text-xl font-semibold">7:00 am - 9:00 pm</h1>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Image src={phone} height={41} width={41} alt="icon" />
          <div>
            <p className="text-base ">Have a question?</p>
            <h1 className="text-xl font-semibold">+8801795-981096</h1>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Image src={location} height={41} width={41} alt="icon" />
          <div>
            <p className="text-base ">Need a repair? our address</p>
            <h1 className="text-xl font-semibold">Mirpur-1, Dhaka</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
