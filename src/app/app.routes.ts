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
import { BookingHistoryComponent } from './Components/ProfilePages/booking-history/booking-history.component';
import { SDetailsPageComponent } from './Components/Sports/sdetails-page/sdetails-page.component';
import { SHomePageComponent } from './Components/Sports/shome-page/shome-page.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/Authentication/login/login.component';
import { RegisterComponent } from './Components/Authentication/register/register.component';
import { AllComponent } from './Components/Entertainment/Categories/all/all.component';
import { ReviewsComponent } from './Components/ProfilePages/reviews/reviews.component';
import { FavouriteComponent } from './Components/ProfilePages/favourite/favourite.component';
import { AboutComponent } from './Components/about/about.component';
import { BookingEventComponent } from './Components/Book/booking-event/booking-event.component';
import { BookingMatchComponent } from './Components/Book/booking-match/booking-match.component';
import { BookingDetailsEventComponent } from './Components/Book/booking-details-event/booking-details-event.component';
import { BookingDetailsMatchComponent } from './Components/Book/booking-details-match/booking-details-match.component';
import { ADashboardComponent } from './Components/Admin/adashboard/adashboard.component';
import { AdminHomeComponent } from './Components/Admin/admin-home/admin-home.component';
import { ProfileComponent } from './Components/ProfilePages/profile/profile.component';
import { UserComponent } from './Components/ProfilePages/user/user.component';
import { TestV2Component } from './Components/test-v2/test-v2.component';
import { AddScheduleComponent } from './Components/Admin/add-schedule/add-schedule.component';
import { AddTicketComponent } from './Components/Admin/add-ticket/add-ticket.component';
import { AddPerformerComponent } from './Components/Admin/add-performer/add-performer.component';


export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent, title: "Home" },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'login', component: LoginComponent, title: "Login" },
  { path: 'register', component: RegisterComponent, title: "Register" },


  {
    path: 'admin', component: ADashboardComponent, title: "Admin",
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminHomeComponent, title: "Dashboard" },
      { path: 'addSchedule', component: AddScheduleComponent, title: "Add Schedule" },
      { path: 'addTicket', component: AddTicketComponent, title: "Add Ticket" },
      { path: 'addPerformer', component: AddPerformerComponent, title: "Add Performer" },
    ]
  },

  {
    path: 'profile', component: ProfileComponent, title: "Profile", children: [
      { path: '', redirectTo: 'user', pathMatch: "full" },
      { path: "user", component: UserComponent, title: "User" },
      { path: 'reviews', component: ReviewsComponent, title: "Reviews" },
      { path: 'favourites', component: FavouriteComponent, title: "Favourites" },
      { path: 'bookingHistory', component: BookingHistoryComponent, title: 'Booking History' }
    ]

  },

  { path: 'sports', component: SHomePageComponent, title: "Sports" },
  { path: 'sports/:id', component: SDetailsPageComponent, title: "Match Details" },

  {
    path: 'shows', component: EHomePageComponent, title: "Shows", children: [
      { path: "", component: AllComponent },
      { path: "concerts", component: ConcertsComponent },
      { path: "theater", component: TheaterComponent },
      { path: "dance", component: DanceComponent },
      { path: "standUpComedy", component: StandUpComedyComponent },
      { path: "other", component: OtherComponent },
    ]
  },


  { path: "shows/all", component: ShowsComponent, title: "Shows" },
  { path: "shows/:id", component: EdetailsComponent, title: "Show Details" },

  { path: 'bookingEvent', component: BookingEventComponent, title: 'Book Event' },
  { path: 'bookingMatch', component: BookingMatchComponent, title: 'Book Match' },

  { path: 'bookingDetailsMatch', component: BookingDetailsMatchComponent, title: 'Match Booking Details' },
  { path: 'bookingDetailsEvent', component: BookingDetailsEventComponent, title: 'Show Booking Details' },

  { path: "t", component: TesttComponent, title: "t" },

  {
    path: "t2", component: TestV2Component, title: "t2",
    children: [
      { path: '', redirectTo: 't', pathMatch: "full" },
      { path: "t", component: TesttComponent },
    ]
  },

  { path: "l", component: LeafletMapComponent, title: "l" },

  { path: "**", component: NotfoundComponent },


]




