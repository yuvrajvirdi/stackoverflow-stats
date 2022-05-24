import React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import './App.css';
import Page from './components/Page';

const pageTheme = createTheme({
  palette: {
    primary: {
      main: '#f48023',
    },
    secondary: {
      main: '#f4bc94',
    },
    info: {
      main: '#121212',
      light: '#fcfbfb',
    },
  },
});

const useStyles = makeStyles(() => ({
  root: {},
}));

function App(): JSX.Element {
  const classes = useStyles();
  return (
    <ThemeProvider theme={pageTheme}>
      <div className={classes.root}>
        <Page />
      </div>
    </ThemeProvider>
  );
};

export default App;