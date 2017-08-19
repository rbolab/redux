import { BrowserModule } from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryStoryService } from '../api/in-memory-story.service';
import { AppRoutingModule } from './app-routing.module';
import { CourseComponent } from "./funds/course.component";
import { CourseListComponent } from "./funds/course-list.component";
import { FundsComponent } from "./funds/funds.component";
import { CourseService } from "./funds/course.service";
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdTableModule, MdButtonModule, MdInputModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
  MdAutocompleteModule,
  MdButtonToggleModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdListModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTabsModule,
  MdTooltipModule
} from '@angular/material';
import {CdkTableModule} from "@angular/cdk/table";
import "hammerjs";
import {CarsListComponent} from "./cars/cars-list.component";
import {CarService} from "./cars/car.service";
import {CarComponent} from "./cars/car.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseListComponent,
    CarsListComponent,
    CarComponent,
    FundsComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryStoryService, { delay: 100 }),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdTableModule,
    MdAutocompleteModule,
    MdButtonToggleModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdListModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTabsModule,
    MdTooltipModule,
    CdkTableModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    CourseService,
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
