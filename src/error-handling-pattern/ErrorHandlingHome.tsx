import React from 'react';
import { useSelector } from 'react-redux';
import { userSelectors } from '../state/user/selectors';
import { UserData } from '../state/user/types';
import { Typography } from '@material-ui/core';

const ErrorHandlingHome: React.FC = () => {
  const currentUser = useSelector(userSelectors.currentUser) as UserData;

  return (
    <>
      <Typography variant="body1">Welcome, {currentUser.email}.</Typography>
    </>
  );
};

export default ErrorHandlingHome;
