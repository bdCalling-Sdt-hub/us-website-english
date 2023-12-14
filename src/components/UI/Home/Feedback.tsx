import HeaderText from "@/components/util/HeaderText";
import "swiper/css";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import feedbackList from "../../../../public/db/feedback.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Feedback = () => {
  const { feedbacks } = feedbackList;

  const swiperContainerStyle = {
    width: "100%",
    height: "450px",
    marginTop: "20px",
  };

  return (
    <div className="mx-3 lg:mx-44 mt-36">
      <HeaderText>
        Our Happy clients <br />
        feedback
      </HeaderText>
      <Swiper
        modules={[Pagination, A11y, Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          690: {
            slidesPerView: 2,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        style={swiperContainerStyle}
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={index} className="mt-16">
            <div className="card shadow p-10 rounded-md  relative flex justify-center h-[340px] text-center bg-slate-700">
              <div className="absolute -top-10 bg-slate-700 p-1 shadow rounded-full">
                <img
                  src="/images/quote.png"
                  className="w-16 h-16 rounded-full"
                  alt=""
                />
              </div>
              <div>
                <p className="text-gray-400">{feedback?.feedback}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
