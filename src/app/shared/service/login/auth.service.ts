import { KeyService } from './key.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private keyService: KeyService) { }

    singIn(secretKey): Observable<any> {
        this.setKey(secretKey);
        return of(null);
    }

    setKey(token: string) {
        this.keyService.setKey(token);
    }

    logout() {
        this.keyService.removeKey();
    }

    isLogged() {
        return this.keyService.hasKey();
    }
  
}