import React from "react";
import './Home_page.css';
import "bootstrap/dist/css/bootstrap.min.css";

function NewsArticle({ data }) {
  return (
    <div className="row back6">
      <h1 className="head_news col-9">{data.title}</h1>
      {/* <p className="news__desc">{data.description}</p> */}
      {/* <span className="news__author">{data.author}</span> <br /> */}
      {/* <span className="news__published">{data.publishedAt}</span> */}
      {/* <span className="news__source">{data.source.name}</span> */}
      <div className='col-3 '>
          {/* <div></div> */}
                 <img className="new_imgp" src={data.urlToImage}></img>

                 </div>

      {/* <span className="news__image">{data.urlToImage}</span> */}
    </div>
  );
}

export default NewsArticle;
