import {  createContext, useState } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {  // revisar el video en el que se explica lo del context 
  
   const [nombre_usuario, setUser] = useState(null); // en la primera carga de la aplicacion el usuario no va a estar logueado  

 const contextValue = {
   
   nombre_usuario,
      login() {
               // setUser( {codigo_usuario:1, nombre_usuario: "iBarahona" })
               setUser(null)
            },
      logout(){
            setUser(null);
        },
        isLogged(){ // comprobar si el usuario esta autenticado
           return !!nombre_usuario;
        } 
}
    
  return(
  <AuthContext.Provider value ={contextValue} >
    {children}  
</AuthContext.Provider>);

    
   

}
export default AuthProvider;




 // login() {
    //  setUser( {codigo_usuario:1, nombre_usuario: "iBarahona" }) // se llena el estado con el contenido del usuario 
    // }, 