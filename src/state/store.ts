import {
  applyMiddleware,
  combineReducers,
  createStore,
  Reducer,
  Store,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './user/reducer';
import { UserAction } from './user/actions';
import { userSaga } from './user/saga';

const rootReducer = combineReducers({ user: userReducer });

export type AppState = ReturnType<typeof rootReducer>;

export type AppAction = UserAction;

export default function configureStore(): Store<AppState, AppAction> {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer as Reducer<AppState, AppAction>,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(userSaga);

  return store;
}
