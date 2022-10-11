    import React from 'react'
    import Topbar from "../../components/topbar/Topbar"
    import Sidebar from "../../components/sidebar/Sidebar"
    import Feed from "../../components/feed/Feed"
    import Rightbar from "../../components/rightbar/Rightbar"
    import "./Profile.css"

    const Profile = () => {
    return (
        <>
        <Topbar/>
    <div className="profileContainer">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                    <img src="assets/post/4.jpeg" alt="" className="profileCoverImg" />
                    <img src="assets/person/6.jpeg" alt="" className="profileUserImg" />
                </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Becki Dolor</h4>
                <span className="profileInfoDesc">Hello world! Let's go...</span>
            </div>
            </div>
            <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
            </div>
        </div>
    </div>
    </> 
    )
    }

    export default Profile