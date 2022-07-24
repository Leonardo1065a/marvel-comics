import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotAuthorizationComponent } from './not-authorization.component';
import { NotAuthorizationRoutingModule } from './not-authorization-routing.module';

@NgModule({
  declarations: [
    NotAuthorizationComponent
  ],
  imports: [
    CommonModule,
    NotAuthorizationRoutingModule
  ]
})
export class NotAuthorizationModule { }
