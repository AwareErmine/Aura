import { BrowserRouter, Switch, Route, } from "react-router-dom";

import Header from "./Header/Header.js"
// Content pages
import Home from "./Home/Home.js"
import Map from "./Map/Map.js"

// THIS PAGE'S CSS
import "./App.css"

const routes = [ // Handles all the routes
  {
    path: "/map",
    component: Map
  },
  {
    path: "/",
    component: Home
  },
]

// https://reactrouter.com/web/example/url-params
function Routes(route) {
  return (
    <Route
      path={route.path}
      render={props => ( // Would keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header
            routes={routes}
        />

        <div>
          {
            // Switches each page's app content
          }
          <Switch>
            {routes.map((route, i) => (
              <Routes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
