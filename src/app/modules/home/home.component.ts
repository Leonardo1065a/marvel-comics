import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/components';
import { EventData } from '@interfaces';
import { Observable } from 'rxjs';
import { CharactersService } from './providers/characters.service';
import { HomeService } from './providers/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent<EventData[]> implements OnInit {
  _characters$: Observable<any>;

  constructor(private service: HomeService, private charactersService: CharactersService) {
    super();
  }

  ngOnInit() {
    const { service, charactersService } = this;

    this.__data$ = service.__data$;

    this._characters$ = charactersService.__data$;
  }
}
