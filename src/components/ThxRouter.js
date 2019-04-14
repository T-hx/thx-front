import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TopPage from './TopPage';
import Login from './Login';
import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route exact path="/timeline" component={TopPage}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;