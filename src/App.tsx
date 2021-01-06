import React from 'react';
import { Route, Router, Switch } from 'react-router';
import history from './router/history';
import { routerPaths } from './router/routes';
import ErrorHandlingPattern from './error-handling-pattern/ErrorHandlingPattern';
import ErrorHandlingHome from './error-handling-pattern/ErrorHandlingHome';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import Home from './Home';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4),
      width: 460,
    },
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router history={history}>
        <Switch>
          <Route
            exact
            path={routerPaths.errorHandling}
            component={ErrorHandlingPattern}
          />
          <Route
            exact
            path={routerPaths.errorHandlingHome}
            component={ErrorHandlingHome}
          />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
