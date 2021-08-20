import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducers from './reducers';
import sagas from '../sagas';
import { loadState, saveState } from './localStorage';

const savingInLocal = loadState();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

console.log('composeEnhancers', composeEnhancers);
const store = createStore(reducers, savingInLocal, composeEnhancers(
    applyMiddleware(...middlewares)
));

sagaMiddleware.run(sagas);

store.subscribe(() => {
    const listReducer = store.getState().listReducer;
    saveState({ listReducer });
});

/** 
console.log('store', store.getState());
store.dispatch({ type: 'ADD_PRODUCT', list: 'mes', product: {name: 'Café'} })
console.log('store', store.getState());
*/

export default store;