import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LeafletMapComponent } from '../../leaflet-map/leaflet-map.component';
import { SharedService } from '../../../Services/shared.service';
@Component({
  selector: 'app-create-event',
  imports: [ReactiveFormsModule, CommonModule, LeafletMapComponent],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent implements OnInit {
  selectedEventLocation: string = 'Cairo, Egypt';
  showMap: boolean = true;
  MyForm = new FormGroup({
    EventName: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    EventImage: new FormControl("", [Validators.required]),
    EventDescription: new FormControl("", [Validators.required, Validators.maxLength(500)]),
    EventLocation: new FormControl("", [Validators.required, Validators.maxLength(200)])
  });

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {

  }
  onLocationBlur(): void {
    const location = this.MyForm.get('EventLocation')?.value;
    if (location) {
      this.updateMapLocation(location);
    } else {
      this.resetMapToDefault();
    }
  }

  private updateMapLocation(location: string): void {
    this.showMap = false;

    setTimeout(() => {
      this.selectedEventLocation = location;
      this.showMap = true;
    }, 1);
  }

  private resetMapToDefault(): void {
    this.showMap = false;
    setTimeout(() => {
      this.selectedEventLocation = 'Cairo, Egypt';
      this.showMap = true;
    }, 1);
  }

  // submitForm() {
  //   if (this.MyForm.invalid) {
  //     this.MyForm.markAllAsTouched();
  //     return;
  //   }
  //   alert('Event Created Successfully!');
  //   this.MyForm.reset();
  // }

  submitForm() {
    if (this.MyForm.invalid) {
      this.MyForm.markAllAsTouched();
      return;
    }

    // Get the event details from the form
    const newEvent = this.MyForm.value;

    // Call the method in your shared service to add the event to the events array
    this.sharedService.addShow(newEvent);

    // Reset the form after adding the event
    this.MyForm.reset();
  }


}
