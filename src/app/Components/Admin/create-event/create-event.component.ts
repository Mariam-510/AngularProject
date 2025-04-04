import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { LeafletMapComponent } from '../../leaflet-map/leaflet-map.component';
import { SharedService } from '../../../Services/shared.service';
import { ToastrService } from '../../../Services/toastr.service';
@Component({
  selector: 'app-create-event',
  imports: [ReactiveFormsModule, CommonModule, LeafletMapComponent],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent implements OnInit {
  selectedEventLocation: string = 'Cairo, Egypt';
  showMap: boolean = true;
  categories: any

  MyForm = new FormGroup({
    EventName: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    EventImage: new FormControl("", [Validators.required]),
    EventDescription: new FormControl("", [Validators.required, Validators.maxLength(500)]),
    EventLocation: new FormControl("", [Validators.required, Validators.maxLength(200)]),
    EventCategory: new FormControl("", [Validators.required]) // Added category field
  });

  constructor(private sharedService: SharedService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.categories = this.sharedService.showCategories;
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

  submitForm() {
    if (this.MyForm.invalid) {
      this.MyForm.markAllAsTouched();
      return;
    }
<<<<<<< Updated upstream
    alert('Event Created Successfully!');

=======
    this.toastr.success('Event Created Successfully!');
>>>>>>> Stashed changes
    const newEvent = this.MyForm.value;

    console.log(newEvent);

    this.sharedService.addShow(newEvent);

    this.MyForm.reset();
  }


}
