import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from '../src/Components/BestBooks';
import Profile from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react'
import LoginButton from './Components/LoginButton.js'
import LogoutButton  from './Components/LogoutButton.js'
import Welcome from './Components/Welcome.js'

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <LogoutButton/> : <LoginButton/>}
              {this.props.auth0.isAuthenticated ? <BestBooks /> : <Welcome/>}
            </Route>
            <Route exact path="/about">
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default withAuth0(App);
