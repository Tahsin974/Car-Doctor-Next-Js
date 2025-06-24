"use client";
import Image from "next/image";
import banner1 from "../../../../public/assets/images/banner/1.jpg";
import banner2 from "../../../../public/assets/images/banner/2.jpg";
import banner3 from "../../../../public/assets/images/banner/3.jpg";
import banner4 from "../../../../public/assets/images/banner/4.jpg";
import banner5 from "../../../../public/assets/images/banner/5.jpg";
import banner6 from "../../../../public/assets/images/banner/6.jpg";

export default function HomeBannerSection() {
  return (
    <div>
      <div className="carousel w-full max-h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <Image src={banner1} width={1140} height={600} alt="banner" />
          <div className=" w-full top-0 h-full absolute bg-gradient-to-r from-black/90 text-white flex items-center">
            <div className="xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3   w-full  xl:m-20 lg:m-20 md:m-16 sm:m-16 p-6 absolute  xl:space-y-6 lg:space-y-6 md:space-y-6 space-y-3 top-0">
              <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="xl:text-lg lg:text-lg md:text-lg sm:text-lg text-sm">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-3.5">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-red-500 border-red-500 text-white shadow-none">
                  Discover More
                </button>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-transparent border-white text-white shadow-none">
                  More Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute xl:bottom-10 xl:right-10 lg:bottom-10 lg:right-10 md:bottom-10 md:right-10 sm:bottom-5 sm:right-5 bottom-2 right-3 gap-4 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide6"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-transparent shadow-none text-white "
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-red-500 text-white shadow-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image src={banner2} width={1140} height={600} alt="banner" />
          <div className=" w-full top-0 h-full absolute bg-gradient-to-r from-black/90 text-white flex items-center">
            <div className="xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3   w-full  xl:m-20 lg:m-20 md:m-16 sm:m-16 p-6 absolute  xl:space-y-6 lg:space-y-6 md:space-y-6 space-y-3 top-0">
              <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="xl:text-lg lg:text-lg md:text-lg sm:text-lg text-sm">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-3.5">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-red-500 border-red-500 text-white shadow-none">
                  Discover More
                </button>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-transparent border-white text-white shadow-none">
                  More Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute xl:bottom-10 xl:right-10 lg:bottom-10 lg:right-10 md:bottom-10 md:right-10 sm:bottom-5 sm:right-5 bottom-2 right-3 gap-4 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-transparent shadow-none text-white "
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-red-500 text-white shadow-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image src={banner3} width={1140} height={600} alt="banner" />
          <div className=" w-full top-0 h-full absolute bg-gradient-to-r from-black/90 text-white flex items-center">
            <div className="xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3   w-full  xl:m-20 lg:m-20 md:m-16 sm:m-16 p-6 absolute  xl:space-y-6 lg:space-y-6 md:space-y-6 space-y-3 top-0">
              <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="xl:text-lg lg:text-lg md:text-lg sm:text-lg text-sm">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-3.5">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-red-500 border-red-500 text-white shadow-none">
                  Discover More
                </button>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-transparent border-white text-white shadow-none">
                  More Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute xl:bottom-10 xl:right-10 lg:bottom-10 lg:right-10 md:bottom-10 md:right-10 sm:bottom-5 sm:right-5 bottom-2 right-3 gap-4 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-transparent shadow-none text-white "
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-red-500 text-white shadow-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image src={banner4} width={1140} height={600} alt="banner" />
          <div className=" w-full top-0 h-full absolute bg-gradient-to-r from-black/90 text-white flex items-center">
            <div className="xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3   w-full  xl:m-20 lg:m-20 md:m-16 sm:m-16 p-6 absolute  xl:space-y-6 lg:space-y-6 md:space-y-6 space-y-3 top-0">
              <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="xl:text-lg lg:text-lg md:text-lg sm:text-lg text-sm">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-3.5">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-red-500 border-red-500 text-white shadow-none">
                  Discover More
                </button>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-transparent border-white text-white shadow-none">
                  More Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute xl:bottom-10 xl:right-10 lg:bottom-10 lg:right-10 md:bottom-10 md:right-10 sm:bottom-5 sm:right-5 bottom-2 right-3 gap-4 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-transparent shadow-none text-white  "
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-red-500 text-white shadow-none "
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <Image src={banner5} width={1140} height={600} alt="banner" />
          <div className=" w-full top-0 h-full absolute bg-gradient-to-r from-black/90 text-white flex items-center">
            <div className="xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3   w-full  xl:m-20 lg:m-20 md:m-16 sm:m-16 p-6 absolute  xl:space-y-6 lg:space-y-6 md:space-y-6 space-y-3 top-0">
              <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="xl:text-lg lg:text-lg md:text-lg sm:text-lg text-sm">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-3.5">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-red-500 border-red-500 text-white shadow-none">
                  Discover More
                </button>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-transparent border-white text-white shadow-none">
                  More Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute xl:bottom-10 xl:right-10 lg:bottom-10 lg:right-10 md:bottom-10 md:right-10 sm:bottom-5 sm:right-5 bottom-2 right-3 gap-4 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide4"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-transparent shadow-none text-white "
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-red-500 text-white shadow-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <Image src={banner6} width={1140} height={600} alt="banner" />
          <div className=" w-full top-0 h-full absolute bg-gradient-to-r from-black/90 text-white flex items-center">
            <div className="xl:w-1/2 lg:w-1/2 md:w-2/3 sm:w-2/3   w-full  xl:m-20 lg:m-20 md:m-16 sm:m-16 p-6 absolute  xl:space-y-6 lg:space-y-6 md:space-y-6 space-y-3 top-0">
              <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold">
                Affordable Price For Car Servicing
              </h1>
              <p className="xl:text-lg lg:text-lg md:text-lg sm:text-lg text-sm">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="flex gap-3.5">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-red-500 border-red-500 text-white shadow-none">
                  Discover More
                </button>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-transparent border-white text-white shadow-none">
                  More Projects
                </button>
              </div>
            </div>
          </div>
          <div className="absolute xl:bottom-10 xl:right-10 lg:bottom-10 lg:right-10 md:bottom-10 md:right-10 sm:bottom-5 sm:right-5 bottom-2 right-3 gap-4 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide5"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-transparent shadow-none text-white "
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-red-500 text-white shadow-none"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
