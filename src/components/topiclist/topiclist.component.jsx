import React from 'react';
import { Link } from 'react-router-dom';

const TopicList = ({ props }) => {
  console.log(props);
  return (
    <div>
      <h4>Topic List</h4>
      <Link to={`${props.match.url}/1`}>To topic 01</Link>
      <Link to={`${props.match.url}/2`}>To topic 02</Link>
      <Link to={`${props.match.url}/3`}>To topic 03</Link>
    </div>
  );
};

export default TopicList;
