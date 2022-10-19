import React from 'react'
import "./Rightbar.css"
import {Users} from "../../dummyData"
import Online from '../online/Online'

const Rightbar = ({profile}) => {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const HomeRightbar = () => {
    return(
      <>
       <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
           <b> Moon Ipsum </b> and <b> 3 other friends </b>have a birthday today. 
          </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">

          {Users.map((u) => (
            <Online key={u.id} user={u}/>
          ))}
          
        </ul>
      </>
    )
  }


  const ProfileRightbar = () => {
    return (
      <>
      <h4 className="rightbarTitle">About Me</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Lagos</span>
        </div>
        
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Nigeria</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>

      {/* friend list */}
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">

      <div className="rightbarFollowing">
          <img src={`${PF}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Lorem Ipsum</span>
        </div>

        <div className="rightbarFollowing">
          <img src={`${PF}person/8.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Lorem Ipsum</span>
        </div>

        <div className="rightbarFollowing">
          <img src={`${PF}person/9.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Lorem Ipsum</span>
        </div>

        <div className="rightbarFollowing">
          <img src={`${PF}person/10.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Lorem Ipsum</span>
        </div>

        <div className="rightbarFollowing">
          <img src={`${PF}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Lorem Ipsum</span>
        </div>

        <div className="rightbarFollowing">
          <img src={`${PF}person/7.jpeg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Lorem Ipsum</span>
        </div>

      </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {/* check if profile or home page */}
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar