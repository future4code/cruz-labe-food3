import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import "./assets/css/fonts.css";
import Router from "./routes/Router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
