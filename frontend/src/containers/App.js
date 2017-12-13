import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PostContainer from '../containers/PostContainer';
import PostDetailContainer from '../containers/PostDetailContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={PostContainer} />
          <Route exact path='/:category' component={PostContainer} />
          <Route exact path='/:category/:id' component={PostDetailContainer} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
