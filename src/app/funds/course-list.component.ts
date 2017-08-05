import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
//import { FilterTextComponent, FilterService } from '../blocks/filter-text';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  filteredCourses = this.courses;

  constructor(private _courseService: CourseService) {
  }

  
  getCourses() {
    this._courseService.getCourses()
      .subscribe(courses => {
        this.courses = this.filteredCourses = courses;
      });
  }

  ngOnInit() {
    this.getCourses();
    //componentHandler.upgradeDom();
  }
}
