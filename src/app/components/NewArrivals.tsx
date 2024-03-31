"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BestSeller = () => {
  return (
    <>
      <div className="best-seller">
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
          <SwiperSlide>
            <div className="swiper-box">
              <img
                src="https://www.magic-custom.com/15260-large_product/playboi-carti-t-shirt-cpfm-4-wlr-king-vamp.jpg"
                alt=""
              />
              <div className="swiper-box-info">
                <h6>Balmlabs</h6>
                <h4>Cropped Puffy Jacket</h4>
                <button>$40.00 USD</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box">
              <img
                src="https://shop.yopierre.com/cdn/shop/files/OPM__0007_PierreBourne_GrailsTour_Purp_Hoodie-copy-2.png?v=1687438557"
                alt=""
              />
              <div className="swiper-box-info">
                <h6>Balmlabs</h6>
                <h4>Cropped Puffy Jacket</h4>
                <button>$40.00 USD</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box">
              <img
                src="https://www.magic-custom.com/15260-large_product/playboi-carti-t-shirt-cpfm-4-wlr-king-vamp.jpg"
                alt=""
              />
              <div className="swiper-box-info">
                <h6>Balmlabs</h6>
                <h4>Cropped Puffy Jacket</h4>
                <button>$40.00 USD</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box">
              <img
                src="https://shop.yopierre.com/cdn/shop/files/OPM__0007_PierreBourne_GrailsTour_Purp_Hoodie-copy-2.png?v=1687438557"
                alt=""
              />
              <div className="swiper-box-info">
                <h6>Balmlabs</h6>
                <h4>Cropped Puffy Jacket</h4>
                <button>$40.00 USD</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box">
              <img
                src="https://www.magic-custom.com/15260-large_product/playboi-carti-t-shirt-cpfm-4-wlr-king-vamp.jpg"
                alt=""
              />
              <div className="swiper-box-info">
                <h6>Balmlabs</h6>
                <h4>Cropped Puffy Jacket</h4>
                <button>$40.00 USD</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box">
              <img
                src="https://shop.yopierre.com/cdn/shop/files/OPM__0007_PierreBourne_GrailsTour_Purp_Hoodie-copy-2.png?v=1687438557"
                alt=""
              />
              <div className="swiper-box-info">
                <h6>Balmlabs</h6>
                <h4>Cropped Puffy Jacket</h4>
                <button>$40.00 USD</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box">
              <img
                src="https://www.magic-custom.com/15260-large_product/playboi-carti-t-shirt-cpfm-4-wlr-king-vamp.jpg"
                alt=""
              />
              <div className="swiper-box-info">
                <h6>Balmlabs</h6>
                <h4>Cropped Puffy Jacket</h4>
                <button>$40.00 USD</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box">
              <img
                src="https://shop.yopierre.com/cdn/shop/files/OPM__0007_PierreBourne_GrailsTour_Purp_Hoodie-copy-2.png?v=1687438557"
                alt=""
              />
              <div className="swiper-box-info">
                <h6>Balmlabs</h6>
                <h4>Cropped Puffy Jacket</h4>
                <button>$40.00 USD</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box">
              <img
                src="https://www.magic-custom.com/15260-large_product/playboi-carti-t-shirt-cpfm-4-wlr-king-vamp.jpg"
                alt=""
              />
              <div className="swiper-box-info">
                <h6>Balmlabs</h6>
                <h4>Cropped Puffy Jacket</h4>
                <button>$40.00 USD</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-box">
              <img
                src="https://shop.yopierre.com/cdn/shop/files/OPM__0007_PierreBourne_GrailsTour_Purp_Hoodie-copy-2.png?v=1687438557"
                alt=""
              />
              <div className="swiper-box-info">
                <h6>Balmlabs</h6>
                <h4>Cropped Puffy Jacket</h4>
                <button>$40.00 USD</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default BestSeller;
