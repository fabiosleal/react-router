import React from 'react';
import { Link } from 'react-router-dom';

import './homepage.styles.scss';

import TopicList from '../../components/topiclist/topiclist.component';

const HomePage = (props) => (
  <div className='page'>
    <h1>HOME PAGE</h1>
    <h6>TopicId: {props.match.params.topicId}</h6>
    <Link to='/hats'>HATS</Link>
    <button onClick={() => props.history.push('/hats')}>Hats</button>
    <TopicList props={props} />
  </div>
);

export default HomePage;
