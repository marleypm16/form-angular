import { Component,OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Router,ActivatedRoute } from '@angular/router';
import { Extra, Plano } from '../../plano';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-form4',
  standalone: true,
  imports: [HeaderComponent,CommonModule],
  templateUrl: './form4.component.html',
  styleUrl: './form4.component.css'
})
export class Form4Component implements OnInit{
  plano! :Plano;
  extras :Extra[] = []
  price  : number = 0
  typePlan :string = ''
  choice: string = ''
  totalPrice : number = 0
  constructor(private router:Router,private route : ActivatedRoute){ }

  ngOnInit(): void {
    const planoString = localStorage.getItem('plano');
    const extraString = localStorage.getItem('extra')
    this.plano = JSON.parse(planoString!) as Plano;
    this.extras = JSON.parse(extraString!) as Extra[]
    console.log(this.plano);
    this.choice = this.plano.yearMonthChoice
    this.typePlan = this.plano.typePlan
    this.price = this.plano.price
    this.totalPrice = this.calculateTotalPrice(this.price)   
  }

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
