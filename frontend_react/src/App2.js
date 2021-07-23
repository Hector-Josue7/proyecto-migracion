import { Router } from '@reach/router';
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import NotFound from './pages/Notfound';

export default function App2(){

    return(

        <div>
           <Router>
              <Login path="api/Login" />
              <Dashboard path ="api/dashboard"/>
              <NotFound default/>
           </Router>

        </div>
    );

    
}