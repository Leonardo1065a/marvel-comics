import { Component, Input, OnInit } from '@angular/core';
import { EventData } from '@interfaces';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  @Input() model: EventData[];

  constructor() {}

  ngOnInit(): void {}
}
