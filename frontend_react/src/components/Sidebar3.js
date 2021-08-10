import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Tablero from '../pages/Tablero';
 


// Cada "ruta" lógica tiene dos componentes, uno para
// la barra lateral y otra para el área principal. Queremos
// renderizar ambos en diferentes lugares cuando el
// la ruta coincide con la URL actual.

// Vamos a usar esta configuración de ruta en 2
// puntos: una vez para la barra lateral y una vez en la principal
// sección de contenido. Todas las rutas son iguales
// orden en que aparecerían en un <Switch>.
const routes = [
  {
    path: "/tablero",
    exact: true,
    sidebar: () => <div>Tablero</div>,
    main: () => <Tablero />
  },
  {
    path: "/registro",
    sidebar: () => <div>bubblegum!</div>,
    main: () => <h2>Bubblegum</h2>
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

export default function SidebarExample() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "25%",
            background: "#33CAFF"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bubblegum">Bubblegum</Link>
            </li>
            <li>
              <Link to="/shoelaces">Shoelaces</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
           // Puedes renderizar una <Ruta> en tantos lugares
               // como quieras en tu aplicación. Se renderizará a lo largo
               // con cualquier otra <Route> s que también coincida con la URL.
               // Entonces, una barra lateral o migas de pan o cualquier otra cosa
               // que requiere que renderices varias cosas
               // en varios lugares en la misma URL no hay nada
               // más de varias <Route> s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "100px" }}>
          <Switch>
            {routes.map((route, index) => (
           // Renderiza más <Route> s con las mismas rutas que
               // arriba, pero esta vez con componentes diferentes.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}