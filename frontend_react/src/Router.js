  
import React  from "react";  // , { useContext } 
import { BrowserRouter , Switch, Route} from "react-router-dom";
import Login from "./pages/Login";
import Registro from './pages/Registro';
import Tablero from './pages/Tablero';
import Blog from './pages/Blog';
<<<<<<< Updated upstream
// import RestitucionInternacional from './pages/RestitucionInternacional';
import solicitudRetorno from './pages/solicitudRetorno'
// import Sidebar3 from './pages/Sidebar3';
=======
<<<<<<< HEAD
//import RestitucionInternacional from './pages/RestitucionInternacional';
//import solicitudRetorno from './pages/solicitudRetorno'
=======
// import RestitucionInternacional from './pages/RestitucionInternacional';
import solicitudRetorno from './pages/solicitudRetorno'
// import Sidebar3 from './pages/Sidebar3';
>>>>>>> 80397375fb0c32fbe70e6e0b81dd7692d85bf00d
>>>>>>> Stashed changes

//import './assets/css/Router.css'

 //import AuthContext from "./context/AuthContext";

function Router() {
  //const { loggedIn } = useContext(AuthContext);  // esto sirve para filtrar paginas publicas de paginas privadas que solo se vean si hay un usuario logueado
 
  return (
    <BrowserRouter>
     <Switch>
                
              <Route exact path="/" component ={Login} />
              <Route exact path="/tablero" component ={Tablero} /> */}
             {/*  <Route exact path="/tablero2" component ={Tablero2} /> */}
             <Route exact path="/registro" component ={Registro} />
              <Route exact path="/blog" component ={Blog} />
<<<<<<< Updated upstream
              {/* <Route exact path="/restitucion" component ={RestitucionInternacional} /> */}
              <Route exact path="/retorno" component ={solicitudRetorno} />
              {/* <Route exact path="/sidebar3" component ={Sidebar3} /> */}
=======
<<<<<<< HEAD
              {/* <Route exact path="/restitucion" component ={RestitucionInternacional} />
              <Route exact path="/retorno" component ={solicitudRetorno} /> */}
=======
              {/* <Route exact path="/restitucion" component ={RestitucionInternacional} /> */}
              <Route exact path="/retorno" component ={solicitudRetorno} />
              {/* <Route exact path="/sidebar3" component ={Sidebar3} /> */}
>>>>>>> 80397375fb0c32fbe70e6e0b81dd7692d85bf00d
>>>>>>> Stashed changes
                {/* {loggedIn === false && (
                  <>
                <Route exact path="/login" component ={Login} />
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