import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from './Nav';
import Home from './Home';
import Hero from './Hero';
import Swimlane from './Swimlane';

const AppRouter = () => {
  <div>
    <Navigation />
    <div className="App">
      <Hero />
      <Swimlane />
    </div>

    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  </div>;
};

function Profile() {
  return <h2>Profile</h2>;
}

export default AppRouter;
