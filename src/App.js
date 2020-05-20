import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hats/hatspage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
        <Route path='/hats/:topicId' component={HatsPage} />
        <Route path='/:topicId' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
