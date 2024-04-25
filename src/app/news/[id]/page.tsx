"use client";

import { RootState } from "../../../redux/features/rootReducer";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

const Article = () => {
  const { id } = useParams();
  const transformedId = Array.isArray(id) ? id[0] : id;
  const newsInfo = useSelector((state: RootState) => state.news.newsInfo);
  const news = newsInfo.find((news) => news.id === parseInt(transformedId));

  if (!news) {
    return <div>there is no such a news</div>;
  }
  return (
    <>
      <div className="article-detail">
        <div className="container">
          <div className="articles-content">
            <div className="article-data">
              <div className="article-img">
                <img src={news.thumbnail} />
              </div>
              <div className="article-txt">
                <div className="article-date">
                  <span>Posted on {news.date}</span>
                </div>
                <div className="article-title">
                  <h2>{news.title}</h2>
                </div>
                <div className="article-des">
                  <p>{news.article}</p>
                </div>
                <div className="article-des">
                  <p> {news.article2}</p>
                </div>
                <div className="article-title-two">
                  <h2>{news.subtitle}</h2>
                </div>
                <div className="article-des-three">
                  <p>{news.article3}</p>
                </div>
              </div>
            </div>
            <div className="article-related">
              <div className="related-title">
                <h3>RELATED</h3>
              </div>
              <div className="related-articles">
                <div className="article-box">
                  <div className="article-box-img">
                    <img
                      src="https://pyxis.nymag.com/v1/imgs/2b4/e7e/1e643a84071e03c4969f6cb34d2c751744-LEDE-Rick.rhorizontal.w1100.jpg"
                      alt=""
                    />
                  </div>
                  <div className="article-box-title">
                    <h5>Posted on December 31 2021</h5>
                    <h4>
                      Gounders Natalia Modenova and Daria Shapovalova featured
                      in America's Greatest Disruptors list by Newsweek
                    </h4>
                  </div>
                  <div className="article-box-btn">
                    <button>Read more</button>
                  </div>
                </div>
                <div className="article-box">
                  <div className="article-box-img">
                    <img
                      src="https://pyxis.nymag.com/v1/imgs/2b4/e7e/1e643a84071e03c4969f6cb34d2c751744-LEDE-Rick.rhorizontal.w1100.jpg"
                      alt=""
                    />
                  </div>
                  <div className="article-box-title">
                    <h5>Posted on December 31 2021</h5>
                    <h4>
                      Gounders Natalia Modenova and Daria Shapovalova featured
                      in America's Greatest Disruptors list by Newsweek
                    </h4>
                  </div>
                  <div className="article-box-btn">
                    <button>Read more</button>
                  </div>
                </div>
                <div className="article-box">
                  <div className="article-box-img">
                    <img
                      src="https://pyxis.nymag.com/v1/imgs/2b4/e7e/1e643a84071e03c4969f6cb34d2c751744-LEDE-Rick.rhorizontal.w1100.jpg"
                      alt=""
                    />
                  </div>
                  <div className="article-box-title">
                    <h5>Posted on December 31 2021</h5>
                    <h4>
                      Gounders Natalia Modenova and Daria Shapovalova featured
                      in America's Greatest Disruptors list by Newsweek
                    </h4>
                  </div>
                  <div className="article-box-btn">
                    <button>Read more</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article
