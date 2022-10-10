import React from 'react'
import "./Post.css"
import {MoreVert} from "@mui/icons-material"

const Post = () => {
  return (
    <div className="post">
        <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                <span className="postUsername">Lorem Ipsumm</span>
                <span className="postDate">10 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">Hello! My first post here...</span>
            <img src="assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="assets/like.png" alt="" className="likeIcon" />
                <img src="assets/heart.png" alt="" className="likeIcon" />
                <span className="postLikeCounter">567 people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">20 comments</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Post