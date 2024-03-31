import React from "react";

const Carti = () => {
  return (
    <>
      <div className="carti">
        <div className="container">
          <a
            href="https://www.instagram.com/playboicarti/?hl=en"
            target="_blank"
          >
            <div className="ig-btn">
              <button>@playboicarti</button>
            </div>
          </a>
          <div className="carti-content">
            <div className="img-big-one"></div>
            <div className="flex-carti">
              <div className="lil-img-one"></div>
              <div className="lil-img-two"></div>
            </div>
            <div className="img-big-two"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carti;
