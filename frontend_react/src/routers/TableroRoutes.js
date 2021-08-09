import React from 'react';
import Navigation from '../components/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import Tablero from '../pages/Tablero'

export const TableroRoutes = () => {


    return (
        <>
            <Navigation />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/tablero" component={ Tablero } />
         
                </Switch>
            </div>


        </>
    )
}
