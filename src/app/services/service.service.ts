import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  Observable
} from 'rxjs/Observable';
import {
  of
} from 'rxjs/observable/of';
import {
  catchError,
  map,
  tap
} from 'rxjs/operators';

import { environment } from './../../environments/environment';
import { AddServiceInfo } from './../models/add-service-info';

@Injectable()
export class ServiceService {
  public token : string;
  public httpOptions: Object;
  private apiUrl = environment.apiUrl;
  
  constructor(
    private http: HttpClient,
  ) {}

  insertService(body: AddServiceInfo) {
    const url = `${this.apiUrl}service`;
    this.token = localStorage.getItem('token');
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
    };
    console.log(JSON.stringify(body))
    return this.http.post(url, JSON.stringify(body), this.httpOptions)
      .pipe(
        tap((res) => {
          return res;
        }),
        catchError((err: any) => Observable.throw({ status: err.status, ...err.error }))
      );
  }
}
