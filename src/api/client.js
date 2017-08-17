// api/client.js

// Use superagent: yarn add superagent
//
// This class should set up the defaults and make it easy to connect to the
// Rails backend.
//
// Example:
//
// const api = new API();
// api.post('/users', { email: 'foo@bar.co' })
//   .then((result) => (...))
//   .catch((error) => (...))

import request from 'superagent'

const RAILS_HOST = 'http://localhost:3000/admin'

class API {
  constructor() {
    this.request = request;
    this.user = user;
    this.setupDefaultHeaders();

    setupDefaultHeaders() {
      this.request
        .set('Accept', 'application/json')
    }

  }
const api = new API();

export default api
