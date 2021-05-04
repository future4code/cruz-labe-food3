import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddAddressPage from "../pages/addAddressPage/AddAddressPage.js";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <HomePage />
          </Route>
  
          <Route exact path={"/login"}>
            <LoginPage />
          </Route>
  
          <Route exact path={"/signup"}>
            <SignUpPage />
          </Route>
  
          <Route exact path={"/addAddress"}>
            <AddAddressPage />
          </Route>

          <Route>
            <div>Página não encontrada</div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;