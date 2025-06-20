"use client";
import Image from "next/image";
import banner1 from "../../../../public/assets/images/banner/1.jpg";
import banner2 from "../../../../public/assets/images/banner/2.jpg";
import banner3 from "../../../../public/assets/images/banner/3.jpg";
import banner4 from "../../../../public/assets/images/banner/4.jpg";
import banner5 from "../../../../public/assets/images/banner/5.jpg";
import banner6 from "../../../../public/assets/images/banner/6.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Optional modules
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

import style from "./HomeBanner.module.css";
import { useEffect, useRef } from "react";
export default function HomeBannerSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);
  return (
    <div className="relative ">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        className={`${style.swiper}`}
      >
        <SwiperSlide>
          <div className="relative w-full">
            <Image src={banner1} width={1140} height={600} alt="banner" />
            <div className=" w-full top-0 h-full absolute bg-gradient-to-r from-black/90 text-white flex items-center">
              <div className="xl:w-1/3 lg:w-1/3 md:w-1/3   w-full  xl:m-20 lg:m-20 md:m-20 sm:m-16 m-4 absolute  xl:space-y-6 lg:space-y-6 md:space-y-6 space-y-3 top-0">
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image src={banner2} width={1140} height={600} alt="banner" />
            <div className=" w-full top-0 h-full absolute bg-gradient-to-r from-black/90 text-white flex items-center">
              <div className="xl:w-1/3 lg:w-1/3 md:w-1/3   w-full  xl:m-20 lg:m-20 md:m-20 sm:m-16 m-4 absolute  xl:space-y-6 lg:space-y-6 md:space-y-6 space-y-3 top-0 ">
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image src={banner3} width={1140} height={600} alt="banner" />
            <div className=" w-full top-0 h-full absolute bg-gradient-to-r from-black/90 text-white flex items-center">
              <div className="xl:w-1/3 lg:w-1/3 md:w-1/3   w-full  xl:m-20 lg:m-20 md:m-20 sm:m-16 m-4 absolute  xl:space-y-6 lg:space-y-6 md:space-y-6 space-y-3 top-0">
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image src={banner4} width={1140} height={600} alt="banner" />
            <div className=" w-full top-0 h-full absolute bg-gradient-to-r from-black/90 text-white flex items-center">
              <div className="xl:w-1/3 lg:w-1/3 md:w-1/3   w-full  xl:m-20 lg:m-20 md:m-20 sm:m-16 m-4 absolute  xl:space-y-6 lg:space-y-6 md:space-y-6 space-y-3 top-0">
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image src={banner5} width={1140} height={600} alt="banner" />
            <div className=" w-full top-0 h-full absolute bg-gradient-to-r from-black/90 text-white flex items-center">
              <div className="xl:w-1/3 lg:w-1/3 md:w-1/3   w-full  xl:m-20 lg:m-20 md:m-20 sm:m-16 m-4 absolute  xl:space-y-6 lg:space-y-6 md:space-y-6 space-y-3 top-0">
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
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full">
            <Image src={banner6} width={1140} height={600} alt="banner" />
            <div className=" w-full top-0 h-full absolute bg-gradient-to-r from-black/90 text-white flex items-center">
              <div className="xl:w-1/3 lg:w-1/3 md:w-1/3   w-full  xl:m-20 lg:m-20 md:m-20 sm:m-16 m-4 absolute  xl:space-y-6 lg:space-y-6 md:space-y-6 space-y-3 top-0">
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
          </div>
        </SwiperSlide>
      </Swiper>

      <button
        ref={prevRef}
        className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-transparent shadow-none text-white absolute  xl:right-28 right-2 bottom-10 z-10"
      >
        ❮
      </button>
      <button
        ref={nextRef}
        className="btn btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg bg-red-500 text-white shadow-none absolute  xl:right-10 right-2 bottom-10  z-10"
      >
        ❯
      </button>
    </div>
  );
}
