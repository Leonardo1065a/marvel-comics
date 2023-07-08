import { AfterViewInit, Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $('#sidebarCollapse').on('click', () => {
      $('#sidebar').toggleClass('active');
    });
  }
}
