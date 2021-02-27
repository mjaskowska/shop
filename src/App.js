import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Products from "./components/Products";
import Login from "./components/Login";
import Basket from "./components/Basket";
import Profile from "./components/Profile";
// import Product from './components/Product';
import Register from './components/Register'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FetchContextProvider } from "./components/contexts/FetchContext";
import { AuthProvider } from "./components/contexts/AuthContext";
import ChangePassword from "./components/ChangePassword";
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <AuthProvider>
<FetchContextProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} /> 
          <Route path="/change-password" component={ChangePassword} /> 
          <Route path="/profile" component={Profile} /> 
          <Route path="/basket" component={Basket} />
          {/* <Route path='/products/:id' component={Product} /> */}
          
        </Switch>
      </Router>
    </FetchContextProvider>
    </AuthProvider>
    
  );
}

export default App;
