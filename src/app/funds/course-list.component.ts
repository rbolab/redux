import {Component, OnInit} from '@angular/core';
import {CourseService} from './course.service';
import {Course} from './course';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import {Router} from "@angular/router";

@Component({
  selector: 'app-funds-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[];
  filteredCourses = this.courses;


  /* MD-TABLE  */
  displayedColumns = ['id', 'name', 'topic'];
  dataSource: ExampleDataSource | null;

  constructor(private _courseService: CourseService,
              private _router: Router) {
  }

  getCourses() {
    this._courseService.getCourses()
      .subscribe(courses => {
        this.courses = this.filteredCourses = courses;
      });
  }

  addFund(){
    //this._courseService.selectCourse(<Course>{ name: '', topic: '' });
    this._router.navigate(['/funds', 'new']);
  }

  editFund(course: Course){
    //this._courseService.selectCourse(course);
    this._router.navigate(['/funds', course.id]);
  }

  ngOnInit() {
    this.getCourses();
    this.dataSource = new ExampleDataSource(this._courseService);
  }
}


/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private _courseService: CourseService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Course[]> {
    return this._courseService.getCourses()
  }

  disconnect() {
  }
}
