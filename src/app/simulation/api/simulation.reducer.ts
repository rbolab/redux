import {
  lensPath,
  path,
  concat,
  assocPath,
  remove,
  update,
  merge,
  isNil,
  view,
  last,
} from 'ramda';
import {ISimulation} from "../model/simulation";
import {SimulationListType} from "./simulation.store";
import {ActionPayload} from "../../store/action.payload";
import {SimulationAPIActions} from "./simulation.actions";

export const INITIAL_SIMULATION_WIZARD_STATE = {
  name: '',
  currency: '',
  fees: 0,
  methodology: ''
};

export function simulationWizardReducer(state: ISimulation = INITIAL_SIMULATION_WIZARD_STATE, action: ActionPayload): ISimulation {

  switch (action.type) {
    case SimulationAPIActions.INITIALIZE_SIMULATION_WIZARD:
      return INITIAL_SIMULATION_WIZARD_STATE;

    case SimulationAPIActions.REGISTER_SIMULATION_WIZARD_STEP:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;

  }

};


export function simulationListReducer(state: SimulationListType = [], action: ActionPayload): SimulationListType {

  switch (action.type) {
    case SimulationAPIActions.LOAD_SIMULATIONS_SUCCEEDED:
      return action.payload;

    // case SimulationAPIActions.ADD_SIMULATION:
    //   return [...state, action.payload];

    default:
      return state;
  }

};
