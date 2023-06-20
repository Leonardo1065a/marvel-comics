import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeService } from './providers/home.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        resolve: {
          data: HomeService,
        },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
