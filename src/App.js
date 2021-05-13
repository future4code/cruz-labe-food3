import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import "./assets/css/fonts.css";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
      </GlobalState>
    </ThemeProvider>
  );
};

export default App;
