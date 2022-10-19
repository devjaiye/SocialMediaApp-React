import React, { useEffect, useState } from 'react'
import Share from '../share/Share'
import "./Feed.css"
import axios from "axios"
import Post from "../post/Post"

const Feed = ({username}) => {
  const [posts, setPosts] = useState([])
  
  
  //..ferch all post 
  useEffect(() => {
    const fetchPosts = async() => {
      const res = username 
     ? await axios.get("/posts/profile/"+ username)
     : await axios.get("/posts/timeline/634229b751cfcfc758504b91")
      setPosts(res.data)
    }
    fetchPosts()
  },[username]) //..the empty array mean the useEffect will be rendered once
  
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map((p) =>(
          <Post key={p._id} post={p}/>
        ))}

      </div>
    </div>
  )
}

export default Feed