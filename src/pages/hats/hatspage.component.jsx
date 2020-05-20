import React from 'react';
import { Link } from 'react-router-dom';

import './hatspage.styles.scss';

import TopicList from '../../components/topiclist/topiclist.component';

const HatsPage = (props) => (
  <div className='page'>
    <h1>HATS PAGE</h1>
    <h6>TopicId: {props.match.params.topicId}</h6>
    <Link to='/'>HOME PAGE</Link>
    <button onClick={() => props.history.push('/')}>Home Page</button>
    <TopicList props={props} />
  </div>
);

export default HatsPage;
