import React, { useContext } from 'react'

import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { AuthContext } from "../assets/auth/AuthContext";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import  Login2   from "../pages/Login2";
// import { LoginScreen } from '../components/login/LoginScreen';
import { TableroRoutes } from './TableroRoutes';


export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch> 
                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ Login2 } 
                        isAuthenticated={ user.logged }
                    />
                    
                    <PrivateRoute 
                        path="/" 
                        component={ TableroRoutes } 
                        isAuthenticated={ user.logged }
                    />
                </Switch>
            </div>
        </Router>
    )
}