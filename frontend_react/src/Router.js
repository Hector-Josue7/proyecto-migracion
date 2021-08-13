  
import React , { useContext }  from "react";  
import { BrowserRouter , Switch, Route} from "react-router-dom";
import Login from "./pages/Login";

import Tablero from './pages/Tablero';
import Blog from './pages/Blog';

 import RestitucionInternacional from './pages/RestitucionInternacional';
//import solicitudRetorno from './pages/solicitudRetorno'
// import Sidebar3 from './pages/Sidebar3';





 import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);  // esto sirve para filtrar paginas publicas de paginas privadas que solo se vean si hay un usuario logueado
 
  return (
    <BrowserRouter>
     <Switch>
                
              {/* <Route exact path="/" component ={Login} />
              <Route exact path="/tablero" component ={Tablero} />  */}
             {/*  <Route exact path="/tablero2" component ={Tablero2} /> */}
             {/* <Route exact path="/blog" component ={Blog} /> */}

          
              {/* <Route exact path="/retorno" component ={solicitudRetorno} /> */}
              {/* <Route exact path="/sidebar3" component ={Sidebar3} /> */}

              {/* <Route exact path="/restitucion" component ={RestitucionInternacional} />
              <Route exact path="/retorno" component ={solicitudRetorno} /> */}

            
            
             


                {loggedIn === false && (
                  <>
                <Route exact path="/" component ={Login} />
                
                  </>
                )}
                {loggedIn === true && (
                  <>
                    
                    <Route exact path="/blog" component ={Blog} />
                    
                    <Route path="/tablero" component ={Tablero} />
                    <Route exact path="/restitucion" component ={RestitucionInternacional} />
                 
                  </>
                )}
             </Switch>
      </BrowserRouter>
  );
}

export default Router;