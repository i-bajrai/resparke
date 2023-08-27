import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentFormComponent } from './resident-form/resident-form.component';
import { ResidentListComponent } from './resident-list/resident-list.component';

const routes: Routes = [
  { path: 'create-resident', component: ResidentFormComponent },
  { path: 'residents', component: ResidentListComponent },
  { path: '', redirectTo: '/residents', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
