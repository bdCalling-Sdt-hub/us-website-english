import RootLayout from "@/components/Layouts/RootLayout";
import BreadCrumb from "@/components/util/BreadCrumb";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

const SupportPage = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-3 lg:mx-28">
        <BreadCrumb title="Support" />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-10 bg-[#fefefe] rounded-md p-10">
          <div className="">
            <Image
              src="/images/packages.png"
              alt="support"
              width={500}
              height={500}
              className="w-[100%] rounded-md object-cover"
            />
          </div>
          <div className="space-y-5 text-center text-gray-400">
            <div className="border-2 border-[#1775fa] w-56 mx-auto" />
            <h1 className="text-4xl font-bold text-light">Support</h1>
            <p className="text-light">
              This section of our website aims to answer the most frequently
              asked questions about our service, and provide support through
              direct answers and video tutorials for any difficulties you may
              have.
            </p>
            <p>
              <Link href="/contact">
                <button className="btn bg-black text-white">CONTACT</button>
              </Link>
            </p>
            <div className="border-2 border-[#1775fa] w-56 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;

SupportPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
