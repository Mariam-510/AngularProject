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
  categories: any
  selectedFile: File | null = null;
  isImageInvalid = false;
  validationMessage = '';
  isTouched = false;
  MyForm = new FormGroup({
    EventName: new FormControl("", [Validators.required, Validators.maxLength(50)]),
    EventImage: new FormControl("", [Validators.required]),
    EventDescription: new FormControl("", [Validators.required, Validators.maxLength(500)]),
    EventLocation: new FormControl("", [Validators.required, Validators.maxLength(200)]),
    EventCategory: new FormControl("", [Validators.required]) // Added category field
  });

  constructor(private sharedService: SharedService) { }

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
  onFileTouched() {
    this.isTouched = true; // Mark the file input as touched when the user leaves the input field
    // If no file is selected after it is touched, trigger the validation error
    if (!this.selectedFile) {
      this.validationMessage = 'Event image is required.';
      this.isImageInvalid = true;
    }
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) {
      this.selectedFile = null;
      this.validationMessage = 'Event image is required.';
      this.isImageInvalid = true;
      return;
    }
    if (file && file.type.startsWith('image/')) {
      this.selectedFile = file;
      this.isImageInvalid = false; // Valid file
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.MyForm.patchValue({ EventImage: e.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      this.validationMessage = 'Only image files are allowed.';
      this.isImageInvalid = true;
    }
  }


  submitForm() {
    if (!this.selectedFile) {
      this.validationMessage = 'Event image is required.';
      this.isImageInvalid = true;
      return;
    }
    if (this.MyForm.invalid || this.isImageInvalid) {
      this.MyForm.markAllAsTouched();
      return;
    }
    alert('Event Created Successfully!');
    const newEvent = this.MyForm.value;

    console.log(newEvent);

    this.sharedService.addShow(newEvent);

    this.MyForm.reset();
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }


}
