import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';
import LeftBarComponent from './leftbar';
import RightBarComponent from './rightbar';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function HomeComponent() {
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

<h3>HomeComponent</h3>

<section>
  
    {

data.map((item)=>{
  return  <><CCardImage orientation="top" src={item.pimage} className='p-image'/><CCardBody>
    {/* <CCardTitle>Card title</CCardTitle> */}
    <CCardText className='post-content'>{item.upost}</CCardText>
    <CButton href="#">Delete Post</CButton>
  </CCardBody></>
      
      // data.map((item)=>{
      // return  <section key={item.id}>
      //  <img src={item.pimage} className='p-image'/>
      //  <p className='post-content'>{item.upost}</p>
      //  </section>
      })
    }
  
  </section>

<div className="post-section"> 

  
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