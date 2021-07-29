  
import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Registro from './pages/Registro';
import Tablero from './pages/Tablero';

import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);  // esto sirve para filtrar paginas publicas de paginas privadas que solo se vean si hay un usuario logueado

  return (
    <BrowserRouter>
     
      <Switch>
        
      <Route exact path="/" component ={Login} />
     
     

        {loggedIn === false && (
          <>
         <Route path="/registro" component= {Registro} />
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/tablero" component ={Tablero} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;