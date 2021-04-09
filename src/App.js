import "./App.css";
import Home from "./components/home/Home";
import { Route, Switch } from "react-router";
import Login from "./components/login/login";
import React from "react";
import Scheduller from "./components/smsScheduller/Scheduller";

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
          <Route path="/scheduller" exact>
            <Scheduller />
          </Route>
        </React.StrictMode>
      </Switch>
    </div>
  );
}

export default App;
