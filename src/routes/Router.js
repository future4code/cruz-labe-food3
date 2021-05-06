import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddAddressPage from "../pages/addAddressPage/AddAddressPage.js";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/loginPage/LoginPage";
import MyCartPage from "../pages/MyCartPage/MyCartPage.js";
import SignUpPage from "../pages/signUpPage/SignUpPage";
import ProfilePage from "../pages/profilePage/ProfilePage";
import SearchPage from "../pages/searchPage/SearchPage.js";
import EditAddressPage from "../pages/EditAdressPage/EditAddressPage.js";

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

        <Route exact path={"/cart"}>
          <MyCartPage />
        </Route>

        <Route exact path={"/profile"}>
          <ProfilePage />
        </Route>

        <Route exact path={"/search"}>
          <SearchPage />
        </Route>

        <Route exact path={"/editAddress"}>
          <EditAddressPage />
        </Route>
        <Route>
          <div>Página não encontrada</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
