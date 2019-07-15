import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

type Parameters = {[name: string]: any};

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'https://www.jsonplaceholder.ir/';
  
  private handleUrlParams(endPoint: string, params: Parameters): string {
    if(params == undefined) return endPoint;
    let data = endPoint;
    for (const key of Object.keys(params)) {
      const value = params[key];
      data = data.replace('{' + key + '}', value);
    }
    return data;
  }

  private handleQueryParams(params: Parameters): string {
    if(params == undefined) return '';
    let queryString = '?';
    for (const key of Object.keys(params)) {
      const value = params[key];
      queryString += encodeURIComponent(key) + '=' + encodeURIComponent(value);
    }
    return queryString == '?' ? '' : queryString;
  }

  async send<T>(method: 'POST' | 'GET', endPoint: string, params?: Parameters, urlParams?: Parameters): Promise<T> {
    let url = this.baseUrl;
    url += this.handleUrlParams(endPoint, urlParams);
    if(method == 'POST') {
      return this.http.post<T>(url, params).toPromise();
    } else { // 'GET'
      url += this.handleQueryParams(params);
      return this.http.get<T>(url).toPromise();
    }                   
  }

}