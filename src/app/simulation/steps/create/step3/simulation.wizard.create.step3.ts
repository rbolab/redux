import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SimulationService} from "../../../simulation.service";

@Component({
  selector: 'simulation-wizard-create-step-3',
  templateUrl: 'simulation-wizard-create-step-3.component.html',
  styleUrls: ['./simulation-wizard-create-step-3.component.css']
})

export class SimulationWizardCreateStep3Component implements OnInit, OnDestroy {

  constructor(public simulationService: SimulationService,
              private router: Router) {
  }

  submit() {
    this.simulationService.saveSimulation();
    this.router.navigateByUrl('simulations');
  }

  back() {
    this.router.navigateByUrl('simulation/create/step2');
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
