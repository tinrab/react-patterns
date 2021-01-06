import React from 'react';
import { Link } from 'react-router-dom';
import { routerPaths } from './router/routes';
import { Typography } from '@material-ui/core';

const Home: React.FC = () => {
  return (
    <>
      <Typography variant="h3" gutterBottom>
        Patterns
      </Typography>
      <Typography variant="body1" component="ul">
        <li>
          <Link to={routerPaths.errorHandling}>Error handling</Link>
        </li>
      </Typography>
    </>
  );
};

export default Home;
