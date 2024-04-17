"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper as SwiperCore, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/features/rootReducer";

const Swiper = () => {
  const clothingData = useSelector(
    (state: RootState) => state.clothing.clothingData
  );
  
  return (
    <>
      <SwiperCore
        slidesPerView={1}
        spaceBetween={4}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {clothingData.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="swiper-box">
              <img src={item.imgURL} alt="" />
              <div className="swiper-box-info">
                <h6>{item.brand}</h6>
                <h4>{item.name}</h4>
                <button>€{item.price} EU</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </SwiperCore>
    </>
  );
};

export default Swiper;
