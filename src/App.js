import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage/Welcome/Welcome';
import LearnerLogin from './components/Learner/Login/Login';
import LearnerRegister from './components/Learner/Register/Register';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/login" component={LearnerLogin} />
          <Route exact path="/register" component={LearnerRegister} />
        </Switch>
      </Router>
    );
  }
}

export default App;