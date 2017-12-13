import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import PostContainer from '../containers/PostContainer';
import PostDetailContainer from '../containers/PostDetailContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={PostContainer} />
            <Route exact path='/:category' component={PostContainer} />
            <Route exact path='/:category/:id' component={PostDetailContainer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default withRouter(App);
