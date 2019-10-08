import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FinalizarPizzaPage } from './finalizar-pizza.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizarPizzaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FinalizarPizzaPage]
})
export class FinalizarPizzaPageModule {}
