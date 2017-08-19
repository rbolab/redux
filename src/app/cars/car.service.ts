import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {CONFIG} from "../shared/config";
import {Car} from "./car";

let carsUrl = CONFIG.baseUrls.cars;

@Injectable()
export class CarService {

  constructor(private _http: Http) {
  }

  getCars() {
    return this._http.get(`${carsUrl}`)
      .map((response: Response) => response.json().data);
  }

  getCar(id: number) {
    return this._http.get(`${carsUrl}/${id}`)
      .map((response: Response) => response.json().data);
  }

  deleteCar(car: Car) {
    return this._http.delete(`${carsUrl}/${car.id}`);
  }

  saveOrUpdateCar(car: Car) {
    let body = JSON.stringify(car);
    // create
    if (isNaN(car.id)) {
      return this._http.post(`${carsUrl}`, body)
        .map(res => res.json().data);
    } else {
      // update
      return this._http.put(`${carsUrl}/${car.id}`, body);
    }

  }
}
