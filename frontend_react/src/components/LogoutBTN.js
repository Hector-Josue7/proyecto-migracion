import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function LogoutBTN() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
     await axios.get("http://localhost:3007/migracion/usuarios/logout");
  
    await getLoggedIn();
    history.push("/");
  }

  return <button className="btn btn-danger" onClick={logOut}>Cerrar sesion</button>;
}

export default LogoutBTN;