const Checkout = () => {
  return (
    <>
      <div className="checkout">
        <div className="container">
          <div className="checkout-content">
            <div className="checkout-first">
              <div className="checkout-title">
                <h3>Summary</h3>
                <p>Check your order to get qualified service</p>
              </div>
              <div className="first-cart">
                <div className="cart-box">
                  <div className="cart-img">
                    <img
                      src="https://cdn.rickowens.eu/products/168054/large/RO01D2719_BBTU13_09_01.jpg?1706788005"
                      alt=""
                    />
                    <div className="yui">
                      <div className="cart-box-info">
                        <h6>Balmlabs</h6>
                        <h4>Cropped Puffy Jacket</h4>
                        <div className="price">
                          <p>
                            $40.00 USD <span>$40.00 USD</span>
                          </p>
                        </div>
                      </div>
                      <div className="counting">
                        <div className="cart-counter">
                          <div className="counter-btns">
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                              >
                                <path
                                  d="M5.27303 9.94178H13.7271C14.0832 9.94178 14.3868 9.64402 14.3868 9.27619C14.3868 8.91421 14.0832 8.61061 13.7271 8.61061H5.27303C4.92856 8.61061 4.61328 8.91421 4.61328 9.27619C4.61328 9.64402 4.92856 9.94178 5.27303 9.94178Z"
                                  fill="white"
                                />
                              </svg>
                            </button>
                            <input type="text" value="1" readOnly />
                            <button>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                              >
                                <path
                                  d="M5.273 9.93593H8.83446V13.4974C8.83446 13.8594 9.13222 14.163 9.50004 14.163C9.86786 14.163 10.1656 13.8594 10.1656 13.4974V9.93593H13.7271C14.0891 9.93593 14.3927 9.63817 14.3927 9.27035C14.3927 8.90253 14.0891 8.60477 13.7271 8.60477H10.1656V5.04331C10.1656 4.68133 9.86786 4.37773 9.50004 4.37773C9.13222 4.37773 8.83446 4.68133 8.83446 5.04331V8.60477H5.273C4.91102 8.60477 4.60742 8.90253 4.60742 9.27035C4.60742 9.63817 4.91102 9.93593 5.273 9.93593Z"
                                  fill="white"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="remove-btn">Remove</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shipping">
                <h2>Available sheeping method</h2>
                <div className="shipping-box">
                  <div className="shipping-one">
                    <div className="shipping-img">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x="0.4"
                          y="0.4"
                          width="23.2"
                          height="23.2"
                          rx="11.6"
                          fill="white"
                        />
                        <rect
                          x="0.4"
                          y="0.4"
                          width="23.2"
                          height="23.2"
                          rx="11.6"
                          stroke="black"
                          strokeWidth="0.8"
                        />
                        <circle cx="12.0001" cy="12" r="6.4" fill="#393939" />
                      </svg>
                    </div>
                    <div className="shipping-days">
                      <h5>3 days</h5>
                      <h3>Shipping</h3>
                    </div>
                  </div>
                  <div className="shipping-two">
                    <h4>$40.00 USD</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-second">
              <div className="payment">
                <div className="payment-title">
                  <h2>Payment details</h2>
                  <p>Check your order to get qualified service</p>
                </div>
                <div className="payment-section">
                  <h3>EMAIL</h3>
                  <input type="text" placeholder="Email" />
                </div>
                <div className="payment-section">
                  <h3>CARD DETAILS</h3>
                  <div className="input-relative">
                    <input type="text" placeholder="Card number" />
                    <div className="input-absolute">
                      <input type="number" placeholder="Date" />
                      <input type="number" placeholder="CVV" />
                    </div>
                  </div>
                </div>
                <div className="payment-section">
                  <h3>CARD OWNER</h3>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="payment-info">
                  <h3>Subtotal</h3>
                  <h3>$40.00 USD</h3>
                </div>
                <div className="payment-info">
                  <h3>FEE ( 20% )</h3>
                  <h3>$0.00 USD</h3>
                </div>
                <div className="payment-info">
                  <h3>Total</h3>
                  <h3>$40.00 USD</h3>
                </div>
                <div className="pay-btn">
                  <button>Pay $40.00</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
