import {createTheme} from "@mui/material/styles";

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
  },


});
