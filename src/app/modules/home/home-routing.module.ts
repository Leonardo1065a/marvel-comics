import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CharactersService } from './providers/characters.service';
import { HomeService } from './providers/home.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        resolve: {
          HomeService,
          CharactersService,
        },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
