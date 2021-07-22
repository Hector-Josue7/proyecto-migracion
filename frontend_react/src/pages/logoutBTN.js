import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../modules/AuthContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
     await axios.get("http://localhost:3006/auth/logout");
  
    await getLoggedIn();
    history.push("/");
  }

  return <button onClick={logOut}>Log out</button>;
}

export default LogOutBtn;