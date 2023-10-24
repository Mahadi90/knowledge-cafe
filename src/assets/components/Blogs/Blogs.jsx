import React from "react";
import "./Blogs.css";

const Blogs = ({ blog, handleTime }) => {
  // console.log(blog)
  const { publish_date, reading_duration, thumbnail, title, author } = blog;
  const { name, picture } = author;

  return (
    <div className="blog">
      <img src={thumbnail} alt="" />
      <div className="author">
        <div className="pic-date">
          <img src={picture} alt="" />
          <div className="date">
            <h4>{name}</h4>
            <p>{publish_date}</p>
          </div>
        </div>

        <div className="duration"><p>{reading_duration} Minutes</p></div>
      </div>
      <h2>{title}</h2>
      <p className="gray">#begginers <span>#Programming</span></p>
       <button onClick={() => handleTime(reading_duration)} className="read-btn">Mark on read</button>
    </div>
  );
};

export default Blogs;
