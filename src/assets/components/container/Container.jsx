import React, { useEffect, useState } from 'react';
import './Container.css'
import Blogs from '../Blogs/Blogs';
import BookMark from '../bookmark/BookMark';

const Container = () => {

   const [blogs, setBlogs] = useState([])
   const [time,setTime] = useState(0)
   const [bookMark, setBookmark] = useState([])
   const [count, setCount] = useState(0)
   

   useEffect(() => {
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
   },[])

  const handleTime = minute => {
    const newTime = time +  minute;
    setTime(newTime)
  }
  const handleBookMark = title => {
    const allBookmark = [...bookMark,title]
    const newCount = count + 1;
    
    setBookmark(allBookmark)
    setCount(newCount)
  }
  console.log(bookMark)
    return (
        <div className='container'>
            <div className="main-container">
               {
                blogs.map(blog => <Blogs
                key={blog.id}
                blog={blog}
                handleTime={handleTime}
                handleBookMark={handleBookMark}
                ></Blogs>)
               }
            </div>
            <div className="side-container">
              <h3>Spent time on read : {time}</h3>
              <div className='booMark'>
                <h2>Bookmarked Blogs : {count}</h2>
                {
                    bookMark.map(title => <BookMark
                    title={title}
                    ></BookMark>)
                }
              </div>
            </div>
        </div>
    );
};

export default Container;