import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const yooxTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "white"
    }
  },
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "rgba(255,255,255,0.75)"
      }
    }
  }
});

export { yooxTheme };
