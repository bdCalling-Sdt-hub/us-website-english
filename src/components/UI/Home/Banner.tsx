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
    height: "550px",
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
      <div className="mx-28 px-8 my-10 bg-gray-800 rounded-lg">
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
              <div className="grid grid-cols-2 items-center">
                <div>
                  <h1 className="text-4xl mb-4">
                    Exceptional extension of <br />{" "}
                    <span className="font-bold text-primary">
                      Cyber ​​Monday!
                    </span>
                  </h1>
                  <h2 className="text-2xl font-bold">
                    Unlimited Internet 100M at $55
                  </h2>
                  <p>Modem included | Free installation | Without engagement</p>
                  <button className="btn  text-lg bg-primary text-white mt-5">
                    I take advantage of it
                  </button>
                </div>
                <div>
                  <Image
                    src="https://www.bravotelecom.com/wp-content/uploads/2023/01/tv-bravootelecom.png"
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
      <div className="grid grid-cols-4 gap-4 mx-48 ">
        {items.map((item, index) => (
          <div
            className="card bg-neutral text-neutral-content z-10"
            key={index}
          >
            <div className="card-body items-center text-center">
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
