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

export const routes: Routes = [
  { path: "", redirectTo: "entertainment", pathMatch: "full" },
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
  { path: "**", component: NotfoundComponent }

];
