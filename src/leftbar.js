import React from 'react'
import { useNavigate } from 'react-router-dom';
function LeftBarComponent() {
  const nav = useNavigate();

  const postCont = () =>{
    nav('/post');
  }
  return (
    <div> 
       <div className="sidenav">
          <a href="#home">logo</a>
          <a href="#home">Home</a>
          <a href="#explore">Explore</a>
          <a href="#notifications">Notifications</a>
          <a href="#messages">Messages</a>
          <a href="#lists">Lists</a>
          <a href="#communities">Communities</a>
          <a href="#verified">Verified</a>
          <a href="#profile">Profile</a>
          <a href="#more">More</a>   
          <button className="lnav-btn" onClick={postCont}>Post</button>
      </div>         
    </div>
  )
}

export default LeftBarComponent;