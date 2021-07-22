import {  createContext, useState } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {  // revisar el video en el que se explica lo del context 
  
   const [nombre_usuario, setUser] = useState(null); // en la primera carga de la aplicacion el usuario no va a estar logueado  

 const contextValue = {
   
   nombre_usuario,
      login() {
                setUser( {codigo_usuario:1, nombre_usuario: "iBarahona" })
            },
      logout(){
            setUser(null);
        }
}
    
  return <AuthContext.provider value ={contextValue} >
               {children}  
         </AuthContext.provider>
}
export default AuthProvider;




 // login() {
    //  setUser( {codigo_usuario:1, nombre_usuario: "iBarahona" }) // se llena el estado con el contenido del usuario 
    // }, 