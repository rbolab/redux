import {Http, Response} from "@angular/http";
import {CONFIG} from "../../shared/config";
import {Injectable} from "@angular/core";
import {ISimulation} from "../model/simulation";


let simulationsUrl = CONFIG.baseUrls.simulations;

@Injectable()
export class SimulationAPIService {

  constructor(private http: Http) {
  }

  getAll() {
    return this.http.get(`${simulationsUrl}`)
      .map(resp => resp.json().data);
  }

  save(simulation: ISimulation) {
    let body = JSON.stringify(simulation);
    return this.http.post(`${simulationsUrl}`, body)
      .map(res => res.json().data);
  }

}
