import React from 'react';
import { NavLink } from 'react-router-dom';
import ForYou from '../img/icons/for-you.svg';
import Live from '../img/icons/live.svg';
import Search from '../img/icons/search.svg';
import WatchList from '../img/icons/watchlist.svg';
import AmcLogo from '../img/logos/amc.svg';

const Navigation = () => (
  <ul className="nav p-x p-md">
    <span className="nav-top">
      <li className=""><img src={AmcLogo} alt="Amc Logo" /></li>
    </span>
    <span className="nav-center">
      <li className="nav-item">
        <NavLink to="/" exact="true">
          <img src={ForYou} alt="For You Icon" className="nav-icon" />
          <span className="nav-text-label button-1 m-x m-xs hidden-sm hidden-md"> For You</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/explore">
          <img src={Search} alt="Search Icon" className="nav-icon" />
          <span className="nav-text-label button-1 m-x m-xs hidden-sm hidden-md"> Explore</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/live">
          <img src={Live} alt="Live Icon" className="nav-icon" />
          <span className="nav-text-label button-1 m-x m-xs hidden-sm hidden-md"> Live</span>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/watchlist">
          <img src={WatchList} alt="Watchlist Icon" className="nav-icon" />
          <span className="nav-text-label button-1 m-x m-xs hidden-sm hidden-md"> Watchlist</span>
        </NavLink>
      </li>
    </span>
    <span className="nav-bottom">
      <li className="nav-item">
        <NavLink to="/profile">
          <span className="initial">G</span>
          <span className="nav-text-label button-1 m-x m-xs hidden-sm hidden-md"> Profile</span>
        </NavLink>
      </li>
    </span>
  </ul>
);

export default Navigation;
