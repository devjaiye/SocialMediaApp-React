import React from 'react'
import "./Sidebar.css"
import {RssFeed} from "@mui/icons-material"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">

          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
         
          <li className="sidebarFriend">
            <img src="/assets/person/1.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/1.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/1.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/1.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/1.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/1.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/1.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/1.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>

          <li className="sidebarFriend">
            <img src="/assets/person/1.jpeg" alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">John Doe</span>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar