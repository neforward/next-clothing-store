"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/features/rootReducer";

const News = () => {
  const newsInfo = useSelector((state: RootState) => state.news.newsInfo);

  interface INewsInfo {
    title: string;
    id: number;
    thumbnail: string;
    date: string;
    article: string;
  }

  return (
    <>
      <div className="news">
        <div className="container">
          <div className="news-top-btns">
            <button className="news-btn">NEWS</button>
            <Link href="/news">
              <button className="va">View all</button>
            </Link>
          </div>
          <div className="news-content">
            {newsInfo.map((news, i) => (
              <div key={i} className="news-box">
                <img src={news.thumbnail} alt={news.title} />
                <div className="news-box-info">
                  <h6>{news.date}</h6>
                  <h4>{news.title}</h4>
                  <Link href={`/news/${news.id}`}>
                    <button>Read more</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
