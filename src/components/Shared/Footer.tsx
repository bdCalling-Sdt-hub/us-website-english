import {
  Clock2,
  Facebook,
  Instagram,
  Mail,
  MapPinned,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Icon from "../util/Icon";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <footer className="footer py-12 text-base-content container mx-auto">
        <nav>
          <Image src="/images/logo2.png" alt="logo" width={300} height={200} />
          <p className="text-lg my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Neque, numquam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
            <br /> Neque, numquam.
          </p>
          <h1 className="text-lg font-bold">Beyond a connection</h1>
          <div className="flex items-center gap-2">
            <Icon>
              <Facebook />
            </Icon>
            <Icon>
              <Instagram />
            </Icon>
            <Icon>
              <Twitter />
            </Icon>
          </div>
        </nav>
        <nav>
          <header className="footer-title">SITEMAP</header>
          <a className="link link-hover text-[16px]">Terms of Use</a>
          <a className="link link-hover text-[16px]">Contact</a>
          <a className="link link-hover text-[16px]">Blog</a>
          <a className="link link-hover text-[16px]">Careers</a>
          <a className="link link-hover text-[16px]">Private life</a>
          <a className="link link-hover text-[16px]">Complaint</a>
          <a className="link link-hover text-[16px]">Sitemap</a>
          <a className="link link-hover text-[16px]">Copyright</a>
        </nav>
        <nav>
          <header className="footer-title">CONTACT US</header>
          <div className="flex items-center gap-2">
            <Icon>
              <Phone color="#e8e3e3" size={25} />
            </Icon>
            <p className="text-lg">514-800-0201</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon>
              <Mail color="#e8e3e3" />
            </Icon>
            <p className="text-lg">example@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon>
              <Clock2 color="#e8e3e3" />
            </Icon>
            <p className="text-lg">Monday-Friday: 9:00-20:00</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon>
              <Clock2 color="#e8e3e3" />
            </Icon>
            <p className="text-lg">Saturday-Sunday: 9:00-17:00</p>
          </div>
          <div className="flex items-center gap-2">
            <Icon>
              <MapPinned size={30} color="#e8e3e3" absoluteStrokeWidth />
            </Icon>
            <p className="text-lg">
              7900 boul. Taschereau A-206 Brossard,
              <br /> Quebec, Canada J4X 1C2
            </p>
          </div>
          <h3 className="my-2 text-xl">Payment Method</h3>
          <div className="flex gap-2">
            <div className="bg-white rounded-md px-2 py-1 w-[200px] text-center">
              <a href="#">
                <Image
                  src="/images/payment1.png"
                  alt="logo"
                  width={500}
                  height={500}
                />
              </a>
            </div>
            <div className="bg-white rounded-md px-2 py-1 w-[200px] text-center">
              <a href="#">
                <Image
                  src="/images/payment2.png"
                  alt="logo"
                  width={500}
                  height={500}
                />
              </a>
            </div>
          </div>
        </nav>
      </footer>
      <div className="bg-base-200">
        <footer className="footer px-10 py-6 border-t text-base-content border-base-300 container mx-auto">
          <aside className="items-center grid-flow-col">
            <p>&copy; 2022 Vodalink Inc. All rights reserved.</p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a>About</a>
              <a>Privacy Policy</a>
              <a>Complaints and CCTS</a>
              <a>Terms and conditions</a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
