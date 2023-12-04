/* eslint-disable @next/next/no-img-element */

const Banner = () => {
  return (
    <div className="grid grid-cols-2 items-center my-10 bg-[#fefefe] rounded-md pl-5">
      <div className="">
        <img
          src="/images/contact.png"
          alt="support"
          className="w-[100%] rounded-md"
        />
      </div>
      <div className="space-y-5 text-center">
        <div className="border-2 border-primary w-56 mx-auto" />
        <h1 className="text-4xl font-bold text-light">
          NEED TO ORDER? MORE INFORMATION HELP?
        </h1>
        <h1 className="text-4xl font-bold text-light">
          DON NOT HESITATE TO WRITE TO US
        </h1>

        <div className="border-2 border-primary w-56 mx-auto" />
      </div>
    </div>
  );
};

export default Banner;
