import { Component,Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  @Input() html: number = 5;
  @Output() mudouValor = new EventEmitter<number>();

  
  color: string = 'MediumTurquoise';
  @Input('nome') nomeSkill : string='';
  valorActual: string="";
  valorSalvo: string="";


 

  constructor() {}
  ngOnInit(): void {}



  decrement(){
    if(this.html>5)
         { this.html -=5;
          this.mudouValor.emit(this.html);
          }
  }

  increment(){
    if(this.html<100)
          {
            this.html +=5;
          this.mudouValor.emit(this.html)
          }
  }




  onMudouValor(value:number){
  let  le = this.mudouValor.emit(value);
console.log(le, "evento");

  }

//   salvar(valor:string){
// this.valorSalvo=valor;
//   }

  // onKeyUp(evento:KeyboardEvent){
  //   console.log("onKeyUp called");


  //  this.valorActual = (<HTMLInputElement>evento.target).value;
  //   console.log("onKeyUp finished");

  // }
}
