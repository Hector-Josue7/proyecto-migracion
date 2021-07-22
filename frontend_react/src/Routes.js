  


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login'
import Registro from './pages/registro';
import preferences  from './pages/Preferences';
import useToken from './modules/useToken'

export default function Routes() {
 const { token, setToken } = useToken();

   if(!token) {
      return <Login setToken={setToken} />
      }

     return (
 //<Route exact path ="/registro" component ={Registro} />


      <Registro />
    //  <BrowserRouter>
    //  <Switch>
    //      <Route exact path ="/registro" component ={Registro} />
    //      <Route exact path ="/preferences" component ={preferences} />
    
    //  </Switch>
       
    //  </BrowserRouter>
       );

    }









