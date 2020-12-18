import React, {Component} from 'react';
import Navigation from './components/nav';
import Hero from './components/hero';
import Swimlane from './components/swimlane';
import Swimlane2 from './components/swimlane-2';
import Swimlane3 from './components/swimlane-3';
import './css/App.scss';


class App extends Component {
  render(){
    return(
    <>
      <Navigation/>
      <div className="App">
        <Hero/>
        <Swimlane/>
        <Swimlane2/>
        <Swimlane3/>
      </div>
    </>
    );
  }
}

export default App;
