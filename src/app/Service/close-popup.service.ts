import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClosePopupService {

  private disablePromoForm$ = new Subject<boolean>();

  constructor() { }

  get disablePromoObservable$(): Observable<boolean> {
    return this.disablePromoForm$ as Observable<boolean>;
  }

  set disablePromo(value: boolean) {
    this.disablePromoForm$.next(value);
  }
}
