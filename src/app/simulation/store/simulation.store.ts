import {Simulation} from "../model/simulation";
import {SAVE_SIMULATION} from "./simulation.actions";

export interface IAppState {
  currentStep: number;
  simulation: Simulation;
};

export const INTIAL_SIMULATION_STATE = {currentStep: 1, simulation: {name: 'init', currency: 'CHF'}, };

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case SAVE_SIMULATION:
      return Object.assign({}, state, {simulation: action.payload});
  }
  return state;
};
