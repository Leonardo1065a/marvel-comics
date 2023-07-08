import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '@core/components';
import { EventData } from '@interfaces';
import { Observable } from 'rxjs';
import { CharacterService } from './providers/character.service';
import { ComicService } from './providers/comic.service';
import { HomeService } from './providers/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent
  extends BaseComponent<EventData[]>
  implements OnInit
{
  _characters$: Observable<any>;
  _comics$: Observable<any>;
  _lastUpdate$: Observable<any>;

  updateListEvents() {}

  constructor(
    private service: HomeService,
    private characterService: CharacterService,
    private comicService: ComicService
  ) {
    super();
  }

  ngOnInit() {
    const { service, characterService, comicService } = this;

    this.__data$ = service.__data$;

    this.__control$ = service.__control$;

    this._characters$ = characterService.__data$;

    this._lastUpdate$ = service._lastUpdate$;

    this._comics$ = comicService.__data$;
  }

  updatEvents() {
    this.service.updateListEvents();
  }
}
