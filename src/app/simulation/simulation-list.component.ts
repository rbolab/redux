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

  @select()
  simulations$: Observable<Simulation[]>;

  constructor(private simulationService: SimulationService,
              private router: Router) {
  }

  createSimulation() {
    this.simulationService.resetSimulation();
    this.router.navigateByUrl('simulation/create/step1');
  };

  ngOnInit() {
  }

}
