import topNews from "../MobileFrontpage/TopNews.png";
import Sports from "../MobileFrontpage/Sports News Logo.png";
import Technology from "../MobileFrontpage/Technology News Logo.png";
import business from "../MobileFrontpage/business Logo.png";
import World from "../MobileFrontpage/World News Logo.png";
import { useNavigate } from "react-router-dom";


import "../MobileFrontpage/MobileFront.css";
import { useState } from "react";

function Mobilefront({gettopicfunction}) {

    const navigate = useNavigate();

  function getvalue(value){
    navigate(`/${value}`)
  }




  return (
    <>
      <div className="Whole_mobile_front_page">
        <div className="card_mobilefrontpage" onClick={()=>getvalue('top')}>
          <div className="content_top news0">
            <img src={topNews} alt="" className="Image__Frontmobile TOPnEWS" />
            <h2 className="heading">Breaking News</h2>
          </div>
        </div>

        <div className="card_mobilefrontpage" onClick={()=>getvalue('sports')}>
          <div className="content_top news1">
            <img src={Sports} alt="" className="Image__Frontmobile SpORTS " />
            <h2 className="heading">Sports </h2>
          </div>
        </div>

        <div className="card_mobilefrontpage" onClick={()=>getvalue('business')}>
          <div className="content_top news2">
            <img
              src={business}
              alt=""
              className="Image__Frontmobile BUsINESS"
            />
            <h2 className="heading">Business</h2>
          </div>
        </div>

        <div className="card_mobilefrontpage" onClick={()=>getvalue('world')}>
          <div className="content_top news3">
            <img src={World} alt="" className="Image__Frontmobile WOrLd" />
            <h2 className="heading">World</h2>
          </div>
        </div>

        <div className="card_mobilefrontpage" onClick={()=>getvalue('technology')}>
          <div className="content_top news4">
            <img src={Technology} alt="" className="Image__Frontmobile" />
            <h2 className="heading">Technology</h2>
          </div>
        </div>
      </div>
      <div className="tageer_developer">
        <a
          href="https://www.linkedin.com/in/suthin-k-s-876402281/"
          className="developer_tagee"
        >
          Developed by sudhin
        </a>
      </div>
    </>
  );
}
export default Mobilefront;
