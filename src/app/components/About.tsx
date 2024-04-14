const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="about-section-content">
            <div className="first-about-section">
              <h3>About Verseser</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="about-section-btn">
                <button>Shop now</button>
              </div>
            </div>
            <div className="second-about-section">
              <div className="gredient">
                <div className="gredient-color"></div>
                <div className="gredient-color-two"></div>
              </div>
              <div className="bg">
                <img
                  src="https://vmagazine.com/wp-content/uploads/2021/05/Kendall-2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
