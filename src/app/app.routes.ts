import { Routes } from '@angular/router';
import { SDetailsPageComponent } from './Components/Sports/sdetails-page/sdetails-page.component';
import { SHomePageComponent } from './Components/Sports/shome-page/shome-page.component';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:"full"},
    {path:'home',component:SHomePageComponent,title:"Home"},
    {path:'home/:id',component:SDetailsPageComponent,title:"Match Details"},
];
