import request from 'superagent';

export const FETCHED_REVIEWS = 'FETCHED_REVIEWS';

const RAILS_HOST = 'http://localhost:3000/admin';

export default () => {
	return dispatch => {
		request
			.get(RAILS_HOST + '/reviews.json')
			.set('Accept', 'application/json')
			.then(response => {
				console.log(response.body);
				dispatch({
					type: FETCHED_REVIEWS,
					payload: response.body
				});
			});
	};
};
