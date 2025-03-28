import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { BookingHistoryComponent } from './Components/booking-history/booking-history.component';
import { BookingComponent } from "./Components/booking/booking.component";
import { BookingDetailsComponent } from './Components/booking-details/booking-details.component';
import { SHomePageComponent } from './Components/Sports/shome-page/shome-page.component';
import { SDetailsPageComponent } from './Components/Sports/sdetails-page/sdetails-page.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    BookingHistoryComponent,
    BookingComponent,
    BookingDetailsComponent,
    SHomePageComponent, SDetailsPageComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
}
