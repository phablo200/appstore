import { combineReducers } from "redux";
import listReducer from './listReducer';
import formReducer from './formReducer';

export default combineReducers({
	listReducer,
	formReducer,
});