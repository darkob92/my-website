import React, { Component } from 'react'
import './sass/main.scss'
import SideBar from './components/SideBar/SideBar'
import Navigation from './components/Navigation/Navigation'
import About from './components/MainSection/About'
import Journey from './components/MainSection/Journey'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <Navigation />
        <Journey />
      </div>
    );
  }
}

export default App;
