import { createTheme } from "@mui/material/styles";
import { borderRedius, color, padding } from "../globalVariables";

export const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif", "-apple-system"].join(","),
  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: color.blue,

          "&:hover": {
            backgroundColor: color.lightBlue,
          },
          "&:active": {
            backgroundColor: color.darkBlue,
          },
        },
        text: {
          color: color.blue,
          minWidth: 0,
          padding: 0,
          textTransform: "capitalize",
          "&:hover": {
            color: color.lightBlue,
          },
          "&:active": {
            color: color.darkBlue,
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          width: "250px",
        },
        paper: {
          width: "250px",
          padding: `
          ${padding.paddingTop72}
           ${padding.paddingRight0}
           ${padding.paddingBottom26}
           ${padding.paddingLeft0}
           `,
          backgroundColor: color.text,
          borderRadius: `${borderRedius.top0} ${borderRedius.right50} ${borderRedius.bottom50} ${borderRedius.left0}`,
          boxSizing: "border-box",
          justifyContent: "space-between",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        selected: {
          backgroundColor: "yellow",
        },
      },
    },
  },
});
