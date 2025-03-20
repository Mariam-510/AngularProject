import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  testData = {
    id: 1,
    name: "ahmed",
    age: 25
  }

  testData2 = {
    id: 2,
    name: "mohamed",
    age: 30
  }

  constructor() { }
}
