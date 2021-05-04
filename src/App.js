import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import LoginPage from "./pages/loginPage/LoginPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignUpPage />
    </ThemeProvider>
  );
};

export default App;
