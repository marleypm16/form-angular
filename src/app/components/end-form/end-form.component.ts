import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-end-form',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './end-form.component.html',
  styleUrl: './end-form.component.css'
})
export class EndFormComponent {
  constructor(private router:Router){ }

}
