"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/features/rootReducer";
export default function ShopItem() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  type IDType = number;
  const { id } = useParams();
  const clothingData = useSelector(
    (state: RootState) => state.clothing.clothingData
  );

  const normalizedId = Array.isArray(id) ? id[0] : id;

  const clothing = clothingData.find(
    (item) => item.id === parseInt(normalizedId)
  );
  if (!clothing) {
    return <div>Clothing item not found</div>;
  }
  return (
    <>
      <div className="shop-detail">
        <div className="container">
          <Swiper
            style={{
              // @ts-ignore
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#fff",
              "--swiper-pagination-bullet-color": "#000",
              "--swiper-pagination-bullet-active-color": "#fff",
              "--swiper-scrollbar-color": "#fff",
              "--swiper-scrollbar-thumb-color": "#fff",
              "--swiper-scrollbar-track-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-view"
          >
            {clothing.imgURL && (
              <SwiperSlide>
                <img src={clothing.imgURL} alt={clothing.name} />
              </SwiperSlide>
            )}
            {clothing.imgURL2 && (
              <SwiperSlide>
                <img src={clothing.imgURL2} alt={clothing.name} />
              </SwiperSlide>
            )}
            {clothing.imgURL3 && (
              <SwiperSlide>
                <img src={clothing.imgURL3} alt={clothing.name} />
              </SwiperSlide>
            )}
            {clothing.imgURL4 && (
              <SwiperSlide>
                <img src={clothing.imgURL4} alt={clothing.name} />
              </SwiperSlide>
            )}
            {clothing.imgURL5 && (
              <SwiperSlide>
                <img src={clothing.imgURL5} alt={clothing.name} />
              </SwiperSlide>
            )}
            {clothing.imgURL6 && (
              <SwiperSlide>
                <img src={clothing.imgURL6} alt={clothing.name} />
              </SwiperSlide>
            )}
            {clothing.imgURL7 && (
              <SwiperSlide>
                <img src={clothing.imgURL7} alt={clothing.name} />
              </SwiperSlide>
            )}
          </Swiper>

          <Swiper
            // @ts-ignore
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-slides"
          >
            <div className="flexSlide">
              {clothing.imgURL && (
                <SwiperSlide>
                  <img src={clothing.imgURL} alt={clothing.name} />
                </SwiperSlide>
              )}
              {clothing.imgURL2 && (
                <SwiperSlide>
                  <img src={clothing.imgURL2} alt={clothing.name} />
                </SwiperSlide>
              )}
              {clothing.imgURL3 && (
                <SwiperSlide>
                  <img src={clothing.imgURL3} alt={clothing.name} />
                </SwiperSlide>
              )}
              {clothing.imgURL4 && (
                <SwiperSlide>
                  <img src={clothing.imgURL4} alt={clothing.name} />
                </SwiperSlide>
              )}
              {clothing.imgURL5 && (
                <SwiperSlide>
                  <img src={clothing.imgURL5} alt={clothing.name} />
                </SwiperSlide>
              )}
              {clothing.imgURL6 && (
                <SwiperSlide>
                  <img src={clothing.imgURL6} alt={clothing.name} />
                </SwiperSlide>
              )}
              {clothing.imgURL7 && (
                <SwiperSlide>
                  <img src={clothing.imgURL7} alt={clothing.name} />
                </SwiperSlide>
              )}
            </div>
          </Swiper>
          <div className="shop-detail"></div>
        </div>
      </div>
    </>
  );
}
