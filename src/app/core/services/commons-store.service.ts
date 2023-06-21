import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
export abstract class CommonsStoreService<T> {
  protected http = inject(HttpClient);

  constructor() {}

  protected abstract updateControl(data: any): void;

  protected abstract update(data: T[], identifier: string): void;

  protected getEmbeddedData(data: any) {
    return data.data.results;
  }

  protected async loadData(url: string, identifier: string) {
    const { http } = this;

    this.updateControl({ isLoading: true });

    try {
      const data = await lastValueFrom(http.get<any>(url));

      const items = this.getEmbeddedData(data);

      this.update(items, identifier);
    } catch (e) {
      // not to do
    }

    this.updateControl({ isLoading: false });
  }

  public load(url: string, identifier: string) {
    this.loadData(url, identifier);
  }
}
