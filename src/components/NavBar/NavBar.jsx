"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/logo.svg";
import { IoCloseOutline } from "react-icons/io5";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function NavBar({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  const menuRef = useRef(null);
  const handleCloseBtn = () => {
    if (menuRef.current) {
      console.log(menuRef.current.checked);
      menuRef.current.checked = false;
    }
  };
  useEffect(() => {
    if (menuRef.current) {
      console.log(menuRef.current.checked);
      menuRef.current.checked = false;
    }
  }, [pathname]);
  const navMenu = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">About</Link>
      </li>
      <li>
        <Link href="/">Services</Link>
      </li>
      <li>
        <Link href="/">Blog</Link>
      </li>
      <li>
        <Link href="/">Contact</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer ">
        <input
          ref={menuRef}
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="sticky top-0 z-20 w-full">
            <div className="xl:max-w-[1140px] lg:max-w-[1140px] mx-auto w-full flex items-center justify-center bg-base-100  py-2 px-4">
              <div className="navbar-start">
                <div className="flex-none lg:hidden">
                  <label
                    htmlFor="my-drawer-3"
                    aria-label="open sidebar"
                    className="btn btn-square btn-ghost"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
                <Link href="/">
                  <Image src={Logo} height={87} width={107} alt="logo" />
                </Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                  {navMenu}
                </ul>
              </div>
              <div className="navbar-end gap-4">
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    className="theme-controller"
                    value="dark"
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-off h-8 w-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-on h-8 w-8 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>

                <div className="hidden xl:flex lg:flex gap-4">
                  <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg">
                    Appointment
                  </button>
                  <Link href={"/register"}>
                    <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side z-30">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            <button
              className="btn btn-circle mb-3.5 ms-auto border-[#FF3811] text-[#FF3811] bg-none  shadow-none "
              onClick={handleCloseBtn}
            >
              <IoCloseOutline className="text-lg" />
            </button>
            {navMenu}
            <li className="gap-4">
              <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg">
                Appointment
              </button>
              <Link
                href={"/register"}
                className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
