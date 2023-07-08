import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CharactersEffects, ComicsEffects, EventsEffects } from '@store/effects';
import { fromCharacters, fromComics, fromEvents } from '@store/reducers';
import { CharactersService, ComicsService, EventsService } from '@store/services';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BannerComponent } from './card/banner/banner.component';
import { CharactersComponent } from './card/characters/characters.component';
import { ComicsComponent } from './card/comics/comics.component';
import { EventsComponent } from './card/events/events.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CharacterService } from './providers/character.service';
import { ComicService } from './providers/comic.service';
import { HomeService } from './providers/home.service';

@NgModule({
  declarations: [HomeComponent, BannerComponent, EventsComponent, CharactersComponent, ComicsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    StoreModule.forFeature(fromEvents.featureKey, fromEvents.reducer),
    StoreModule.forFeature(fromCharacters.featureKey, fromCharacters.reducer),
    StoreModule.forFeature(fromComics.featureKey, fromComics.reducer),
    EffectsModule.forFeature([EventsEffects, CharactersEffects, ComicsEffects]),
  ],
  providers: [EventsService, CharactersService, HomeService, CharacterService, ComicsService, ComicService],
})
export class HomeModule { }
