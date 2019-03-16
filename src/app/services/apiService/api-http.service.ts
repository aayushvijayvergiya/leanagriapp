import { Injectable } from '@angular/core';
// import { Headers, Http, Request, ResponseContentType } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiHttpService {

  constructor(
    private http: HttpClient
  ) { }

  /* REQUEST(apiConfig: Object, data: any): Promise<any> {
    const headerObj = {
      'content-type': 'application/json'
    };

    const requestObj = new Request({
      method: apiConfig['method'],
      body: data ? data : null,
      url: apiConfig['url'],
      headers: new Headers(headerObj)
    });
    return this.callFinalApi(requestObj);
  }

  callFinalApi(requestObj): Promise<any> {
    return this.http
    .request(requestObj)
    .toPromise()
    .then(response => {
      if(response) {
        return response;
      }
    }, error => {
      console.error('HTTP error: => ', error);
    });
  } */

  /* callFinalApi(requestObj): Observable<any> {
    return this.http
    .request(requestObj);
    this.http.
  } */

  POST(bodyObj, url): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<any>(url, bodyObj, httpOptions).toPromise();
  }

  GET(url): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }) 
    };
    
    return this.http.get<any>(url, httpOptions).toPromise();
  }

  PUT(bodyObj, url): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }) 
    }

    return this.http.put<any>(url, bodyObj, httpOptions).toPromise();
  }

}
