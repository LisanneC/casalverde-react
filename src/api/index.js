// api/client.js

// Use superagent: yarn add superagent
//
// This class should set up the defaults and make it easy to connect to the
// Rails backend.
//
// Example:
//
// const api = new API();
// api.create('users', { email: 'foo@bar.co' })
//   .then((response) => ( do smth with response.body...))
//   .catch((error) => (...))

import request from 'superagent';

const RAILS_HOST =
	process.env.NODE_ENV === 'production'
		? 'https://casalverdeitaly.herokuapp.com/admin'
		: 'http://localhost:5000/admin';

export default class API {
	resourcePath(resource) {
		return [RAILS_HOST, resource].join('/');
	}

	// GET request /resource
	//
	// Example: api.find('users')
	//            .then((response) => ( do smth with response.body...))
	//            .catch((error) => (...))
	//
	// Returns: a Promise
	find(resource) {
		return request
			.get(this.resourcePath(resource))
			.withCredentials()
			.type('json')
			.accept('json');
	}

	// POST request /resource
	//
	// Example: api.create('users', { email: 'foo@bar.co' })
	//            .then((response) => ( do smth with response.body...))
	//            .catch((error) => (...))
	//
	// Returns: a Promise
	create(resource, data) {
		return request
			.post(this.resourcePath(resource))
			.send(data)
			.withCredentials()
			.type('json')
			.accept('json');
	}

	update(resource, id, data) {
		return request
			.patch(this.resourcePath(resource) + `/${id}`)
			.send(data)
			.withCredentials()
			.type('json')
			.accept('json');
	}

	destroy(resource, id) {
		return request
			.delete(this.resourcePath(resource) + `/${id}`)
			.withCredentials()
			.type('json')
			.accept('json');
	}
}
