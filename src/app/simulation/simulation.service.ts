import {Simulation} from "./model/simulation";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {dispatch, select} from "@angular-redux/store";
import {RESET_SIMULATION, SAVE_SIMULATION} from "./store/simulation.actions";

@Injectable()
export class SimulationService {

  @select()
  simulation$: Observable<Simulation>;

  @dispatch()
  resetSimulation = () => ({type: RESET_SIMULATION});

  @dispatch()
  updateSimulation = (simulation) => ({
    type: SAVE_SIMULATION, payload: {
      path: ['simulation'],
      value: simulation
    }
  });

  saveSimulation() { };

}
