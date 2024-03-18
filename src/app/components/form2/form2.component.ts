import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { Plano } from '../../plano';
type yearMonth = 'month' | 'year'
@Component({
  selector: 'app-form2',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FooterComponent,HeaderComponent],
  templateUrl: './form2.component.html',
  styleUrl: './form2.component.css'
})
export class Form2Component {
  planForm! :FormGroup;
  pageActive : string = ''
  yearMonth : yearMonth = 'month'
  price! :number
  tipo!: string;
  buttonClicked : boolean = false
  showDiv : string = 'notshow'
  @Input() priceArcade : number = 9
  @Input() priceAdvanced : number = 12
  @Input() pricePro : number = 15
  

  constructor(
    private router: Router

    ){
      this.planForm = new FormGroup({ })
    }

   
  // update prices
  changePlan(){
    if(this.yearMonth == 'month'){
      this.yearMonth = 'year'
      this.priceAdvanced = this.priceAdvanced * 10
      this.priceArcade = this.priceArcade * 10
      this.pricePro = this.pricePro * 10
      return
    }
    if(this.yearMonth == 'year'){
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
    this.tipo = plan
    this.price = price
  }
  submit(){
    if(this.buttonClicked === false){
      this.showDiv = 'show'
      return
    }

    //
    const plano : Plano = {
      typePlan : this.tipo,
      yearMonthChoice:this.yearMonth,
      price : this.price,

    }
    localStorage.setItem('plano',JSON.stringify(plano))

    this.router.navigate(['form3'],{queryParams : {tipo : this.tipo,pagamesano : this.yearMonth,price : this.price}})
  }

  goback(){
    this.router.navigate(['/'])
  }
}
