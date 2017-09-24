import {RESET_SIMULATION, SAVE_SIMULATION} from "./simulation.actions";
import {
  lensPath,
  path,
  concat,
  assocPath,
  remove,
  update,
  merge,
  isNil,
  last,
} from 'ramda';
import {IAppState, INTIAL_SIMULATION_STATE} from "./simulation.store";
import {ActionPayload} from "./action.payload";

export function rootReducer(state: IAppState, action: ActionPayload): IAppState {
  switch (action.type) {
    case SAVE_SIMULATION:
      return assocPath(
        action.payload.path,
        merge(path(action.payload.path, state), action.payload.value),
        state
      );

    case RESET_SIMULATION:
      return INTIAL_SIMULATION_STATE;

    default:
      return state;

  }

};
