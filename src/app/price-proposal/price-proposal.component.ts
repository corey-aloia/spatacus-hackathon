import { Component, OnInit } from '@angular/core';
import { ProductDetailOutlets } from '@spartacus/storefront';
import { KymaService } from '../services/kyma-service.service';
import { PriceSuggestion } from './price-suggestion';
import { PriceSubscription } from './price-subscription';

@Component({
  selector: 'app-price-proposal',
  templateUrl: './price-proposal.component.html',
  styleUrls: ['./price-proposal.component.scss']
})
export class PriceProposalComponent implements OnInit {
  
  productDetailOutlets = ProductDetailOutlets;
  newPrice: Number;
  subscribedPrice: Number;
  emailAddress: string;
  
  constructor(private service: KymaService) {
  }

  ngOnInit() {
  }

  inspect(obj) {
    console.log(obj);
  }

  suggestPrice() {
    const priceSuggestion = new PriceSuggestion();
    priceSuggestion.productCode = 1432722;
    priceSuggestion.suggestedPrice = this.newPrice;
    this.service.suggestPrice(priceSuggestion).subscribe(
        accepted => {
        console.log(accepted);
      },
      error => console.error(error)
    );
  }

  registerPrice() {
    const priceSubscription = new PriceSubscription();
    priceSubscription.productCode = 1432722;
    priceSubscription.suggestedPrice = this.subscribedPrice;
    priceSubscription.email = this.emailAddress;
    this.service.suggestPrice(priceSubscription).subscribe(
        subscribed => {
        console.log(subscribed);
      },
      error => console.error(error)
    );
  }
}
