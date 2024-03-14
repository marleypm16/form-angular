import { Component,Input,OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Extra, Plano } from '../../plano';

@Component({
  selector: 'app-form3',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule],
  templateUrl: './form3.component.html',
  styleUrl: './form3.component.css'
})
export class Form3Component implements OnInit {
  buttonClicked : boolean = false
  tipo! : string;
  pagapormesouano! : string;
  price! : number
  showDiv : string = 'notshow'
  extras : Extra[] = []
  checkedOptions: boolean[] = [false, false, false]; // Array para controlar cada botão  
  @Input() stringTypePlan! : string
  @Input() priceExtraOnline : number = 1
  @Input() largerCustomiceService : number = 2

  constructor(private router:Router,private route : ActivatedRoute){ }

  ngOnInit(){
    this.route.queryParams.subscribe(params =>{
      this.tipo = params['tipo'];
      this.pagapormesouano = params['pagamesano'];
      this.price = params['price']
    })
    if(this.pagapormesouano == 'year'){
      this.priceExtraOnline = this.priceExtraOnline * 10
      this.largerCustomiceService = this.largerCustomiceService * 10
      this.stringTypePlan = 'yr'
    }
    else{
      this.stringTypePlan = 'mo'
    }
  }
  addExtra(extra : Extra,index : number){
    this.checkedOptions[index] = !this.checkedOptions[index]; // Atualiza o botão selecionado
    if(this.checkedOptions[index]){
      this.extras.push(extra)
    }
  }
  submit(){
    const plano : Plano = {
      typePlan : this.tipo,
      yearMonthChoice:this.pagapormesouano,
      price : this.price,
    }
    localStorage.setItem('plano',JSON.stringify(plano))
    localStorage.setItem('extra',JSON.stringify(this.extras))
    this.router.navigate(['form4'])
  }
  goback(){
    this.router.navigate(['form2'])
  }
}
