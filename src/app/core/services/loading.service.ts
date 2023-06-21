import { Injectable } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable()
export class LoadingService {
  private showLoadingSource = new BehaviorSubject<boolean>(false);
  private closeLoaderSource = new Subject<null>();

  constructor(private router: Router) {
    this.listenCloseLoader();
    this.listenChangeRoutes();
  }

  get showLoading$() {
    return this.showLoadingSource.asObservable();
  }

  private get closeLoader$() {
    return this.closeLoaderSource.asObservable();
  }

  public openLoader() {
    this.showLoadingSource.next(true);
  }

  public closeLoader() {
    this.closeLoaderSource.next(null);
  }

  private listenCloseLoader() {
    this.closeLoader$.pipe(debounceTime(500)).subscribe(() => {
      this.showLoadingSource.next(false);
    });
  }

  private listenChangeRoutes() {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.openLoader();
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.closeLoader();
          break;
        }
        default: {
          break;
        }
      }
    });
  }
}
