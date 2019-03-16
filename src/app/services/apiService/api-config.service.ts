import { Injectable } from '@angular/core';

@Injectable()
export class ApiConfigService {

  private baseUrl: string;
  apiEndPointObj;
  constructor() {
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
    this.apiEndPointObj = {};
    this.init();
  }                                                                

  init() {
    
    this.apiEndPointObj['getAllPosts'] = this.baseUrl + '/posts';
    this.apiEndPointObj['getSinglePost'] = this.baseUrl + '/posts';
    this.apiEndPointObj['updatePost'] = this.baseUrl + '/posts';
    this.apiEndPointObj['addPost'] = this.baseUrl + '/posts';
  }

}
