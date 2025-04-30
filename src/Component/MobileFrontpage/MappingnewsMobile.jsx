import Newspage from "../Newspage";
import { useState, useEffect } from "react";
import {
  Router,
  Route,
  BrowserRouter,
  useParams,
  useNavigate,
} from "react-router-dom";

function MappingnewsMobile({ getdatatopic }) {
  const [news, setnews] = useState([]);
  const [active, isactive] = useState(null);
  const [loading, setloading] = useState(false);

  const [topic, settopic] = useState();

  const { topicc } = useParams();

  async function getnews() {
    try {
      setloading(true);
      const url = `https://newsdata.io/api/1/latest?country=in&language=en&category=${topicc}&apikey=pub_82191d6c05e2a0bd825ff719316a2836c96ef`;
      const responise = await fetch(url);
      const data = await responise.json();
      setnews(data.results);
    } catch (error) {
      null;
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    getnews();
  }, [topicc]);

  console.log(news);

  const date = new Date();
  const formatdate = date.toLocaleDateString();

  function updatesettopic(value) {
    settopic(value);
  }

  if (loading) {
    return (
      <div className="loading_div__">
        <h2 className="LoadingFunction">Loading....</h2>
      </div>
    );
  }

  return (
    <>
      <div className="full_mapping_div">
        {news.map((item, index) => (
          <div key={index} className="mapping-div_for-news">
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
      </div>
    </>
  );
}
export default MappingnewsMobile;
