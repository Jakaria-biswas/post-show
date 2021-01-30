import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
       const [posts, setPosts] = useState([]);
       useEffect(()=>{

             fetch('https://jsonplaceholder.typicode.com/posts')
             .then(response => response.json())
             .then(data => setPosts(data))
       }

       ,[])
    return (
        <div> 
             <ul>
                   {
                         posts.map(post => <Post post={post}></Post>)
                   }
            </ul>       
        </div>
    );
};

export default Home;