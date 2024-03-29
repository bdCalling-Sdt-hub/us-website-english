import {
  Facebook,
  Mail,
  MapPinned,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Icon from "../util/Icon";

const Footer = () => {
  const socialItems = [
    {
      icon: <Facebook color="#fff" />,
      link: "https://www.facebook.com/VodalinkTelecom",
      bgColor: "bg-blue-500",
      title: "fa",
    },
    {
      icon: <Youtube color="#fff" />,
      link: "https://www.youtube.com/channel/UCjmm1bRMIWIGXPW17fnBd8Q",
      bgColor: "bg-[#ff0000]",
      title: "yo",
    },
    {
      icon: <Twitter color="#fff" />,
      link: "https://twitter.com/Vodalink",
      bgColor: "bg-[#1da1f2]",
      title: "tw",
    },
    {
      icon: <Mail color="#fff" />,
      link: "info@vodalink.com",
      bgColor: "bg-[#fbbc04]",
      title: "ma",
    },
  ];
  return (
    <div className="bg-[#191e24] text-gray-400">
      <footer className="footer py-20 text-base-content container mx-auto px-3 lg:px-0">
        <nav>
          <Image src="/images/logo2.png" alt="logo" width={300} height={200} />
          <p className="text-lg my-3">
            Thirsting for an affordable, fast and reliable Television, <br />
            Internet and Home Phone service? You&#39;ve come <br />
            to the right spot!
          </p>
        </nav>
        <nav>
          <header className="footer-title text-white text-lg">Services</header>
          <Link href="/packages" className="link link-hover text-[16px]">
            Packages
          </Link>
          <Link href="/television" className="link link-hover text-[16px]">
            Television
          </Link>
          <Link href="/internet" className="link link-hover text-[16px]">
            Internet
          </Link>
          <Link href="/phone" className="link link-hover text-[16px]">
            Telephone
          </Link>
        </nav>
        <nav>
          <header className="footer-title text-lg text-white">
            CONTACT US
          </header>
          <a href="tel:514-800-0201" className="flex items-center gap-2">
            <Icon>
              <Phone color="#e8e3e3" size={25} />
            </Icon>
            <p className="text-lg">514-800-0201</p>
          </a>
          <a href="tel:1-855-396-2838" className="flex items-center gap-2">
            <Icon>
              <Phone color="#e8e3e3" size={25} />
            </Icon>
            <p className="text-lg"> 1-855-396-2838 </p>
          </a>
          <a
            href="mailto:info@vodalink.com"
            className="flex items-center gap-2"
          >
            <Icon>
              <Mail color="#e8e3e3" />
            </Icon>
            <p className="text-lg">info@vodalink.com</p>
          </a>
          <a
            href="https://maps.app.goo.gl/nXVAStZSJtgnavgf8"
            className="flex items-center gap-2"
            target="_blank"
          >
            <Icon>
              <MapPinned size={30} color="#e8e3e3" absoluteStrokeWidth />
            </Icon>
            <p className="text-lg">
              7900 boul. Taschereau A-206 Brossard,
              <br /> Quebec, Canada J4X 1C2
            </p>
          </a>
        </nav>
        <nav>
          <header className="footer-title text-white text-lg">
            Social Networks
          </header>
          <div className="flex items-center gap-2">
            {socialItems.map((item, index) => {
              const uri =
                item.title === "ma" ? `mailto:${item.link}` : item.link;
              return (
                <a
                  key={index}
                  href={uri}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon>{item.icon}</Icon>
                </a>
              );
            })}
          </div>
        </nav>
      </footer>
      <div className="bg-[#191e24]">
        <footer className="footer  py-8 border-t text-base-content border-base-300 container mx-auto">
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
