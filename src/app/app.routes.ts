import { Routes } from '@angular/router';

import { NotfoundComponent } from './Components/notfound/notfound.component';
import { EHomePageComponent } from './Components/Entertainment/ehome-page/ehome-page.component';
import { ShowsComponent } from './Components/Entertainment/shows/shows.component';
import { ConcertsComponent } from './Components/Entertainment/Categories/concerts/concerts.component';
import { TheaterComponent } from './Components/Entertainment/Categories/theater/theater.component';
import { DanceComponent } from './Components/Entertainment/Categories/dance/dance.component';
import { StandUpComedyComponent } from './Components/Entertainment/Categories/stand-up-comedy/stand-up-comedy.component';
import { OtherComponent } from './Components/Entertainment/Categories/other/other.component';
import { EdetailsComponent } from './Components/Entertainment/edetails/edetails.component';
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
import { AddScheduleComponent } from './Components/Admin/add-schedule/add-schedule.component';
import { AddTicketComponent } from './Components/Admin/add-ticket/add-ticket.component';
import { AddPerformerComponent } from './Components/Admin/add-performer/add-performer.component';
import { AddNewMatchComponent } from './Components/Admin/add-new-match/add-new-match.component';
import { ContactComponent } from './Components/contact/contact.component';
import { TestqrComponent } from './Components/ProfilePages/testqr/testqr.component';
import { CreateEventComponent } from './Components/Admin/create-event/create-event.component';
import { GetAllMatchesComponent } from './Components/Admin/get-all-matches/get-all-matches.component';
import { GetAllEventsComponent } from './Components/Admin/get-all-events/get-all-events.component';




export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
  { path: 'home', component: HomeComponent, title: "Home" },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'login', component: LoginComponent, title: "Login" },
  { path: 'register', component: RegisterComponent, title: "Register" },
  {path:'contact',component:ContactComponent, title:"Contact Us"},


  {
    path: 'admin', component: AdminHomeComponent, title: "Admin",
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: ADashboardComponent, title: "Dashboard" },
      { path: 'addSchedule', component: AddScheduleComponent, title: "Add New Schedule" },
      { path: 'addTicket', component: AddTicketComponent, title: "Add New Ticket" },
      { path: 'addPerformer', component: AddPerformerComponent, title: "Add New Performer" },
      { path: 'addMatch', component: AddNewMatchComponent, title: "Add New Match" },
      { path: 'addShow', component: CreateEventComponent, title: "Add New Event" },
      { path: 'getallshows', component: GetAllEventsComponent, title: "Get All Shows" },
      { path: 'getallmatches', component: GetAllMatchesComponent, title: "Get All Matches" },
    ]
  },

  {
    path: 'profile', component: ProfileComponent, title: "Profile", children: [
      { path: '', redirectTo: 'user', pathMatch: "full" },
      { path: "user", component: UserComponent, title: "User" },
      { path: 'reviews', component: ReviewsComponent, title: "Reviews" },
      { path: 'favourites', component: FavouriteComponent, title: "Favourites" },
      { path: 'bookingHistory', component: BookingHistoryComponent, title: 'Booking History' },
      {path:'test',component:TestqrComponent,title:'testtt'}
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

  { path: 'bookingEvent/:id', component: BookingEventComponent, title: 'Book Event' },
  { path: 'bookingMatch/:id', component: BookingMatchComponent, title: 'Book Match' },

  { path: 'bookingDetailsMatch/:id', component: BookingDetailsMatchComponent, title: 'Match Booking Details' },
  { path: 'bookingDetailsEvent/:id', component: BookingDetailsEventComponent, title: 'Show Booking Details' },

  { path: "**", component: NotfoundComponent },


]




