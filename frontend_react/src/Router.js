  
import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./components/auth/Register";
import Tablero from "./components/tablero/Tablero";
//import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
     
      <Switch>
        
      <Route exact path="/" component ={Login} />
     
     

        {loggedIn === false && (
          <>
         <Route path="/registro" component= {Register} />
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