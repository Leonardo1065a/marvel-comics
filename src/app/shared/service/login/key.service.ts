import { Injectable } from '@angular/core';

const KEY = 'secretKey';

@Injectable({
    providedIn: 'root'
})
export class KeyService {
    constructor() { }

    hasKey(): boolean {
        return !!this.getKey();
    }

    setKey(key: string): void {
        window.localStorage.setItem(KEY, key);
    }

    getKey(): string {
        return window.localStorage.getItem(KEY);
    }

    removeKey(): void {
        window.localStorage.removeItem(KEY);
    }

}