import {BrowserRouter as Router, Redirect,  Route, Switch} from 'react-router-dom'
import Navbar from '../components/Navbar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/Notfound';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import PaymentsPage from '../pages/PaymentsPage';

import CategoriesRouter from './CategoriesRouter';


export default function AppRouter()  {

    return (
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/" component={HomePage}/>

          <Route exact path="/profile/:username" component={ProfilePage}/>
         


              {/* Esta ruta no puede ser exacta por que si la coloco exacta va a entrar solo a categories y no para las demas  */}
      <Route path ="/categories" component ={CategoriesRouter} />

      <Route exact path = "/signin">
          <Redirect  to= "/login"/>
      </Route>

          <PublicRoute exact path="/login" component={LoginPage}/>
          <PublicRoute exact path="/register" component={RegisterPage}/>
          <PrivateRoute exact path="/dashboard" component={DashboardPage}/>
          <PrivateRoute exact path="/payments" component={PaymentsPage}/>
         
         <Route path ="404" component = {NotFound} />

          <Route path="*">
                <Redirect to ="/404" />
          </Route>

        </Switch>
      </Router>
    );
}


