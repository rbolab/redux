import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SimulationService} from "../../../simulation.service";
import {Store} from "redux";
import {IAppState} from "../../../store/simulation.store";
import {NgRedux} from "@angular-redux/store";

@Component({
  selector: 'simulation-wizard-create-step-3',
  templateUrl: 'simulation-wizard-create-step-3.component.html',
  styleUrls: ['./simulation-wizard-create-step-3.component.css']
})

export class SimulationWizardCreateStep3Component implements OnInit, OnDestroy {

  constructor(public simulationService: SimulationService,
              private router: Router,
              private ngRedux: NgRedux<IAppState>) {
  }

  submit() {
    this.simulationService.addSimulation(this.ngRedux.getState().simulation);
    this.router.navigateByUrl('simulations');
  }

  back() {
    this.router.navigateByUrl('simulation/create/step2');
  }

  ngOnInit() { }

  ngOnDestroy(): void { }

}
