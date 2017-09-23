import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Simulation} from "./model/simulation";
import {SimulationService} from "./simulation.service";
import {dispatch, NgRedux, select} from "@angular-redux/store";
import {IAppState} from "./store/simulation.store";
import {SAVE_SIMULATION} from "./store/simulation.actions";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-simulation-list',
  templateUrl: './simulation-list.component.html'
})
export class SimulationListComponent implements OnInit {

  simulationFormGroup: FormGroup;
  currencies = ['EUR', 'USD', 'CHF'];

  @select()
  simulation$: Observable<Simulation>;

  constructor(private fb: FormBuilder,
              private simulationService: SimulationService) {

    this.simulationFormGroup = this.fb.group({
      'name': ['', Validators.required],
      'currency': ['', Validators.required]
    });
  }

  @dispatch()
  saveSimulation = () => ({type: SAVE_SIMULATION, payload: this.simulationFormGroup.value});

  createSimulation = () => ({});

  onSubmit() {
    this.saveSimulation();
    this.simulationService.saveSimulation(this.simulationFormGroup.value);
  }

  ngOnInit() {
    this.simulation$.subscribe(simulation => {
      this.simulationFormGroup.setValue(Object.assign({}, simulation));
    });

  }

}
