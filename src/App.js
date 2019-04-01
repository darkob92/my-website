import React, { Component } from 'react'
import './sass/main.scss'
import SideBar from './components/SideBar/SideBar'
import Navigation from './components/Navigation/Navigation'
import About from './components/MainSection/About'
import Work from './components/MainSection/Work'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Navigation />
        <Work />
      </div>
    );
  }
}

export default App;
