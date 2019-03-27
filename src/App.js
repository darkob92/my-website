import React, { Component } from 'react';
import './sass/main.scss';
import SideBar from './components/SideBar/SideBar';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Navigation />
      </div>
    );
  }
}

export default App;
