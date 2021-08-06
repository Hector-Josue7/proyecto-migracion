import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import {Tablero} from '../pages/Tablero'

export const DashboardRoutes = () => {


    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/tablero" component={ Tablero } />
         
                </Switch>
            </div>


        </>
    )
}
