import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function ServiceCard({ service }) {
  const { _id, title, img, price } = service;
  return (
    <div>
      <div className="card bg-base-100 max-w-[364px] max-h-[348px] shadow-sm p-5 space-y-2.5">
        <figure className="rounded-lg">
          <Image
            src={img}
            width={314}
            height={208}
            className="h-[208px]"
            alt={title}
          />
        </figure>
        <div className="card-body p-0">
          <h2 className="card-title">{title}</h2>

          <div className="flex justify-between items-center">
            <h4 className="text-lg font-bold text-[#FF3811]">
              Price: ${price}
            </h4>
            <div className="card-actions justify-end">
              <Link
                href={`/services/${_id}`}
                className="text-[#FF3811] text-lg"
              >
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
