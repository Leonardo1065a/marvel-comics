import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CharacterService } from './providers/character.service';
import { HomeService } from './providers/home.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        resolve: {
          HomeService,
          CharacterService,
        },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
