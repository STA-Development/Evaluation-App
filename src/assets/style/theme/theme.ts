import {createTheme} from '@mui/material/styles'
import {color} from '../globalVariables'

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif', '-apple-system'].join(','),
  },
  palette: {
    primary: {
      main: color.blueColor,
      contrastText: color.whiteColor,
      dark: color.blueColor,
    },
  },
})

export default theme
