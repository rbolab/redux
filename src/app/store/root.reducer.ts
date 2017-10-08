import {combineReducers} from "redux";
import {simulationListReducer, simulationWizardReducer} from "../simulation/api/simulation.reducer";
import {IAppState} from "./model";


export const rootReducer = combineReducers<IAppState>({
    simulation: simulationWizardReducer,
    simulations: simulationListReducer
  }
);
