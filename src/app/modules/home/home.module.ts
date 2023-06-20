import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EventsEffects } from '@store/effects';
import { fromEvents } from '@store/reducers';
import { EventsService } from '@store/services';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BannerComponent } from './card/banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './providers/home.service';

@NgModule({
  declarations: [HomeComponent, BannerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    StoreModule.forFeature(fromEvents.featureKey, fromEvents.reducer),
    EffectsModule.forFeature([EventsEffects]),
  ],
  providers: [EventsService, HomeService],
})
export class HomeModule {}
