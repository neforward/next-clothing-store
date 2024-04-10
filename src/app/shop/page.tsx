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
                <div className="brands-title">
                  <h3>Shop by brands</h3>
                </div>
                <div className="brands-column">
                  <span>Rick Owens</span>
                  <span>OffWhite</span>
                  <span>Bape</span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="shop-catalog">
                {clothingData.map((item) => (
                  <div className="shop-box" key={item.id}>
                    <Link href={`/shop/${item.id}`} passHref>
                      <img src={item.imgURL} alt={item.name} />
                    </Link>
                    <div className="shop-box-info">
                      <h6>{item.brand}</h6>
                      <h4>{item.name}</h4>
                      <button>€{item.price} EU</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
