import React from 'react';
import './App.css';
function RightBarComponent() {
  return (
    <div>
      {/* <h3>RightBarComponent</h3> */}
     <div className='right-nav'>
      <input type="text" placeholder="Search" className="search-sec"/>
      <div className="news-sec">
      Whats Happening!
    </div>
     </div>
   
    </div>
  )
}

export default RightBarComponent;