import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center my-10 bg-[#2a323c] rounded-md p-10">
      <div className="">
        <Image
          src="/images/internet.png"
          alt="support"
          width={500}
          height={500}
          className="rounded-md"
        />
      </div>
      <div className="text-gray-400">
        <div className="border-2 border-[#1775fa] w-56 mb-4" />
        <h1 className="text-4xl font-bold text-light mb-2">Internet</h1>
        <p>
          With download speeds up to 60mbps, we are an internet service provider
          working to give you the best experience with our high speed unlimited
          internet plans.
        </p>
        <p className="mt-4">Start now</p>
        <p className="font-bold">From</p>
        <h1 className="font-bold text-light my-4">
          <span className="text-6xl">$59</span>.95/month
        </h1>
        <p>
          <Link href="/contact">
            <button className="btn btn-black btn-wide text-white hover:bg-yellow-600 duration">
              COMMENDER
            </button>
          </Link>
        </p>

        <div className="border-2 border-[#1775fa] w-56 mt-4" />
      </div>
    </div>
  );
};

export default Banner;
