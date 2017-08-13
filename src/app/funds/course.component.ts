import {Component, OnInit, Input} from '@angular/core';
import {CourseService} from './course.service';
import {Course} from './course';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-fund-detail',
  templateUrl: './course.component.html',
})
export class CourseComponent implements OnInit {
  course: Course;
  editCourse: Course = <Course>{};

  constructor(private _courseService: CourseService,
              private _route: ActivatedRoute,
              private _router: Router) {
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
    return isNaN(this.course.id);
  }

  cancel() {
    this.course = null;
    this.editCourse = Object.assign({}, this.course);
    this._gotoCourses();
  }

  delete() {
    this._courseService.deleteCourse(this.course)
      .subscribe(() => {
        this._gotoCourses();
      });
  }

  save() {
    if (this.course.id == null) {
      this._courseService.addCourse(this.editCourse)
        .subscribe(() => {
          this._gotoCourses();
        });
      return;
    }

    this._courseService.updateCourse(this.editCourse)
      .subscribe(() => {
        this._gotoCourses();
      });
  }

  private _gotoCourses() {
    this._router.navigate(['funds']);
  }


  ngOnInit() {
    this._route.params.subscribe((params: {id: number}) => {
        if (isNaN(params.id)) {
          if (params.id) {
            this.course = <Course>{name: '', topic: ''};
            this.editCourse = this.course;
            return;
          } else {
            this.course = null;
            return;
          }
        }
        this._courseService.getCourse(params.id)
          .subscribe(course => this._setEditCourse(course));
      }
    );
  }

}
