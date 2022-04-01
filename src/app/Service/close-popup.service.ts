import { Injectable } from '@angular/core';
import * as moment from 'moment';
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

  createPromo(promo: any, files?: any): void {
    console.log('promo :>> ', promo);
    let formData = new FormData();
    // formData.append("promo[name]", promo.name);
    // if (promo.description)
    //   formData.append("promo[description]", promo.description);
    // formData.append("promo[company_id]", promo.company_id);
    // if (promo.landing_page)
    //   formData.append("promo[landing_page]", promo.landing_page);
    // if (promo.promo_code)
    //   formData.append("promo[promo_code]", promo.promo_code);

    // formData.append(
    //   "promo[from_date]",
    //   moment(promo.from_date).format("YYYY-MM-DD")
    // );
    // formData.append(
    //   "promo[to_date]",
    //   moment(promo.to_date).format("YYYY-MM-DD")
    // );
    // if (promo.start_time)
    //   formData.append("promo[start_time]", promo.start_time);
    // if (promo.end_time) formData.append("promo[end_time]", promo.end_time);
    // if (promo.custom_field_values) {
    //   for (var key in promo.custom_field_values) {
    //     formData.append(
    //       `promo[custom_field_values][${key}]`,
    //       promo.custom_field_values[key]
    //     );
    //   }
    // }

    // formData.append("promo[color_code]", promo.color_code);
  }
}
