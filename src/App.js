import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import AddAddressPage from "./pages/addAddressPage/AddAddressPage";
import Restaurants from "./pages/restaurants/restaurants"
import "./assets/css/fonts.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
  
    </ThemeProvider>
  );
};

export default App;
