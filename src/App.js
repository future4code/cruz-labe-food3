import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";

const App = () => {
  return <ThemeProvider theme={theme}></ThemeProvider>;
};

export default App;
