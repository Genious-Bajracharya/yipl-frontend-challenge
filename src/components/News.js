import "../assets/styles/News.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fectNews = async () => {
      try {
        const res = await axios.get(
          "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json"
        );
        setNews(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fectNews();
  }, []);

  if (news) {
    console.log(news);
  }

  return (
    <div className="news-container">
      <h1>News</h1>
      <p>
        We aim to stop public funds siphoning off and we have a plan that will
        <br />
        help. We are working at the national and EU levels to advance.
      </p>
      <div>
        <div className="news-card"></div>
      </div>
    </div>
  );
}
