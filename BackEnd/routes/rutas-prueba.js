const  router  = require('express').Router();

// conexion a la base de datos
const { Pool } = require('pg');
const { credenciales } = require('../config')
const pool = new Pool(credenciales)
pool.connect()
// INGRESAR AQUI LAS RUTAS A TESTEAR


module.exports = router


/*
  select p.genero, p.ininacionalidad, p.fechanacimiento, 
         pn.gidpersona, pn.nombre, pn.segnombre, pn.apellido, pn.segapellido, 
         pex.gidexpediente , pex.encalidad, pex.expnna, pex.gidpersona, 
         ex.numero_expediente, ex.tiposinstrumentos, ex.fechacreacion, ex.numanterior, ex.numanterioranio, ex.sfecha, ex.fehavulneracion,
         epv.fechacreacion, epv.tipovulneracion, 
         tpv.tipologia, 
         u.unidad, u.gidcentros, 
         c.nombre, 
         s.gidtipocustodio, s.fechainicio, s.referencias, s.sfecha, s.tipogestion, s.tipo, tc.tipocustodio, 
         tc.descripcion, tc.sfecha
FROM public.persona p 
inner join personanombres pn on (p.id = pn.id)
inner join personasexpediente pex on (p.id=pex.gidpersona) 
inner join expediente ex ON (pex.gidexpediente= ex.numero_expediente)
inner join expedientevulneracion epv on (epv.numero_instrumento = ex.numero_expediente )
inner join tipovulneracionhijo tpv ON (epv.tipovulneracion=tpv.id)
inner join unidades u ON ( ex.unidadapertura = u.gidunidades )
inner join centros c ON ( u.gidcentros = c.gidcentros )
inner join seguimiento s ON (ex.id = s.id)
inner join tipocustodio tc ON (s.gidtipocustodio = tc.gidtipocustodio)
where pex.expnna = 'nna' and ex.numero_expediente = 'Exp-DINAF-2019-4475'
Exp-DINAF-2019-1110
  
  */







// import { useEffect, useState } from 'react';
// import Todo from './componets/Todo';
// import Todos from './componets/Todos';
// function App() {
//     const [todos, settodos] = useState("");

//     useEffect(async () => {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
//         const data = await response.json();
//         settodos(data);
//     }, [])

//     return (
//         <div className="App">
//             <h1>Hola mundo </h1>
//             <h2>Prueba de consulta de servicio <

// import React from 'react'

// const Todos = ({ todos }) => {
//     return (
//         <div>

//             {
//                 todos ?
//                     todos.map(item =>
//                         <div key={item.id}>
//                             <p>{item.userId}</p>
//                             <p>{item.title}</p>
//                         </div>
//                     )
//                     : <h5>Cargando</h5>
//             }
//         </div>
//     )
// }
// export default Todos;

// import React from 'react'

// const Todo = ({ todo }) => {
//     return (
//         <div>
//             <h4>{todo.userId}</h4>
//             <p>{todo.title}</p>
//         </div>
//     )
// }
// export default Todo;
