import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";
import { ReactElement } from "react";

const TelevisionPage = () => {
  return (
    <div className="container mx-auto">
      <div className="mx-28">
        <div className="grid grid-cols-2 items-center my-10 bg-[#fefefe] rounded-md pl-5">
          <div className="">
            <img
              src="/images/television.png"
              alt="support"
              className="w-[100%] rounded-md"
            />
          </div>
          <div className="">
            <div className="border-2 border-primary w-56 mb-4" />
            <h1 className="text-4xl font-bold text-light mb-2">TELEVISION</h1>
            <p>
              With Vodalink, have access to content from the most popular
              broadcasters in Canada, Vodalink offers packages made for
              families, sports fans, movie enthusiasts and much more.
            </p>
            <p className="mt-4">Start now</p>
            <p className="font-bold">From</p>
            <h1 className="font-bold text-light my-4">
              <span className="text-6xl">$69</span>.95/month
            </h1>
            <p>
              <Link href="/contact">
                <button className="btn btn-primary text-white">
                  COMMENDER
                </button>
              </Link>
            </p>

            <div className="border-2 border-primary w-56 mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelevisionPage;

TelevisionPage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
