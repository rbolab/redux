import {Component, OnInit} from '@angular/core';
import {Simulation} from "../../../model/simulation";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SimulationService} from "../../../simulation.service";


@Component({
  selector: 'simulation-wizard-create-step-2',
  templateUrl: 'simulation-wizard-create-step-2.component.html'
})

export class SimulationWizardCreateStep2Component implements OnInit {

  step2FormGroup: FormGroup;

  methodologies = ['Fund', 'Program', 'Index'];

  constructor(private fb: FormBuilder,
              private simulationService: SimulationService,
              private router: Router) {
  }

  initForm(simulation: Simulation) {
    this.step2FormGroup = this.fb.group({
      'fees': [simulation.fees, Validators.required],
      'methodology': [simulation.methodology, Validators.required]
    });
  }

  next() {
    this.simulationService.updateSimulation(this.step2FormGroup.value);
    this.router.navigateByUrl('simulation/create/step3');
  }

  back() {
    this.simulationService.updateSimulation(this.step2FormGroup.value);
    this.router.navigateByUrl('simulation/create/step1');
  }

  ngOnInit() {
    this.simulationService.simulation$.subscribe(simulation => {
      this.initForm(simulation);
    });
  }

}
