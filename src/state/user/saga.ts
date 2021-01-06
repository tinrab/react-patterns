import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  SignInResultUserAction,
  SignInUserAction,
  userActions,
  UserActionType,
} from './actions';
import { UserData } from './types';
import { ErrorCode } from '../transaction';
import history from '../../router/history';
import { routerPaths } from '../../router/routes';

function* handleSignIn(action: SignInUserAction): Generator {
  const { email, password } = action.payload;

  const user: UserData = { id: '1', email: 'tin@flinect.com' };

  if (email != user.email || password != '123456') {
    yield put(
      userActions.signInResult({
        error: {
          code: ErrorCode.IncorrectCredentials,
          message: 'Incorrect credentials.',
        },
      }),
    );
    return;
  }

  yield put(userActions.signInResult({ error: undefined, ...user }));
}

function* handleSignInResult(action: SignInResultUserAction): Generator {
  if (!action.payload.error) {
    yield call(history.push, routerPaths.errorHandlingHome);
  }
}

export function* userSaga(): Generator {
  yield all([
    takeLatest(UserActionType.SignIn, handleSignIn),
    takeLatest(UserActionType.SignInResult, handleSignInResult),
  ]);
}
