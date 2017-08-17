const initialState = [];

export default (state = initialState, { type, payload } = {}) => {
	switch (type) {
		case 'LOAD_PHOTOPAGE':
			return [Object.assign({}, payload)].concat(state);
		default:
			return state;
	}
};
