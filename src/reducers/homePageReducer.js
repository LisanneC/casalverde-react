const initialState = [];

export default (state = initialState, { type, payload } = {}) => {
	switch (type) {
		case 'LOAD_HOMEPAGE':
			return Object.assign({}, state, payload);
		default:
			return state;
	}
};
