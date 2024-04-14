import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="about-section-content">
            <div className="first-about-section">
              <h3>About Verseser</h3>
              <p>
                Rick Owens, the fashion icon, represents a unique blend of dark
                glamour, avant-garde design, and unapologetic individualism.
                Renowned for his boundary-pushing aesthetics and a penchant for
                asymmetry and draping, Rick Owens has carved out a distinct
                niche in the fashion world.
              </p>
              <Link href="/shop">
                <div className="about-section-btn">
                  <button>Shop now</button>
                </div>
              </Link>
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
