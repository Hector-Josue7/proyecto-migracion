import { useLocation, useHistory} from 'react-router-dom'

// useHistory nos permite navegar entre distintas rutas 
export default function CategoriesPage() {
const location = useLocation();
const history = useHistory();
//const query = new URLSearchParams("?skip=")
const query = new URLSearchParams(location.search)
const skip = parseInt(query.get("skip"))  || 0
const limit = parseInt(query.get("limit")) || 15


const handleNext = () => {
    console.log("Next")
    query.set("skip", skip + limit)
    query.set("limit", 200)
   // history.push({pathname: "/contact", search: "?sabor=chocolate&color=blanco"})  // este es para redireccionar
    history.push({search: query.toString()})  // este es para redireccionar
}
    return(
        <div>
         <h1>Categories Page</h1>
        <h2>Skip: {skip}</h2>
        <h2>Limit: {limit}</h2>


        <button onClick ={handleNext}>
      Next

        </button>
        </div>
    )
}