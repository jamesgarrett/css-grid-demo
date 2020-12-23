import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from './Profile';
import Home from '../img/icons/home.svg';
import Live from '../img/icons/live.svg';
import Search from '../img/icons/search.svg';
import WatchList from '../img/icons/watchlist.svg';

const Navigation = () => (
  <ul className="nav hidden-sm">
    <span className="nav-top">
      <li className="nav-item">AMC</li>
    </span>
    <span className="nav-center">
      <li className="nav-item">
        <NavLink to="/">
          <img src={Home} alt="Home Icon" />
          <span className="nav-text-label button-1 m-x m-xs"> For You</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/explore">
          <img src={Search} alt="Search Icon" />
          <span className="nav-text-label button-1 m-x m-xs"> Explore</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/live">
          <img src={Live} alt="Live Icon" />
          <span className="nav-text-label button-1 m-x m-xs"> Live</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <img src={WatchList} alt="Watchlist Icon" />
        <span className="nav-text-label button-1 m-x m-xs"> Watchlist</span>
      </li>
    </span>
    <span className="nav-bottom">
      <li className="nav-item">
        <NavLink to="/profile">
          <span className="initial">G</span>
          <span className="nav-text-label button-1 m-x m-xs"> Profile</span>
        </NavLink>
      </li>
    </span>
  </ul>
);

export default Navigation;
