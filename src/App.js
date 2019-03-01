import React, { Component } from 'react';
import './App.css';

import Home from './home';
import About from './about';
import Contact from './contact';
import Error from './error';
import Navigation from './navigation'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        
        <div>
          <Navigation />

            <Switch>
              <Route path='/' component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
