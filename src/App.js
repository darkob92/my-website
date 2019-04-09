import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './sass/main.scss';
import SideBar from './components/SideBar/SideBar';
import Navigation from './components/Navigation/Navigation';
import Start from './components/MainSection/Start';
import Contact from './components/MainSection/Contact';
import About from './components/MainSection/About';
import Journey from './components/MainSection/Journey';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SideBar />
          <Navigation />
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/journey" component={Journey} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;
