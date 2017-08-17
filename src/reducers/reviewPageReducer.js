import { FETCHED_REVIEWS } from '../actions/review.js';
const initialState = [];

export default (state = initialState, { type, payload } = {}) => {
	switch (type) {
		case FETCHED_REVIEWS:
			return [Object.assign({}, payload)].concat(state);
		default:
			return state;
	}
};
