import {SimulationAPIActions} from "./simulation.actions";
import {Injectable} from "@angular/core";
import {SimulationAPIService} from "./simulation.service";
import {Observable} from "rxjs/Observable";
import {createEpicMiddleware, Epic} from "redux-observable";
import {ActionPayload} from "../../store/action.payload";
import {IAppState} from "../../store/model";

@Injectable()
export class SimulationAPIEpics {

  constructor(private service: SimulationAPIService,
              private actions: SimulationAPIActions) {
  }

  createEpic() {
    return [
      createEpicMiddleware(this.createLoadASimulationsEpic()),
      createEpicMiddleware(this.createAddASimulationEpic())
    ];
  }

  private createAddASimulationEpic(): Epic<ActionPayload, IAppState> {
    return (action$, store) => action$
      .ofType(SimulationAPIActions.ADD_SIMULATION)
      .switchMap((action) => this.service.save(action.payload)
        .map(() => this.actions.loadSimulations()));
  }

  private createLoadASimulationsEpic(): Epic<ActionPayload, IAppState> {
    return (action$, store) => action$
      .ofType(SimulationAPIActions.LOAD_SIMULATIONS)
      .switchMap(() => this.service.getAll()
        .map(data => this.actions.loadSimulationsSucceeded(data))
        .catch(response => Observable.of(this.actions.loadSimulationsFailed()))
        .startWith(this.actions.loadSimulationsStarted()));
  }
}
