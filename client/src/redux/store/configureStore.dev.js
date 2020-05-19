import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducer';
const logger = createLogger({
    collapsed: true,
});

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunk,
            loadingBarMiddleware({
                promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
            }),
            reduxImmutableStateInvariant(),
            logger,
        ),
    );
}

