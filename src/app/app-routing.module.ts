import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './funds/course-list.component';
import { CourseComponent } from './funds/course.component';
import { FundsComponent } from "./funds/funds.component";

const routes: Routes = [
  //{ path: '', redirectTo: '/funds', pathMatch: 'full' },
  {path: 'funds', component: FundsComponent},
  {path: 'funds/:id', component: FundsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }