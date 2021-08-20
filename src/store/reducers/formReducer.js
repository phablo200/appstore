import { Types } from "../actions/formAction";

const initialState = {
	action: null,
	productToUpdate: {},
	listToUpdate: null
};

const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.START_UPDATE:
			return {
				action: 'update',
				listToUpdate: action.list,
				productToUpdate: { ...action.product }
			};
		case Types.FINISH_UPDATE:
			return {
				action: null,
				productToUpdate: {},
			};
		case Types.START_ADD:
			return {
				...state,
				action: 'new',
				listToUpdate: action.list
			};
		case Types.FINISH_ADD:
			return {
				...initialState
			};
		default:
			return state;
	}
};

export default formReducer;