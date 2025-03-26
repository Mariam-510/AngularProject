import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from "./Components/footer/footer.component";
import { ToBeDeletedComponent } from "./Components/to-be-deleted/to-be-deleted.component";
import { SHomePageComponent } from './Components/Sports/shome-page/shome-page.component';
import { SDetailsPageComponent } from './Components/Sports/sdetails-page/sdetails-page.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ToBeDeletedComponent,SHomePageComponent,SDetailsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
}
