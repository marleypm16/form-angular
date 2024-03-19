import { Component,Input,OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/buttonSubmit.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Extra, Plano } from '../../plano';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form3',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './selectExtrasForm.component.html',
  styleUrl: './selectExtrasForm.component.css'
})
export class selectExtrasForm implements OnInit {
  buttonClicked : boolean = false
  payMonthlyOrYearly! : string;
  showDiv : string = 'notshow'
  extras : Extra[] = []
  checkedOptions: boolean[] = [false, false, false]; // Array for control  buttons  
  @Input() stringTypePlan! : string
  @Input() priceExtraOnline : number = 1
  @Input() pricelargerStorageAndCustomiceProfileService : number = 2

  constructor(private router:Router,private route : ActivatedRoute){ }

  ngOnInit(){
    this.route.queryParams.subscribe(params =>{
      this.payMonthlyOrYearly = params['payYearlyOrMonthly'];
    })
    if(this.payMonthlyOrYearly == 'year'){
      this.priceExtraOnline = this.priceExtraOnline * 10
      this.pricelargerStorageAndCustomiceProfileService = this.pricelargerStorageAndCustomiceProfileService * 10
      this.stringTypePlan = 'yr'
    }
    else{
      this.stringTypePlan = 'mo'
    }
  }
  addExtra(extra: Extra, index: number) {
    this.checkedOptions[index] = !this.checkedOptions[index]; // update selected button 
    const extraIndex = this.extras.findIndex(e => e.nome === extra.nome); // Check if the add-on is already in the list
    if (extraIndex !== -1) {
      // If the add-on is already in the list, remove it
      this.extras.splice(extraIndex, 1);
    } else {
      // if the add-on not in the list add 
      this.extras.push(extra);
    }
  }
  
  
  submit(){
    localStorage.setItem('extra',JSON.stringify(this.extras))
    this.router.navigate(['form4'])
  }
  goback(){
    this.router.navigate(['form2'])
  }
}
