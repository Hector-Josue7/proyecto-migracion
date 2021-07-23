import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

//const user = null;
//const user = {codigo_usuario: 1, nombre_usuario: "hardon"}

export default function PrivateRoute({ component: Component, ...rest }) {
  // para que react detetecte que es un componente la inicial debe ser mayuscula
  // vamos a comprobar si este usuario existe y sino existe vamos a retornar una redireccion, pero si existe retornamos el componente

  const auth = useAuth();
  const location = useLocation(); // necesitamos almacenar la ruta anterior
  return (
    // <Route exact = {props.exact} path ={props.path} component= {props.component} />
    // podemos decir que compruebe si existe un usuario autenticado entonces retorna al componente y si no existe redirige al login
    //  user ? <Component /> : <Redirect to ="/login" /> // en caso de que no exista retornamos un redirect
    <Route {...rest}>
      {auth.isLogged() ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location} }} />
      )}
    </Route>
  );
}
