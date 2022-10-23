import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#66cccc',
      main: '#2D9B9B',
      dark: '#006c6d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff6a74',
      main: '#d53449',
      dark: '#9e0022',
      contrastText: '#fff',
    },
  },
});
export default theme;
