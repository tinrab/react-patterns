import { AppState } from '../store';
import { UserData } from './types';
import { Transaction } from '../transaction';

export const userSelectors = {
  currentUser: (state: AppState): UserData | undefined =>
    state.user.currentUser,
  signInTransaction: (state: AppState): Transaction =>
    state.user.signInTransaction,
};
