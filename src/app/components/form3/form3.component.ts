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
  type! : string;
  pagapormesouano! : string;
  price! : number
  showDiv : string = 'notshow'
  extras : Extra[] = []
  checkedOptions: boolean[] = [false, false, false]; // Array para controlar cada botão  
  @Input() stringTypePlan! : string
  @Input() priceExtraOnline : number = 1
  @Input() largerStorageandCustomiceProfileService : number = 2

  constructor(private router:Router,private route : ActivatedRoute){ }

  ngOnInit(){
    this.route.queryParams.subscribe(params =>{
      this.type = params['type'];
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
  addExtra(extra: Extra, index: number) {
    this.checkedOptions[index] = !this.checkedOptions[index]; // Atualiza o botão selecionado
    const extraIndex = this.extras.findIndex(e => e.nome === extra.nome); // Verifica se o extra já está na lista
    if (extraIndex !== -1) {
      // Se o extra já estiver na lista, remova-o
      this.extras.splice(extraIndex, 1);
    } else {
      // Se o extra não estiver na lista, adicione-o
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
