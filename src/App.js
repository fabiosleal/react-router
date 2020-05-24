import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import TopicList from './components/topiclist/topiclist.component';
import TopicDetail from './components/topicdetail/topicdetail.component';

import './App.scss';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/blog' component={TopicList} />
      <Route path='/blog/:topicId' component={TopicDetail} />
      <Route exact path='/news' component={TopicList} />
      <Route path='/news/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
