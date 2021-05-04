import React from "react";
import { ThemeProvider } from "@material-ui/core";
import theme from "./constants/theme";
import LoginPage from "./pages/loginPage/LoginPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import AddAddressPage from "./pages/addAddressPage/AddAddressPage";
import OrderInProgress from "./components/orderInProgress/OrderInProgress";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <OrderInProgress />
    </ThemeProvider>
  );
};

export default App;
