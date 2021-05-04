import { createMuiTheme } from "@material-ui/core/styles";
import { neutralColor, primaryColor } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "white",
    },
    text: {
      primary: neutralColor,
      secondary: "#D0D0D0",
    },
  },
});

export default theme;
