import {Component, OnInit} from '@angular/core';
import {Simulation} from "../../../model/simulation";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SimulationService} from "../../../simulation.service";


@Component({
  selector: 'simulation-wizard-create-step-1',
  templateUrl: 'simulation-wizard-create-step-1.component.html'
})

export class SimulationWizardCreateStep1Component implements OnInit {

  step1FormGroup: FormGroup;

  currencies = ['EUR', 'USD', 'CHF'];

  constructor(private fb: FormBuilder,
              private simulationService: SimulationService,
              private router: Router) { }

  initForm(simulation: Simulation){
    this.step1FormGroup = this.fb.group({
      'name': [simulation.name, Validators.required],
      'currency': [simulation.currency, Validators.required]
    });
  }

  next() {
    this.simulationService.updateSimulation(this.step1FormGroup.value);
    this.router.navigateByUrl('simulation/create/step2');
  }

  ngOnInit() {
    this.simulationService.simulation$.subscribe(simulation => {
      this.initForm(simulation);
    });
  }

}
