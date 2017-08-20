import {Http, Response} from "@angular/http";
import {OnInit, Component, ElementRef} from "@angular/core";
import {Car} from "./car";
import {Observable} from "rxjs";
import {CarService} from "./car.service";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./car.component.css']
})
export class CarsListComponent implements OnInit {

  private carsTable: any;
  private tableWidget: any;
  cars: Car[];

  constructor(private _http: Http,
              private _carService: CarService,
              private _el: ElementRef) {
  }

  getCars() {
    this._carService.getCars()
      .subscribe(cars => {
        this.cars = cars;
        this.loadDT();
      });
  }

  ngOnInit(): void {
    this.getCars();
  }

  private loadDT() {
    let dtOptions = {
      data: this.cars,
      responsive: true,
      fixedHeader: true,
      paging: false,
      info: false,
      columns: [
        {title: 'id', data: 'id'},
        {title: 'display', data: 'display'},
        {title: 'is common', data: 'is_common'},
        {title: 'country 1', data: 'country'}
      ],
      columnDefs: [
        {
          targets: [ 0,1,2,3 ],
          className: 'mdl-data-table__cell--non-numeric'
        }
      ]

    }

    this.carsTable = $(this._el.nativeElement.querySelector('table'));
    this.tableWidget = this.carsTable.DataTable(dtOptions);
  }
}

