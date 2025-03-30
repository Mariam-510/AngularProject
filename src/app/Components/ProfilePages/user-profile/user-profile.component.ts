import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { RouterModule ,Router} from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [ReactiveFormsModule,RouterModule,CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  userImage: string = 'images/Home/user.jpeg';  

  constructor(private router:Router)
  {

  }
  MyForm = new FormGroup(
    {
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
  ngOnInit(): void {
    this.MyForm.setValue({
      firstName: 'Shahd',
      lastName: 'Abdalla',
      email: 'Shahd@gmail.com',
      password: 'Ma123456@', 
      confirmPassword:'Ma12345@',
      phoneNum: '01144756069'
    });
  }
 
  uploadImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';

    input.onchange = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.userImage = e.target?.result as string;
        };
        reader.readAsDataURL(file);
      }
    };

    input.click();
  }
 

  register() {
    if (this.MyForm.invalid) {
      alert("Please fill in all required fields correctly.");
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
