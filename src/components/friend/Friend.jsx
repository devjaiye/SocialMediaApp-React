import React from 'react'
import "./Friend.css"

const Friend = ({user}) => {
  return (
    <li className="sidebarFriend">
        <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
    </li>
    )
}

export default Friend