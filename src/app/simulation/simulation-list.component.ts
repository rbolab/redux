import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {select} from "@angular-redux/store";
import {SimulationListType} from "./api/simulation.store";
import {Observable} from "rxjs/Observable";
import {SimulationAPIActions} from "./api/simulation.actions";

@Component({
  selector: 'app-simulation-list',
  templateUrl: './simulation-list.component.html',
  styleUrls: ['./simulation-list.component.scss']
})
export class SimulationListComponent implements OnInit {

  @select()
  simulations$: Observable<SimulationListType>;

  constructor(private actions: SimulationAPIActions,
              private router: Router) {
  }

  createSimulation() {
    this.actions.initializeSimulationWizard();
    this.router.navigateByUrl('simulation/create/step1');
  };

  ngOnInit() {
    this.actions.loadSimulations();
  }

}
