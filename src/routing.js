import React from 'react'
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import LoginComponent from './login';
import HomeComponent from './home';
import PostComponent from './post';
import RegisterComponent from './register';

function RouteComponent() {
  return (
<div>
<BrowserRouter>
<Routes>
<Route path='/' Component={LoginComponent}/>
<Route path='/home' Component={HomeComponent}/>
<Route path='/post' Component={PostComponent}/>
<Route path='/register' Component={RegisterComponent}/>
</Routes>
</BrowserRouter>


</div>
  )
}

export default RouteComponent;