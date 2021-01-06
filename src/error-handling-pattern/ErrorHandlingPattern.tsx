import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
  Alert,
  Box,
  Button,
  createStyles,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { userSelectors } from '../state/user/selectors';
import { userActions } from '../state/user/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    footer: {
      display: 'flex',
      alignItems: 'flex-start',
      marginTop: theme.spacing(2),
    },
    signInButton: {
      marginLeft: 'auto',
    },
  }),
);

const ErrorHandlingPattern: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const signInTransaction = useSelector(userSelectors.signInTransaction);
  const signInError = signInTransaction.error;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    setEmail(() => newValue);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    setPassword(() => newValue);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    dispatch(userActions.signIn(email, password));
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Error handling
      </Typography>
      <Box component="form" onSubmit={handleSubmit} className={classes.form}>
        <TextField
          label="Email"
          required
          variant="standard"
          onChange={handleEmailChange}
        />
        <TextField
          label="Password"
          type="password"
          required
          variant="standard"
          onChange={handlePasswordChange}
        />
        <Box className={classes.footer}>
          {signInError && <Alert severity="error">{signInError.message}</Alert>}
          <Button
            className={classes.signInButton}
            style={{ marginLeft: 'auto' }}
            variant="contained"
            type="submit"
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ErrorHandlingPattern;
