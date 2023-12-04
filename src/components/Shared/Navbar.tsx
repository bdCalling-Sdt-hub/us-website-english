import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-primary text-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown" onClick={toggleDropdown}>
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-[#191e24] text-gray-400 rounded-box w-52 z-10"
              >
                <li>
                  <a>Shop</a>
                  <ul className="p-2">
                    <li className="text-md">
                      <a>Packages</a>
                    </li>
                    <li className="text-md">
                      <a>Television</a>
                    </li>
                    <li className="text-md">
                      <a>Internet</a>
                    </li>
                    <li className="text-md">
                      <a>Phone</a>
                    </li>
                  </ul>
                </li>
                <li className="text-md">
                  <a>Packages</a>
                </li>
                <li className="text-md">
                  <a>Contact</a>
                </li>
                <li className="text-md">
                  <a>Support</a>
                </li>
                <li className="text-2xl">
                  <a>English</a>
                </li>
              </ul>
            )}
          </div>
          <Image src="/images/logo2.png" alt="logo" width={300} height={200} />
        </div>
        <div className="navbar-end hidden lg:flex z-10">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="">Magazines</summary>
                <ul className=" z-[1] menu p-2 w-52">
                  <li className="">
                    <Link href="/packages">Packages</Link>
                  </li>
                  <li>
                    <Link href="/television">Television</Link>
                  </li>
                  <li>
                    <a>Internet</a>
                  </li>
                  <li>
                    <a>Phone</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/packages">Packages</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
            <li>
              <a>English</a>
            </li>
          </ul>

          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm bg-[#191e24]  text-orange-600 m-1"
            >
              PROMO
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-[#191e24] rounded-box w-52"
            >
              <li>
                <a>CURRENT PROMOTION</a>
              </li>
              <li>
                <a>STUDENT PROMOTION</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
