import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() pageActive : string = ''
  @Input() pageActive2 : string = ''
  @Input() pageActive3 : string = ''
  @Input() pageActive4 : string = ''


}
