import { NavLink, Switch, Route, Redirect, useRouteMatch, Link} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CategoriesPage from '../pages/CategoriesPage'


export default function CategoriesRouter(){

const {url}  = useRouteMatch();  // esta url nos va a permitir construir las rutas de acuerdo a la url anterior que llamo a este router 
console.log(url);  

    return(
    
    
      <div>
    
         <ul>
         <li>    
             {/* /categories */}
             <NavLink exact to= {`${url}`}> Todas </NavLink> 
    
             {/*  <NavLink to="/categories" activeClassName ="active"> Todas </NavLink> */}
    
           </li>
           <li>
               {/* /categories/terror */}
             <NavLink to={`${url}/terror`}> Terror </NavLink>
    
           </li>
           <li>
               {/* /categories/action */}
             <NavLink to={`${url}/action`} > Action  </NavLink>
             
           </li>
           <li>
               {/* /categories/anime */}
             <NavLink to= {`${url}/anime`}> Anime   </NavLink>
             
           </li>
         </ul>
    
    
    
    
     {/* este switch va a albergar todas las rutas que necesitemos agrupar en este caso serian todas las relacionadas con categorias */}
     
      <Switch> 
      <Route exact path="/categories" component={CategoriesPage}/>
     
     {/*<PrivateRoute exact path ="/categories/terror" component = { () => <h1> Categoria de terror</h1>} />        Ejemplo de router anidado */}
          
     <PrivateRoute  path ="/categories/terror" component = { TerrorRouter} /> 
     <Route exact path ="/categories/action"> {/*Ejemplo de router anidado */}
           <h1>Category Accion</h1>
     </Route>
     <Route exact path ="/categories/anime"> {/*Ejemplo de router anidado */}
           <h1>Category Anime </h1>
     </Route>
    
    
     
     <Route path="*" >
                    <Redirect to ="/404" />
              </Route>
     
       </Switch>
    
    </div>
    );
    
    
    
      
     }


     function TerrorRouter(){
          


        const { url }  = useRouteMatch();

        console.log(url);
        return (


<div>

    <ul>
          <li>
              <Link exact path="/categories/terror">  Todos </Link>
          </li>

          <li>
              <Link exact path="/categories/terror/gore"> Gore </Link>
          </li>

          <li>
              <Link exact path="/categories/terror/suspense"> Suspense </Link>
          </li>
    </ul>




    <Switch>
                  <Route exact path ={ `${url}`}>
                     <h3>Todo terror </h3>
                  </Route>

                  <Route path ={`${url}/gore`}>
                     <h3>Gore</h3>
                  </Route>

                  <Route path ={`${url}/suspense`}>
                     <h3>Suspenso</h3>
                  </Route>

                  <Route path="*" >
                    <Redirect to ="/404" />
              </Route>
            </Switch>
</div>


            
        )
     }