import {Car} from "./car";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "./car.service";
import {OnInit, Component} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-car-detail',
  templateUrl: './car.component.html'
})
export class CarComponent implements OnInit {
  car: Car;
  editCar: Car;
  carForm: FormGroup

  constructor(private _router: Router,
              private _route: ActivatedRoute,
              private _carService: CarService,
              private fb: FormBuilder) {
  }

  edit() {
    this.editCar = Object.assign({}, this.car);
  }


  cancel() {
    this._gotoCars();
  }

  delete() {
    this._carService.deleteCar(this.car)
      .subscribe(() => {
        this._gotoCars();
      })
  }

  save() {
    this._carService.saveOrUpdateCar(this.editCar)
      .subscribe(() => {
        this._gotoCars();
      })
  }

  isAddMode() {
    return isNaN(this.car.id);
  }


  private _gotoCars() {
    this._router.navigate(['cars'])
  }

  private _setEditCar(car: Car) {
    if (car) {
      this.car = car;
      this.editCar = Object.assign({}, this.car);
      this._createForm();
    } else {
      this._gotoCars();
    }
  }

  private _createForm() {
    this.carForm = this.fb.group({
      id: '',
      model: ['', [Validators.required, Validators.pattern('[a-zA-Z].*')]],
      year: ['', [Validators.required, Validators.minLength(4)]]
    });
    this.carForm.setValue(this.editCar, {onlySelf: true});
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: {id: number}) => {
      this._carService.getCar(params.id)
        .subscribe(car => {
          this._setEditCar(car);
        })
    });
  }


}
