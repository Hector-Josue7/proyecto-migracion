  
import React , { useContext }  from "react";  
import { BrowserRouter , Switch, Route} from "react-router-dom";
import Login from "./pages/Login";
import Tablero from './pages/Tablero';
import Tablero2 from './pages/Tablero2';
import RestitucionInternacional from './pages/RestitucionInternacional/RestitucionInternacional'
import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);  // esto sirve para filtrar paginas publicas de paginas privadas que solo se vean si hay un usuario logueado
 
  return (
    <BrowserRouter>
     <Switch>
          {loggedIn === false && ( // aqui van las rutas publicas las cuales son accesibles si el usuario no esta logueado
           <>
                <Route exact path="/" component ={Login} />
           </>   
           )}

           {loggedIn === true && (  // aqui van las rutas privadas que son accesibles si el usuario esta logueado
            <>
                  <Route path="/tablero" component ={Tablero} />
                  <Route path="/tablero2" component ={Tablero2} />
                  <Route exact path="/restitucion" component ={RestitucionInternacional} />
            </>
            )}
       </Switch>
      </BrowserRouter>
  );
}

export default Router;