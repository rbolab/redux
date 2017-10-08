import {ISimulation} from "../simulation/model/simulation";
import {SimulationListType} from "../simulation/api/simulation.store";

export interface IAppState {
  currentStep?: number;
  simulation: ISimulation;
  simulations?: SimulationListType;
};
