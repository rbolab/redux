import {NgModule} from '@angular/core';
import {NgRedux} from "@angular-redux/store";

import {rootReducer} from "./root.reducer";
import {createLogger} from 'redux-logger';
import {INITIAL_SIMULATION_WIZARD_STATE} from "../simulation/api/simulation.reducer";
import {IAppState} from "./model";
import {SimulationAPIEpics} from "../simulation/api/simulation.epics";


const INTIAL_APP_STATE = {
  currentStep: 1,
  simulation: INITIAL_SIMULATION_WIZARD_STATE,
  simulations:[]
};

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
})
export class StoreModule {

  constructor(
    store: NgRedux<IAppState>,
    epic: SimulationAPIEpics
  ) {
    store.configureStore(rootReducer,
      INTIAL_APP_STATE,
      [ createLogger(),  ...epic.createEpic()]);
  }
}
