import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { ToBeDeletedComponent } from "./Components/to-be-deleted/to-be-deleted.component";
import { FootballBookingComponent } from "./Components/football-booking/football-booking.component";
import { FootballBookingDetailsComponent } from './Components/football-booking-details/football-booking-details.component';
import { BookingHistoryComponent } from './Components/booking-history/booking-history.component';
import { EventBookingComponent } from "./Components/event-booking/event-booking.component";
import { BookingComponent } from "./Components/booking/booking.component";
import { EventBookingDetailsComponent } from "./Components/event-booking-details/event-booking-details.component";
import { BookingDetailsComponent } from './Components/booking-details/booking-details.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ToBeDeletedComponent,
    FootballBookingComponent,
    FootballBookingDetailsComponent,
    BookingHistoryComponent,
    EventBookingComponent,
    BookingComponent,
    EventBookingComponent,
    EventBookingDetailsComponent,
    BookingDetailsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
}
