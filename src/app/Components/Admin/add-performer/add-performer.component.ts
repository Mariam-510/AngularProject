import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService } from '../../../Services/toastr.service';

@Component({
  selector: 'app-add-performer',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],  // ✅ Import ReactiveFormsModule
  templateUrl: './add-performer.component.html',
  styleUrl: './add-performer.component.css'
})
export class AddPerformerComponent {
  performerForm: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.performerForm = this.fb.group({
      performers: this.fb.array([this.createPerformer()])
    });
  }

  get performerControls() {
    return this.performerForm.get('performers') as FormArray;
  }

  createPerformer(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      image: [null, Validators.required] // Image as file input
    });
  }

  addPerformer() {
    this.performerControls.push(this.createPerformer());
  }

  removePerformer(index: number) {
    this.performerControls.removeAt(index);
  }

  onFileChange(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      this.performerControls.at(index).patchValue({ image: file });
    }
  }

  resetFile(index: number, fileInput: any) {
    if (fileInput) {
      fileInput.value = '';  // Reset file input
    }
    this.performerControls.at(index).patchValue({ image: null }); // Clear form control value
  }


  submitForm() {
    if (this.performerForm.valid) {
      console.log('Performers:', this.performerForm.value.performers);
      this.toastr.success('Performers saved successfully!');

      // Reset the form
      this.performerForm.reset();

      // Reset all file inputs
      const fileInputs = document.querySelectorAll<HTMLInputElement>('input[type="file"]');
      fileInputs.forEach(input => input.value = '');

    } else {
      alert('Please fill all required fields.');
    }
  }

}
