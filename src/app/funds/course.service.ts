import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CONFIG } from '../shared';
import {Observable} from 'rxjs/Rx';
import '../rxjs-operators';
import { Course } from './course';
//import { SpinnerService } from '../blocks/spinner';
//import { ExceptionService } from '../blocks/exception.service';

// import { /* ExceptionService, */ SpinnerService } from '../blocks/blocks';
// import { CONFIG, MessageService } from '../shared/shared';


let coursesUrl = CONFIG.baseUrls.courses;


@Injectable()
export class CourseService {
  constructor(
    private _http: Http
  ) { }

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

  getCourses() {
    return this._http.get(`${coursesUrl}`)
      .map((response: Response) => <Course[]>response.json().data);
  }

  getCourse(id: number) {
    return this._http.get(`${coursesUrl}/${id}`)
      .map((response: Response) => response.json().data)
      ;
  }


  updateCourse(course: Course) {
    let body = JSON.stringify(course);
    
    return this._http
      .put(`${coursesUrl}/${course.id}`, body)
    ;
  }
}
