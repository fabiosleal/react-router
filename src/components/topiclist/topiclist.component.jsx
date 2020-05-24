import React from 'react';
import { Link } from 'react-router-dom';

const TopicList = (props) => {
  console.log(props);
  let topicRootPath = props.match.path.match(/[^/]+/i);
  return (
    <div className='page'>
      <Link to='/'>Home Page</Link>
      <h1>{`${topicRootPath} List Page`}</h1>
      <Link to={`${props.match.url}/topic1`}>{`${topicRootPath} Topic 1`}</Link>
      <Link to={`${props.match.url}/topic2`}>{`${topicRootPath} Topic 2`}</Link>
      <Link to={`${props.match.url}/topic3`}>{`${topicRootPath} Topic 3`}</Link>
    </div>
  );
};

export default TopicList;
