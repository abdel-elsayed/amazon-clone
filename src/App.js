import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout" component={Checkout}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
