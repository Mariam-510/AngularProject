import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService } from '../../../Services/toastr.service';

@Component({
  selector: 'app-add-schedule',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],  // ✅ Import ReactiveFormsModule
  templateUrl: './add-schedule.component.html',
  styleUrl: './add-schedule.component.css'
})
export class AddScheduleComponent {
  scheduleForm: FormGroup;
  daysOfWeek: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
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
      this.toastr.success('Schedules saved successfully!');

      // Reset the form and reinitialize with one empty schedule
      this.scheduleForm.reset();
      this.scheduleForm.setControl('schedules', this.fb.array([this.createSchedule()]));
    } else {
      this.toastr.error('Please fill all required fields.');
    }
  }

}
