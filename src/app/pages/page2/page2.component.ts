import { Component } from '@angular/core';
import { selectPlanForm } from '../../components/form2/selectPlanForm.component';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [selectPlanForm],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

}
