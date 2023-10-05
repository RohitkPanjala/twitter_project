import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginComponent() {
    const nav = useNavigate();
    const nav2 = useNavigate();
    const [uemail, setUemail] = useState('');
    const [upass, setUpass] = useState('');

    const setEval= (e) =>{
        setUemail(e.target.value);
    }

    const setPwd = (e) => {
        setUpass(e.target.value);
    }
const handleLogin = () =>{
   if (!uemail || !upass){
    alert("Enter email and Password");
   }
   else if (uemail === "user@mymail.com" && upass === "password"){
    nav('/home');
   }
   else{
    alert("Please check your Credentials")
   }

}

const regNav = () =>{
  nav2('/register');
}

  return (
    <div>
      <div className='main-comp'>

        <h2>Welcome to Twitter</h2>
        <h3>Login with you Credentials</h3>
<div>
<form>
    <section>
         <label>email</label>
         <input type='text' onChange={setEval} placeholder='Enter Email'/>
    </section>
    <section>
         <label>password</label>
         <input type='password' onChange={setPwd} placeholder='Enter Password'/>
    </section>
    <button onClick={handleLogin}>Login</button>
</form>
<label>Not a member yet?</label><a href='/register'>Register</a>
</div>
        </div>
        </div>
  )
}

export default LoginComponent;