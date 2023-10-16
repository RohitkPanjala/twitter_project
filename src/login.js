import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginComponent() {
    const nav = useNavigate();
    // const nav2 = useNavigate();
    const [uemail, setUemail] = useState('');
    const [upass, setUpass] = useState('');

    const setEval= (e) =>{
        setUemail(e.target.value);
    }

    const setPwd = (e) => {
        setUpass(e.target.value);
    }

    const handleLogin = async(e) =>{
      e.preventDefault();
      try{
          await axios.post("http://localhost:3030/userloggedin",{
          uemail, upass
         })
           .then(res=>{
              if (res.data=="exist"){
              nav('/home');
              console.log("Its a success!!");
         }
             else if(res.data=="not exist"){
              alert("You're not registred user. Please register too continue!!")
         }
    }).catch(e=>{
      alert("wrong details");
      console.log(e);
    })
    
      }
       catch(error){
           alert(error,"Unauthorized Login");
    
       }
    
    }


// const handleLogin = async(e) =>{
//   e.preventDefault();
//   try{
//       await axios.post("http://localhost:3030/userloggedin",{
//       uemail, upass
//      })
//        .then(res=>{
//          if (!uemail || !upass){
//           alert("Enter email and Password");
//      }
//          else if (res.data=="exist"){
//           nav('/home');
//           console.log("Its a success!!");
//      }
//          else if(res.data=="not exist"){
//           alert("You're not registred user. Please register too continue!!")
//      }
//     //      else{
//     //       alert("Please check your Credentials")
//     // }
// })

//   }
//    catch(error){
//        alert(error,"Unauthorized Login");

//    }

// }

// const regNav = () =>{
//   nav2('/register');
// }

  return (
    <div>
      <div className='main-comp'>

        <h2>Welcome to Twitter</h2>
        <h3>Login with you Credentials</h3>
<div>
<form onSubmit={handleLogin}>
    <section>
         <label>email</label>
         <input type='text' onChange={setEval} placeholder='Enter Email'/>
    </section>
    <section>
         <label>password</label>
         <input type='password' onChange={setPwd} placeholder='Enter Password'/>
    </section>
    <button type='submit'>Login</button>
</form>
<label>Not a member yet?</label><a href='/register'>Register</a>
</div>
        </div>
        </div>
  )
}

export default LoginComponent;