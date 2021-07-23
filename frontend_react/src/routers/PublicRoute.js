import { Route, Redirect } from "react-router-dom";
import useAuth from "../auth/useAuth";

//const user = null;
//const user = {codigo_usuario: 1, nombre_usuario: "hardon"}

export default function PublicRoute({ component: Component, ...rest }) {
  // para que react detetecte que es un componente la inicial debe ser mayuscula
  // vamos a comprobar si este usuario existe y sino existe vamos a retornar una redireccion, pero si existe retornamos el componente

  const auth = useAuth();

  return (

    <Route {...rest}>
      {!auth.isLogged() ? (  // ahora nosotros vamos a querer mostrar el componente solamente si el usuario no esta autenticado para las rutas publicas
        <Component />
      ) : (
        <Redirect to= "/dashboard" />
      )}
    </Route>
  );
}
