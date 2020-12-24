import React from 'react';
import {
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import Navigation from './components/Nav';
import Home from './components/Home';
import Explore from './components/Explore';
import Live from './components/Live';
import Watchlist from './components/Watchlist';
import Profile from './components/Profile';
import './css/App.scss';

const App = () => (
  <Router>
    <Navigation />
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/explore" component={Explore} />
      <Route path="/live" component={Live} />
      <Route path="/watchlist" component={Watchlist} />
      <Route path="/profile" component={Profile} />
    </div>
  </Router>
);

export default App;
