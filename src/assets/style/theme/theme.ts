import {createTheme} from "@mui/material/styles";
import {color} from "../globalVariables";

export const theme = createTheme({


  typography: {
    fontFamily: [
      'Montserrat',
      "sans-serif",
      '-apple-system',
    ].join(','),

  },

  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#00A3FF",

          "&:hover": {
            backgroundColor: "#40BAFF",
          },
          "&:active": {
            backgroundColor: "#008FDF",
          },
        },
        text: {
          color: "#00A3FF",
          minWidth: 0,
          padding: 0,
          textTransform: "capitalize",
          "&:hover": {
            color: "#40BAFF",
          },
          "&:active": {
            color: "#008FDF",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          width: '250px'
        },
        paper: {
          width: "250px",
          padding: '72px 0 26px 0',
          backgroundColor: color.text,
          borderRadius: "0px 50px 50px 0px",
          boxSizing: "border-box",
          justifyContent: "space-between",
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        focusVisible: {
          backgroundColor: 'yellow'
        }
      }
    }
  },


});
