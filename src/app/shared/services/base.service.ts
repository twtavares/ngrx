import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable()
export class BaseService {

  public apiURL: string;

  constructor(
    protected http: HttpClient
  ) {
    this.apiURL = environment.apiURL;
  }

  /**
   * Request method get
   * @param endpoint: Endpoint for request
   * @param path: Path for request
   * @param params: Params for request
   * @return Observable
   */
  public get(path: string, queryString = {}): Observable<any> {
    return this.http.get(`${this.apiURL}${path}`, { params: queryString }).pipe(
      map((response: HttpResponse<object>) => response),
      catchError(error => throwError(error))
    );
  }

  /**
   * Request method post
   * @param endpoint: Endpoint for request
   * @param path: Path for request
   * @param params: Params for request
   * @return Observable
   */
  public post(path: string, params: object = {}, headers = {}): Observable<any> {
    return this.http.post(`${this.apiURL}${path}`, params, { headers }).pipe(
      map((response: HttpResponse<object>) => response),
      catchError(error => throwError(error))
    );
  }

  /**
   * Request method delete
   * @param endpoint: Endpoint for request
   * @param path: Path for request
   * @param params: Params for request
   * @return Observable
   */
  public delete(path: string, queryString = {}, body?: object): Observable<any> {
    const options = {
      body,
      params: queryString ? queryString : {}
    };
    return this.http.delete(`${this.apiURL}${path}`, options).pipe(
      map((response: HttpResponse<object>) => response),
      catchError(error => throwError(error))
    );
  }

  /**
   * Request method put
   * @param endpoint: Endpoint for request
   * @param path: Path for request
   * @param params: Params for request
   * @return Observable
   */
  public put(path: string, params: object = {}): Observable<any> {
    return this.http.put(`${this.apiURL}${path}`, params).pipe(
      map((response: HttpResponse<object>) => response),
      catchError(error => throwError(error))
    );
  }

  /**
   * Request method patch
   * @param endpoint: Endpoint for request
   * @param path: Path for request
   * @param params: Params for request
   * @return Observable
   */
  public patch(path: string, params: object = {}): Observable<any> {
    return this.http.patch(`${this.apiURL}${path}`, params).pipe(
      map((response: HttpResponse<object>) => response),
      catchError(error => throwError(error))
    );
  }
}
