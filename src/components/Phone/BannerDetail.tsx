import { Check } from "lucide-react";
import Link from "next/link";

const BannerDetail = () => {
  const facilities = [
    "Unlimited calls at no extra cost",
    "Options such as display, voicemail, 3-way conference and much more available",
    "Bring your own phone number",
    "Mobile app available",
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center my-10 bg-[#2a323c] rounded-md p-10">
      <div className="">
        <img
          src="/images/phonepage.png"
          alt="support"
          className="mx-auto rounded-md object-cover"
        />
      </div>
      <div className=" text-gray-400">
        <h1 className="text-4xl font-bold text-white">
          Unlimited calls anywhere in Canada
        </h1>
        <p className="text-white my-5">
          This plan includes unlimited calls throughout Canada.{" "}
        </p>
        {facilities.map((item, index) => (
          <div className="flex items-center gap-2" key={index}>
            <Check color="#1775fa" size={15} />
            <p className="text-white">{item}</p>
          </div>
        ))}
        <p className="mt-4">Start now</p>
        <p className="font-bold">From</p>
        <div className="flex gap-5 items-center mt-8">
          <h1 className="font-bold text-light">
            <span className="text-6xl">$6</span>.50/month
          </h1>
          <h1 className="font-bold text-light flex items-center gap-2">
            <h1>OR</h1>
            <div>
              <span className="text-6xl">$9</span>
              .95/month
            </div>
          </h1>
        </div>
        <p className="my-5">(by pairing with our Internet services)</p>
        <p>
          <Link href="/contact">
            <button className="btn btn-black btn-wide text-white">
              COMMENDER
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BannerDetail;
