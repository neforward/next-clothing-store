"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper as SwiperCore, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/features/rootReducer";
import Link from "next/link";
import { useEffect, useState } from "react";
interface ClothingItem {
  id: number;
  price: string;
  name: string;
  type: string;
  gender: string;
  brand: string;
  imgURL: string;
  imgURL2: string;
  imgURL3: string;
  imgURL4: string;
  imgURL5: string;
  imgURL6?: string;
  imgURL7?: string;
  imgURL8?: string;
  imgURL9?: string;
  imgURL10?: string;
  des?: string;
}

const Swiper = () => {
  const clothingData = useSelector(
    (state: RootState) => state.clothing.clothingData
  );
  const shuffleArray = (
    array: (
      | {
          id: number;
          price: string;
          name: string;
          type: string;
          gender: string;
          brand: string;
          imgURL: string;
          imgURL2: string;
          imgURL3: string;
          imgURL4: string;
          imgURL5: string;
          imgURL6: string;
          imgURL7: string;
          imgURL8?: undefined;
          imgURL9?: undefined;
          imgURL10?: undefined;
          des?: undefined;
        }
      | {
          id: number;
          price: string;
          name: string;
          type: string;
          gender: string;
          brand: string;
          imgURL: string;
          imgURL2: string;
          imgURL3: string;
          imgURL4: string;
          imgURL5: string;
          imgURL6: string;
          imgURL7?: undefined;
          imgURL8?: undefined;
          imgURL9?: undefined;
          imgURL10?: undefined;
          des?: undefined;
        }
      | {
          id: number;
          price: string;
          name: string;
          type: string;
          gender: string;
          brand: string;
          imgURL: string;
          imgURL2: string;
          imgURL3: string;
          imgURL4: string;
          imgURL5: string;
          imgURL6: string;
          imgURL7: string;
          imgURL8: string;
          imgURL9: string;
          imgURL10: string;
          des?: undefined;
        }
      | {
          id: number;
          price: string;
          name: string;
          type: string;
          gender: string;
          brand: string;
          imgURL: string;
          imgURL2: string;
          imgURL3: string;
          imgURL4: string;
          imgURL5: string;
          imgURL6: string;
          imgURL7: string;
          imgURL8: string;
          imgURL9?: undefined;
          imgURL10?: undefined;
          des?: undefined;
        }
      | {
          id: number;
          price: string;
          name: string;
          type: string;
          gender: string;
          brand: string;
          imgURL: string;
          imgURL2: string;
          imgURL3: string;
          imgURL4: string;
          imgURL5: string;
          imgURL6: string;
          imgURL7: string;
          imgURL8: string;
          imgURL9: string;
          imgURL10?: undefined;
          des?: undefined;
        }
      | {
          id: number;
          price: string;
          name: string;
          type: string;
          gender: string;
          brand: string;
          imgURL: string;
          imgURL2: string;
          imgURL3: string;
          imgURL4: string;
          imgURL5: string;
          imgURL6?: undefined;
          imgURL7?: undefined;
          imgURL8?: undefined;
          imgURL9?: undefined;
          imgURL10?: undefined;
          des?: undefined;
        }
      | {
          id: number;
          price: string;
          name: string;
          type: string;
          gender: string;
          brand: string;
          imgURL: string;
          imgURL2: string;
          imgURL3: string;
          imgURL4: string;
          imgURL5?: undefined;
          imgURL6?: undefined;
          imgURL7?: undefined;
          imgURL8?: undefined;
          imgURL9?: undefined;
          imgURL10?: undefined;
          des?: undefined;
        }
      | {
          id: number;
          price: string;
          name: string;
          type: string;
          gender: string;
          brand: string;
          imgURL: string;
          imgURL2: string;
          imgURL3: string;
          imgURL4: string;
          des: string;
          imgURL5?: undefined;
          imgURL6?: undefined;
          imgURL7?: undefined;
          imgURL8?: undefined;
          imgURL9?: undefined;
          imgURL10?: undefined;
        }
      | {
          id: number;
          price: string;
          name: string;
          type: string;
          gender: string;
          brand: string;
          imgURL: string;
          imgURL2: string;
          imgURL3: string;
          imgURL4: string;
          imgURL5: string;
          des: string;
          imgURL6?: undefined;
          imgURL7?: undefined;
          imgURL8?: undefined;
          imgURL9?: undefined;
          imgURL10?: undefined;
        }
      | {
          id: number;
          price: string;
          name: string;
          type: string;
          gender: string;
          brand: string;
          imgURL: string;
          imgURL2: string;
          imgURL3: string;
          imgURL4?: undefined;
          imgURL5?: undefined;
          imgURL6?: undefined;
          imgURL7?: undefined;
          imgURL8?: undefined;
          imgURL9?: undefined;
          imgURL10?: undefined;
          des?: undefined;
        }
    )[]
  ) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const [random, setRandom] = useState<ClothingItem[]>([]);
  useEffect(() => {
    // @ts-ignore
    const shuffledData = shuffleArray(clothingData);
    const randomSlice: any = shuffledData.slice(0, 16);
    setRandom(randomSlice);
  }, [clothingData]);
  return (
    <>
      <div className="swiper-copy">
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
          {random.map((item, i) => (
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
        </SwiperCore>
      </div>
    </>
  );
};

export default Swiper;
