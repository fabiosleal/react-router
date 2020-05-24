import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
  console.log(props);
  return (
    <div className='page'>
      <Link to='/blog'>Blog</Link>
      <Link to='/news'>News</Link>
      <button onClick={() => props.history.push('/blog')}>Blog</button>
      <button onClick={() => props.history.push('/news')}>News</button>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
