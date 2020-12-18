import React from 'react'
import ProgressBar from './progressBar.js'
import Details from './details.js'
import Controls from './controls.js'
import AmcLogo from '../img/logos/amc.svg'
import KeyArt  from  '../img/elements/killing-eve.jpg'

class Hero extends React.Component{
  render(){
    	return(
        <section className="hero p-a p-md img-shield bg-c" style={{ backgroundImage: `url(${KeyArt})` }}>
          <span className="logo"><img src={AmcLogo} alt='amc logo' /></span>
          <span className="title">
            <label className="flag label-primary-1">Continue Watching</label>
            <h1 className="display-primary-8 m-y m-xs">Killing Eve</h1>
            <ProgressBar/>
          </span>
          <span className="sidebar p-y p-xs">
            <span className="play button-1 button-primary button">play</span>
            <span className="save button-1 button-secondary button">info</span>
            </span>
          <span className="details hidden-sm">
            <Details/>
          </span>
          <span className="controls">
            <Controls/>
          </span>
        </section>
    	)
    }
  }

export default Hero
