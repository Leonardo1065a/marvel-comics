import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EventsEffects } from '@store/effects';
import { fromEvents } from '@store/reducers';
import { EventsService } from '@store/services';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    StoreModule.forFeature(fromEvents.featureKey, fromEvents.reducer),
    EffectsModule.forFeature([EventsEffects]),
  ],
  providers: [EventsService],
})
export class HomeModule {}
