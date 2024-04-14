"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "@/redux/features/rootReducer";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
export default function ShopItem() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { id } = useParams();
  const clothingData = useSelector(
    (state: RootState) => state.clothing.clothingData
  );
  const normalizedId = Array.isArray(id) ? id[0] : id;
  const clothing = clothingData.find(
    (item) => item && item.id === parseInt(normalizedId)
  );

  if (!clothing) {
    return <div>Clothing item not found</div>;
  }
  return (
    <>
      <div className="shop-detail">
        <div className="container">
          <div className="detail-content">
            <div className="df-swiper">
              <Swiper
                style={{
                  // @ts-ignore
                  "--swiper-navigation-color": "#000",
                  "--swiper-pagination-color": "#fff",
                  "--swiper-pagination-bullet-color": "#fff",
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
                {clothing.imgURL8 && (
                  <SwiperSlide>
                    <img src={clothing.imgURL8} alt={clothing.name} />
                  </SwiperSlide>
                )}
                {clothing.imgURL9 && (
                  <SwiperSlide>
                    <img src={clothing.imgURL9} alt={clothing.name} />
                  </SwiperSlide>
                )}
                {clothing.imgURL10 && (
                  <SwiperSlide>
                    <img src={clothing.imgURL10} alt={clothing.name} />
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
                <div className="swiper-column">
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
                  {clothing.imgURL8 && (
                    <SwiperSlide>
                      <img src={clothing.imgURL8} alt={clothing.name} />
                    </SwiperSlide>
                  )}
                  {clothing.imgURL9 && (
                    <SwiperSlide>
                      <img src={clothing.imgURL9} alt={clothing.name} />
                    </SwiperSlide>
                  )}
                  {clothing.imgURL10 && (
                    <SwiperSlide>
                      <img src={clothing.imgURL10} alt={clothing.name} />
                    </SwiperSlide>
                  )}
                </div>
              </Swiper>
            </div>
            <div className="shop-detail-text">
              <div className="shop-detail-top">
                <div className="detail-top">
                  <div className="st">
                    <h6>{clothing.brand}</h6>
                    <h3>{clothing.name}</h3>
                  </div>
                  <button>€{clothing.price} EU</button>
                </div>
                <div className="shop-flex">
                  <div className="shop-photo">
                    <div className="cop">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="28"
                        viewBox="0 0 31 28"
                        fill="none"
                      >
                        <path
                          d="M8.8838 14.6562H14.4764V20.0176C14.4764 20.5625 14.944 21.0195 15.5216 21.0195C16.0992 21.0195 16.5668 20.5625 16.5668 20.0176V14.6562H22.1594C22.7278 14.6562 23.2045 14.208 23.2045 13.6543C23.2045 13.1006 22.7278 12.6523 22.1594 12.6523H16.5668V7.29102C16.5668 6.74609 16.0992 6.28906 15.5216 6.28906C14.944 6.28906 14.4764 6.74609 14.4764 7.29102V12.6523H8.8838C8.31537 12.6523 7.83862 13.1006 7.83862 13.6543C7.83862 14.208 8.31537 14.6562 8.8838 14.6562Z"
                          fill="#181818"
                        />
                      </svg>
                      <h2>upload photo</h2>
                    </div>
                    <p>
                      To get the best results, read the photo{" "}
                      <span>requirements</span>
                    </p>
                    <div className="shop-photo-btn">
                      <button>Past link here</button>
                      <span>Bulk upload</span>
                    </div>
                  </div>
                  <div className="shop-detail-quantity">
                    <h2>QUANTITY</h2>
                    <div className="counter">
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6.54586 12.5699H17.4543C17.9139 12.5699 18.3056 12.1857 18.3056 11.7111C18.3056 11.244 17.9139 10.8523 17.4543 10.8523H6.54586C6.10139 10.8523 5.69458 11.244 5.69458 11.7111C5.69458 12.1857 6.10139 12.5699 6.54586 12.5699Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                      <input type="number" value={1} />
                      <button>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6.54583 12.5625H11.1413V17.1579C11.1413 17.625 11.5255 18.0167 12.0001 18.0167C12.4747 18.0167 12.8589 17.625 12.8589 17.1579V12.5625H17.4543C17.9214 12.5625 18.3131 12.1783 18.3131 11.7037C18.3131 11.2291 17.9214 10.8449 17.4543 10.8449H12.8589V6.24944C12.8589 5.78237 12.4747 5.39062 12.0001 5.39062C11.5255 5.39062 11.1413 5.78237 11.1413 6.24944V10.8449H6.54583C6.07875 10.8449 5.68701 11.2291 5.68701 11.7037C5.68701 12.1783 6.07875 12.5625 6.54583 12.5625Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="totals">
                      <p>
                        Price <span>$40.00 USD</span>
                      </p>
                      <p>
                        Total <span>$160.00 USD</span>
                      </p>
                    </div>
                    <div className="promocode-input">
                      <input type="text" placeholder="Promocode" />
                    </div>
                    <div className="buy-btn">
                      <button>Buy now</button>
                    </div>
                  </div>
                </div>
                <div className="shop-descriptions">
                  <p>
                    {clothing.des}
                    BalmLabs is a Ghana-based Digital Fashion House that
                    specializes in digital-only media for fashion brands. Baboa
                    Tachie-Menson – the designer behind the BTM studios by
                    Balmlabs – shares that digital fashion has helped her to
                    push the boundaries of the traditional industry and simply
                    concentrate on the creative process of designing the
                    clothes. In digital fashion there is no need to provide
                    physical sketches, which don’t usually get the ideas across
                    in the best way, and absolutely no need to account for the
                    fabrics availability and price. In Baboa’s opinion, digital
                    fashion is a new and more conscious way of consuming fashion
                    that brings a lot of fun and excitement to the industry,
                    while also allowing brands to explore all areas of design
                    and keep up the momentum.
                  </p>
                  <p>
                    The collection available at DressX was created during the
                    lockdown period and designed to bring light and bright
                    colors to the lives of its viewers. The colors used in the
                    collection illustrate warmth and nature but in their vibrant
                    forms. The fabrics and materials used mainly represent silk,
                    plastic, and rubber.
                  </p>
                  <p>Color: bright orange.</p>
                  <p>Type: {clothing.type}</p>
                  <p>Digital clothes fit all sizes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
