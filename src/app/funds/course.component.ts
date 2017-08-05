import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { ActivatedRoute, Router } from '@angular/router';
//import { ToastService } from '../blocks/toast';
//import { ModalService } from '../blocks/modal';

@Component({
  templateUrl: './course.component.html',
})
export class CourseComponent implements OnInit, AfterContentChecked {
  @Input() course: Course;
  editCourse: Course = <Course>{};

  constructor(
    private _courseService: CourseService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  private _getCourse() {

    let id = +this._route.snapshot.params['id'];
    if (id === 0) return;
    if (this.isAddMode()) {
      this.course = <Course>{ name: '', topic: 'Web' };
      this.editCourse = this.course;
      return;
    }
    this._courseService.getCourse(id)
      .subscribe(course => this._setEditCourse(course));
  }

  private _setEditCourse(course: Course) {
    if (course) {
      this.course = course;
      this.editCourse = Object.assign({}, this.course);
    } else {
      this._gotoCourses();
    }
  }

  

  isAddMode() {
    const id = +this._route.snapshot.params['id'];
    return isNaN(id);
  }

  

  private _gotoCourses() {
    this._router.navigate(['courses']);
  }


  ngOnInit() {
    this._getCourse();
  }

  ngAfterContentChecked() {
    //componentHandler.upgradeDom();
  }

}
