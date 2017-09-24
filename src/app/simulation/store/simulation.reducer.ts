import {ADD_SIMULATION, SAVE_SIMULATION} from "./simulation.actions";
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

    case ADD_SIMULATION:
      const lensForProp = lensPath(action.payload.path);
      const propValue = <any[]> view(lensForProp, state);
      return assocPath(
        action.payload.path,
        concat(propValue, [action.payload.value]),
        state
      );

    default:
      return state;

  }

};
