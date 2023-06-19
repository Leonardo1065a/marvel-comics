import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(readonly service: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.service.logout();
    this.router.navigate(['page/login']);
  }
}
