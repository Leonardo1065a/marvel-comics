import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLoader$: Observable<boolean>;
  constructor(private loadingService: LoadingService ) {
    this.showLoader$ = this.loadingService.showLoading$;
  }
}
