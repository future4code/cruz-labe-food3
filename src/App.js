import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import AddAddressPage from "./pages/addAddressPage/AddAddressPage";
import OrderInProgress from "./components/orderInProgress/OrderInProgress";
import Restaurant from "./pages/restaurant/restaurant";
import "./assets/css/fonts.css";
import Router from "./routes/Router";
import GlobalState from "./global/GlobalState";
import SignUpPage from "./pages/signUpPage/SignUpPage";

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
