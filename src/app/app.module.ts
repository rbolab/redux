import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStoryService } from '../api/in-memory-story.service';
import { AppRoutingModule } from './app-routing.module';
import { CourseComponent } from "./funds/course.component";
import { CourseListComponent } from "./funds/course-list.component";
import { CourseService } from "./funds/course.service";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseListComponent
  ],
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryStoryService, { delay: 500 }),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
