import React from "react";
import { Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Timer from "./pages/Timer";
import "./App.css";

import { createBrowserHistory } from "history";
import ReactGA from "react-ga";
import IfOffline from "./components/ifOffline";

//Crea el plugin de historia
const history = createBrowserHistory();
//Inicializar el tracking de Google Analytics
ReactGA.initialize("UA-000000-01");
//Registrando la presente pantalla
ReactGA.pageview(window.location.pathname + window.location.search);
//Activa la escucha cada vez que se cambia de página
history.listen(function(location) {
  ReactGA.pageview(window.location.pathname + window.location.search);
});

export default class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <header>
            <Link to="/">
              Recetas<IfOffline>Estas OFFLINE!!</IfOffline>
            </Link>
            <Link to="/timer" className="timerLink">
              ⌚
            </Link>
          </header>

          <main>
            <Route exact path="/" component={Home} />
            <Route path="/recipe/:recipeId" component={Recipe} />
            <Route path="/timer" component={Timer} />
          </main>
        </div>
      </Router>
    );
  }
}
