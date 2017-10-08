import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {dispatch, select} from "@angular-redux/store";
import {ISimulation} from "../model/simulation";


@Injectable()
export class SimulationAPIActions {

  static readonly INITIALIZE_SIMULATION_WIZARD = 'INITIALIZE_SIMULATION_WIZARD';
  static readonly REGISTER_SIMULATION_WIZARD_STEP = 'REGISTER_SIMULATION_WIZARD_STEP';

  static readonly LOAD_SIMULATIONS = 'LOAD_SIMULATIONS';
  static readonly LOAD_SIMULATIONS_STARTED = 'LOAD_SIMULATIONS_STARTED';
  static readonly LOAD_SIMULATIONS_SUCCEEDED = 'LOAD_SIMULATIONS_SUCCEEDED';
  static readonly LOAD_SIMULATIONS_FAILED = 'LOAD_SIMULATIONS_FAILED';

  static readonly ADD_SIMULATION = 'ADD_SIMULATION';

  @select()
  simulation$: Observable<ISimulation>;

  @dispatch()
  initializeSimulationWizard = () => (
    {
      type: SimulationAPIActions.INITIALIZE_SIMULATION_WIZARD,
      payload: null
    }
  );

  @dispatch()
  registerSimulationWizardStep = (simulation) => ({
    type: SimulationAPIActions.REGISTER_SIMULATION_WIZARD_STEP,
    payload: simulation
  });

  @dispatch()
  addSimulation = (simulation) => ({
    type: SimulationAPIActions.ADD_SIMULATION,
    payload: simulation
  });

  @dispatch()
  loadSimulations = () => ({
    type: SimulationAPIActions.LOAD_SIMULATIONS,
    payload: null
  });

  loadSimulationsSucceeded = (data: any) => ({
    type: SimulationAPIActions.LOAD_SIMULATIONS_SUCCEEDED,
    payload: data
  })

  loadSimulationsFailed = () => ({
    type: SimulationAPIActions.LOAD_SIMULATIONS_FAILED,
    payload: null
  });

  loadSimulationsStarted = () => ({
    type: SimulationAPIActions.LOAD_SIMULATIONS_STARTED,
    payload: null
  });
}
