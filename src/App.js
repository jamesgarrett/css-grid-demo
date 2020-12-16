import React, {Component} from 'react';
import Navigation from './components/nav';
import Hero from './components/hero';
import Swimlane from './components/swimlane';
import { Router } from 'react-router-dom';
import './css/App.scss';


class App extends Component {
  render(){
    return(
    <div className="App">
      <Navigation/>
      <Hero/>
      <Swimlane/>
    </div>
    );
  }
}

export default App;
