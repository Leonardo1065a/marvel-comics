import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComicsService } from '@store/services/comics';
import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';

@NgModule({
  imports: [
    CommonModule,
    ComicsRoutingModule
  ],
  declarations: [ComicsComponent],
  providers: [ComicsService]
})
export class ComicsModule { }
