import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './buttonSubmit.component.html',
  styleUrl: './buttonSubmit.component.css'
})
export class FooterComponent {
  @Input ('text') text : string = ''
}
