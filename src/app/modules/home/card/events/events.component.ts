import { Component, Input, OnInit } from '@angular/core';
import { Control, EventData } from '@interfaces';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  @Input() model: EventData[];

  @Input() control: Control;

  constructor() {}

  ngOnInit(): void {}
}
