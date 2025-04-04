import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../Services/auth.service';
import { ToastrService } from '../../../Services/toastr.service';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  userImage: string = 'Images/Home/user.jpeg';
  currentUser: any;
  MyForm!: FormGroup;
  
  constructor(private router: Router, private _authService: AuthService, private toastr: ToastrService) {}

  ngOnInit(): void {
    // this.MyForm.setValue({
    //   firstName: 'Shahd',
    //   lastName: 'Abdalla',
    //   email: 'Shahd@gmail.com',
    //   password: 'Ma123456@',
    //   confirmPassword: 'Ma12345@',
    //   phoneNum: '01144756069'
    // });

    this.currentUser = this._authService.currentUser;
    this._authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });

    this._initializeForm();
  }

  private _initializeForm() {
    this.MyForm = new FormGroup(
    {
      firstName: new FormControl(this.currentUser.firstName, [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[A-Za-z]+$/)
      ]),
      lastName: new FormControl(this.currentUser.lastName? this.currentUser.lastName : "", [
        // Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[A-Za-z]+$/)
      ]),
      email: new FormControl(this.currentUser.email, [
        Validators.required,
        Validators.pattern(/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      phoneNum: new FormControl(this.currentUser.phoneNum, [Validators.required, Validators.pattern('^[0-9]{11}$')]),
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
}
  

  uploadImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'Images/*';

    input.onchange = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // this.userImage = e.target?.result as string;
          this.currentUser.avatar = e.target?.result; // ✅ Update the image shown

        };
        reader.readAsDataURL(file);
      }
    };

    input.click();
  }


  register() {
    if (this.MyForm.invalid) {
      this.toastr.error('Please fill in all required fields correctly.');
      return;
    }

    let userObj = {
      firstName: this.MyForm.value.firstName,
      lastName: this.MyForm.value.lastName,
      email: this.MyForm.value.email,
      phoneNum: this.MyForm.value.phoneNum,
      password: this.MyForm.value.password,
      confirmPassword: this.MyForm.value.confirmPassword
    };

    console.log("User Updated SuccessFully:", userObj);

    this.MyForm.reset();
  }
}
