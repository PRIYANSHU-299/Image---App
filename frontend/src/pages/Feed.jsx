import React, { useEffect, useState } from 'react'
import axios from "axios"

const Feed = () => {

    const [posts, setposts] = useState([{
        _id: "1",
        image: "https://plus.unsplash.com/premium_photo-1668024966086-bd66ba04262f?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: " Scenery ",

    }
])

useEffect(() => {
  
axios.get("http://localhost:3000/posts")
.then((res)=>{
    setposts(res.data.posts)
})
  
}, [])

    return (
        <section className='feed-section'>
{
    posts.length > 0 ? (
        posts.map(  ( post ) => (
            <div key={post._id} className='post-card'>
                <img src={post.image} alt={post.captions} />
                <p>{post.caption}</p>
            </div>
        ))
    ) : (
        <h1> No Post Available </h1>
    )

}


        </section>
    )
}

export default Feed
