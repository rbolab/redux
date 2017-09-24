import {Simulation} from "../model/simulation";
import {RESET_SIMULATION, SAVE_SIMULATION} from "./simulation.actions";

export interface IAppState {
  currentStep: number;
  simulation: Simulation;
};

export const INTIAL_SIMULATION_STATE = {
  currentStep: 1,
  simulation: {
    name: '',
    currency: '',
    fees: 0,
    methodology: ''
  }
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case SAVE_SIMULATION:
      return Object.assign({}, state, {simulation: action.payload});
    case RESET_SIMULATION:
      return INTIAL_SIMULATION_STATE;
    default:
      return state;

  }

};
