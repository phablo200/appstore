import { createStore } from "redux";
import reducers from './reducers';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, reduxDevTools);

/** 
console.log('store', store.getState());
store.dispatch({ type: 'ADD_PRODUCT', list: 'mes', product: {name: 'Café'} })
console.log('store', store.getState());
*/

export default store;