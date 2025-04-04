import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrService } from '../../../Services/toastr.service';

@Component({
  selector: 'app-add-ticket',
  imports: [CommonModule, RouterModule, ReactiveFormsModule],  // ✅ Import ReactiveFormsModule
  templateUrl: './add-ticket.component.html',
  styleUrl: './add-ticket.component.css'
})
export class AddTicketComponent {
  ticketForm: FormGroup;
  charCounts: number[] = []; // Array to track character count for each ticket description

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.ticketForm = this.fb.group({
      tickets: this.fb.array([]) // Start with an empty form array
    });
    this.addTicket(); // Initialize with one empty ticket
  }

  get ticketControls() {
    return this.ticketForm.get('tickets') as FormArray;
  }

  createTicket(): FormGroup {
    return this.fb.group({
      type: ['', Validators.required],       // Required ticket type
      price: ['', [Validators.required, Validators.min(1)]], // Required price, must be >= 1
      description: ['', [Validators.maxLength(150)]] // Limit description to 150 characters
    });
  }

  addTicket() {
    this.ticketControls.push(this.createTicket());
    this.charCounts.push(0); // Initialize character count for new ticket
  }

  removeTicket(index: number) {
    this.ticketControls.removeAt(index);
    this.charCounts.splice(index, 1); // Remove character count when ticket is removed
  }

  updateCharacterCount(index: number) {
    const desc = this.ticketControls.at(index).get('description')?.value || '';
    this.charCounts[index] = desc.length;
  }

  submitForm() {
    if (this.ticketForm.valid) {
      console.log('Booked Tickets:', this.ticketForm.value);
      this.toastr.success('Tickets saved successfully!');
      // Reset the form and reinitialize with one empty ticket
      this.ticketForm.reset();
      this.ticketForm.setControl('tickets', this.fb.array([]));
      this.charCounts = [];
      this.addTicket(); // Add a new empty ticket after reset
    } else {
      this.toastr.error('Form is invalid.');
    }
  }

}
