import {Simulation} from "./model/simulation";
import {Injectable} from "@angular/core";

@Injectable()
export class SimulationService {

  saveSimulation(simulation: Simulation) {
    console.log("saving simulation : ", simulation);
  }
}
