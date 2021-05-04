import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import AddAddressPage from "./pages/addAddressPage/AddAddressPage";
import OrderInProgress from "./components/orderInProgress/OrderInProgress";
import Restaurants from "./pages/restaurants/restaurants"
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
