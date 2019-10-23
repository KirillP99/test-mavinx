import { createStore, applyMiddleware, compose } from 'redux';

import { rootReducers } from './rootReducers';
import { rootSaga } from './rootSaga';
import {
  sagaMiddleware, dev, middleware,
} from './middleware';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line
const composeEnhancers = dev && devtools ? devtools : compose;

const store = createStore(
  rootReducers(),
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga, store.dispatch, store.getState);

export { store };
