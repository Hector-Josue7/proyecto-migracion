import axios from "axios";
import React, { useState } from "react";



function Registro2() {
   
    
    const [nombre_usuario, setUsername] = useState("");
  const [clave_usuario, setPassword] = useState("");


  


  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
       
          
        nombre_usuario,
        clave_usuario,
    
      };

       await axios.post("http://localhost:3006/auth/registro", registerData);
    
    
   
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Registrar desde adentro</h1>
      <form onSubmit={register}>
     


      
        <input
          type="text"
          placeholder="Usuario"
          onChange={(e) => setUsername(e.target.value)}
          value={nombre_usuario}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={clave_usuario}
        />
      
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Registro2;

// import axios from "axios";
// import React, { useState } from "react";

// function CustomerForm() {
//   const [customerName, setCustomerName] = useState("");

//   async function saveCustomer(e) {
//     e.preventDefault();

//     try {
//       const customerData = {
//         name: customerName,
//       };
//      await axios.post("http://localhost:5000/customer/", customerData);
    
      
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   return (
//     <div>
//       <form onSubmit={saveCustomer}>
//         <input
//           type="text"
//           placeholder="Customer name"
//           onChange={(e) => {
//             setCustomerName(e.target.value);
//           }}
//           value={customerName}
//         />
//         <button type="submit">Save new customer</button>
//       </form>
//     </div>
//   );
// }

// export default CustomerForm;