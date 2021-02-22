import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Products from "./components/Products";
import Login from "./components/Login";
import Basket from "./components/Basket";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FetchContextProvider } from "./components/contexts/FetchContext";

function App() {
  return (
    <FetchContextProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/login" component={Login} />
          <Route path="/basket" component={Basket} />
        </Switch>
      </Router>
    </FetchContextProvider>
  );
}

export default App;
