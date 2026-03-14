import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import App from './App.jsx';
import './index.css';

function ThemeAwareApp() {
  const { mode } = useTheme();
  const muiTheme = createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#00d4aa' : '#0891b2',
        light: mode === 'dark' ? '#33ddb8' : '#22d3ee',
        dark: mode === 'dark' ? '#00b894' : '#0e7490',
      },
      background: {
        default: mode === 'dark' ? '#0a0a0f' : '#f8fafc',
        paper: mode === 'dark' ? '#12121a' : '#ffffff',
      },
      text: {
        primary: mode === 'dark' ? '#ffffff' : '#0f172a',
        secondary: mode === 'dark' ? '#b0b0b0' : '#475569',
        disabled: mode === 'dark' ? '#707070' : '#64748b',
      },
    },
    typography: {
      fontFamily: '"DM Sans", sans-serif',
      h1: { fontFamily: '"Syne", sans-serif', fontWeight: 700 },
      h2: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
      h3: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
      h4: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
      h5: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
      h6: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
    },
  });
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ThemeAwareApp />
    </ThemeProvider>
  </StrictMode>
);
