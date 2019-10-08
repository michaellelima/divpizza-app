import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'add-pizza', loadChildren: './add-pizza/add-pizza.module#AddPizzaPageModule' },
  { path: 'edit-pizza/:id', loadChildren: './edit-pizza/edit-pizza.module#EditPizzaPageModule' },
  { path: 'comprar-pizza/:id', loadChildren: './comprar-pizza/comprar-pizza.module#ComprarPizzaPageModule' },
  { path: 'finalizar-pizza/:id/:divisor', loadChildren: './finalizar-pizza/finalizar-pizza.module#FinalizarPizzaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
