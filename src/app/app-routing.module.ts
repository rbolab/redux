import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundsComponent } from "./funds/funds.component";
import {CarsListComponent} from "./cars/cars-list.component";
import {CarComponent} from "./cars/car.component";

const routes = [
  //{ path: '', redirectTo: '/funds', pathMatch: 'full' },
  {path: 'funds', component: FundsComponent},
  {path: 'funds/:id', component: FundsComponent},

  {path: 'cars', component: CarsListComponent},
  {path: 'cars/:id', component: CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
