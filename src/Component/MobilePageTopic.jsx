import "../Component/Newspage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState,useEffect } from "react";

function MobilePageTopic({ gettopicfrommobile }) {
  

   const [topiccc,gettopiccc] = useState('top');

  function settopiccc(value){
    gettopiccc(value)
  }
  useEffect(()=>{
    gettopicfrommobile(topiccc);
  },[topiccc])


  

  // useEffect(() => {
  //     if (active == "top") {
  //       settopic("top");
  //     } else if (active == "business") {
  //       settopic("business");
  //     } else if (active == "sports") {
  //       settopic("sports");
  //     } else if (active == "technology") {
  //       settopic("technology");
  //     } else if (active == "world") {
  //       settopic("world");
  //     } else {
  //       null;
  //     }
  //   }, [topic]);

  
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
              className={`button---${topiccc === 'top' ? 'active':''}`}
              onClick={() => settopiccc("top")}
            >
              Trending
            </SwiperSlide>
            <SwiperSlide
              className={`button---${topiccc === 'business' ? 'active':''}`}
              onClick={() => settopiccc("business")}
            >
              Business
            </SwiperSlide>
            <SwiperSlide
              className={`button---${topiccc === 'sports' ? 'active':''}`}
              onClick={() => settopiccc("sports")}
            >
              Sports
            </SwiperSlide>
            <SwiperSlide
              className={`button---${topiccc === 'technology' ? 'active':''}`}
              onClick={() => settopiccc("technology")}
            >
              Technology
            </SwiperSlide>
            <SwiperSlide
              className={`button---${topiccc === 'world' ? 'active':''}`}
              onClick={() => settopiccc("world")}
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
