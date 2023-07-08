import { Component, Input, OnInit } from '@angular/core';
import { ComicsData, Control } from '@interfaces';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {
  @Input() model: ComicsData[];

  @Input() control: Control;

  constructor() { }

  ngOnInit() {
  }

}
