import {NgModule} from '@angular/core';
import {SimulationWizardCreateStep3Component} from "./steps/create/step3/simulation.wizard.create.step3";
import {SimulationWizardCreateStep2Component} from "./steps/create/step2/simulation.wizard.create.step2";
import {SimulationWizardCreateStep1Component} from "./steps/create/step1/simulation.wizard.create.step1";
import {SimulationListComponent} from "./simulation-list.component";
import {CommonModule} from "@angular/common";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MdAutocompleteModule,
  MdButtonModule, MdCardModule, MdCheckboxModule, MdIconModule, MdInputModule, MdMenuModule, MdRadioModule,
  MdRippleModule, MdSelectModule, MdStepperModule,
  MdTableModule, MdTabsModule,
  MdToolbarModule
} from "@angular/material";
import {SimulationAPIActions} from "./api/simulation.actions";
import {SimulationAPIService} from "./api/simulation.service";
import {SimulationAPIEpics} from "./api/simulation.epics";


@NgModule({
  imports: [CommonModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule    ,
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
    MdCheckboxModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdTabsModule,
    ],
  exports: [],
  declarations: [SimulationListComponent,
    SimulationWizardCreateStep1Component,
    SimulationWizardCreateStep2Component,
    SimulationWizardCreateStep3Component],
  providers: [
    SimulationAPIActions, SimulationAPIService, SimulationAPIEpics
  ],
})
export class SimulationModule {
}

