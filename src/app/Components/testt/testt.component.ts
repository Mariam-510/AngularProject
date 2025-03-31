import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-testt',
  standalone: true,  // Ensure standalone component if used that way
  imports: [CommonModule, RouterModule, ReactiveFormsModule],  // ✅ Import ReactiveFormsModule
  templateUrl: './testt.component.html',
  styleUrl: './testt.component.css'
})
export class TesttComponent {
  scheduleForm: FormGroup;
  daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private fb: FormBuilder) {
    this.scheduleForm = this.fb.group({
      schedules: this.fb.array([this.createSchedule()])  // Start with one empty row
    });
  }

  get scheduleControls() {
    return this.scheduleForm.get('schedules') as FormArray;
  }

  createSchedule(): FormGroup {
    return this.fb.group({
      date: ['', Validators.required],
      day: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }

  addSchedule() {
    this.scheduleControls.push(this.createSchedule());
  }

  removeSchedule(index: number) {
    this.scheduleControls.removeAt(index);
  }

  submitForm() {
    if (this.scheduleForm.valid) {
      console.log('Schedules:', this.scheduleForm.value.schedules);
      alert('Schedules saved successfully!');
    } else {
      alert('Please fill all required fields.');
    }
  }
}
