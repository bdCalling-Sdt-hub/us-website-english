import { PhoneCall } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-primary text-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Shop</a>
                <ul className="p-2">
                  <li>
                    <a>Packages</a>
                  </li>
                  <li>
                    <a>Television</a>
                  </li>
                  <li>
                    <a>Internet</a>
                  </li>
                  <li>
                    <a>Phone</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Packages</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Support</a>
              </li>
              <li>
                <a>English</a>
              </li>
            </ul>
          </div>
          <a href="#">
            <Image
              src="/images/logo2.png"
              alt="logo"
              width={300}
              height={200}
            />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary className="text-lg">Shop</summary>
                <ul className=" z-[1] menu p-2 w-52">
                  <li className="text-lg">
                    <a>Packages</a>
                  </li>
                  <li className="text-lg">
                    <a>Television</a>
                  </li>
                  <li className="text-lg">
                    <a>Internet</a>
                  </li>
                  <li className="text-lg">
                    <a>Phone</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="text-lg">
              <a>Packages</a>
            </li>
            <li className="text-lg">
              <a>Contact</a>
            </li>
            <li className="text-lg">
              <a>Support</a>
            </li>
            <li className="text-lg">
              <a>English</a>
            </li>
          </ul>

          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm text-orange-600 m-1"
            >
              PROMO
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
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
            <PhoneCall />
            <span className="text-lg font-medium">514-227-4647</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
