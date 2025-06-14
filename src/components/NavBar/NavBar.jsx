import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/assets/logo.svg";

export default function NavBar({ children }) {
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
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          {/* Navbar */}
          <div className="sticky top-0 z-10 w-full">
            <div className="max-w-[1140px] mx-auto flex items-center justify-between bg-base-100  py-2 ">
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
                  <Image src={Logo} height={87} width={107} />
                </Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                  {navMenu}
                </ul>
              </div>
              <div className="navbar-end gap-4">
                <input
                  type="checkbox"
                  value="dark"
                  className="toggle theme-controller"
                />
                <a className="btn btn-outline">Appointment</a>
              </div>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">{navMenu}</ul>
        </div>
      </div>
    </div>
  );
}
