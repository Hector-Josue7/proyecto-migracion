
// este archivo se conecta con la carpeta routers y es el archivo que se envia al archivo index.js
import React, { useReducer, useEffect } from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './assets/auth/AuthContext'
import { authReducer } from './assets/auth/authReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}


const MigracionApp = () => {
    
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

export default MigracionApp



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
