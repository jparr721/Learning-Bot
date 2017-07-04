import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        //To configure other pieces of middleware check out React Slingshot:
        //https://github.com/coryhouse/react-slingshot
        applyMiddleware(reduxImmutableStateInvariant())
    );
}