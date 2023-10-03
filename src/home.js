import React, {useEffect, useState} from 'react'
import axios from 'axios';
import LeftBarComponent from './leftbar';
import RightBarComponent from './rightbar';

function HomeComponent() {
  const [pdata, setPdata] = useState([]);

  
  useEffect(() => {
    async function fetchData(){
      try {
        const response = await axios.get('http://localhost:3030/allposts');
        const resultData = response.data;
        setPdata(resultData);
      } catch (error) {
        console.log("Error Fetching Data: "+error)
      }
      }
  }, [])
  

  
  return (
    <div>    
<div className='home-bar'>
  <div>
    
  </div>
<h3>HomeComponent</h3>
<h4>Posts</h4>
<div className="post-section">
  
  <section>
  <img src='' className='p-image'/>
  </section>
  <p></p>
  <section className='like-section'>like button</section>
  <section>
<p></p>
  </section>
</div>

</div>
<div className='left-bar'>
<LeftBarComponent/>
</div>
<div className='right-bar'>
<RightBarComponent/>
</div>
</div>        

  )
}

export default HomeComponent;