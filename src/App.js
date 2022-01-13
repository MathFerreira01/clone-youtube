import React from "react";
import { createTheme, ThemeProvider,} from "@mui/material/styles";
import  {red}  from '@mui/material/colors';

import Home from './Home'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: '#f44336',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;