import {Component, OnInit} from '@angular/core';
import {Form, FormControl} from "@angular/forms";
import {Observable} from "rxjs/Rx";



@Component({
  selector: 'car-filter',
  templateUrl: 'car-filter.component.html'
})
export class CarFilterComponent implements OnInit {

  searchText: FormControl = new FormControl();
  startDate: FormControl = new FormControl();
  endDate: FormControl = new FormControl();

  constructor() {
  }

  ngOnInit() {
    this.searchText.valueChanges
      .debounceTime(250)
      .distinctUntilChanged()
      .subscribe(value => {
        console.log('text search : ' + value);
      });

    // this.startDate.valueChanges
    //   .debounceTime(250)
    //   .distinctUntilChanged()
    //   .subscribe(value => {
    //     console.log('date search : ' + value);
    //   });

    Observable.zip(this.startDate.valueChanges, this.endDate.valueChanges)
      .map(dates => ({date1: dates[0], date2: dates[1]}))
      .subscribe(value => {
          console.log('date search : ' + value);
        }
      );
  }
}
