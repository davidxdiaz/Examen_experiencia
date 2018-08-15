import React, { Component } from 'react';
import Form from './Form';
import Weather from './Weather';
import './skeleton.css';
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;




class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Form}/>
            <Route path="/Weather/:ciudad/:pais" component={Weather}/>

          </Switch>
        </Router>
        </div>
    );
  }
}

export default App;