import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundsComponent } from "./funds/funds.component";
import {CarsListComponent} from "./cars/cars-list.component";
import {CarComponent} from "./cars/car.component";
import {SimulationListComponent} from "./simulation/simulation-list.component";
import {SimulationWizardCreateStep1Component} from "./simulation/steps/create/step1/simulation.wizard.create.step1";
import {SimulationWizardCreateStep2Component} from "./simulation/steps/create/step2/simulation.wizard.create.step2";
import {SimulationWizardCreateStep3Component} from "./simulation/steps/create/step3/simulation.wizard.create.step3";

const routes = [
  //{ path: '', redirectTo: '/funds', pathMatch: 'full' },
  {path: 'funds', component: FundsComponent},
  {path: 'funds/:id', component: FundsComponent},

  {path: 'cars', component: CarsListComponent},
  {path: 'cars/:id', component: CarComponent},

  {path: 'simulations', component: SimulationListComponent},
  {path: 'simulation/create/step1', component: SimulationWizardCreateStep1Component},
  {path: 'simulation/create/step2', component: SimulationWizardCreateStep2Component},
  {path: 'simulation/create/step3', component: SimulationWizardCreateStep3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
