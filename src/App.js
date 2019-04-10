import React, { Component } from 'react';
import Home from './views/Home/Home';
import Signup from './views/Signup/Signup'
import Login from './views/Login/Login'
import FeedPage from './views/Feed/Feed';
import ErrorPage from './views/Error/ErrorPage'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/feed" component={FeedPage} />
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
