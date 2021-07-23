import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


// el authprovider nos sirve para dotar a la aplicacion de un proveedor
export default function useAuth() {


return useContext(AuthContext);

}