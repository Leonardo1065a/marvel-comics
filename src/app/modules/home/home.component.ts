import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TesteService } from '@shared/service/teste/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  _innerHtml = '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>';

  constructor(private testeService: TesteService, private store: Store) {
    this.testeService.get();
  }

  ngOnInit(): void {}
}
