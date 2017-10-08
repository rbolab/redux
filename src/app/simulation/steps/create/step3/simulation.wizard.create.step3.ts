import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "redux";

import {NgRedux} from "@angular-redux/store";
import {SimulationAPIActions} from "../../../api/simulation.actions";
import {IAppState} from "../../../../store/model";

@Component({
  selector: 'simulation-wizard-create-step-3',
  templateUrl: 'simulation-wizard-create-step-3.component.html',
  styleUrls: ['./simulation-wizard-create-step-3.component.css']
})

export class SimulationWizardCreateStep3Component implements OnInit, OnDestroy {

  constructor(public actions: SimulationAPIActions,
              private router: Router,
              private ngRedux: NgRedux<IAppState>) {
  }

  submit() {
    this.actions.addSimulation(this.ngRedux.getState().simulation);
    this.router.navigateByUrl('simulations');
  }

  back() {
    this.router.navigateByUrl('simulation/create/step2');
  }

  ngOnInit() { }

  ngOnDestroy(): void { }

}
