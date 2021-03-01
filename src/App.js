import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import Checkout from "./components/checkout/Checkout";
import Login from "./pages/login/Login";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase/firebase";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/checkout" component={Checkout}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
