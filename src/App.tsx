import React from 'react';
import {ThemeProvider} from 'styled-components';
import Home from './pages/Home';
import theme from './utils/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
