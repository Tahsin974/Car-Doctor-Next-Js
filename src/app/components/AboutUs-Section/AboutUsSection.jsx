import Image from "next/image";
import about from "../../../../public/assets/images/about_us/about.svg";
export default function AboutUsSection() {
  return (
    <div>
      <div className="hero bg-base-100 min-h-screen px-4">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <Image
            src={about}
            className=" rounded-lg "
            width={521}
            height={557}
            alt="about"
          />
          <div>
            <h5 className="text-[#FF3811] font-bold">About Us</h5>
            <h1 className="xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
              <br />
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <button className="btn btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-[#FF3811] border-[#FF3811] text-white shadow-none">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
