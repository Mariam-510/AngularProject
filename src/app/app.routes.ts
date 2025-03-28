import { Routes } from '@angular/router';

import { NotfoundComponent } from './Components/notfound/notfound.component';
import { TesttComponent } from './Components/testt/testt.component';
import { EHomePageComponent } from './Components/Entertainment/ehome-page/ehome-page.component';
import { ShowsComponent } from './Components/Entertainment/shows/shows.component';
import { AllComponent } from './Components/Entertainment/all/all.component';
import { ConcertsComponent } from './Components/Entertainment/concerts/concerts.component';
import { TheaterComponent } from './Components/Entertainment/theater/theater.component';
import { DanceComponent } from './Components/Entertainment/dance/dance.component';
import { StandUpComedyComponent } from './Components/Entertainment/stand-up-comedy/stand-up-comedy.component';
import { OtherComponent } from './Components/Entertainment/other/other.component';
import { EdetailsComponent } from './Components/Entertainment/edetails/edetails.component';
import { LeafletMapComponent } from './Components/leaflet-map/leaflet-map.component';
import { BookingHistoryComponent } from './Components/booking-history/booking-history.component';
import { BookingComponent } from './Components/booking/booking.component';
import { BookingDetailsComponent } from './Components/booking-details/booking-details.component';
import { SDetailsPageComponent } from './Components/Sports/sdetails-page/sdetails-page.component';
import { SHomePageComponent } from './Components/Sports/shome-page/shome-page.component';
import { HomeComponent } from './Components/home/home.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent, title: "Home" },
  { path: 'UserProfile', component: UserProfileComponent, title: "UserProfile" },
  { path: 'login', component: LoginComponent, title: "Login" },
  { path: 'register', component: RegisterComponent, title: "Register" },

  { path: 'sports', component: SHomePageComponent, title: "Home" },
  { path: 'sports/:id', component: SDetailsPageComponent, title: "Match Details" },
  {
    path: 'entertainment', component: EHomePageComponent, title: "Entertainment", children: [
      { path: "", component: AllComponent },
      { path: "concerts", component: ConcertsComponent },
      { path: "theater", component: TheaterComponent },
      { path: "dance", component: DanceComponent },
      { path: "standUpComedy", component: StandUpComedyComponent },
      { path: "other", component: OtherComponent },
    ]
  },
  { path: "shows", component: ShowsComponent, title: "Shows" },
  { path: "details/:id", component: EdetailsComponent, title: "Details" },
  { path: "t", component: TesttComponent, title: "t" },
  { path: "l", component: LeafletMapComponent, title: "l" },
  { path: 'about', component: BookingHistoryComponent, title: 'Booking history' },

  { path: 'book', component: BookingComponent, title: 'Book a match' },
  { path: 'bookDetails', component: BookingDetailsComponent, title: 'Match booking details' },
  { path: 'bookingHistory', component: BookingHistoryComponent, title: 'BookingHistory' },

  { path: "**", component: NotfoundComponent }
]




