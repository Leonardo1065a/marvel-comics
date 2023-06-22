import { Component, Input, OnInit } from '@angular/core';
import { CharacterData } from '@interfaces';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  @Input() model: CharacterData[];

  constructor() {}

  ngOnInit(): void {}
}
