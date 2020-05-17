import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';     
import SignUp from './components/signUp';
import Login from './components/login'
import HomePage from './components/home';
import {BrowserRouter as Router ,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Route exact path= "/" component={HomePage} />
        <Route  path="/signup" component={SignUp} />
        <Route  path="/login" component={Login} />
      </div>
      </Router>
    );
  }
}

export default App;
