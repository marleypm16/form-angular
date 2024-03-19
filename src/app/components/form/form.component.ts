import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/buttonSubmit.component';
import { Router } from '@angular/router';
import { User } from '../../user';

type showError = 'show' | 'notShow';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user!: User;
  profileForm!: FormGroup;
  errorMessage: showError = 'notShow';
  pageActive: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    //Verify if userString exists
    if (userString) {
      this.user = JSON.parse(userString) as User;
    } else {
      this.user = { userName: '', email: '', phoneNumber: '' };
    }
    //FormGroup Creation
    this.profileForm = new FormGroup({
      userName: new FormControl(this.user.userName, [Validators.required, Validators.maxLength(15), Validators.minLength(5)]),
      email: new FormControl(this.user.email, [Validators.email, Validators.required]),
      phoneNumber: new FormControl(this.user.phoneNumber, [Validators.required, this.phoneNumberValidator])
    });
  }

  //get values of inputs
  get userName() {
    return this.profileForm.get('userName')!;
  }
  get email() {
    return this.profileForm.get('email')!;
  }
  get phoneNumber() {
    return this.profileForm.get('phoneNumber')!;
  }

  submit() {
    //verify if form is valid
    if (this.profileForm.invalid) {
      this.errorMessage = 'show';
      return;
    }

    //store user in localstorage
    const user: User = {
      userName: this.userName.value,
      email: this.email.value,
      phoneNumber: this.phoneNumber.value
    };
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['form2']);
  }

  //validates if the phonenumber has 11 characteres and only numbers
  phoneNumberValidator(control: FormControl): { [s: string]: boolean } | null {
    const phoneNumberPattern = /^[0-9]{11}$/;
    if (!phoneNumberPattern.test(control.value)) {
      return { invalidPhoneNumber: true };
    }
    return null;
  }
}
