import React, {PureComponent} from 'react';
import request from 'superagent'


export default class LoadingComponent extends PureComponent {

    fetch(resource, type, data) {
        request
            .get()
            .withCredentials()
            .type('json')
            .accept('json');

        if (type === 'GET') {
            return request
                .get(this.resourcePath(resource))
                .withCredentials()
                .type('json')
                .accept('json');

        }
        if ( type === 'POST'){
            return request
                .post(this.resourcePath(resource))
                .send(data)
        }
        if ( type === 'PUT'){
            return request
                .put(this.resourcePath(resource))
                .send(data)
        }
        if ( type === 'DELETE'){
            return request
                .delete(this.resourcePath(resource))
        }
    }
    resourcePath(resource) {
        const RAILS_HOST = 'http://localhost:5000/admin'
        return [RAILS_HOST, resource].join('/')
    }

    loadContent(url, type, newContent) {
        this.fetch(url, type).then((response) => {
            if(newContent){
              response.body.push(newContent);
            }
            this.setState({content: response.body});
        });
    }

    saveContent(url, type, item) {
        this.fetch(url, type, item).then((response) => {
            this.loadContent(url, 'GET');
        });
    }

    updateContent(url, type, item) {
        this.fetch(url, type, item).then((response) => {
            url = url.split('/').slice(0,-1).join('/');
            this.loadContent(url, 'GET');
        });
    }

    deleteContent(url, type){
        this.fetch(url, type).then((response) => {
            url = url.split('/').slice(0,-1).join('/');
            this.loadContent(url, 'GET');
        });
    }
}
