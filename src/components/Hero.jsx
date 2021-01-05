import React from 'react';
import ProgressBar from './ProgressBar';
import Details from './Details';
import Controls from './Controls';
import AmcLogo from '../img/logos/amc.svg';
import KeyArt from '../img/elements/killing-eve.jpg';

const Hero = () => (
  <section className="hero p-a p-md img-shield bg-c" style={{ backgroundImage: `url(${KeyArt})` }}>
    <span className="logo d-n"><img src={AmcLogo} alt="amc logo" /></span>
    <span className="title">
      <span className="flag label-primary-1">Continue Watching</span>
      <h1 className="display-primary-8 m-y m-xs">Killing Eve</h1>
      <ProgressBar />
    </span>
    <span className="sidebar p-y p-xs">
      <span className="button-1 button-primary button-round button m-r m-xs">play</span>
      <span className="button-1 button-secondary button-round button">info</span>
    </span>
    <span className="details hidden-sm">
      <Details />
    </span>
    <span className="controls">
      <Controls />
    </span>
  </section>
);

export default Hero;
