import { BrowserRouter, Switch, Route, } from "react-router-dom";

import Header from "./Header/Header.js"
// Content pages
import Home from "./Home/Home.js"
import Map from "./Map/Map.js"

const routes = [
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
      <Header
          routes={routes}
      />

      <div className="content">
        {
          // Switches each page's app content
        }
        <Switch>
          {routes.map((route, i) => (
            <Routes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
