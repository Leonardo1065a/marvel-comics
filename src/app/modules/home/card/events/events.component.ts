import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Control, EventData } from '@interfaces';
import { TesteService } from './../../../../shared/service/teste/post.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  @Input() model: EventData[];

  @Input() control: Control;

  @Input() lastUpdate: Date;

  @Output() updateList = new EventEmitter();

  constructor(private service: TesteService) {}

  viewDetail(data: any) {
    this.service.get('http://gateway.marvel.com/v1/public/creators/8504');
    console.log(data);
  }

  ngOnInit(): void {}
}
