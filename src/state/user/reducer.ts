import { UserAction, UserActionType } from './actions';
import { UserData } from './types';
import { Transaction } from '../transaction';

export type UserState = {
  currentUser?: UserData;
  signInTransaction: Transaction;
};

const initialState: UserState = {
  signInTransaction: Transaction.create(),
};

export default function userReducer(
  state: UserState = initialState,
  action: UserAction,
): UserState {
  switch (action.type) {
    case UserActionType.ResetTransactions:
      return { ...state, signInTransaction: Transaction.create() };
    case UserActionType.SignIn:
      return { ...state, signInTransaction: Transaction.start() };
    case UserActionType.SignInResult:
      if (action.payload.error) {
        return {
          ...state,
          signInTransaction: Transaction.finish(action.payload.error),
        };
      } else {
        return {
          ...state,
          currentUser: action.payload,
          signInTransaction: Transaction.finish(),
        };
      }
    default:
      return state;
  }
}
