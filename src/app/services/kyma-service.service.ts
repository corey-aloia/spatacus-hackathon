import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PriceSuggestionResponse, PriceSuggestion} from '../price-proposal/price-suggestion';
import { PriceSubscriptionResponse, PriceSubscription} from '../price-proposal/price-subscription';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KymaService {

  PriceSuggestionUrl = 'https://price-suggestion-3-production.hack2.cluster.extend.cx.cloud.sap';
  PriceSubscriptionUrl = 'https://price-suggestion-3-production.hack2.cluster.extend.cx.cloud.sap';
  
  constructor(private http: HttpClient) {
  }

  suggestPrice(product: PriceSuggestion): Observable<PriceSuggestionResponse> {
    return this.http.post<PriceSuggestionResponse>(this.PriceSuggestionUrl, product);
  }

  registerPrice(product: PriceSubscription): Observable<PriceSubscriptionResponse> {
    return this.http.post<PriceSubscriptionResponse>(this.PriceSubscriptionUrl, product);
  }
}
