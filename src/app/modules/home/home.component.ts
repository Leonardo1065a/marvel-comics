import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/components';
import { EventData } from '@interfaces';
import { HomeService } from './providers/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent<EventData[]> implements OnInit {
  constructor(private service: HomeService) {
    super();
  }

  ngOnInit() {
    const { service } = this;

    this.__data$ = service.__data$;
  }
}
