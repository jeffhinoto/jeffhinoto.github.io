import React from 'react';
import './App.css';
import Inputs from './components/inputs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';






function App() {
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
        <Inputs />
      </ThemeProvider>
    </div>
  );
}

export default App;
