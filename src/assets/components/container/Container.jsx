import React, { useEffect, useState } from 'react';
import './Container.css'
import Blogs from '../Blogs/Blogs';

const Container = () => {

   const [blogs, setBlogs] = useState([])
   const [time,setTime] = useState(0)

   useEffect(() => {
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
   },[])

  const handleTime = minute => {
    const newTime = time +  minute;
    setTime(newTime)
  }

    return (
        <div className='container'>
            <div className="main-container">
               {
                blogs.map(blog => <Blogs
                key={blog.id}
                blog={blog}
                handleTime={handleTime}
                ></Blogs>)
               }
            </div>
            <div className="side-container">
              <h3>Spent time on read : {time}</h3>
            </div>
        </div>
    );
};

export default Container;