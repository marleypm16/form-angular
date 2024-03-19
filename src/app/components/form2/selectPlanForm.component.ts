import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/buttonSubmit.component';
import { HeaderComponent } from '../header/header.component';
import { Plano } from '../../plano';
type yearMonth = 'month' | 'year'
@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FooterComponent,HeaderComponent],
  templateUrl: './selectPlanForm.component.html',
  styleUrl: './selectPlanForm.component.css'
})
export class selectPlanForm {
  planForm! :FormGroup;
  pageActive : string = ''
  yearMonth : yearMonth = 'month'
  @Input() stringTypePlan : string = 'mo'

  price! :number
  type!: string;
  buttonClicked : boolean = false
  showDiv : string = 'notshow'
  @Input() priceArcade : number = 9
  @Input() priceAdvanced : number = 12
  @Input() pricePro : number = 15
  

  constructor(private router: Router){}

    

   
  // update prices
  changePlan(){
    if(this.yearMonth == 'month'){
      this.stringTypePlan = 'yr'
      this.yearMonth = 'year'
      this.priceAdvanced = this.priceAdvanced * 10
      this.priceArcade = this.priceArcade * 10
      this.pricePro = this.pricePro * 10
      return
    }
    if(this.yearMonth == 'year'){
      this.stringTypePlan = 'mo'
      this.yearMonth = 'month'
      this.priceAdvanced = this.priceAdvanced / 10
      this.priceArcade = this.priceArcade / 10
      this.pricePro = this.pricePro / 10
      return    
    }

  }
  // get which plan is selected and return if button has clicked
  returnIfButtonHasClicked(plan : string,price : number){
    this.buttonClicked = true
    this.type = plan
    this.price = price
  }
  submit(){
    if(this.buttonClicked === false){
      this.showDiv = 'show'
      return
    }

    // send plan to localstorage
    const plan : Plano = {
      typePlan : this.type,
      yearMonthChoice:this.yearMonth,
      price : this.price,

    }
    localStorage.setItem('plan',JSON.stringify(plan))

    this.router.navigate(['form3'],{queryParams : {payYearlyOrMonthly : this.yearMonth}})
  }

  goback(){
    this.router.navigate(['/'])
  }
}
