import { Component, OnInit } from '@angular/core';
import { ProductDetailOutlets } from '@spartacus/storefront';
import { KymaService } from '../services/kyma-service.service';
import { PriceSuggestion, PriceSuggestionResponse } from './price-suggestion';
import { PriceSubscription } from './price-subscription';

@Component({
  selector: 'app-price-proposal',
  templateUrl: './price-proposal.component.html',
  styleUrls: ['./price-proposal.component.scss']
})
export class PriceProposalComponent implements OnInit {

  priceComponent;
  productDetailOutlets = ProductDetailOutlets;
  newPrice: Number;
  priceAccepted: Boolean = false;
  subscribedPrice: Number;
  emailAddress: string;
  subscribed = false;
  displaySubscribe = false;

  constructor(private service: KymaService) {
  }

  ngOnInit() {
  }

  inspect(obj) {
    console.log(obj);
  }

  suggestPrice(productCode) {
    const priceSuggestion = new PriceSuggestion();
    priceSuggestion.productCode = productCode;
    priceSuggestion.suggestedPrice = this.newPrice;
    this.service.suggestPrice(priceSuggestion).subscribe(
      priceSuggestionResponse => {
        this.priceAccepted = priceSuggestionResponse.priceAccepted;
        this.displaySubscribe = !priceSuggestionResponse.priceAccepted;
      },
      error => console.error(error));
  }

  registerPrice(productCode) {
    const priceSubscription = new PriceSubscription();
    priceSubscription.productCode = productCode;
    priceSubscription.suggestedPrice = this.newPrice;
    priceSubscription.email = this.emailAddress;
    this.service.registerPrice(priceSubscription).subscribe(
      response => {
        this.subscribed = response.subscribed;
      },
      error => console.error(error)
    );
  }
}
