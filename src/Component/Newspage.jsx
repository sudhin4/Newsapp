import { useEffect, useState } from "react";
import "../Component/Newspage.css";
import defaultimage from '../Component/NoImage.jpg'

function Newspage({ img, content, title, url, publisheddate, author,category }) {

  const displayimage = img || defaultimage

  return (
    <>
      <div className="Newspage_component">
        <div className="content_of_the_newsdiv">
          <div className="image_section">
          <img src={displayimage} alt="Image" className="Image_sec_img" />
        </div>
        <div className="content_div">
          <div className="heading_div_news">
            <a href={url} className="link_in_heading_url"><h1 className="heading_">{title}</h1></a>
          </div>
          {/* <div className="description_div">
            <p className="description_div">{content}</p>
          </div> */}
          {/* <div className="link_div">
            <a href={url} className="url_link_to website">
              {url}
            </a>
          </div> */}
          <div className="date_author">
            <p className="date_for_thenews">{publisheddate}</p>
            <p className="author_para">{author}</p>
            {/* <p className="autor_para">{category}</p> */}
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
}
export default Newspage;
