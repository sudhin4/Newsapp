import "../Component/Newspage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MobilePageTopic({ gettopicfrommobile }) {
  return (
    <>
      <div className="swiper_container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          Pagination={{ clickable: true }}
          loop={false}
          className="swiper_slider"
        >
          <div className="button-div-mobile">
            <SwiperSlide
              className="button---"
              onClick={() => gettopicfrommobile("top")}
            >
              Trending
            </SwiperSlide>
            <SwiperSlide
              className="button---"
              onClick={() => gettopicfrommobile("business")}
            >
              Bussiness
            </SwiperSlide>
            <SwiperSlide
              className="button---"
              onClick={() => gettopicfrommobile("sports")}
            >
              Sports
            </SwiperSlide>
            <SwiperSlide
              className="button---"
              onClick={() => gettopicfrommobile("technology")}
            >
              Technology
            </SwiperSlide>
            <SwiperSlide
              className="button---"
              onClick={() => gettopicfrommobile("world")}
            >
              World
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </>
  );
}
export default MobilePageTopic;
