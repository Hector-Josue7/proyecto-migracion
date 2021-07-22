
import { NavLink} from 'react-router-dom';

export default function Navbar(){


    return (
        <nav>
<ul>

    <li>
        <NavLink exact to="/">Home</NavLink>
        {/* <Link  to="/" activeClassName ="active">Home</Link> */}
    </li>


    <li>
        <NavLink exact to="/about">About</NavLink>
    </li>

    
    <li>
        <NavLink exact to="/contact">Contact</NavLink>
    </li>


    <li>
        <NavLink exact to="/categories">Contact</NavLink>
    </li>


    <li>
        <NavLink exact to="/login">LoginPage</NavLink>
    </li>


    <li>
        <NavLink exact to="/register">Register</NavLink>
    </li>



    <li>
        <NavLink exact to="/dashboard">Dashboard</NavLink>
    </li>


    <li>
        <NavLink exact to="/payments">Payments</NavLink>
    </li>


</ul>
        </nav>
    )
}

/*
.active {
    background-color: crimson;
    color: white; 
}
*/