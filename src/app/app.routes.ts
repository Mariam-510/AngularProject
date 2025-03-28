import { Routes } from '@angular/router';

import { NotfoundComponent } from './Components/notfound/notfound.component';
import { TesttComponent } from './Components/testt/testt.component';
import { EHomePageComponent } from './Components/Entertainment/ehome-page/ehome-page.component';
import { ShowsComponent } from './Components/Entertainment/shows/shows.component';
import { ConcertsComponent } from './Components/Entertainment/Categories/concerts/concerts.component';
import { TheaterComponent } from './Components/Entertainment/Categories/theater/theater.component';
import { DanceComponent } from './Components/Entertainment/Categories/dance/dance.component';
import { StandUpComedyComponent } from './Components/Entertainment/Categories/stand-up-comedy/stand-up-comedy.component';
import { OtherComponent } from './Components/Entertainment/Categories/other/other.component';
import { EdetailsComponent } from './Components/Entertainment/edetails/edetails.component';
import { LeafletMapComponent } from './Components/leaflet-map/leaflet-map.component';
import { BookingHistoryComponent } from './Components/Book/booking-history/booking-history.component';
import { BookingComponent } from './Components/Book/booking/booking.component';
import { BookingDetailsComponent } from './Components/Book/booking-details/booking-details.component';
import { SDetailsPageComponent } from './Components/Sports/sdetails-page/sdetails-page.component';
import { SHomePageComponent } from './Components/Sports/shome-page/shome-page.component';
import { HomeComponent } from './Components/home/home.component';
import { UserProfileComponent } from './Components/ProfilePages/user-profile/user-profile.component';
import { LoginComponent } from './Components/Authantication/login/login.component';
import { RegisterComponent } from './Components/Authantication/register/register.component';
import { AllComponent } from './Components/Entertainment/Categories/all/all.component';
import { ReviewsComponent } from './Components/ProfilePages/reviews/reviews.component';
import { FavouriteComponent } from './Components/ProfilePages/favourite/favourite.component';
import { AboutComponent } from './Components/about/about.component';
import { BookingEventComponent } from './Components/Book/booking-event/booking-event.component';
import { BookingMatchComponent } from './Components/Book/booking-match/booking-match.component';
import { BookingDetailsEventComponent } from './Components/Book/booking-details-event/booking-details-event.component';
import { BookingDetailsMatchComponent } from './Components/Book/booking-details-match/booking-details-match.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent, title: "Home" },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'login', component: LoginComponent, title: "Login" },
  { path: 'register', component: RegisterComponent, title: "Register" },

  { path: 'UserProfile', component: UserProfileComponent, title: "Profile" },
  { path: 'reviews', component: ReviewsComponent, title: "Reviews" },
  { path: 'Favourite', component: FavouriteComponent, title: "Favourites" },


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
  { path: "shows/:id", component: EdetailsComponent, title: "Details" },

  { path: 'booking', component: BookingComponent, title: 'Book a match' },//deleted
  { path: 'bookingEvent', component: BookingEventComponent, title: 'Book Event' },
  { path: 'bookingMatch', component: BookingMatchComponent, title: 'Book Match' },

  { path: 'bookingDetails', component: BookingDetailsComponent, title: 'Booking details' }, //deleted
  { path: 'bookingDetailsMatch', component: BookingDetailsMatchComponent, title: 'Match booking details' },
  { path: 'bookingDetailsEvent', component: BookingDetailsEventComponent, title: 'Event booking details' },

  { path: 'bookingHistory', component: BookingHistoryComponent, title: 'BookingHistory' },

  { path: "t", component: TesttComponent, title: "t" },
  { path: "l", component: LeafletMapComponent, title: "l" },
  { path: "**", component: NotfoundComponent }
]




