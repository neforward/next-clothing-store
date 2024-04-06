const News = () => {
  return (
    <>
      <div className="news">
        <div className="container">
          <div className="news-top-btns">
            <button className="news-btn">NEWS</button>
            <button className="va">View all</button>
          </div>
          <div className="news-content">
            <div className="news-box">
              <img
                src="https://wwd.com/wp-content/uploads/2017/05/met-gala-2018-48.jpg"
                alt=""
              />
              <div className="news-box-info">
                <h6>01.06.2017</h6>
                <h4>
                  Music’s newest — and most mysterious — couple is making their
                  red carpet debut.
                </h4>
                <button>Read more</button>
              </div>
            </div>
            <div className="news-box">
              <img
                src="https://media1.popsugar-assets.com/files/thumbor/RYSVZf-Ya2sZnTa5BdRYfdYobsA/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2023/05/01/139/n/1922398/74b9c86958283bc0_GettyImages-1486951983/i/rihanna-asap-rocky-2023-met-gala.jpg"
                alt=""
              />
              <div className="news-box-info">
                <h6>01.06.2023</h6>
                <h4>
                  As the showcase of the biggest night in fashion came to a
                  close, the couple everyone was anxiously waiting to see, A$AP
                  Rocky and Rihanna, hit the Met Gala red carpet, completely
                  stealing the show.
                </h4>
                <button>Read more</button>
              </div>
            </div>
            <div className="news-box">
              <img
                src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-1340137326.jpg"
                alt=""
              />
              <div className="news-box-info">
                <h6>01.06.2021</h6>
                <h4>
                  Call Frank Ocean the chicest daddy of the 2021 Met Gala. The
                  singer made the bold choice to walk down the red carpet with a
                  robot baby in his arms.
                </h4>
                <button>Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
