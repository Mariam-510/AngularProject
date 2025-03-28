import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {


  registerForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[A-Za-z]+$/)
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/^[A-Za-z]+$/)
    ]),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/)
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
    const clientId = '329985024640-j1e42v80vulq0c0pqom75puhm75c4f4i.apps.googleusercontent.com';
    const redirectUri = 'http://localhost:4200/home';
    const scope = 'email profile openid';
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;

    window.location.href = authUrl;
  }
}

