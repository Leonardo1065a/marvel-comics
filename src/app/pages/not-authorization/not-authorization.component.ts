import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-authorization',
  templateUrl: './not-authorization.component.html',
  styleUrls: ['./not-authorization.component.scss']
})
export class NotAuthorizationComponent implements OnInit {

  constructor(router: Router) { 
    const nav = router.getCurrentNavigation();
    console.log(nav); 
  }

  ngOnInit(): void {
  }

}
