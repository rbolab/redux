import {Component, OnDestroy, OnInit} from '@angular/core';
import {ISimulation} from "../../../model/simulation";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ISubscription} from "rxjs/Subscription";
import {SimulationAPIActions} from "../../../api/simulation.actions";


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
              private actions: SimulationAPIActions,
              private router: Router) {
  }

  initForm(simulation: ISimulation) {
    this.step2FormGroup = this.fb.group({
      'fees': [simulation.fees, Validators.required],
      'methodology': [simulation.methodology, Validators.required]
    });
  }

  next() {
    this.actions.registerSimulationWizardStep(this.step2FormGroup.value);
    this.router.navigateByUrl('simulation/create/step3');
  }

  back() {
    this.actions.registerSimulationWizardStep(this.step2FormGroup.value);
    this.router.navigateByUrl('simulation/create/step1');
  }

  ngOnInit() {
    this.subscription = this.actions.simulation$.subscribe(simulation => {
      this.initForm(simulation);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
