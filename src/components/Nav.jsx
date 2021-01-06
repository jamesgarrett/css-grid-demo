import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ForYou from '../img/icons/for-you.svg';
import Live from '../img/icons/live.svg';
import Search from '../img/icons/search.svg';
import WatchList from '../img/icons/watchlist.svg';
import AmcLogo from '../img/logos/amc.svg';
import HamBurger from '../img/icons/menu.svg';

function Navigation() {
  // Declare a new state variable, which we'll call "count"
  const [active, setActive] = useState(false);

  return (
    <section className="nav">
      <nav className={active ? 'nav__list toggled' : 'nav__list'}>
        <ul className="nav__top">
          <li className="nav__item p-xs p-a">
            <span className="nav__link p-r p-xs">
              <button type="button" onClick={() => setActive(!active)} className="m-r m-xs" href="#">
                <img src={HamBurger} alt="Menu" className="nav__icon" />
              </button>
              <img src={AmcLogo} alt="Logo" className="nav__text-label" />
            </span>
          </li>
        </ul>
        <ul className="nav__center">
          <li className="nav__item p-xs p-a">
            <NavLink to="/" className="nav__link" onClick={() => setActive(!active)}>
              <img src={ForYou} alt="For You Icon" className="nav__icon" />
              <span className="nav__text-label button-1 m-x m-xs"> For You</span>
            </NavLink>
          </li>
          <li className="nav__item p-xs p-a">
            <NavLink to="/explore" className="nav__link" onClick={() => setActive(!active)}>
              <img src={Search} alt="Search Icon" className="nav__icon" />
              <span className="nav__text-label button-1 m-x m-xs"> Explore</span>
            </NavLink>
          </li>
          <li className="nav__item p-xs p-a">
            <NavLink to="/live" className="nav__link" onClick={() => setActive(!active)}>
              <img src={Live} alt="Live Icon" className="nav__icon" />
              <span className="nav__text-label button-1 m-x m-xs"> Live</span>
            </NavLink>
          </li>
          <li className="nav__item p-xs p-a">
            <NavLink to="/watchlist" className="nav__link" onClick={() => setActive(!active)}>
              <img src={WatchList} alt="Watchlist Icon" className="nav__icon" />
              <span className="nav__text-label button-1 m-x m-xs"> Watchlist</span>
            </NavLink>
          </li>
        </ul>
        <ul className="nav__bottom">
          <li className="nav__item p-xs p-a">
            <NavLink to="/profile" className="nav__link" onClick={() => setActive(!active)}>
              <span className="nav__initial">G</span>
              <span className="nav__text-label button-1 m-x m-xs"> Profile</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navigation;
