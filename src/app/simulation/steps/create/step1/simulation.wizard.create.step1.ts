import {Component, OnDestroy, OnInit} from '@angular/core';
import {Simulation} from "../../../model/simulation";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SimulationService} from "../../../simulation.service";
import {ISubscription} from "rxjs/Subscription";


@Component({
  selector: 'simulation-wizard-create-step-1',
  templateUrl: './simulation-wizard-create-step-1.component.html',
  styleUrls: ['./simulation-wizard-create-step-1.component.css']
})

export class SimulationWizardCreateStep1Component implements OnInit, OnDestroy {

  step1FormGroup: FormGroup;

  currencies = ['EUR', 'USD', 'CHF'];

  private subscription: ISubscription;

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
    this.subscription = this.simulationService.simulation$.subscribe(simulation => {
      this.initForm(simulation);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
