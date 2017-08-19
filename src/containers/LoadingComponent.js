import React, {PureComponent} from 'react';
import request from 'superagent'


export default class LoadingComponent extends PureComponent {
    fetch(resource, type, data) {
        if (type === 'GET') {
            return request
                .get(this.resourcePath(resource))
                .withCredentials()
                .type('json')
                .accept('json')
        }
        if ( type === 'POST'){
            return request
                .post(this.resourcePath(resource))
                .send(data)
                .withCredentials()
                .type('json')
                .accept('json')
        }
        if ( type === 'PUT'){
            return request
                .put(this.resourcePath(resource))
                .send(data)
                .withCredentials()
                .type('json')
                .accept('json')
        }
        if ( type === 'DELETE'){
            return request
                .delete(this.resourcePath(resource))
                .send(data)
                .withCredentials()
                .type('json')
                .accept('json')
        }
    }
    resourcePath(resource) {
        const RAILS_HOST = 'http://localhost:5000/admin'
            return [RAILS_HOST, resource].join('/')
    }
}