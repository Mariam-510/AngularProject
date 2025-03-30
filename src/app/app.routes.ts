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
<<<<<<< Updated upstream

export const routes: Routes = [
  { path: 'home', component: SHomePageComponent, title: "Home" },
  { path: 'home/:id', component: SDetailsPageComponent, title: "Match Details" },
=======
import { HomeComponent } from './Components/home/home.component';
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
import { UserProfileComponent } from './Components/ProfilePages/user-profile/user-profile.component';
import { ADashboardComponent } from './Components/Admin/adashboard/adashboard.component';
import { AdminHomeComponent } from './Components/Admin/admin-home/admin-home.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent, title: "Home" },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'login', component: LoginComponent, title: "Login" },
  { path: 'register', component: RegisterComponent, title: "Register" },

  // { path: 'profile', component: UserProfileComponent, title: "Profile" },
  { path: 'reviews', component: ReviewsComponent, title: "Reviews" },
  { path: 'userprofile', component: UserProfileComponent, title: "Reviews" },

  { path: 'Favourite', component: FavouriteComponent, title: "Favourites" },
  {path:'Dashboard',component:ADashboardComponent,title:"Dashboard",
    children: [
      { path: '', redirectTo: 'admin-home', pathMatch: 'full' },
      {path:'admin-home',component:AdminHomeComponent}]
     
  },

  { path: 'sports', component: SHomePageComponent, title: "Home" },
  { path: 'sports/:id', component: SDetailsPageComponent, title: "Match Details" },
>>>>>>> Stashed changes
  {
    path: 'entertainment', component: EHomePageComponent, title: "Entertainment", children: [
      { path: '', redirectTo: "all", pathMatch: 'full' },
      { path: "all", component: AllComponent },
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
<<<<<<< Updated upstream
  { path: 'about', component: BookingHistoryComponent, title: 'Booking history' },

  { path: 'book', component: BookingComponent, title: 'Book a match' },
  { path: 'bookDetails', component: BookingDetailsComponent, title: 'Match booking details' },
  { path: 'bookingHistory', component: BookingHistoryComponent, title: 'BookingHistory' },

  { path: "**", component: NotfoundComponent }
=======
  { path: "**", component: NotfoundComponent },
  
>>>>>>> Stashed changes
]




