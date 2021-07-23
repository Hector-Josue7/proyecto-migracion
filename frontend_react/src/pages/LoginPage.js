

import { useHistory, useLocation} from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function LoginPage() {
   const history = useHistory();
    const location = useLocation();    // para obtener la url anterior
    const previousObjectURL = location.state?.from;
    console.log(previousObjectURL);
  
     const auth = useAuth();
    const handleLogin = () =>{
        auth.login();
     //  history.push("/dashboard") // vamos a utilizar una funcion que nos permita navegar a otra pagina
    // history.push({pathname: "/dashboard"})
    history.push(previousObjectURL || "/dashboard")
    }

    return (
        <div>
            <h1>LoginPage</h1>
                <button onClick={handleLogin}>
                      Signin
                </button>      
        </div>
    )
}