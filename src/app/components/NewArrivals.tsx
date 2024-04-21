"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/features/rootReducer";
import Link from "next/link";

const BestSeller = () => {
  const clothingData = useSelector(
    (state: RootState) => state.clothing.clothingData
  );
  const latestItems = clothingData.slice(24, 34);
  return (
    <>
      <div className="new-arrivals">
        <div className="container">
          <div className="top-btns">
            <button className="bs">NEW ARRIVALS</button>
            <button className="va">View all</button>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
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
          {latestItems.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="swiper-box">
                <Link href={`/shop/${item.id}`} passHref>
                  <img src={item.imgURL} alt="" />
                </Link>
                <div className="swiper-box-info">
                  <h6>{item.brand}</h6>
                  <h4>{item.name}</h4>
                  <button>€{item.price} EU</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BestSeller;
