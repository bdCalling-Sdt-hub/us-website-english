import RootLayout from "@/components/Layouts/RootLayout";
import BreadCrumb from "@/components/util/BreadCrumb";
import Image from "next/image";
import { ReactElement } from "react";

const SupportPage = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-3 lg:mx-28">
        <BreadCrumb title="Support" />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-10 lg:h-[580px] bg-[#fefefe] rounded-md p-10">
          <div className="">
            <Image
              src="/images/support.png"
              alt="support"
              width={500}
              height={500}
              className="w-[80%] rounded-md"
            />
          </div>
          <div className="space-y-5 text-center text-gray-400">
            <div className="border-2 border-primary w-56 mx-auto" />
            <h1 className="text-4xl font-bold text-light">SUPPORT</h1>
            <p className="text-light">
              This section of our website aims to answer the most frequently
              asked questions about our service, and provide support through
              direct answers and video tutorials for any difficulties you may
              have.
            </p>
            <button className="btn btn-primary text-white">CONTACT</button>
            <div className="border-2 border-primary w-56 mx-auto" />
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
