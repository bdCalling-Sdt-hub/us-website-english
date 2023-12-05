import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-10 bg-[#fefefe] rounded-md pl-5">
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
        <div className="border-2 border-primary w-56 mx-auto" />
        <h1 className="text-4xl font-bold text-light">PACKAGES</h1>
        <h1 className="text-4xl font-bold text-light">REFRESHMENTS</h1>
        <p>
          <Link href="/contact">
            <button className="btn btn-primary text-white">COMMENDER</button>
          </Link>
        </p>
        <div className="border-2 border-primary w-56 mx-auto" />
      </div>
    </div>
  );
};

export default Banner;
