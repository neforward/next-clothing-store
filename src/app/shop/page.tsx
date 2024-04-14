"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/features/rootReducer";
export default function Shop() {
  const clothingData = useSelector(
    (state: RootState) => state.clothing.clothingData
  );
  return (
    <>
      <div className="shop">
        <div className="container">
          <div className="shop-content">
            <div className="shop-top">
              <h2>All Clothing</h2>
              <div className="select-category">
                <select className="sort" name="" id="">
                  <option value="">Default sorting</option>
                  <option value="latest">Sort by latest</option>
                  <option value="price-low">Sort by price: low to high</option>
                  <option value="price-high">Sort by price: high to low</option>
                </select>
                <span>SORT BY</span>
              </div>
            </div>
            <div className="shop-main">
              <div className="shop-brands">
                <div className="brands-column">
                  <div className="brands-title">
                    <h3>Shop by brands</h3>
                  </div>
                  <span>Rick Owens</span>
                  <span>OffWhite</span>
                  <span>Bape</span>
                  <div className="brands-title">
                    <h3>Shop by clothing</h3>
                  </div>
                  <span>Jacket</span>
                  <span>Shoes</span>
                </div>
              </div>
              <div className="shop-catalog">
                {clothingData.map(
                  (item) =>
                    item && (
                      <div className="shop-box" key={item.id}>
                        <Link href={`/shop/${item.id}`} passHref>
                          <div className="image-container">
                            <img
                              src={item.imgURL}
                              alt={item.name}
                              className="normal-img"
                            />
                            <img
                              src={item.imgURL2}
                              alt={item.name}
                              className="hover-img1"
                            />
                          </div>
                        </Link>
                        <div className="shop-box-info">
                          <h6>{item.brand}</h6>
                          <h4>{item.name}</h4>
                          <button>€{item.price} EU</button>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
