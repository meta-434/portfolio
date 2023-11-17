import { createTheme } from '@mui/material/styles';

// Create a lightThemeOptions instance.
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fa7a2b',
    },
    secondary: {
      main: '#025B8C',
    },
    background: {
      default: '#000000',
    },
    text: {
      primary: '#ffffff',
      secondary: '#9D9D9DFF',
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#fa7a2b',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
  },
});
