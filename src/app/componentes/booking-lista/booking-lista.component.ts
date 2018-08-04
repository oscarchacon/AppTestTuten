import { Component, OnInit } from '@angular/core';
import { BookingService } from '../_services/booking.service';
import { Booking } from '../_classes/booking';

@Component({
  selector: 'app-booking-lista',
  templateUrl: './booking-lista.component.html',
  styleUrls: ['./booking-lista.component.css']
})
export class BookingListaComponent implements OnInit {

  loadingTable: boolean = false;
  bookings: Booking[] = [];

  bookingId: string;
  precioMin: number;
  precioMay: number;

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.getBookings();
  }

  getBookings(): void {
    this.loadingTable = true;
    this.bookingService.getBookins()
      .subscribe(
        data => {
          this.bookings = data;
        },
        error => {
          this.loadingTable = false;
        },
        () => {
          this.loadingTable = false;
        }
      );
  }

}
