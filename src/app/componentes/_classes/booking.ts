import { UserClient } from "./user-client";
import { LocationId } from "./location-id";

export class Booking {
  bookingId: number;
  bookingTime: Date;
  bookingPrice: number;
  locationId: LocationId;
  tutenUserClient: UserClient;
}
