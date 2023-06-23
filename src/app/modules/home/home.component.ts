import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/components';
import { EventData } from '@interfaces';
import { Observable } from 'rxjs';
import { CharacterService } from './providers/character.service';
import { HomeService } from './providers/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent<EventData[]> implements OnInit {
  _characters$: Observable<any>;

  constructor(private service: HomeService, private characterService: CharacterService) {
    super();
  }

  ngOnInit() {
    const { service, characterService } = this;

    this.__data$ = service.__data$;

    this.__control$ = service.__control$;

    this._characters$ = characterService.__data$;
  }
}
