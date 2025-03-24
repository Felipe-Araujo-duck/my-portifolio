import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#0043ffdb',
    },
  },
  typography: {
    fontFamily: 'system-ui'
  }
});

theme = responsiveFontSizes(theme);

export default theme;