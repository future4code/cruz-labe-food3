import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import LoginPage from "./pages/loginPage/LoginPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoginPage />
    </ThemeProvider>
  );
};

export default App;
