import {Component, OnDestroy, OnInit} from '@angular/core';
import {Simulation} from "../../../model/simulation";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SimulationService} from "../../../simulation.service";
import {ISubscription} from "rxjs/Subscription";


@Component({
  selector: 'simulation-wizard-create-step-2',
  templateUrl: 'simulation-wizard-create-step-2.component.html',
  styleUrls: ['./simulation-wizard-create-step-3.component.css']
})

export class SimulationWizardCreateStep2Component implements OnInit, OnDestroy {

  step2FormGroup: FormGroup;

  methodologies = ['Fund', 'Program', 'Index'];
  private subscription: ISubscription;

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
    this.subscription = this.simulationService.simulation$.subscribe(simulation => {
      this.initForm(simulation);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
