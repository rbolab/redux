import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {CONFIG} from '../shared';
import {Observable, BehaviorSubject} from 'rxjs/Rx';
import '../rxjs-operators';
import {Course} from './course';
//import { SpinnerService } from '../blocks/spinner';
//import { ExceptionService } from '../blocks/exception.service';

// import { /* ExceptionService, */ SpinnerService } from '../blocks/blocks';
// import { CONFIG, MessageService } from '../shared/shared';


let coursesUrl = CONFIG.baseUrls.courses;
let carsUrl = CONFIG.baseUrls.cars;


@Injectable()
export class CourseService {

  private course$ = new BehaviorSubject<Course>(null);

  constructor(private _http: Http) {
  }

  /*selectCourse(course : Course) {
   this.course$.next(course);
   }

   getCourse$(){
   return this.course$.asObservable();
   }*/

  addCourse(course: Course) {
    let body = JSON.stringify(course);
    return this._http
      .post(`${coursesUrl}`, body)
      .map(res => res.json().data);
  }

  deleteCourse(course: Course) {
    return this._http
      .delete(`${coursesUrl}/${course.id}`);
  }

  getCars() {
    return this._http.get(`${carsUrl}`)
      .map((response: Response) => response.json().data);
  }

  getCourses() {


    return this._http.get(`${coursesUrl}`)
      .map((response: Response) => <Course[]>response.json().data);
  }

  getCourse(id: number) {
    return this._http.get(`${coursesUrl}/${id}`)
      .map((response: Response) => response.json().data);
  }


  updateCourse(course: Course) {
    let body = JSON.stringify(course);

    return this._http
      .put(`${coursesUrl}/${course.id}`, body);
  }
}
