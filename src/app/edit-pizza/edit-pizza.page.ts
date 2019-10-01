import { Component, OnInit, CompilerFactory } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.page.html',
  styleUrls: ['./edit-pizza.page.scss'],
})
export class EditPizzaPage {

  nomePizza: string = ""
  descricaoPizza: string = ""
  precoPizza: string = ""
  idPizza: string = ""
  pizzaPronta: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private nav: NavController) { }



  ionViewDidEnter() {
    this.idPizza = this.activatedRoute.snapshot.params.id
    this.recuperarPizza(this.idPizza)

  }

  recuperarPizza(idPizza) {
    console.log(idPizza)

    let pizzaString = localStorage.getItem(idPizza)  //localStorage só salva string
    let pizzaObjeto = JSON.parse(pizzaString)
    console.log(pizzaObjeto)

    setTimeout(() => {
      this.pizzaPronta = true
      setTimeout(() => {
        this.nomePizza = pizzaObjeto.nomePizza
        this.descricaoPizza = pizzaObjeto.descricaoPizza
        this.precoPizza = pizzaObjeto.precoPizza
      }, 100)
    }, 1000)
  }

  editar(form) {
    let dadosPizza = form.value
    dadosPizza.id = this.idPizza
    let dadosString = JSON.stringify(dadosPizza)
    localStorage.setItem(this.idPizza.toString(), dadosString)
    this.voltarParaHome()

  }

  voltarParaHome() {
    this.nav.back()
  }
}
