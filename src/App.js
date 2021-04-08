import "./App.css";
import Home from "./components/home/Home";
import { Route, Switch } from "react-router";
import Login from "./components/login/login";
import React from "react";

function App() {
  return (
    <div className="App">
      <Switch>
        <React.StrictMode>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/homes" exact>
            <Home />
          </Route>
        </React.StrictMode>
      </Switch>
    </div>
  );
}

export default App;
