
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch,  } from 'react-router-dom';
//import { Router }
import Login from './pages/Login'

import './css/routes.css'
//import Registro from './pages/registro';
import Preferences  from './pages/Preferences';
import Dashboard from './pages/Dashboard'
import useToken from './modules/useToken'

export default function Routes() {
 const { token, setToken } = useToken();

   if(!token) {
      return <Login setToken={setToken} />
      }

     return (
 //<Route exact path ="/registro" component ={Registro} />

<div>


<h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>

</div>
    
   
       );

    }









