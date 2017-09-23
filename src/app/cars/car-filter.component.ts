import {Component, OnInit} from '@angular/core';
import {Form, FormControl} from "@angular/forms";

@Component({
  selector: 'car-filter',
  templateUrl: 'car-filter.component.html'
})
export class CarFilterComponent implements OnInit {

  searchText: FormControl = new FormControl();
  selectedDate: FormControl = new FormControl();

  constructor() {
  }

  ngOnInit() {
    this.searchText.valueChanges
      .debounceTime(250)
      .distinctUntilChanged()
      .subscribe(value => {
      console.log('text search : '+ value);
    });

    this.selectedDate.valueChanges
      .debounceTime(250)
      .distinctUntilChanged()
      .subscribe(value => {
        console.log('date search : '+ value);
      });
  }
}
