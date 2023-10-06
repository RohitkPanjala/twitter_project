import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function RegisterComponent() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [uemail, setUemail] = useState('');
    const [upass, setUpass] = useState('');
    const [uage, setUage] = useState('');

    const navigate = useNavigate();
  const onFnmChng = (e) => {
     setFname(e.target.value);
  }

  const onLnmChng = (e) => {
    setLname(e.target.value);

 }
 const onEmChng = (e) => {
    setUemail(e.target.value);

 }
 const onPChng = (e) => {
    setUpass(e.target.value);

 }
 const onAgeChng = (e) => {
    setUage(e.target.value);

 }

 const handleReg = async (e) =>{
e.preventDefault();

if (fname.trim()==='' || lname.trim()==='' || uemail.trim()==='' || upass.trim()==='' || uage.trim()==='')
   alert("Please fill all the fields");
   else{
      try {
         const response = await axios.post('http://localhost:3030/adduser', {
           ufname:fname,
           ulname:lname,
           uemail:uemail,
           upassword:upass,
           age:uage
         });
         console.log("User Registration Successfull!!" +fname+" "+lname+" "+uemail+" "+upass+" "+uage);
         // console.log("All fields filled: ");
         navigate('/home');
       } catch (error) {
         console.error(error);
       }
     
   }

 }
 

  return (
    <div>
   

    <div className='user-form'>
  
     <form onSubmit={handleReg}>
     <h2> Register Here</h2>  
  <section>
  <label>First Name:</label><input type='text' onChange={onFnmChng} placeholder='Enter First Name'/>
  </section>
  <section>
  <label>Last Name:</label><input type='text' onChange={onLnmChng} placeholder='Enter Last Name'/>
  </section>
  <section>
  <label>Email:</label><input type='email' onChange={onEmChng} placeholder='Enter Email'/>
  </section>
  <section>
  <label>Password:</label><input type='password' onChange={onPChng} placeholder='Enter Password'/>
  </section>
  <section>
  <label>Age:</label><input type='number' onChange={onAgeChng} placeholder='Enter Age'/>
  </section><br/>
  <section>
    <button type='submit'>Register</button>
</section>


     </form>

    </div>
        
    </div>
  )
}

export default RegisterComponent;