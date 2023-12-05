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
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-10 bg-[#cbcecd] rounded-md pl-5 py-5">
          <div className="space-y-5 order-2 lg:order-1">
            <h1 className="text-4xl font-bold text-white">Support</h1>
            <p className="text-white">
              This section of our website aims to answer the most frequently
              asked questions about our service, and provide support through
              direct answers and video tutorials for any difficulties you may
              have.
            </p>
            <p>
              <Link href="/contact">
                <button className="btn btn-primary text-white">CONTACT</button>
              </Link>
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <Image
              src="/images/support.jpg"
              alt="support"
              width={500}
              height={500}
              className="w-[88%] rounded-md object-cover block ml-auto"
            />
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
