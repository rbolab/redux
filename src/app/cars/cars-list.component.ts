import {Http, Response} from "@angular/http";
import {OnInit, Component} from "@angular/core";
import {Car} from "./car";
import {Observable} from "rxjs";
import {CarService} from "./car.service";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html'
})
export class CarsListComponent implements OnInit {

  cars: Car[];

  constructor(private _http: Http,
              private _carService: CarService) {}

  getCars() {
    this._carService.getCars()
      .subscribe(cars => {
        this.cars = cars
      });
  }

  ngOnInit(): void {
    this.getCars();
  }
}

