import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.page.html',
  styleUrls: ['./add-pizza.page.scss'],
})
export class AddPizzaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  salvar(pizza){
    console.log(pizza)
      const pizzaDados = pizza.value /*const quer dizer que essa variavel nao vai mudar*/
      console.log(pizzaDados)
  }

}
