import {BrowserRouter, Route, Switch} from 'react-router-dom';
import TopPage from './TopPage';
import Login from './Login';
import React, {Component} from 'react';

class ThxRouter extends Component {
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

export default ThxRouter;