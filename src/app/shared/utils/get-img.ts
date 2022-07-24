import { HttpParams } from '@angular/common/http';

export class GetImg {
  constructor(private link: string) {}

  getUrl(): string {
    if(!!this.link)
        return `assets${(this.link.split('assets'))[1]}`;
    else return'';
  }
}
