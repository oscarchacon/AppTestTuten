import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import {HttpClient} from '@angular/common/http'
import { Booking } from '../_classes/booking';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService extends BaseService {

  private relativeUrl: string = "{1}/bookings";

  constructor(protected http: HttpClient) {
    super(http);
  }

  getBookins(current: boolean = true): Observable<Booking[]>{
    let user: string = "contacto@tuten.cl";
    let urlAux: string = this.relativeUrl.replace('{1}', user);
    if(current){
      urlAux = `${urlAux}?current=${current}`;
    }
    return this.get(`${urlAux}`).map(res => res);
  }

}
