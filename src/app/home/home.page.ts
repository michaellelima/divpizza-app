import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  catalogo:Array<Object> = []

  ionViewDidEnter(){
      console.log('EXECUTOU O VIEW DID ENTER')
      this.catalogo.push({
        nome: 'Calabresa Gourmet',
        descricao:'queijo branco,calabresa,azeitona, cebola, azeite trufado paganini, manjericão e tomate seco',
        preco:'R$ 72,00'
      })
    }



}
