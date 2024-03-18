import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
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
  usuario!: User;
  profileForm!: FormGroup;
  errorMessage: showError = 'notShow';
  pageActive: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    //Verify if userString exists
    if (usuarioString) {
      this.usuario = JSON.parse(usuarioString) as User;
    } else {
      this.usuario = { name: '', email: '', phoneNumber: '' };
    }
    //FormGroup Creation
    this.profileForm = new FormGroup({
      user: new FormControl(this.usuario.name, [Validators.required, Validators.maxLength(15), Validators.minLength(5)]),
      email: new FormControl(this.usuario.email, [Validators.email, Validators.required]),
      phoneNumber: new FormControl(this.usuario.phoneNumber, [Validators.required, this.phoneNumberValidator])
    });
  }

  //get values
  get user() {
    return this.profileForm.get('user')!;
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

    //send user to local storage
    const user: User = {
      name: this.user.value,
      email: this.email.value,
      phoneNumber: this.phoneNumber.value
    };
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['form2']);
  }

  //validate if phonenumber has 11 characteres and only numbers
  phoneNumberValidator(control: FormControl): { [s: string]: boolean } | null {
    const phoneNumberPattern = /^[0-9]{11}$/;
    if (!phoneNumberPattern.test(control.value)) {
      return { invalidPhoneNumber: true };
    }
    return null;
  }
}
