import Newspage from "./Newspage";
import { useState, useEffect } from "react";

function Mappingnews() {
  const [news, setnews] = useState([]);

  async function getdata(params) {
    const promise = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=99ed6620ddf842bd932c27214fcb0204"
    );
    const data = await promise.json();
    setnews(data.articles);
    console.log(data);
  }

  useEffect(() => { 
    getdata();
  }, []);

  return (
    <>
      <div className="buttons_category">
        <button className="button___">Business</button>
        <button className="button___">Sport</button>
        <button className="button___">Politics</button>
        <button className="button___">Technology</button>
      </div>
        <div className="caption_cal">
        <h3 className="catchy_caption">
      "Bringing you trusted stories and breaking headlines — timely, relevant, and made for minds that stay curious."
      </h3>
        </div>
      

      {news.map((item, index) => (
        <div key={index}>
          <Newspage
            author={item.author}
            content={item.content}
            publisheddate={item.publishedAt}
            title={item.title}
            url={item.url}
            img={item.urlToImage}
            
          />
        </div>
      ))}
    </>
  );
}
export default Mappingnews;
