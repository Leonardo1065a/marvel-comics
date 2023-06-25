import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CharacterService } from './providers/character.service';
import { ComicService } from './providers/comic.service';
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
          ComicService
        },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
