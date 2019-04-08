import React, { Component } from 'react';
import Home from './views/Home/Home';
import Signup from './views/Signup/Signup'
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" component={Home} />
          <Route path="/signup" component={Signup} open="false" />
        </Router>
      </div>
    );
  }
}

export default App;
