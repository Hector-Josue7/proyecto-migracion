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

/*
import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchScreen } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>


        </>
    )
}


*/
