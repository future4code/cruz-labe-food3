import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import LoginPage from "./pages/loginPage/LoginPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import AddAddressPage from "./pages/addAddressPage/AddAddressPage";
import ProfilePage from "./pages/profilePage/ProfilePage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ProfilePage />
    </ThemeProvider>
  );
};

export default App;
