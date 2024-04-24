"use client";
import { RootState } from "../../redux/features/rootReducer";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function News() {
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
      <div className="article">
        <div className="container">
          <div className="article-content">
            {newsInfo.map((news: INewsInfo, i: number) => (
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
}
