import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PostContainer from '../containers/PostContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={PostContainer} />
          <Route exact path='/:category' component={PostContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
