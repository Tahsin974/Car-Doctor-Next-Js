import Image from "next/image";
import banner1 from "../../../../public/assets/images/banner/1.jpg";
import banner2 from "../../../../public/assets/images/banner/2.jpg";
import banner3 from "../../../../public/assets/images/banner/3.jpg";
import banner4 from "../../../../public/assets/images/banner/4.jpg";
import banner5 from "../../../../public/assets/images/banner/5.jpg";
import banner6 from "../../../../public/assets/images/banner/6.jpg";

export default function HomeBanner() {
  return (
    <div className="max-w-[1140px] mx-auto">
      <div className="carousel ">
        <div id="slide1" className="carousel-item relative w-full">
          <Image src={banner1} width={1140} height={600} alt="banner" />
          <div className="absolute  right-10 bottom-5 space-x-6 flex -translate-y-1/2 transform justify-between ">
            <a
              href="#slide6"
              className="btn btn-circle bg-transparent shadow-none text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-red-500 text-white shadow-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <Image src={banner2} width={1140} height={600} alt="banner" />
          <div className="absolute right-10 bottom-5 space-x-6 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide1"
              className="btn btn-circle bg-transparent shadow-none text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-red-500 text-white shadow-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <Image src={banner3} width={1140} height={600} alt="banner" />
          <div className="absolute right-10 bottom-5 space-x-6 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide2"
              className="btn btn-circle bg-transparent shadow-none text-white"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle bg-red-500 text-white shadow-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <Image src={banner4} width={1140} height={600} alt="banner" />
          <div className="absolute right-10 bottom-5 space-x-6 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide3"
              className="btn btn-circle bg-transparent shadow-none text-white"
            >
              ❮
            </a>
            <a
              href="#slide5"
              className="btn btn-circle bg-red-500 text-white shadow-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <Image src={banner5} width={1140} height={600} alt="banner" />
          <div className="absolute right-10 bottom-5 space-x-6 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide4"
              className="btn btn-circle bg-transparent shadow-none text-white"
            >
              ❮
            </a>
            <a
              href="#slide6"
              className="btn btn-circle bg-red-500 text-white shadow-none"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <Image src={banner6} width={1140} height={600} alt="banner" />
          <div className="absolute right-10 bottom-5 space-x-6 flex -translate-y-1/2 transform justify-between">
            <a
              href="#slide5"
              className="btn btn-circle bg-transparent shadow-none text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-red-500 text-white shadow-none"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
