import {Simulation} from "../model/simulation";


export interface IAppState {
  currentStep: number;
  simulation: Simulation;
  simulations: Simulation[];
};

export const INTIAL_SIMULATION_STATE = {
  currentStep: 1,
  simulation: {
    name: '',
    currency: '',
    fees: 0,
    methodology: ''
  },
  simulations:[]
};


