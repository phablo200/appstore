export const Types = {
	START_UPDATE: 'form/START_UPDATE',
	FINISH_UPDATE: 'form/FINISH_UPDATE',
};

export const Creators = {
	startUpdate: (product, list) => {
		return {
			type: Types.START_UPDATE,
			product,
			list
		}
	},
	finishUpdate: () => ({
		type: Types.FINISH_UPDATE
	}),
};
