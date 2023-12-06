import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { ChevronsRight, Paperclip, PhoneCall, Tv } from "lucide-react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const contentStyle = {
    width: "100%",
    height: "100%",
  };

  const items = [
    {
      title: "Internet",
      icon: <Paperclip size={60} />,
    },
    {
      title: "Phone",
      icon: <PhoneCall size={60} />,
    },
    {
      title: "Television",
      icon: <Tv size={60} />,
    },
    {
      title: "Quick submission",
      icon: <ChevronsRight size={60} />,
    },
  ];

  return (
    <>
      <div className="mx-3 lg:mx-28 h-[600px] lg:h-[550px] px-8 my-10 bg-gray-800 rounded-lg">
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          style={contentStyle}
        >
          {[...Array(4)].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="order-2 lg:order-1">
                  <h1 className="text-4xl mb-4 text-gray-400">
                    Exceptional extension of <br />{" "}
                    <span className="font-bold text-primary">
                      Cyber ​​Monday!
                    </span>
                  </h1>
                  <h2 className="text-2xl font-bold text-gray-400">
                    Unlimited Internet 100M at $55
                  </h2>
                  <p className="text-gray-400">
                    Modem included | Free installation | Without engagement
                  </p>
                  <button className="btn text-lg bg-primary text-white mt-5">
                    I take advantage of it
                  </button>
                </div>
                <div className="order-1 lg:order-2">
                  <Image
                    src="/images/tv-bravootelecom.png"
                    alt="image"
                    width={600}
                    height={500}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mx-6 lg:mx-48 ">
        {items.map((item, index) => (
          <div
            className="card bg-[#2a323c] text-neutral-content z-10"
            key={index}
          >
            <div className="card-body items-center text-center text-gray-400">
              <div>{item.icon}</div>
              <h2 className="card-title">{item.title}</h2>
              <div className="border-b border-primary border-2 rounded-lg w-16 mt-1" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Banner;
