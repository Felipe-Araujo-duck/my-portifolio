import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#0b1320',
      light: '#182235',
      dark: '#050b12',
      contrastText: '#f7f3ea',
    },
    secondary: {
      main: '#f0b35e',
      light: '#ffd7a0',
      dark: '#c98a2e',
      contrastText: '#0b1320',
    },
    info: {
      main: '#67d8d0',
    },
    background: {
      default: '#081019',
      paper: '#111a27',
    },
    text: {
      primary: '#f7f3ea',
      secondary: '#a6b0bf',
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
    h1: {
      fontFamily: 'Space Grotesk, Inter, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily: 'Space Grotesk, Inter, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily: 'Space Grotesk, Inter, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: 'Space Grotesk, Inter, sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Space Grotesk, Inter, sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'Space Grotesk, Inter, sans-serif',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          backgroundColor: '#081019',
          backgroundImage:
            'radial-gradient(circle at top left, rgba(103, 216, 208, 0.12), transparent 28%), radial-gradient(circle at 80% 12%, rgba(240, 179, 94, 0.14), transparent 22%), linear-gradient(180deg, #081019 0%, #0b1320 100%)',
          color: '#f7f3ea',
        },
        '*::selection': {
          backgroundColor: 'rgba(240, 179, 94, 0.35)',
        },
        a: {
          color: 'inherit',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(8, 16, 25, 0.72)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(166, 176, 191, 0.15)',
          boxShadow: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(17, 26, 39, 0.9)',
          backdropFilter: 'blur(14px)',
          border: '1px solid rgba(166, 176, 191, 0.14)',
          boxShadow: '0 24px 80px rgba(0, 0, 0, 0.24)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 600,
        },
        outlined: {
          borderColor: 'rgba(166, 176, 191, 0.24)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;