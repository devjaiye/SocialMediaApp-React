import React from 'react'
import {Link} from 'react-router-dom'

import "./Topbar.css"
import {Search, Person, Chat, Notifications} from '@mui/icons-material'

const Topbar = () => {
  return (
    <div className='topbarContainer'>
        {/* left */}
    <div className="topbarLeft">
      <Link to="/" style={{textDecoration: "none"}}> 
      <span className="logo">Dev Social</span>
      </Link>
    </div>
    <div className="topbarCenter">
      <div className="searchbar">
        <Search className='searchIcon'/>
        <input type="text" placeholder='search for friends, posts or video' className="searchInput" />
      </div>
    </div>
        {/* right */}
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          
          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconBadge">1</span>
            </div>
           
            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconBadge">2</span>
            </div>

            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconBadge">5</span>
            </div>
          </div>
          {/* profile pics */}
          <img src="/assets/person/4.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}

export default Topbar