  
import React from "react"; // , { useContext } 
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Registro from './pages/Registro';
import Tablero from './pages/Tablero';
import Blog from './pages/Blog';

//import AuthContext from "./context/AuthContext";

function Router() {
 // const { loggedIn } = useContext(AuthContext);  // esto sirve para filtrar paginas publicas de paginas privadas que solo se vean si hay un usuario logueado

  return (
    <BrowserRouter>
     
      <Switch>
        
      <Route exact path="/" component ={Login} />
      <Route exact path="/tablero" component ={Tablero} />
      <Route exact path="/registro" component ={Registro} />
      <Route exact path="/blog" component ={Blog} />
     

        {/* {loggedIn === false && (
          <>
         <Route path="/registro" component= {Registro} />
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/tablero" component ={Tablero} />
          </>
        )} */}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;