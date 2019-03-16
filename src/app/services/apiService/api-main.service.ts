import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { ApiHttpService } from './api-http.service';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiMainService {

  constructor(
    private apiConfig: ApiConfigService,
    private apiHttp: ApiHttpService
  ) { }

  getAllPosts() {
    const promise = new Promise((resolve, reject) => {
      this.apiHttp.GET(this.apiConfig.apiEndPointObj['getAllPosts']).then(response => {
        if (response) {
          resolve(response);
        }
      }, error => {
        reject(error);
      })
    });

    return promise;
  }

  getSinglePost(postId) {
    const url = this.apiConfig.apiEndPointObj['getSinglePost'] + '/' + postId;

    const promise = new Promise((resolve, reject) => {
      this.apiHttp.GET(url).then(response => {
        if (response) {
          resolve(response);
        }
      }, error => {
        reject(error);
      });
    });

    return promise;
  }

  getPostComment(postId) {
    const url = this.apiConfig.apiEndPointObj['getSinglePost'] + '/' + postId + '/comments';

    const promise = new Promise((resolve, reject) => {
      this.apiHttp.GET(url).then(response => {
        if (response) {
          resolve(response);
        }
      }, error => {
        reject(error);
      });
    });

    return promise;
  }

  updatePost(postId, postObj) {
    const url = this.apiConfig.apiEndPointObj['updatePost'] + '/' + postId;

    const promise = new Promise((resolve, reject) => {
      this.apiHttp.PUT(postObj, url).then(response => {
        if (response) {
          resolve(response);
        }
      }, error => {
        reject(error);
      });
    });

    return promise;

  }

  addPost(postObj) {
    const promise = new Promise((resolve, reject) => {
      this.apiHttp.POST(postObj, this.apiConfig.apiEndPointObj['addPost']).then(response => {
        if (response) {
          resolve(response);
        }
      }, error => {
        reject(error);
      });
    });

    return promise;
  }
}
