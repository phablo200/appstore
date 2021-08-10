import { Types } from "../actions/formAction";

const initialState = {
	action: 'new',
	productToUpdate: {}
};

const formReducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.START_UPDATE:
			return {
				action: 'update',
				productToUpdate: { ...action.product }
			};
		case Types.FINISH_UPDATE:
			return {
				action: 'new',
				productToUpdate: {},
			}
		default:
			return state;
	}
};

export default formReducer;