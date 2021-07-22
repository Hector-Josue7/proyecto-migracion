
import { Route, Redirect } from 'react-router-dom'

const user = null;
 //const user = {codigo_usuario: 1, nombre_usuario: "hardon"}



export default function PrivateRoute({component: Component, ...rest}) {   // para que react detetecte que es un componente la inicial debe ser mayuscula 
// vamos a comprobar si este usuario existe y sino existe vamos a retornar una redireccion, pero si existe retornamos el componente 

    return (
      // <Route exact = {props.exact} path ={props.path} component= {props.component} />
       <Route {...rest}>
        {
          user ? <Component /> : <Redirect to ="/login" /> // en caso de que no exista retornamos un redirect
        }

        
      </Route>
    );
}