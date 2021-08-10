export const Types = {
	ADD_PRODUCT: 'list/ADD_PRODUCT',
	DELETE_PRODUCT: 'list/DELETE_PRODUCT',
	TOGGLE_PRODUCT: 'list/TOGGLE_PRODUCT',
	UPDATE_PRODUCT: 'list/UPDATE_PRODUCT',
};

export const Creators = {
	addProduct: (product, list) => {
		return {
			type: Types.ADD_PRODUCT,
			product,
			list
		}
	},
	deleteProduct: (productId) => {
		return {
			type: Types.DELETE_PRODUCT,
			payload: productId
		};
	},
	toggleProduct: (productId) => {
		return {
			type: Types.TOGGLE_PRODUCT,
			payload: productId
		};
	},
	updateProduct: (product, list) => {
		return {
			type: Types.UPDATE_PRODUCT,
			product,
			list
		};
	},
};
