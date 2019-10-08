import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finalizar-pizza',
  templateUrl: './finalizar-pizza.page.html',
  styleUrls: ['./finalizar-pizza.page.scss'],
})
export class FinalizarPizzaPage implements OnInit {

  cep:string
  constructor() { }
 
  ngOnInit() {
  }

  async buscarEndereco(){
    console.log(this.cep)
    fetch("https://viacep.com.br/ws/"+this.cep+"/json").then(function(dados){
        dados.json().then(function(endereco){
          console.log(endereco)
        })
   })
  }

}
