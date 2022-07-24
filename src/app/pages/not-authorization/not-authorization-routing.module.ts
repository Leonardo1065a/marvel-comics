import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotAuthorizationComponent } from './not-authorization.component';

const routes: Routes = [
  { path: '', component: NotAuthorizationComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotAuthorizationRoutingModule { }
