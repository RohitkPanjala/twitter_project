import React from 'react'
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import LoginComponent from './login';
import HomeComponent from './home';
import PostComponent from './post';

function RouteComponent() {
  return (
<div>
<BrowserRouter>
<Routes>
<Route path='/' Component={LoginComponent}/>
<Route path='/home' Component={HomeComponent}/>
<Route path='/post' Component={PostComponent}/>
</Routes>
</BrowserRouter>


</div>
  )
}

export default RouteComponent;