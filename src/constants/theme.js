import { createMuiTheme } from "@material-ui/core/styles";
import { neutralColor, primaryColor } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
    },
    secondary: {},
    text: {
      primary: neutralColor,
      secondary: "blue",
    },
  },
});

export default theme;
