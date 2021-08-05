  
import React from "react"; // , { useContext } 
import { BrowserRouter , Switch, Route} from "react-router-dom";
import Login from "./pages/Login";
import Registro from './pages/Registro';
import Tablero from './pages/Tablero';
import Blog from './pages/Blog';
//import './assets/css/Router.css'

// import AuthContext from "./context/AuthContext";

function Router() {
  //const { loggedIn } = useContext(AuthContext);  // esto sirve para filtrar paginas publicas de paginas privadas que solo se vean si hay un usuario logueado
 
  return (
    <BrowserRouter>
     <Switch>
                
              <Route exact path="/" component ={Login} />
              <Route exact path="/tablero" component ={Tablero} />
              <Route exact path="/registro" component ={Registro} />
              <Route exact path="/blog" component ={Blog} />
              <Route exact path="/restitucion" component ={Blog} />

                {/* {loggedIn === false && (
                  <>
                <Route exact path="/" component ={Login} />
                <Route path="/registro" component= {Registro} />
                  </>
                )}
                {loggedIn === true && (
                  <>
                    <Route path="/tablero" component ={Tablero} />
                    <Route exact path="/blog" component ={Blog} />
                  </>
                )} */}

                 
              </Switch>
     
      
 
    </BrowserRouter>
  );
}

export default Router;