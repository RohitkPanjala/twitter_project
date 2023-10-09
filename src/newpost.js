import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RightBarComponent from './rightbar';
import LeftBarComponent from './leftbar';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
function NewPostComponent() {
  const [data, setData] = useState([]);

  
  useEffect(() => {
    async function fetchData(){
      try {
        const response = await axios.get('http://localhost:3030/allposts');
        const resultData = response.data;
        setData(resultData);
        console.log("This is the data", data);
      } catch (error) {
        console.log("Error Fetching Data: "+error)
      }
      }
      fetchData();
  }, []);
  return (
    <div>
      <div className='home-bar'>
        <div className='post-page'>
        <h1>NewPostComponent</h1>
        <div className="post-section"> 
        <div className='post-card'> 
      
      <CCard style={{ width: '18rem' }}>
     {
data.map((item)=>{
return  <><CCardImage orientation="top" src={item.pimage} className='p-image'/><CCardBody>
  {/* <CCardTitle>Card title</CCardTitle> */}
  <CCardText className='post-content'>{item.upost}</CCardText>
  <CButton href="#">Delete Post</CButton>
</CCardBody></>


})
     }
     


</CCard>
</div>
</div>
</div>
        
        <div className='left-bar'>
        <LeftBarComponent/>
</div>
<div className='right-bar'>
<RightBarComponent/>
</div>

    </div>
    </div>
  )
}

export default NewPostComponent;