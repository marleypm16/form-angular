import { Component,OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router,ActivatedRoute } from '@angular/router';
import { Extra, Plano } from '../../plano';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-form4',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class Review implements OnInit{
  plan! :Plano;
  extras :Extra[] = []
  price  : number = 0
  typePlan :string = ''
  choice: string = ''
  totalPrice : number = 0
  constructor(private router:Router,private route : ActivatedRoute){ }

  ngOnInit(): void {
    const planString = localStorage.getItem('plan');
    const extraString = localStorage.getItem('extra')
    this.plan = JSON.parse(planString!) as Plano;
    this.extras = JSON.parse(extraString!) as Extra[]
    console.log(this.plan);
    this.choice = this.plan.yearMonthChoice
    this.typePlan = this.plan.typePlan
    this.price = this.plan.price
    this.totalPrice = this.calculateTotalPrice(this.price)   
  }
  //sum all values
  calculateTotalPrice(totalPrice : number) : number{
     totalPrice = Number(this.price)
    this.extras.forEach(extra =>{
      totalPrice+=extra.preco    
    })
    return totalPrice
  }

  submit(){
    localStorage.clear()
    this.router.navigate(['end-form'])

  }
  

}
