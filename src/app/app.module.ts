import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryStoryService} from '../api/in-memory-story.service';
import {AppRoutingModule} from './app-routing.module';
import {CourseComponent} from "./funds/course.component";
import {CourseListComponent} from "./funds/course-list.component";
import {FundsComponent} from "./funds/funds.component";
import {CourseService} from "./funds/course.service";
import {AppComponent} from './app.component';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdTableModule, MdButtonModule, MdInputModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule,
  MdAutocompleteModule,
  MdButtonToggleModule,
  MdCheckboxModule,
  MdChipsModule,
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
import {CarFilterComponent} from "./cars/car-filter.component";
import {SimulationListComponent} from "./simulation/simulation-list.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SimulationService} from "./simulation/simulation.service";
import { createLogger } from 'redux-logger';
import {IAppState, INTIAL_SIMULATION_STATE, rootReducer} from "./simulation/store/simulation.store";
import {SimulationWizardCreateStep1Component} from "./simulation/steps/create/step1/simulation.wizard.create.step1";


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseListComponent,
    CarsListComponent,
    CarComponent,
    CarFilterComponent,
    FundsComponent,
    SimulationListComponent,
    SimulationWizardCreateStep1Component
  ],
  imports: [
    FlexLayoutModule,
    HttpModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryStoryService, {delay: 100}),
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
    CdkTableModule,
    NgReduxModule
  ],
  exports: [
    FlexLayoutModule,
    CdkTableModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
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
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    CourseService,
    CarService,
    SimulationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INTIAL_SIMULATION_STATE, [ createLogger() ]);
  }

}
