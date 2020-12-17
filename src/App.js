import React, {Component} from 'react';
import Navigation from './components/nav';
import Hero from './components/hero';
import Swimlane from './components/swimlane';
import './css/App.scss';


class App extends Component {
  render(){
    return(
    <>
      <Navigation/>
      <div className="App">
        <Hero/>
        <Swimlane/>
      </div>
    </>
    );
  }
}

export default App;
