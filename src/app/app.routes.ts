import { Routes } from '@angular/router';
import { FootballBookingComponent } from './Components/football-booking/football-booking.component';
import { FootballBookingDetailsComponent } from './Components/football-booking-details/football-booking-details.component';
import { BookingHistoryComponent } from './Components/booking-history/booking-history.component';
import { BookingComponent } from './Components/booking/booking.component';
import { BookingDetailsComponent } from './Components/booking-details/booking-details.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'home', component: HomeComponent, title: 'Home' },
    { path: 'about', component: BookingHistoryComponent, title: 'Booking history' },
    // { path: 'shows', component: FootballBookingComponent, title: 'Book a match'},
    { path: 'shows', component: BookingComponent, title: 'Book a match'},
    { path: 'matches', component: BookingDetailsComponent, title: 'Match booking details' },
    // { path: 'login', component: LoginComponent, title: 'Login' },
    // { path: 'register', component: RegisterComponent, title: 'Register' },
    // { path: '**', component: ErrorComponent, title: 'Error' },
];
