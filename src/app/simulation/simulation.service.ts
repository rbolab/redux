import {Simulation} from "./model/simulation";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {dispatch, select} from "@angular-redux/store";
import {ADD_SIMULATION, SAVE_SIMULATION} from "./store/simulation.actions";
import {INTIAL_SIMULATION_STATE} from "./store/simulation.store";

@Injectable()
export class SimulationService {

  @select()
  simulation$: Observable<Simulation>;

  @dispatch()
  resetSimulation = () => (
    {
      type: SAVE_SIMULATION,
      payload: {
        path: ['simulation'],
        value: INTIAL_SIMULATION_STATE.simulation
      }
    }
  );

  @dispatch()
  updateSimulation = (simulation) => ({
    type: SAVE_SIMULATION,
    payload: {
      path: ['simulation'],
      value: simulation
    }
  });

  @dispatch()
  addSimulation(simulation) {
    return {
      type: ADD_SIMULATION,
      payload: {
        path: ['simulations'],
        value: simulation
      }
    }
  };


}
