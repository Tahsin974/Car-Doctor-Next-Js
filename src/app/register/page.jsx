"use client";
import Image from "next/image";
import RegisterForm from "./components/RegisterForm";
import img from "../../../public/assets/images/login/login.svg";

export default function Register() {
  return (
    <div className="hero bg-base-100 min-h-screen ">
      <div className="hero-content flex-col xl:flex-row items-center gap-40">
        <div className="text-center ">
          <Image src={img} width={460} height={502} alt="login" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
