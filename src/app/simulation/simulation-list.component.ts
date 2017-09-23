import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Simulation} from "./model/simulation";
import {SimulationService} from "./simulation.service";

@Component({
  selector: 'app-simulation-list',
  templateUrl: './simulation-list.component.html'
})
export class SimulationListComponent implements OnInit {

  simulationFormGroup: FormGroup;
  simulation: Simulation;
  currencies = ['EUR', 'USD', 'CHF'];

  constructor(private fb: FormBuilder, private simulationService: SimulationService) {}

  onSubmit(){
    this.simulationService.saveSimulation(this.simulationFormGroup.value);
  }

  ngOnInit() {
    this.simulation = {name: 'test', currency: 'USD'};

    this.simulationFormGroup = this.fb.group({
      'name': [this.simulation.name, Validators.required],
      'currency': [this.simulation.currency, Validators.required]
    });
  }

}
