import React, { useEffect, useState } from 'react';
import './Container.css'
import Blogs from '../Blogs/Blogs';

const Container = () => {

   const [blogs, setBlogs] = useState([])

   useEffect(() => {
    fetch('fakeData.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
   },[])

    return (
        <div className='container'>
            <div className="main-container">
               {
                blogs.map(blog => <Blogs
                key={blog.id}
                blog={blog}
                ></Blogs>)
               }
            </div>
            <div className="side-container">
              <h2>side</h2>
            </div>
        </div>
    );
};

export default Container;