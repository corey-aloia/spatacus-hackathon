import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PriceSuggestionResponse, PriceSuggestion} from '../price-proposal/price-suggestion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KymaService {
  PriceSuggestionUrl = 'https://price-suggestion-3-production.hack2.cluster.extend.cx.cloud.sap';
  constructor(private http: HttpClient) {
  }

  suggestPrice(product: PriceSuggestion): Observable<PriceSuggestionResponse> {
    return this.http.post<PriceSuggestionResponse>(this.PriceSuggestionUrl, product);
  }
}
