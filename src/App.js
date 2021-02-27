import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Products from "./components/Products";
import Login from "./components/Login";
import Basket from "./components/Basket";
import Profile from "./components/Profile";
import ResetPassword from './components/ResetPassword'

import Register from './components/Register'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FetchContextProvider } from "./components/contexts/FetchContext";
import { AuthProvider } from "./components/contexts/AuthContext";
import ChangePassword from "./components/ChangePassword";


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
          <Route path="/reset-password" component={ResetPassword} /> 
          <Route path="/profile" component={Profile} /> 
          <Route path="/basket" component={Basket} />
         
          
        </Switch>
      </Router>
    </FetchContextProvider>
    </AuthProvider>
    
  );
}

export default App;
