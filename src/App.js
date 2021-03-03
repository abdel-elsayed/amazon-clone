import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import Payment from "./pages/payment/Payment";
import Checkout from "./components/checkout/Checkout";
import Login from "./pages/login/Login";
import { useStateValue } from "./context/StateProvider";
import { auth } from "./firebase/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IQj35EpaPiofSZ88GWK32KrQ4Pr85Yg29Apjd5mLLdS4coJUv4DrpAclSbqqQLBbhIRcmi2wZHaNASVOwUmyCMV00jvb30WKv"
);
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

          <Route exact path="/payment" component={Payment}>
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
