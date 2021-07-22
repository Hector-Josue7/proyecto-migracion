import {BrowserRouter as Router,Redirect,  Route, Switch} from 'react-router-dom'
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import NotFound from '../pages/Notfound';
import Navbar from '../components/Navbar';
import ProfilePage from '../pages/ProfilePage';
import CategoriesPage from '../pages/CategoriesPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import DashboardPage from '../pages/DashboardPage';
import PaymentsPage from '../pages/PaymentsPage';
import PrivateRoute from './PrivateRoute';


export default function AppRouter()  {

    return (
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/" component={HomePage}/>

          <Route exact path="/profile/:username" component={ProfilePage}/>
          <Route exact path="/categories" component={CategoriesPage}/>

      <Route exact path = "/signin">
          <Redirect  to= "/login"/>
      </Route>

          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/register" component={RegisterPage}/>
          <PrivateRoute exact path="/dashboard" component={DashboardPage}/>
          <Route exact path="/payments" component={PaymentsPage}/>
          <Route path="*" component={NotFound}/>

        </Switch>
      </Router>
    );
}