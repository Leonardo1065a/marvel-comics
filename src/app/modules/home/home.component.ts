import { Component, OnInit } from '@angular/core';
import { TesteService } from 'src/app/shared/service/teste/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private testeService: TesteService) { 
   this.testeService.get().subscribe();
  }

  ngOnInit(): void {
  }

}
