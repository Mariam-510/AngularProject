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

  constructor(private fb: FormBuilder) {
    this.scheduleForm = this.fb.group({
      schedules: this.fb.array([])
    });

    this.initializeSchedules();
  }

  get scheduleControls() {
    return this.scheduleForm.get('schedules') as FormArray;
  }

  createSchedule(date = '', day = '', time = ''): FormGroup {
    return this.fb.group({
      date: [date, Validators.required],
      day: [day, Validators.required],
      time: [time, Validators.required]
    });
  }

  addSchedule() {
    this.scheduleControls.push(this.createSchedule());
  }

  removeSchedule(index: number) {
    this.scheduleControls.removeAt(index);
  }

  initializeSchedules() {
    const defaultSchedules = [
      { date: '2025-03-25', day: 'Monday', time: '10:00 AM - 12:00 PM' }
    ];

    defaultSchedules.forEach(schedule => {
      this.scheduleControls.push(this.createSchedule(schedule.date, schedule.day, schedule.time));
    });
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
