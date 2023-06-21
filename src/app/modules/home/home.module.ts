import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CharactersEffects, EventsEffects } from '@store/effects';
import { fromCharacters, fromEvents } from '@store/reducers';
import { CharactersService, EventsService } from '@store/services';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BannerComponent } from './card/banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CharacterService } from './providers/character.service';
import { HomeService } from './providers/home.service';

@NgModule({
  declarations: [HomeComponent, BannerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    StoreModule.forFeature(fromEvents.featureKey, fromEvents.reducer),
    StoreModule.forFeature(fromCharacters.featureKey, fromCharacters.reducer),
    EffectsModule.forFeature([EventsEffects, CharactersEffects]),
  ],
  providers: [EventsService, CharactersService, HomeService, CharacterService],
})
export class HomeModule {}
