import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Headers, RequestOptions, Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const body = new HttpParams();
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'App': 'APP_BCK',
          'Password': password,
          'Accept': 'application/json'
        },
      )
    };

    const headers = new HttpHeaders(
      {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Password' : password,
        'App' : 'APP_BCK',
      }
    );

    let headers1 = new Headers(
      {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json',
        'Password' : password,
        'App' : 'APP_BCK',
      }
    );

    console.log(headers.get('Accept'));

    return this.http.put(`${environment.baseUrl}${username}`, body.toString(), { headers : headers } )
        .map(data => {
          if (data) {
            localStorage.setItem('gTdhs%HJ324SDgd', JSON.stringify(data));
          }
          return data;
        }
      );
  }

  logout() {
    localStorage.removeItem('gTdhs%HJ324SDgd');
  }
}
