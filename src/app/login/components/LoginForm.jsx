import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  return (
    <div className="space-y-6 p-5">
      <h1 className="text-center text-4xl font-bold">Sign In</h1>
      <form className="fieldset">
        <label className="label font-bold">Email</label>
        <input type="email" className="input" placeholder="Your Email" />
        <label className="label font-bold">Password</label>
        <input type="password" className="input" placeholder="Your Password" />

        <button className="btn  bg-[#FF3811] border-[#FF3811] text-white mt-4">
          Sign In
        </button>
        <div className="space-y-3.5">
          <h4 className="text-base font-semibold text-center">
            Or Sign In with
          </h4>
          <div className="flex justify-center gap-4 items-center ">
            <button className="btn btn-circle ">
              <FaFacebookF className="text-[#3B5998]" />
            </button>
            <button className="btn btn-circle">
              <FaLinkedinIn className="text-[#0A66C2]" />
            </button>
            <button className="btn btn-circle">
              <FcGoogle />
            </button>
          </div>
          <h4 className="text-base font-light text-center">
            Have an account?{" "}
            <Link href="/register" className="font-bold text-[#FF3811] ">
              Sign Up
            </Link>
          </h4>
        </div>
      </form>
    </div>
  );
}
