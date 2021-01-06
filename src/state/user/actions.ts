import { UserData } from './types';
import { ActionResult } from '../transaction';

export enum UserActionType {
  ResetTransactions = 'user/reset-transactions',
  SignIn = 'user/sign-in',
  SignInResult = 'user/sign-in-result',
}

export type ResetTransactionsUserAction = {
  type: UserActionType.ResetTransactions;
};

export type SignInUserAction = {
  type: UserActionType.SignIn;
  payload: {
    email: string;
    password: string;
  };
};

export type SignInResultUserAction = {
  type: UserActionType.SignInResult;
  payload: ActionResult<UserData>;
};

export type UserAction =
  | ResetTransactionsUserAction
  | SignInUserAction
  | SignInResultUserAction;

export const userActions = {
  resetTransactions: (): ResetTransactionsUserAction => ({
    type: UserActionType.ResetTransactions,
  }),
  signIn: (email: string, password: string): SignInUserAction => ({
    type: UserActionType.SignIn,
    payload: { email, password },
  }),
  signInResult: (result: ActionResult<UserData>): SignInResultUserAction => ({
    type: UserActionType.SignInResult,
    payload: result,
  }),
};
