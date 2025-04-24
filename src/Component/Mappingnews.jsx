import Newspage from "./Newspage";
import { useState, useEffect } from "react";

function Mappingnews() {
  const [news, setnews] = useState([]);
  const [active, isactive] = useState(null);

  const [topic, settopic] = useState("top");

  useEffect(() => {
    if (active == "btn1") {
      settopic("top");
    } else if (active == "btn2") {
      settopic("business");
    } else if (active == "btn3") {
      settopic("sports");
    } else if (active == "btn4") {
      settopic("technology");
    } else if (active == "btn5") {
      settopic("world");
    } else {
      null;
    }
  }, []);

  async function getnews() {
    const url = `https://newsdata.io/api/1/latest?country=in&language=en&category=${topic}&apikey=pub_82191d6c05e2a0bd825ff719316a2836c96ef`;
    const responise = await fetch(url);
    const data = await responise.json();
    setnews(data.results);
  }

  useEffect(() => {
    getnews();
  }, [topic]);

  return (
    <>
      <div className="buttons_category">
        <button
          className={`button___ ${topic === "top" ? "active" : ""}`}
          onClick={() => settopic("top")}
        >
          Current affairs
        </button>
        <button
          className={`button___ ${topic === "business" ? "active" : ""}`}
          onClick={() => settopic("business")}
        >
          Bussiness
        </button>
        <button
          className={`button___ ${topic === "sports" ? "active" : ""}`}
          onClick={() => settopic("sports")}
        >
          Sports
        </button>
        <button
          className={`button___ ${topic === "technology" ? "active" : ""}`}
          onClick={() => settopic("technology")}
        >
          Technology
        </button>
        <button
          className={`button___ ${topic === "world" ? "active" : ""}`}
          onClick={() => settopic("world")}
        >
          World
        </button>
      </div>
      <div className="caption_cal">
        <h3 className="catchy_caption">
          "Bringing you trusted stories and breaking headlines — timely,
          relevant, and made for minds that stay curious."
        </h3>
      </div>

      {news.map((item, index) => (
        <div key={index}>
          <Newspage
            author={item.source_name}
            content={item.description}
            publisheddate={item.pubDate}
            title={item.title}
            url={item.link}
            img={item.image_url}
            category={item.category}
          />
        </div>
      ))}
    </>
  );
}
export default Mappingnews;
