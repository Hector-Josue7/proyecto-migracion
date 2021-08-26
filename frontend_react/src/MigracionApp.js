import React, { useReducer, useEffect } from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}


export const MigracionApp = () => {
    
    const [ user, dispatch ] = useReducer(authReducer, {}, init);
// el dispath dispara acciones para actualizar nuestro estado 

    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify(user) );
    }, [user])

    return (

        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>

    )
}

/*


import React, { useReducer, useEffect } from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}


export const HeroesApp = () => {
    
    const [ user, dispatch ] = useReducer(authReducer, {}, init);

    useEffect(() => {
        localStorage.setItem( 'user', JSON.stringify(user) );
    }, [user])

    return (

        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>

    )
}
*/



/*


const []
*/