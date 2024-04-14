"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/features/rootReducer";
import { useState } from "react";

export default function Shop() {
  const clothingData = useSelector(
    (state: RootState) => state.clothing.clothingData
  );
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = clothingData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

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
                {currentItems.map((item) =>
                  item ? (
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
                  ) : null
                )}
                <div className="flex-pagination">
                  <button
                    className="prevBtn"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="21"
                      viewBox="0 0 33 21"
                      fill="none"
                    >
                      <path
                        d="M29 9.625H5.97625L9.10875 6.48375L7.875 5.25L2.625 10.5L7.875 15.75L9.10875 14.5163L5.97625 11.375H29V9.625Z"
                        fill="#323232"
                      />
                    </svg>
                  </button>
                  {clothingData.length > itemsPerPage && (
                    <div className="pagination">
                      {Array(Math.ceil(clothingData.length / itemsPerPage))
                        .fill(0)
                        .map((_, index) => {
                          if (
                            index === 0 ||
                            index ===
                              Math.ceil(clothingData.length / itemsPerPage) -
                                1 ||
                            (index >= currentPage - 2 &&
                              index <= currentPage + 1)
                          ) {
                            return (
                              <span
                                key={index}
                                className={`pagination-item ${
                                  currentPage === index + 1 ? "active" : ""
                                }`}
                                onClick={() => paginate(index + 1)}
                              >
                                {index + 1}
                              </span>
                            );
                          } else if (index === 1 && currentPage - 1 > 1) {
                            return <span className="dots" key={index}>...</span>;
                          } else if (
                            index ===
                              Math.ceil(clothingData.length / itemsPerPage) -
                                2 &&
                            currentPage + 1 <
                              Math.ceil(clothingData.length / itemsPerPage) - 1
                          ) {
                            return <span key={index}>...</span>;
                          }
                          return null;
                        })}
                    </div>
                  )}
                  <button
                    className="nextBtn"
                    onClick={nextPage}
                    disabled={
                      currentPage ===
                      Math.ceil(clothingData.length / itemsPerPage)
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="21"
                      viewBox="0 0 33 21"
                      fill="none"
                    >
                      <path
                        d="M4 11.375L27.0238 11.375L23.8913 14.5162L25.125 15.75L30.375 10.5L25.125 5.25L23.8913 6.48375L27.0238 9.625L4 9.625L4 11.375Z"
                        fill="#323232"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
