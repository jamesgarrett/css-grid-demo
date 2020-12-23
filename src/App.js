import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from './components/Nav';
import Home from './components/Home';
import Hero from './components/Hero';
import Swimlane from './components/Swimlane';
import './css/App.scss';

export default function App() {
  return (
    <Router>
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
      </div>
    </Router>
  );
}

function Profile() {
  return <h2>Profile</h2>;
}
