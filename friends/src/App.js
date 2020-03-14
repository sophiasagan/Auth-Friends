import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core'
import {Container, Paper} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';

import './App.css';

//components
import Login from './components/Login'
import Public from './components/Public'
import FriendList from './components/FriendList'
import PrivateRoute from './components/PrivateRoute'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  
});


function App() {
  return (
    <MuiThemeProvider theme={theme}>
       <CssBaseline />
    {/* <Paper elevation={3} > */}
    <Router>
      
      <Container maxWidth='false'>

        <Switch>
          <PrivateRoute path="/FriendList" component={FriendList} />
          <Route exact path="/" component={Public} />
          <Route path="/login" component={Login} />
        </Switch>

      </Container>
    </Router>
    {/* </Paper> */}
    
    </MuiThemeProvider>
  );
}

export default App;