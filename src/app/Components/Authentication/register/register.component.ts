import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private _authService: AuthService) { }

  registerForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[A-Za-z]+$/)
    ]),
    lastName: new FormControl("", [
      // Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[A-Za-z]+$/)
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/)
    ]),
    phoneNum: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{11}$')]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10),
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&])[A-Za-z\d@#$!%*?&]{6,10}$/)

    ]),
    confirmPassword: new FormControl("", [
      Validators.required
    ])
  },
  );

  register() {
    if (this.registerForm.invalid) {
      alert("Please fill in all required fields correctly.");
      return;
    }

    let userObj = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      phoneNum: this.registerForm.value.phoneNum,
      password: this.registerForm.value.password,
      confirmPassword: this.registerForm.value.confirmPassword
    };

    console.log("User Registered:", userObj);

    this.registerForm.reset();
  }
  googleLogin() {
    this._authService.googleLogin();
  }
}

