import {  createContext, useEffect, useState } from 'react';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {  // revisar el video en el que se explica lo del context 
  
   const [nombre_usuario, setUser] = useState( // en la primera carga de la aplicacion el usuario no va a estar logueado  

    JSON.parse(localStorage.getItem("nombre_usuario"))  || null // mediante JSON.parse se convierte de String a Objeto si no existe le vamos a decir que sea nulo 
   ); 

    useEffect(  () =>{   // cada vez que se actualice el estado de un usuario se almacenen los datos en el localstorage
    
    try {
      localStorage.setItem("nombre_usuario", JSON.stringify(nombre_usuario))     // esta funcion se va a ejecutar cada vez que el estado nombre_usuario cambie 
    } 
    catch(error) {
       localStorage.removeItem("nombre_usuario");
       console.log(error);
    }
      
    }, [nombre_usuario]);

 const contextValue = {
   
   nombre_usuario,
      login() {
               // setUser( {codigo_usuario:1, nombre_usuario: "iBarahona" })   // se llena el estado con el contenido del usuario 
            //   setUser(null)
           // setUser({})
           
            },
      logout(){
            setUser(null);
        },
        isLogged(){ // comprobar si el usuario esta autenticado
           return !!nombre_usuario;
        } 
}
    
  return(
  <AuthContext.Provider value ={contextValue}>
    {children}  
</AuthContext.Provider>);

    
   

};
export default AuthProvider;



