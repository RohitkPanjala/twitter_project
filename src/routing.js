import React from 'react'
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import LoginComponent from './login';
import HomeComponent from './home';
import PostComponent from './post';
import RegisterComponent from './register';
import NewPostComponent from './newpost';

function RouteComponent() {
  return (
<div>
<BrowserRouter>
<Routes>
<Route path='/' Component={LoginComponent}/>
<Route path='/home' Component={HomeComponent}/>
<Route path='/post' Component={PostComponent}/>
<Route path='/register' Component={RegisterComponent}/>
<Route path='/newpost' Component={NewPostComponent}/>
</Routes>
</BrowserRouter>


</div>
  )
}

export default RouteComponent;