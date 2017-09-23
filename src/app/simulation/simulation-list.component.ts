import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-simulation-list',
  templateUrl: './simulation-list.component.html'
})
export class SimulationListComponent implements OnInit {

  constructor(private _router: Router) {
  }


  ngOnInit() {

  }
}
