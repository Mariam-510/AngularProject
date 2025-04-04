import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../../Services/shared.service';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  mockUserDetails: any;
  mockAdminDetails: any;


  constructor(
    private _shared: SharedService,
    private router: Router,
    private _authService: AuthService
    
    
  ) {console.log(this.Loginform);}


  ngOnInit(): void {
    this.mockUserDetails = this._authService.mockUser;
    this.mockAdminDetails = this._authService.mockAdmin;
  }


  Loginform = new FormGroup(
    {
      email: new FormControl('', [Validators.required,
      Validators.pattern(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      pass: new FormControl('', [Validators.required]),

    },

  );


  // Add this helper method to show validation errors
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  invalidCredentials = false;

  login() {
    if (this.Loginform.invalid) {
      this.markFormGroupTouched(this.Loginform);
      alert("Please fill in all required fields correctly.");
      return;
    }

    const email = this.Loginform.value.email!;
    const password = this.Loginform.value.pass!;

    if (this._authService.Userlogin(email, password)) {
      this.router.navigate(['/']);
      console.log('Logged in as:', this._authService.currentUser?.name);
    }
    else if (this._authService.Adminlogin(email, password)) {
      this.router.navigate(['/admin']);
      console.log('Logged in as:', this._authService.currentUser?.name);
    } 
    else {
      // alert('Invalid credentials\nUse:\nEmail: john@test.com\nPassword: Test@123');
        this.invalidCredentials = true;
    }
  }
  googleLogin() {
    this._authService.googleLogin();
  }
  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
