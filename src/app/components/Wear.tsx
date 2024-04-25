import Link from "next/link";

const Wear = () => {
  return (
    <>
      <div className="wear">
        <div className="container">
          <div className="wear-content">
            <div className="wear-first">
              <h2>How to wear a digital garment</h2>
              <Link href="/shop">
                <button>Visit shop</button>
              </Link>
            </div>
            <div className="wear-second">
              <div className="steps">
                <div className="step">
                  <h3>Step 1</h3>
                  <div className="step-flex">
                    <h4>Choose outfit</h4>
                    <p>
                      Got to our <span>store</span> and choose the outfits you
                      like
                    </p>
                  </div>
                </div>
                <div className="step">
                  <h3>Step 2</h3>
                  <div className="step-flex">
                    <h4>Upload photo</h4>
                    <p>
                      To get the best results, read the photo{" "}
                      <span>requirements</span>
                    </p>
                  </div>
                </div>
                <div className="step">
                  <h3>Step 3</h3>
                  <div className="step-flex">
                    <h4>Pay</h4>
                    <p>Pay with cash or crypto</p>
                  </div>
                </div>
              </div>
              <Link href="/shop">
                <div className="btn-center">
                  <button>Visit shop</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wear;
