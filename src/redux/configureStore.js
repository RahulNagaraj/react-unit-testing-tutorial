import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas';
import api from './middleware/api';

const sagaMiddleware = createSagaMiddleware();

export default function ConfigureStore(preloadedState) {
  const middlewares = [sagaMiddleware, api];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
}
