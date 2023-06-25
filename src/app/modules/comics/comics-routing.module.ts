import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComicsComponent } from './comics.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ComicsComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ComicsRoutingModule {}
