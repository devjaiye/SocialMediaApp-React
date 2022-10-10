import React from 'react'
import Share from '../share/Share'
import Post from '../post/Post'

import "./Feed.css"
import Rightbar from '../rightbar/Rightbar'
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Rightbar/>

      </div>
    </div>
  )
}

export default Feed