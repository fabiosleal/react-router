import React from 'react';
import { Link } from 'react-router-dom';

const TopicDetail = (props) => {
  console.log(props);
  let topicRootPath = props.match.path.match(/[^/]+/i);
  return (
    <div className='page'>
      <Link to={`/${topicRootPath}`}>{`${topicRootPath}`}</Link>
      <h1>{`${topicRootPath} Detail Page`}</h1>
      <h4>{props.match.params.topicId}</h4>
    </div>
  );
};

export default TopicDetail;
