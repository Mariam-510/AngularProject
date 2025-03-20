import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../Services/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-to-be-deleted',
  imports: [],
  templateUrl: './to-be-deleted.component.html',
  styleUrl: './to-be-deleted.component.css'
})
export class ToBeDeletedComponent implements OnInit {

  data:any;
  data2:any;
  APIData:any;

  constructor(private _shared:SharedService, private _httpClient:HttpClient){}

  ngOnInit(): void {
    console.log(this._shared);
    this.data = this._shared.testData;
    this.data2= this._shared.testData2;

    // API CALLS
    this._httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe({
      next: (data) => this.APIData = data,
      error: (error) => console.log("errors: ", error)
    })

  }
}
